---
shown: true
pinned: true
date: 2023-02-01
slug: /journal/vscode-wizardry
title: Manipulating VS Code Settings
featuredImage: ./featured.png
---

There is a lot of cusytomizations that can be done to VS Code. In this post I will share with you interesting settings that aren't very popular but very useful 😊 (especially if you're a major customization geek like me).

> The way we customize our environments is what defines their potential.

## 1. Getting started

Once you've installed VS Code it can be overwhelming to understand all of it, but over time you'll come to realize how simple and extendable it is.

VS Code's settings are controlled by a file called `settings.json` that is somewhere in your filesystem, inside the folders of your VSCode instalattion. Some of these settings are controllable via an interface on VSCode, but others... _not so much_.

In most systems there is a shortcut to access your settings which is `ctrl + ,` or perhaps `command + ,` if you're using a Macbook keyboard. Alternitively, you can navigate with the mouse to the top left to `File > Preferences > Settings`. In this page you can find a lot of UI configurations that will be appended to your `settings.json` file. Manually editing this file is possible and you can do it by pressing the icon seen below on the **top right of your settings page**.

![](https://i.imgur.com/qTb9Sdv.png)

## 2. Sync settings

Before we get into any more details, one thing you should note is that the VSCode `settings.json` file can get pretty lengthy. This means you will want to have this file be associated to an account and be stored in the cloud. Make sure you sign in with a GitHub account (or Microsoft) and activate Settings Sync, otherwise you might sign in on another device and lose your **precious workflow**.
