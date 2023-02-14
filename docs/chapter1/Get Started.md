---
sidebar_position: 4
---

## Creating collection

Collections are a group of saved requests. You can save your requests in groups by creating collections, which can help you manage requests better.

To create a new collection, select **Collection** > **New** from the sidebar.

![新建集合](../resource/c1.newcollection.png)

Or select the **+** icon to create a new collection：

<img src="https://i.328888.xyz/2023/02/09/3TiPX.png" alt="New Collection" width="400" height="" />

Once created, you can manage all your collections under **Collections** in the sidebar. You can also add new subsets/folders under collections.

<img src="https://i.328888.xyz/2023/02/09/3TndN.png" alt="New Collection" width="500" height="" />

To customize and configure the new collection, click directly on the collection:

1. Select **Authorization** to configure authorization details for the collection. If you do not want to expose the interface to the public, you can use authorization. The authorization process will verify that you have permission to access the data required by the server, and when you send a request, you usually need to include parameters to ensure that the request has permission to access and return the required data. By default, this will take effect for requests under the entire collection/folder. If you need to modify the authorization type for a particular request, you can do so separately in that request.

    <img src="https://i.328888.xyz/2023/02/09/3T0Eb.png" alt="Authorization" width="600" height="" />

2. Select **Pre-request Script** to define a pre-request script for your collection, which will run before requests are sent to the server.

    ![集合前置脚本](../resource/c1.prerequest.png)

3. Select **Tests** to define a test script for your collection, which will run after a response is received.

## Creating a workspace

You will be in your default personal workspace when first log in AREX. You can not only create various workspaces for your personal use, but also invite your team to collaborate in your workspace to manage **Collections**, share **Environments** etc.

To create a new workspace:

1. Select the **+** icon in the upper right to **Add Workspace**. You can also select other workspaces from the dropdown list.

    <img src="https://i.328888.xyz/2023/02/09/3T2pw.png" alt="New workspace" width="400" height="" />

2. Enter a Name for your workspace and click the **√** icon to save。

    <img src="https://i.328888.xyz/2023/02/09/3ThBt.png" alt="Save" width="400" height="" />

## Work with your team

AREX provides collaboration features, where you can invite others to join your workspace and collaborate online within the same workspace. Members who join the workspace can share resources such as environment, test collections and test cases in the **Collection**. To invite members to join a workspace:

1. Switch to the workspace where you want to collaborate with others by selecting the workspace in the top left corner.

    ![切换工作区](../resource/c1.invite1.png)

2. Select **Invite** in the top right corner of the workbench to invite your team members to join the current workspace via email. After entering their email and setting their permissions, select **Send Invites** to send the invitation. The invitee will receive an email invitation, and they can accept it and join the workspace by clicking the link in the email.

    <img src="https://i.328888.xyz/2023/02/09/3Tb4x.png" alt="Invite" width="700" height="" />

    There are three types of permissions: Admin, Editor, and Viewer.

    - **Admin**: has administrative permissions, can manage detailed information in the workspace, delete the workspace, and set permissions for members.
    - **Editor**: can create and edit resources (such as test cases) in the workspace.
    - **Viewer**: cannot edit the data in the workspace, but can view and export the resources in the workspace.

3. Select the ![编辑](../resource/c1.rename.png) icon in the upper right to **Edit Workspace**, where you can edit the name of the workspace, manage collaborators, and delete the workspace.

    ![编辑工作区](../resource/c1.editworkspace.png)

    **Overview**: Administrators can modify the name of the workspace, view team members and modify permissions, and delete the workspace on this page. 

    ![管理标签](../resource/c1.addlabel.png)

    **Labels**：Administrators and editors can add test case tags on this page to manage test case.
    
## Sending request

You can use AREX to create and send API requests.

1. Select **+** icon in the workbench to open a new tab.

    ![新建请求](../resource/c1.new.request.png)

2. Enter the request URL.

3. Select **Send**.

    ![发送请求](../resource/c1.request.png)
