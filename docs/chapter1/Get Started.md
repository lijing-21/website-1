---
sidebar_position: 4
---

## Creating collection

Collections are a group of saved requests. You can save your requests in groups by creating collections, which can help you manage requests better.

To create a new collection, select **Collection** > **New** from the sidebar.

![新建集合](../resource/c1.newcollection.png)

Or select the **+** icon to create a new collection：

![新建集合](../resource/c1.newcollection.2.png)

Once created, you can manage all your collections under **Collections** in the sidebar. You can also add new subsets/folders under collections.

![集合操作](../resource/c1.newfolder.png)

To customize and configure the new collection, click directly on the collection:

1. Select **Authorization** to configure authorization details for the collection. If you do not want to expose the interface to the public, you can use authorization. The authorization process will verify that you have permission to access the data required by the server, and when you send a request, you usually need to include parameters to ensure that the request has permission to access and return the required data. By default, this will take effect for requests under the entire collection/folder. If you need to modify the authorization type for a particular request, you can do so separately in that request.

![集合授权](../resource/c1.authorization.png)

2. Select **Pre-request Script** to define a pre-request script for your collection, which will run before requests are sent to the server.

![集合前置脚本](../resource/c1.prerequest.png)

3. Select **Tests** to define a test script for your collection, which will run after a response is received.

## Creating a workspace

You will be in your default personal workspace when first log in AREX. You can not only create various workspaces for your personal use, but also invite your team to collaborate in your workspace to manage **Collections**, share **Environments** etc.

To create a new workspace:

1. Select the **+** icon in the upper right to **Add Workspace**. You can also select other workspaces from the dropdown list.

    ![新建工作区](../resource/c1.newworkspace.png)

2. Enter a Name for your workspace and click the **√** icon to save。

    ![命名工作区](../resource/c1.saveworkspace.png)

3. Once created, you can select the ![编辑](../resource/c1.rename.png) icon in the upper right to **Edit Workspace**, where you can edit the name of the workspace, manage collaborators, and delete the workspace.

    ![编辑工作区](../resource/c1.editworkspace.png)

You can also invite other users to collaborate in a workspace via email by selecting **Invite** in the upper-right corner. There're **Admin**, **Editor**, and **Viewer** three roles.

![邀请](../resource/c1.invite.png)

## Sending request

You can use AREX to create and send API requests.

1. Select **+** icon in the workbench to open a new tab.

    ![新建请求](../resource/c1.addrequest.png)

2. Enter the request URL.

3. Select **Send**.

    ![发送请求](../resource/c1.request.png)
