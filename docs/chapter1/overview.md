---
sidebar_position: 3
---

After installation, you can access the **AREX-UI** via **Chrome** browser:

- If the port configuration has not been modified, access port 8088 directly (port 8088 exposed by Docker Compose) http://0.0.0.0:8088/
- If the AREX-UI is deployed independently and the port has not been modified (default port 8080), then access http://0.0.0.0:8080/
- If the port has been modified, access the modified port.

## First Login

![登录](../resource/c1.log.png)

For the first login, you need to enter your personal E-mail. After receiving the verification code, select **Login** to login.

You can also log in as a guest by selecting the **Guest**, but you will have limited access and will not be able to use the invitation and case sharing features.

## Chrome Extension Installation

![插件](../resource/c1.chrome.extension.png)

Before using, please install the Chrome extension according to the browser prompt to remove the browser cross-domain restrictions.

In the redirected page, select **Add to Chrome** option to download the extension.

![插件](../resource/c1.add.extension.png)

If you cannot access the Chrome extension, it also can be installed locally by downloading from the [Release](https://github.com/arextest/arex-chrome-extension/releases).

1. Download `arex-chrome-extension.zip` and unzip it.

    ![插件](../resource/c1.add.extension2.png)

2. Open the Chrome browser and enter `chrome://extensions/` to access the extension page. Enable the Developer mode by selecting **Developer mode** on the upper right corner. Then select **Load unpacked**, goto location where you unzip the chrome extension and select the installer folder.

    ![插件](../resource/c1.add.extension3.png)

3. Installation complete.

    <img src="https://i.328888.xyz/2023/02/09/3aFVk.png" alt="安装完成" width="500" height="" />

## Interface Overview

![界面概览](../resource/c1.overview.jpg)

The interface of AREX-UI consists of three primary areas: **Header**, **Sidebar**, and **Workbench**.

### Header

![页眉](../resource/c1.header.png)

- Invite: Invite others to collaborate on the same Workspace.

- ![Settings icon](../resource/c1.setting.icon.png) Settings: Switch between Dark/Light mode and Chinese/English mode.

- Sign out：You can sign out of your current account.

### Sidebar

<img src="https://i.328888.xyz/2023/02/15/mxrXb.png" alt="Sidebar" width="400" height="" />

- ![工作区](../resource/c1.workspace.icon.png)**Workspace**：
    - Select the dropdown list to switch workspaces; 
    - Select **+** to create a new workspace; 
    - Select ![编辑工作区](../resource/c1.rename.png) icon to edit the workspace；
    - Select ![导入](../resource/c1.import.png) icon to import a local file as a collection into the workspace.
- **Collection**：Groups of saved requests. You can send requests and manage your test cases here.
- **Replay**: Execute traffic replay and view the reports.
- **Environment**: Create a new environment and set environment variables.
- **AppSetting**: Set up the recording application.

### Workbench

The workbench is the primary area when performing operations such as API testing, traffic replay, and comparison testing. The tab bar allows you to quickly manage various requests, collections, and replay. The environment selector on the top right corner allows you to quickly select the environment.

![工作台](../resource/c1.workbench.png)

#### Tabs

Tabs allow you to organize and work between requests.

You can open a new request by selecting **+** in the workbench.

![新建请求](../resource/c1.newrequest.png)

#### Switching environments

As needed, you can quickly switch to the environment you need on the top right corner. Select the appropriate environment to access the variables in that environment.

![切换环境](../resource/c1.change.environment.png)
