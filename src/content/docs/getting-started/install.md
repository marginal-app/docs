---
title: 확장 설치
description: Chrome 또는 Firefox에 Marginal 확장을 설치합니다.
---

Marginal은 브라우저 확장과, 선택 사항인 셀프호스트 서버로 이루어져 있습니다. 확장만 설치해도 바로 쓸 수 있습니다.

## Chrome

1. [GitHub 릴리스](https://github.com/marginal-app/marginal-app/releases)에서 최신 `chrome-mv3` zip을 내려받아 풉니다.
2. `chrome://extensions`를 열고 오른쪽 위 **개발자 모드**를 켭니다.
3. **압축해제된 확장 프로그램을 로드합니다**를 누르고 푼 폴더를 고릅니다.

## Firefox

1. 같은 릴리스에서 `firefox` zip을 내려받습니다.
2. `about:debugging#/runtime/this-firefox`에서 **임시 부가 기능 로드**를 누르고 zip을 고릅니다.

설치 직후에는 서버 없이 **로컬 전용**으로 동작합니다. 밑줄은 이 브라우저에만 저장됩니다. 서버와 연결하려면 [서버 띄우기](/self-host/server/)를 보세요.
