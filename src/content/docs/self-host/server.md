---
title: 서버 띄우기
description: Django 서버 하나로 여러 기기의 밑줄을 한 목차로 모읍니다.
---

서버는 `apps/api`에 있는 Django 앱입니다. Python 3.13과 [uv](https://docs.astral.sh/uv/)가 필요합니다.

```bash
git clone https://github.com/marginal-app/marginal-app
cd marginal-app/apps/api
uv sync
uv run python manage.py migrate
uv run python manage.py createsuperuser
uv run python manage.py runserver
```

`http://127.0.0.1:8000/`에서 로그인하면 홈과 라이브러리가 열립니다. 계정은 서버 관리자가 만듭니다. 회원가입 화면은 아직 없습니다.

:::note
서버는 밑줄과 코멘트, 페이지 제목만 저장합니다. 페이지 본문은 받지 않습니다.
:::

다음 단계는 [API 토큰 발급](/self-host/token/)입니다.
