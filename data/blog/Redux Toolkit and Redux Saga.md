---
title: Redux Toolkit, Redux Saga
date: '2022-01-26'
tags: ['redux', 'redux saga', 'redux toolkit']
summary: Redux Toolkit, Redux Saga 학습 내용 정리
authors: ['daewoong']
layout: PostLayout
---

안녕하세요. 2022년 1월 26일 테크 세미나에서 Redux Toolkit과 Redux Saga에 대해 발표한 변대웅 입니다.

저는 간단한 Todo App을 만들면서 두가지 내용을 학습했는데 그 내용을 정리해 보겠습니다.

## Redux Toolkit

---

[Redux Toolkit 공식 홈페이지](https://redux-toolkit.js.org/)에서는 이렇게 소개하고 있습니다.

> The official, opinionated, batteries-included toolset for efficient Redux development

> (효율적인 Redux 개발을 위한 공식적이고 독단적인 배터리 포함 도구 세트)

Redux Toolkit을 사용해보면서 잘 사용한다면 코드를 더 편하게 작성할 수 있고, 코드의 양이 줄어들 수 있을 것이라고 느꼈습니다.

Redux Toolkit의 몇 가지 기능을 살펴보겠습니다.

### createAction

---

createAction은 Redux의 Action Type과 Action Creator 작성을 도와주는 함수입니다. 예제를 통해 살펴 보겠습니다.

```javascript
export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'

export const addTodo = (text) => ({ type: ADD_TODO, text })
export const deleteTodo = (id) => ({ type: DELETE_TODO, id })
```

제가 만든 Todo App에서 todo를 추가하는 액션과 삭제하는 액션입니다. 보통 Redux를 사용할 때 Action Type과 인자를 받아 액션 객체를 만들어주는 함수인 Action Creator를 만들게 됩니다. 이것을 createAction 함수를 사용해서 바꿔보겠습니다.

```javascript
import { createAction } from '@reduxjs/toolkit'

export const addTodo = createAction('ADD_TODO')
export const deleteTodo = createAction('DELETE_TODO')

// addTodo.type으로 type에 접근 가능
```

createAction함수를 사용해서 액션을 만들게 되면 Action Type과 Action Creator를 한줄의 코드로 만들 수 있습니다. 또 action.type으로 타입 string에 접근이 가능합니다. 또 Action Creator를 통해 값을 넘겨줄 경우 createAction함수로 만들어진 Action은 그 값을 payload라는 고정된 인자로 받습니다. 이부분은 createReducer와 createSlice 부분에서 확인하실 수 있습니다.

### createReducer

---

createReducer도 마찬가지로 reducer의 작성을 도와주는 함수입니다. 한가지 중요한 사항은 객체의 불변성을 유지해주는 immer를 내장하고 있다는 것입니다. 예제를 통해 보겠습니다.

```javascript
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: getId(), text: action.text }],
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      }
    default:
      return state
  }
}
```

위 코드는 Redux만 사용했을 때의 reducer 코드입니다. 객체의 불변성을 유지하기 위해 새로운 객체를 반환해주는 코드를 작성해야 합니다.

createReducer를 사용했을 때의 코드를 보겠습니다.

```javascript
export const todoReducer = createReducer(initialState, {
  [addTodo]: (state, action) => {
    state.todos.push({ id: getId(), text: action.payload })
  },
  [deleteTodo]: (state, action) => {
    const deleteIndex = state.todos.findIndex((todo) => todo.id === action.payload)
    state.todos.splice(deleteIndex, 1)
  },
})
```

위 코드를 보면 객체의 불변성을 유지하지 않고 직접 변경해주는 것을 볼 수 있습니다. 이렇게 하더라도 createReducer가 immer를 내장하고 있기 때문에 정상적으로 동작합니다. 이를 이용하면 코드를 조금 더 보기 쉽게 작성할 수 있습니다.

### createSlice

---

createSlice는 slice를 만들어주는 함수입니다. 여기서 slice는 action과 reducer를 합쳐놓은 것이라고 생각하시면 됩니다. todoApp의 Redux코드를 createSlice 함수를 사용해서 고쳐보겠습니다.

```javascript
const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push({ id: getId(), text: action.payload, done: false })
    },
    deleteTodo(state, action) {
      const deleteIndex = state.todos.findIndex((todo) => todo.id === action.payload)
      state.todos.splice(deleteIndex, 1)
    },
  },
})

export const { addTodo, deleteTodo } = todoSlice.actions
export const todoReducer = todoSlice.reducer
```

다음과 같이 Action을 따로 생성하지 않더라도 createSlice함수가 알아서 생성해줍니다.

### createAsyncThunk

---

createAsyncThunk는 비동기 요청 처리를 위해 Redux Toolkit에서 제공되는 함수입니다. createAsyncThunk함수를 사용하면 redux-thunk나 redux-saga 같은 middleware를 사용하지 않더라도 비동기 요청에 대한 처리를 할 수 있습니다.

createAsyncThunk를 테스트해보기 위해서 원하는 개수만큼 랜덤 단어를 가져오는 api를 사용해서 todos에 추가하는 작업을 추가했습니다.

```javascript
export const fetchAddTodo = createAsyncThunk('fetchAddTodo', async (num, thunkApi) => {
  let res
  if (num > 0) {
    res = await fetch(`https://random-word-api.herokuapp.com/word?number=${num}`).then((data) =>
      data.json()
    )
  } else {
    res = await fetch(`https://random-`).then((data) => data.json())
  }
  return res
})

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push({ id: getId(), text: action.payload, done: false })
    },
    deleteTodo(state, action) {
      const deleteIndex = state.todos.findIndex((todo) => todo.id === action.payload)
      state.todos.splice(deleteIndex, 1)
    },
  },
  extraReducers: {
    [fetchAddTodo.pending]: (state, action) => {
      state.loading = true
    },
    [fetchAddTodo.fulfilled]: (state, action) => {
      const words = action.payload
      words.forEach((word) => {
        state.todos.push({ id: getId(), text: word })
      })
      state.loading = false
    },
    [fetchAddTodo.rejected]: (state, action) => {
      console.log(action)
      state.loading = false
    },
  },
})
```

createAsyncThunk 함수는 type, payloadCreator, options 3가지 매개변수를 받습니다. 이중 Promise를 반환하는 payloadCreator는 사용자가 넘긴 인자 값과 thunkApi를 매개변수로 받는데 thunkApi에는 getState와 dispatch가 포함되어 있어서 추가적인 작업을 할 수 있습니다.

thunk를 생성하게 되면 자동적으로 pending, fulfilled, rejected 3가지 type이 생성되고 extraReducers 내에서 각 상황에 맞게 처리해줄 수 있습니다.

### RTK Query

---

공식 홈페이지에서는 RTK Query를 데이터를 fetching하고 caching하는 도구라고 설명하고 있습니다. 간단하게 설명하면 api요청을 통해서 데이터를 받고 전역 store에 저장하는 작업을 쉽게 처리해주는 도구라고 할 수 있을 것 같습니다.

비슷한 라이브러리는 React Query, SWR 등이 있습니다.

RTK Query 테스트를 위해 Todo App을 사용자가 입력한 개수 만큼 서버에서 단어를 받아와서 보여주는 앱으로 수정했습니다.

```javascript
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://random-word-api.herokuapp.com/word',
  }),
  endpoints: (builder) => ({
    getNTodos: builder.query({
      query: (n) => `?number=${n ? n : 0}`,
      keepUnusedDataFor: 100,
    }),
  }),
})

