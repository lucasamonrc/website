---
title: Managing Dotfiles with GNU Stow
description: How I set up a cross-platform dotfiles repo using GNU Stow
pubDate: 2026-04-16
tags: ["tools", "workflow"]
---

I'd been meaning to get my dotfiles under version control for a while. Every time I set up a new machine I spent the first day piecing together old configs from memory, re-installing things I'd forgotten about, and wishing I'd done this sooner.

GNU Stow is a symlink manager. You keep your configs in a single directory — a git repo, in my case — and it creates symlinks back into your home directory. A file at `dotfiles/.zshrc` becomes `~/.zshrc`. A file at `dotfiles/.config/git/config` becomes `~/.config/git/config`.

Running `stow .` from inside the repo creates all the symlinks at once. For directories that already exist on disk, like `~/.config/`, stow goes one level deeper and symlinks individual entries rather than replacing the whole folder. So `~/.config/git` becomes a symlink to `dotfiles/.config/git`, while everything else in `~/.config/` stays untouched. A `.stow-local-ignore` file lets you exclude things — I use it to keep the scripts folder, README, and sensitive files out.

### Cross-platform

I use this repo on both macOS and Linux, so a few things needed adjusting.

My `~/.zprofile` set up Homebrew's PATH with `eval "$(/opt/homebrew/bin/brew shellenv)"`. That path doesn't exist on Linux, where Homebrew installs under `/home/linuxbrew/.linuxbrew`. I replaced it with a conditional that checks both:

```sh
[[ -f /opt/homebrew/bin/brew ]] && eval "$(/opt/homebrew/bin/brew shellenv)"
[[ -f /home/linuxbrew/.linuxbrew/bin/brew ]] && eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
```

My SSH config had `UseKeychain yes`, which is macOS-only. Linux's OpenSSH throws an error on it. Adding `IgnoreUnknown UseKeychain` before it tells SSH clients to skip directives they don't recognize:

```
Host *
    AddKeysToAgent yes
    IgnoreUnknown UseKeychain
    UseKeychain yes
```

VS Code was the awkward one. The settings path is `~/Library/Application Support/Code/User/` on macOS and `~/.config/Code/User/` on Linux. Since stow just mirrors paths, it can't handle that on its own. I keep the settings in a `vscode/` folder at the repo root and use a small script that detects the OS and creates the right symlinks.

### What's in the repo

Shell configs, SSH, git aliases, Ghostty, GitHub CLI, Claude Code settings and skills, and VS Code. SSH keys and auth tokens stay out. There's also a `backup.sh` that snapshots all the managed files to a timestamped directory before you run stow — handy on a fresh machine where the files are still real and not symlinks.

The repo is [on GitHub](https://github.com/lucasamonrc/dotfiles).
