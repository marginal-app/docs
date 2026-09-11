---
title: Run the server
description: Collect highlights from multiple devices in one table of contents with a single Django server.
---

The server is the Django app in `apps/api`. It requires Python 3.13 and [uv](https://docs.astral.sh/uv/).

```bash
git clone https://github.com/marginal-app/marginal-app
cd marginal-app/apps/api
uv sync
uv run python manage.py migrate
uv run python manage.py createsuperuser
uv run python manage.py runserver
```

Sign in at `http://127.0.0.1:8000/` to open the home page and library. The server administrator creates accounts; there is no sign-up screen yet.

:::note
The server stores highlights, comments, and page titles. It does not receive page content.
:::

Next, [create an API token](/en/self-host/token/).
