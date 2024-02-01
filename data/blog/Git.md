---
title: Git
date: '2024-01-26'
tags: ['git', 'Version Control System']
summary: Git 학습 내용 정리
authors: ['hyungyu']
layout: PostLayout
---

안녕하세요. 2024년 1월 26일 테크 세미나에서 Git 에 대해 발표한 이현규입니다.<br/>
이번 글에서는 Git의 탄생과 목적, 기초 문법과 활용에 대해 알아보겠습니다.

# Git 이란

---

Git 은 코드를 보다 안전하고 효율적으로 관리하기 위해 만들어진 버전 관리 시스템입니다.  
아래와 같은 3가지 기능을 수행하기 위해 개발되었습니다.

## 버전관리

> 개발자가 작업했던 시점을 보존하여 실수가 발생했을 때 빠른 수정을 가능케 하여 서비스를 지속시킨다

## 백업하기

> 코드 저장 장소와 코드 히스토리를 로컬에 분산시켜 저장하는 것으로 코드 유실 가능성을 차단한다

## 협업하기

> 로컬에서 작업한 코드를 실서버 코드에 병합할 때 발생할 수 있는 다양한 충돌 상황을 방지해주는 기능을 제공한다

# Git 을 왜 사용해야 하는가?

---

## 속도가 빠르다

### 코드가 존재하는 시점 - 순간(스냅샷)을 저장하기 때문에 가볍게 구동됩니다.

<img alt="git 구조" src="/static/images/git_article_image/git-snapshot.png"/>

### 로컬에서 작업이 이뤄지기 때문에 외부 요인에 의한 지연을 피할 수 있습니다.

<img alt="git 구조" src="/static/images/git_article_image/git-structure.png"/>

### 작업 공간(Working Directory)

> 우리가 일반적으로 사용하는 작업 파일들이 위치한 공간

### 준비 공간 (Staging Area)

> 작업 공간에서 수정된 사항이 임시로 저장되는 공간

> git add 명령어를 통해 저장할 수 있다

### 저장소 (Repository)

> 최종적인 변경사항이 저장되는 공간

- git commit 명령어를 통해 저장된다
- 로컬 / 리모트로 나뉜다
  - 로컬 저장소
    - 로컬에 위치한 git 저장 공간으로, 로컬 영역에서 준비 공간에 수록된 변경사항이 저장된다
  - 리모트 저장소
    - git 보관 서비스를 제공해주는 서버에 생성되는 저장소로, 대표적으로 GitHub 가 있고, git push 등의 명령어를 통해 로컬 저장소와 싱크를 맞출 수 있다. (자세한 설명은 후첨)

## 다양한 워크플로우를 운용할 수 있다

### 각 작업자 별로 작업해도 하나의 코드로 관리할 수 있게 해주는 기능을 제공합니다. (브랜치)

<img alt="git 구조" src="/static/images/git_article_image/git-branch.jpeg"/>

Git 은 각각의 역할을 수행하는 포인터가 존재합니다.

> branch pointer
>
> > 현재 작업 중인 영역이 어떤 커밋을 기준으로 잡고 있는지 표시
> >
> > head pointer
> > 현재 작업 중인 커밋을 표시

포인터를 통해 작업자는 현재 자신이 작업하고 있는 영역과 커밋을 확인하면서 작업 상황을 갱신하고  
다른 개발자의 작업 내용과 겹치지 않게 조율하며 작업을 진행할 수 있습니다.

이처럼 작업 내역과 커밋을 하나의 작업 영역으로 묶고, 관리해주는 기능을 브랜치라고 합니다.

위의 상황은 commit git checkout -b testing 명령어를 통해 커밋 f30ab 를 바라보는  
testing 이라는 브랜치를 새로 만들어낸 것을 도식화한 것입니다.

브랜치는 다르지만 같은 커밋 인 f30ab 를 바라보고 있기 때문에  
사실상 작업 내역이나 코드는 똑같습니다.

<img alt="git 구조" src="/static/images/git_article_image/git-branch2.jpeg"/>

하지만 여기서 git commit 을 하게되면 브랜치 testing 은 master 브랜치에서 분기하여  
독립적인 기록을 가진 브랜치로 변경됩니다. 이런 경향은 master 브랜치에 커밋이 진행될 수록 심화됩니다.

때문에, 당연한 소리겠지만 master 브랜치의 작업이 진행될수록 개발자가 로컬에서 작업하던 브랜치는  
master 브랜치의 작업과 상이하게 되고, 후에 이를 합치려고 할 때 당연히 충돌하는 지점이 생기게 됩니다.  
이런 상황을 대비하여 git 에서는 두가지 기능을 제공합니다.

<img alt="git 구조" src="/static/images/git_article_image/git-merge.jpeg"/>

하나는 git merge 입니다.  
위의 상황은 master 브랜치에서 git merge testing 을 실행했을 때를 도식화한 것입니다.  
master, testing 두 브랜치의 커밋이 모두 보존된 상태로 새로운 커밋 d3df2 를 만든 것입니다.

이렇게 되었을 때의 장점은 각 브랜치의 작업 내역이 모두 보존되어 있기 때문에  
각 브랜치에 대한 이슈를 추적하려 할 때 각 작업자가 어떤 의도로, 어떤 코드를 추가, 수정했는지 파악하기 용이하다는 것입니다.

<img alt="git 구조" src="/static/images/git_article_image/git-rebase.jpeg"/>

다른 하나는 git rebase 입니다.  
위의 상황은 testing 브랜치에서 git rebase master 를 실행했을 때를 도식화한 것입니다.  
먼저 두 브랜치의 공통 분모가 되는 커밋을 찾아 해당 커밋에서부터 기준이 되는 master 브랜치의 c2b9e 커밋을 쌓은 뒤,  
testing 브랜치의 87ab2 커밋의 내용을 c2b9e 커밋 위에 쌓아올린 새로운 커밋 f4zx5 를 만든 것입니다.

이렇게 되었을 때의 장점은 merge 와 달리 각 커밋 별로 이전과 달리 어떤 코드가 수정되었는 명확히 파악할 수 있고,  
꾸준히 rebase 를 실행했을 때에는 각 브랜치의 공통 분모가 master 브랜치의 공통 분모가 같아지기 때문에  
보다 쉽게 브랜치를 병합할 수 있게 된다는 것입니다.

## 각 저장소가 주 저장소와 같은 기능을 수행할 수 있다

### 각 로컬 저장소에 진행사항이 백업되어 있기 때문에 쉽게 복구 가능하다

<img alt="git 구조" src="/static/images/git_article_image/git-result.jpeg"/>

# 정리

---

위에 나온 것 이외에도 git reset, git checkout, git rebase -ir 등 Git 에는 수많은 명령어와 활용법이 존재합니다.  
Git 은 개발자 간의 협업에서 빠질 수 없는 기술로 그 필요성이 말할 것도 없습니다.

때문에 어느정도 알고 있다 생각해도 한번씩은 꼭 원리와 기초를 숙지할 필요가 있다고 생각합니다.  
더 깊게 파고들고 싶은 분들을 위해 Git 문서를 출처로 남겨두었으니 한번씩 살펴보셨으면 좋겠습니다.

# 출처

---

[The Git cookbook](https://git.seveas.net/)
