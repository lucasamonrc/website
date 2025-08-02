---
title: My Terminal Setup
pubDate: 2025-07-25
updatedDate: 2025-08-02
---

# My Terminal Setup

This post will guide you on how to customize your terminal to make it a little bit prettier and useful. We will install a theme and some plugins that can help us boost our productivity when working with the terminal.
Disclaimer: this guide will not work on PowerShell or CMD, if you are using Windows. If you are in an OS that uses bash or zsh, you are good to go.

## Prerequisites

Before we get started make sure you have the following things installed/prepped:

- cURL
- Git
- zsh (If you are running bash, you will need to get zsh installed)

With those things out of the way, we are ready to start

## Oh My Zsh

We are going to start by installing Oh My Zsh. This is a framework that will help us customize our zsh more easily. Run the command below in your terminal session:

```sh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

After running that, you should notice that the appearance of your command prompt has changed. If it hasn't, close this session and open a new terminal session.

## Oh My Zsh Spaceship Theme

Now we will install the Spaceship theme. It will modify how the prompt is displayed in your terminal. This theme can display the current git branch, current path, and even app versions.
Let's start by cloning the Spaceship repo into the oh-my-zsh themes folder:

```sh
git clone https://github.com/denysdovhan/spaceship-prompt.git "$ZSH_CUSTOM/themes/spaceship-prompt"
```

Now, create a symbolic link inside the themes folder pointing the just recently cloned repo:

```sh
ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH_CUSTOM/themes/spaceship.zsh-theme"
```

Finally add the line below after the last line of your `~/.zshrc` file. (Alter the ZSH_THEME variable if it is already in your `~/.zshrc` file).

```sh
ZSH_THEME="spaceship"
```

Restart your terminal session.

## Setting up the Spaceship

Bellow you will find my preferences for the prompt, but feel free to alter it the way you want. You will need to do some digging on how to customize exactly the way you want.

At the end of the `~/.zshrc` file, add the following:

```sh
SPACESHIP_PROMPT_ORDER=(
  user          # Username section
  dir           # Current directory section
  host          # Hostname section
  git           # Git section (git_branch + git_status)
  hg            # Mercurial section (hg_branch  + hg_status)
  exec_time     # Execution time
  line_sep      # Line break
  vi_mode       # Vi-mode indicator
  jobs          # Background jobs indicator
  exit_code     # Exit code section
  char          # Prompt character
)
SPACESHIP_USER_SHOW=always
SPACESHIP_PROMPT_ADD_NEWLINE=false
SPACESHIP_CHAR_SYMBOL="❯"
SPACESHIP_CHAR_SUFFIX=" "
```

Save and exit the file, and restart the terminal. (Almost done).

## Zinit (Plugins Zsh)

Now, the cherry on top is some cool plugins that can boost productivity a bit.
To install these plugins, we need to set up Zinit, a tool that handles plugin management for zsh. Run the command:

```sh
sh -c "$(curl -fsSL https://git.io/zinit-install)"
```

It will ask you whether or not you want it to install three recommended plugins. I recommend you do, so type Y and press enter.

After the installation is complete, open `~/.zshrc` again, and below the `## End of Zinit's installer chunk` line add:

```sh
## Zinit Plugins
zinit light zdharma-continuum/fast-syntax-highlighting
zinit light zsh-users/zsh-autosuggestions
zinit light zsh-users/zsh-completions
```

This is my recommended plugins. You will find below a short description on what they do.

- `zdharma/fast-syntax-highlighting`: Adds syntax highlighting when typing commands, making it easier to know when you type an invalid command.
- `zsh-users/zsh-autosuggestions`: Autocomplete feature based on your command history. I think it is still very useful, but tools like Fig are almost a better alternative.
- `zsh-users/zsh-completions`: Tab completions for several tools like Yarn, Homebrew, NVM, Node, etc.

If you restart your terminal one last time, you should be good to go.
