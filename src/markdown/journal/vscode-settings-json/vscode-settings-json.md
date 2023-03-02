---
shown: true
pinned: true
date: 2023-02-01
slug: /journal/vscode-tips
title: Manipulating VS Code Settings
featuredImage: ./featured.png
---

There is a lot of cusytomizations that can be done to VS Code. Doing it should feel natural as the years of developing go by, but there are a few handy tricks that I've come across that have helped me extremely and I want to share some of the least known ones 😊. If you're a major customization geek like me, you're going to like this.

If you want to skip the tutorial and just get the settings file, you can download view it here in my [dotfiles repo](https://github.com/kiko-g/dotfiles/blob/main/settings.json).

> **Remember this**: the way we customize our environments is what defines their potential. Having full control over the things we spend the most time interacting with is a key to productivity and happiness. Customizing your workspace should not be snubbed. It is just like taking care of yourself and your house.

## 1. Getting started

Once you've installed VS Code it can be overwhelming to understand all of it, but over time you'll come to realize how simple and extendable it is.

VS Code's settings are controlled by a file called `settings.json` that is somewhere in your filesystem, inside the folders of your VSCode instalattion. Some of these settings are controllable via an interface on VSCode, but others... _not so much_.

In most systems there is a shortcut to access your settings which is `ctrl + ,` or perhaps `command + ,` if you're using a Macbook keyboard. Alternitively, you can navigate with the mouse to the top left to `File > Preferences > Settings`. In this page you can find a lot of UI configurations that will be appended to your `settings.json` file. Manually editing this file is possible and you can do it by pressing the icon seen below on the **top right of your settings page**.

![](https://i.imgur.com/qTb9Sdv.png)

## 2. Sync settings

Before we get into any more details, one thing you should note is that the VSCode `settings.json` file can get pretty lengthy. This means you will want to have this file be associated to an account and be stored in the cloud. Make sure you sign in with a GitHub account (or Microsoft) and activate Settings Sync, otherwise you might sign in on another device and lose your **precious workflow**.

## 3. Settings file structure and manipulation

As you continue to use VS Code and explore new extensions and features, your `settings.json` file will grow and accommodate the required additional settings for every extension that you install. However, regardless of this I would describe the structure of the settings file as having four key sections (or at least types of section):

### 3.1 General settings

This is the section where you will be defining general settings like your font family, size and other settings related to the editor itself. This is where I can help you **the least**. Most of these settings have great support in the general UI for settings and you should find your around way it. Here is a good chunk of my file

### 3.2 Language specific settings

You can define rules specifically for just one language. This is very handy if you want different behavior depending on what language you're working with. For example, you can define a different different formatter for your `HTML` files than for your `JS` files.

Here is an example of how you would define a different formatter for `HTML` and `JS` files and also different tab sizes:

```json
"[html]": {
  "editor.tabSize": 2,  // 2 spaces
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "vscode.html-language-features", // built-in formatter
},
"[css]": {
  "editor.tabSize": 4, // 4 spaces
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode", // prettier formatter (extension)
},
```

### 3.3 Extension settings

Section where you will be defining settings for each extension that you install. Let's take a look at a snippet of my file to see how you would customize the settings for an extension:

```json
"todohighlight.keywords": [
  {
    "text": "@@@",
    "color": "white",
    "backgroundColor": "#2f68aa",
    "isWholeLine": false,
    "overviewRulerColor": "#FFFFFF22"
  },
  {
    "text": "~~~",
    "color": "white",
    "backgroundColor": "#43a58e",
    "isWholeLine": false,
    "overviewRulerColor": "#FFFFFF00"
  }
],
```

To find the settings for an extension you can go to the extension's page on the VS Code marketplace and look for the `Extension Settings` section. In this section you will find the settings that you can customize for that extension. In the example above, I am customizing the settings for the `Todo Highlight` extension.

One handy trick is to tap `ctrl + space` or `command + space` to bring up the autocomplete menu and search for suggestions. This will help you find the settings you're looking for.

### 3.4 IDE General appearance settings

As you may know, the theme is customizable in VS Code. The default theme that comes with VS Code is called `Dark+ (default dark)`. However, you can install other themes and change the appearance of your IDE. To do this, go to the `Extensions` tab on the left and search for `theme`. You will find a lot of themes to choose from. I personally use the `Tailwind Moon` theme with a bunch of my customizations on top of it.

To change the theme, hit up command palette with `ctrl + p` or `command + p` on Mac and go to `File > Preferences > Color Theme` and select the theme you want to use. You can also do this by just editing your `settings.json` file and adding the following line:

```json
"workbench.colorTheme": "Tailwind Moon"
```

Replace with the name of the theme you want to use. Hitting command + space will bring up the autocomplete menu and show you all the available themes.

> Despite whatever theme you choose to use you can overried settings and change a lot of things.

This is the key and I the reason I wrote this post. You can change a lot of things that are not so well-known. Try this snippet out and see what happens:

```json
"workbench.colorCustomizations": {
  "editorRuler.foreground": "#bef2ff10",
  "foreground": "#e9f3ff",
  "button.background": "#4D78CC",
  "button.foreground": "#FFFFFF",
  "button.hoverBackground": "#6087CF",
  "icon.foreground": "#ffffff",
  "editorWarning.foreground": "#ffce8e",
  "gitDecoration.ignoredResourceForeground": "#969ba1",
  "breadcrumb.foreground": "#f2f8ff",
  "editor.background": "#252b33",
  "editor.foreground": "#ffffffdd",
  "titleBar.border": "#1e2228",
  "titleBar.activeForeground": "#e8f8ff",
  "titleBar.activeBackground": "#1e2228",
  "activityBar.border": "#1e2228",
  "activityBar.background": "#1e2228",
  "activityBar.foreground": "#ffffff",
  "activityBar.inactiveForeground": "#a5afb8",
  "sideBar.border": "#22272e00",
  "sideBar.background": "#22272e", // 22272e
  "sideBar.foreground": "#ffffff",
  "sideBarSectionHeader.border": "#46628b",
  "sideBarSectionHeader.background": "#46628b",
  "sideBarSectionHeader.foreground": "#ffffffdd",
  "sideBar.dropBackground": "#ffb8a6",
  "scrollbar.shadow": "#000f1a",
  "scrollbarSlider.background": "#5299c238",
  "scrollbarSlider.hoverBackground": "#5299c2",
  "scrollbarSlider.activeBackground": "#85ddff",
  "panel.border": "#2c333b",
  "panel.background": "#2c333b",
  "terminal.border": "#e4ecf0",
  "terminal.background": "#2c333b",
  "terminal.foreground": "#eeeeee",
  "terminal.ansiYellow": "#ff9e74",
  "statusBar.background": "#2c475e",
  "statusBar.noFolderBackground": "#b2bbd630",
  "statusBar.debuggingBackground": "#c24e43",
  "statusBar.foreground": "#ffffff",
  "statusBarItem.remoteBackground": "#2a81cc",
  "statusBarItem.remoteForeground": "#ffffff",
  "statusBar.border": "#2c475e00",
  "tab.border": "#364c6d00",
  "tab.activeBackground": "#3f6aaa",
  "tab.hoverBackground": "#6998dd",
  "tab.unfocusedHoverBackground": "#5f8bcc",
  "tab.unfocusedHoverForeground": "#ffffff",
  "tab.activeBorder": "#ff000000",
  "tab.activeForeground": "#ffffff",
  "tab.inactiveBackground": "#303c46",
  "tab.inactiveForeground": "#c0cad4",
  "editorGroupHeader.tabsBackground": "#22272e",
  "editorIndentGuide.activeBackground": "#42555e",
  "editorIndentGuide.background": "#1e292f00",
  "editor.lineHighlightBackground": "#1073cf2d",
  "editor.lineHighlightBorder": "#9fced11f",
  "editorLineNumber.foreground": "#9ca9b1",
  "editor.selectionBackground": "#daf0ff30",
  "editor.findMatchHighlightBorder": "#ff000000",
  "editor.findMatchBackground": "#00ff953a",
  "editor.findMatchHighlightBackground": "#44ffb721",
  "editor.inactiveSelectionBackground": "#ff894421",
  "editor.selectionHighlightBackground": "#00fff215",
  "editor.hoverHighlightBackground": "#00fff215",
  "editorHoverWidget.background": "#1a1e22",
  "editorSuggestWidget.background": "#052430",
  "editorSuggestWidget.selectedBackground": "#3d4d58",
  "gitlens.trailingLineForegroundColor": "#ffffff33"
},
```

### 3.5 IDE Code appearance settings

Have you ever felt like your theme is cool but doesn't have the best color scheme for a specific language? Well, you can change that too. You can change the color of a specific text block in your code. For example, you can change the color of a string, a number, a comment, a function, a variable, etc. To do this, you can use the `workbench.colorCustomizations` setting. Here are all my text color customizations:

```json
"editor.tokenColorCustomizations": {
  "textMateRules": [
    {
      "name": "Boolean",
      "scope": "punctuation.definition.template-expression",
      "settings": {
        "foreground": "#F472B6"
      }
    },
    {
      "name": "Boolean",
      "scope": "constant.language",
      "settings": {
        "foreground": "#ff7777"
      }
    },
    {
      "name": "Variables",
      "scope": [
        "variable"
      ],
      "settings": {
        "fontStyle": "",
        "foreground": "#ffffff"
      }
    },
    {
      "name": "variable.other.constant.property",
      "scope": [
        "variable.other.constant.property"
      ],
      "settings": {
        "fontStyle": "",
        "foreground": "#60A5FA"
      }
    },
    {
      "name": "Variables other",
      "scope": [
        "variable.other.property.js"
      ],
      "settings": {
        "fontStyle": "",
        "foreground": "#a4d6ff"
      }
    },
    {
      "name": "Parameter variables",
      "scope": [
        "variable.parameter"
      ],
      "settings": {
        "fontStyle": "bold",
        "foreground": "#ffffff"
      }
    },
    {
      "name": "Markdown Bold",
      "scope": [
        "markup.bold.markdown"
      ],
      "settings": {
        "fontStyle": "bold",
        "foreground": "#3286da"
      }
    },
    {
      "name": "Markdown Inline Code",
      "scope": [
        "markup.inline.raw.string.markdown"
      ],
      "settings": {
        "foreground": "#f59881"
      }
    },
    {
      "name": "Markdown Italic",
      "scope": [
        "markup.italic.markdown"
      ],
      "settings": {
        "fontStyle": "italic",
        "foreground": "#87c3ff"
      }
    },
    {
      "name": "Markdown Bullet",
      "scope": [
        "punctuation.definition.list.begin.markdown"
      ],
      "settings": {
        "fontStyle": "bold",
        "foreground": "#A78BFA"
      }
    },
    {
      "name": "Markdown Quote",
      "scope": [
        "markup.quote.markdown"
      ],
      "settings": {
        "fontStyle": "",
        "foreground": "#34D399"
      }
    }
  ]
},
```

You may be wondering "Wow this is cool, but how the hell do i get the scope of a specific piece of text in my code?". Well, I wondered that for a long time, but I eventually found you can use the `Developer: Inspect Editor Tokens and Scopes` command in your command palette. Just put your cursor where you want and do this action to get a grasp of what tokens are targetting that piece of text.

## 4. Tips and tricks

Ok, so that was pretty long and possibly overwhelming and lackluster. Here is a **TLDR** with the key takeways from this post which I wrote with knowledge I've gained over the past 5 years of using VS Code:

### 4.1 Customizing the color of a specific text block in your code

Like we have seen before, you can see the targets of a piece of text in a file with `> Developer: Inspect Editor Tokens and Scopes` in your command palette. Just put your cursor where you want and do this action to get a grasp of what tokens are targetting that piece of text.

To make it quicker you can add a shortcut in your `keybindings.json` file and not have to bring up the command palette every time. Here is an example of what you can add:

```json
{
  "key": "cmd+[Period] cmd+[Comma]",
  "command": "editor.action.inspectTMScopes"
}
```

Now just test out the scope in your settings like this:

```json
"editor.tokenColorCustomizations": {
  "textMateRules": [
    // ...
    {
      "name": "Boolean Variable", // name your rule so you remember what it targets later
      "scope": ["punctuation.definition.template-expression"], // target the scope(s) you want
      "settings": {
        "fontStyle": "bold", // style you want (bold, italic, underline or just remove it)
        "foreground": "#F472B6" // color you want (hex value #rrggbbaa)
      }
    },
    // ...
  ]
},
```

### 4.2 Handy codepaste shortcuts

Do you know those moments when you just feel yourself typing `console.log()` a hundred times in a coding session? I feel you mate. Here is a little trick to make it easier. Just add this to your `keybindings.json` file:

```json
{
  "key": "ctrl+shift+l",
  "command": "editor.action.insertSnippet",
  "when": "editorTextFocus",
  "args": {
    "snippet": "console.log(${TM_SELECTED_TEXT}$1)$2"
  }
},
```

This will type `console.log()` and put your cursor between the parenthesis so you can just type what you want to log swiftly. This is way better than creating an alias function for `console.log()` in your code.

## 5. Bonus: Important extensions to install

### 5.1 Material Icons

Just do it. It's a must have.

### 5.2 Prettier

This is another must have extension for me. It will format your code for you and you can configure settings for this extension to your liking. You can configure it to format on save, on paste, on format document, etc. It's a lifesaver in my opinion and I just don't even bother formatting certain parts of my documents anymore: I simply hit save.

You can even have a local file to control your settings. Just add a file called `.prettierrc` and use `cmd + space` to see some suggestions. For more info just read the [Prettier documentation](https://prettier.io/docs/en/). Here is my go to file content in a React project:

```json
{
  "arrowParens": "avoid",
  "semi": false,
  "tabWidth": 2,
  "singleQuote": true,
  "printWidth": 120
}
```

### 5.3 Bracket Pair Colorizer

Although I wouldn't say this is a must have, I do think that some languages can lead to pieces of code that have a lot of nested brackets. This extension will colorize your brackets so you can easily see where they start and end. It's a nice little addition to your editor.
