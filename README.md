# 스튜디오메이트 기술 블로그

## 글 작성법

- `/data/blog` 폴더에 마크다운 파일을 넣어주시면 됩니다.

```
// 마크다운 파일 양식

---
title: 제목입니다
date: '2022-02-10'
tags: ['tag1', 'tag2']
summary: 글 목록에서 보여지는 내용입니다
authors: ['default', 'bomin', 'daewoong', 'hyungyu', 'jaebong', 'jungeun', 'minjae', 'wooyeon', 'yousung'] // 작성자들의 이름을 넣어주시면 됩니다.
layout: PostLayout | PostSimple // PostSimple을 입력하면 authors, tags가 보이지 않고 글 내용만 보입니다.
---

글 내용 (마크다운)
```

- 글에 사용되는 이미지는 `/public/static/images` 폴더에 넣어주시면 됩니다.