export const { useGetNTodosQuery } = todoApi
```

우선 createApi, fetchBaseQuery 함수를 사용해서 사용할 api를 작성하고 컴포넌트에서 사용하기 위해 자동으로 생성해주는 Hook을 export 해줍니다.

```javascript
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { todoApi } from '../api'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger).concat(todoApi.middleware),
})

setupListeners(store.dispatch)

export default store
```

또 store에 createApi가 생성해준 reducer를 등록합니다.

컴포넌트에서 사용하는 코드를 보겠습니다.

```javascript
import { useEffect, useState } from 'react'
import { useGetNTodosQuery } from '../../api'

export default () => {
  const [num, setNum] = useState(0)
  const { data, error, isLoading, isFetching, refetch } = useGetNTodosQuery(num)

  return (
    <div>
      <div>투두리스트 컴포넌트 1</div>
      <button style={{ marginRight: '10px' }} onClick={() => refetch()}>
        강제 refetch
      </button>
      <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
      {isFetching ? (
        <div>로딩중...</div>
      ) : (
        <ul>
          {data.map((todo, idx) => (
            <li key={idx}>{todo}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
```

컴포넌트에서는 export한 Hook을 사용해 RTK Query를 사용할 수 있고 data, error, isLoading, isFetching등 다양한 상태에 접근할 수 있습니다. 또한 이 data들은 RTK Query가 캐싱해주어 별다른 코드 없이도 store에 저장한 것처럼 다른 컴포넌트에서 사용할 수 있습니다. 캐싱된 데이터를 어떤 컴포넌트에서도 사용하지 않을 때 몇 초 후에 데이터를 지울 것인지를 설정할 수 있고 refetch 함수를 통해 언제든지 새로운 서버의 데이터를 가져올 수 있습니다.

## Redux Saga

---

공식 홈페이지에서는 Redux Saga를 직관적인 Side Effect 관리자라고 소개하고 있습니다. Side Effect는 외부의 영향을 받아서 redux의 store를 업데이트 해야 하는 상황을 말하고 일반적으로 비동기적인 작업을 수행하는 것이 있습니다. random 단어를 n개 서버에서 받아온 다음 todos에 추가하는 상황을 redux saga를 사용해서 작성해보았습니다.

```javascript
import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchTodos, addTodos } from './todo/reducer'

const api = {
  getTodos: (num) =>
    fetch(`https://random-word-api.herokuapp.com/word?number=${num}`).then((res) => res.json()),
}

function* rootSaga() {
  yield takeEvery(fetchTodos.type, workerSaga)
}

function* workerSaga(action) {
  try {
    const data = yield call(api.getTodos, action.payload)
    yield put(addTodos(data))
  } catch (error) {
    console.log(error)
  }
}

export default rootSaga
```

Redux Saga에서는 JavaScript의 generator function을 사용해 saga를 생성합니다. 각 saga는 effect 함수들을 통해 여러가지 작업을 처리합니다. 위 코드에서는 rootSaga에서 fetchTodos 액션이 발생했을 때 workerSaga를 호출하고 workerSaga는 call 함수를 통해 서버에서 data를 받아온 다음 put함수를 사용해 addTodos 액션을 dispatch합니다.

다른 추가적인 기능들은 [공식 홈페이지](https://redux-saga.js.org/)에서 확인하실 수 있습니다.

## 결론

---

RTK Query를 사용하면서 서비스에 적용하면 코드 양도 줄어들고 특정 데이터를 찾는 것이 더 쉬워질 것 같다고 생각했습니다. 하지만 RTK Query에 대한 정보가 너무 적어서 실제로 적용하게 된다면 React Query나 SWR로 서버와의 통신을 통해 얻는 데이터를 관리하고 Redux나 Recoil 같은 상태 관리 라이브러리들을 사용해 클라이언트 상태를 관리하면 좋을 것 같습니다.
