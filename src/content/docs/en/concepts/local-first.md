---
title: Local-first and sync
description: Highlights are always saved to the browser first, and the server is optional.
---

## Local-first

Highlights and comments are saved to the extension's IndexedDB first. You can create, read, and edit them without a server or while offline.

## Sync

When a server and token are configured, the extension periodically **pulls** and **pushes** in the background. The side panel shows the state for each highlight.

| Situation | Sync row | Per-highlight status |
| --- | --- | --- |
| No token (local only) | Hidden | Hidden |
| Token configured, offline | Hidden | Hidden |
| Online, pushing | Syncing · n pending | Saving… |
| Online, complete | Synced · time | Synced · just now |
| Server error | Server error · n pending · retry | Save failed · retry |

Being offline is not a failure. The indicators disappear, and pending changes are sent when the connection returns.

## Conflicts

If the same highlight is edited on two devices, the server rejects the later request and the extension reapplies that edit on top of the server version.
