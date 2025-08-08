---
title: My .gitconfig
pubDate: 2025-07-25
updatedDate: 2025-08-02
---

## My .gitconfig

```sh
[user]
  name = Lucas Castro
  email = [redacted]

[core]
  editor = nano

[init]
  defaultBranch = main

[pull]
  rebase = false

[alias]
  all = add -A
  ci = commit
  co = checkout
  cm = checkout main
  cb = checkout -b
  st = status -sb
  sf = show --name-only
  sw = switch
  sm = switch main
  lg = log --pretty=format:'%Cred%h%Creset %C(bold)%cr%Creset %Cgreen<%an>%Creset %s' --max-count=30
  incoming = !(git fetch --quiet && git log --pretty=format:'%C(yellow)%h %C(white)- %C(red)%an %C(white)- %C(cyan)%d%Creset %s %C(white)- %ar%Creset' ..@{u})
  outgoing = !(git fetch --quiet && git log --pretty=format:'%C(yellow)%h %C(white)- %C(red)%an %C(white)- %C(cyan)%d%Creset %s %C(white)- %ar%Creset' @{u}..)
  unstage = reset HEAD --
  undo = checkout --
  rollback = reset --soft HEAD~1
  sync = !(git pull --rebase && git push)
  tidy = remote prune origin
  get = pull --rebase
```
