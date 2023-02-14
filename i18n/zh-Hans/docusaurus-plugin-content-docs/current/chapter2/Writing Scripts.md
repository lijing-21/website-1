---
sidebar_position: 3
---

AREX 通过脚本（`JavaScript`代码片段）可实现在接口请求或集合测试时添加动态行为。

#### 脚本可实现的功能

1. 测试（断言）请求返回结果的正确性（后置脚本/test script）。
2. 动态修改接口请求参数，如增加接口签名参数等（前置脚本/pre-request script）。
3. 接口请求之间传递数据（使用脚本操作变量）。

以下两个环节可添加脚本：

1. 在将请求发送到服务器之前，使用前置脚本。
2. 收到响应后，使用后置脚本(断言测试)。

脚本有**全局/分组脚本**和**接口脚本**，其中：

- **全局/分组脚本**：为整个集合或集合下某个分组设置前置、后置脚本，设置后集合/分组里的所有接口运行时都会生效。
- **接口脚本**：为单个接口请求设置前置、后置脚本，设置后该接口运行时生效。

# 脚本运行顺序

对于单个请求来说，脚本运行顺序如下：

1. 前置脚本将在请求发送前执行。
2. 后置脚本将在请求发送后执行。

![](../resource/c2.order1.png)

对于集合中的每个请求，脚本将按以下顺序执行：

1. 全局前置脚本将在集合中的每个请求之前运行。
2. 分组前置脚本将在集合下某个分组中的每个子请求之前运行。
3. 全局后置脚本将在集合中的每个请求之后运行。
4. 分组后置脚本将在集合下某个分组中的每个子请求之后运行。

![](../resource/c2.order2.png)

# 前置脚本

## 全局/分组前置脚本

在菜单栏中选择 **collection**。

单击要添加前置脚本的集合或集合下的分组，进入编辑页面，依次点击 **Pre-request Script** 选项，点击 **Add Script Block** → **CustomScript。**

![添加集合脚本](../resource/c2.collection.addpre.png)

在代码框中输入你需要处理的 JavaScript，然后点击 **Save**。可以添加多条脚本，该脚本将在请求发送前执行。

![集合脚本](../resource/c2.collection.pre.png)

## 接口前置脚本

1. 打开一个请求，进入 **Pre-request Script** 标签页。

2. 点击 **Pre-request Script** 标签中 **Add Script Block**，为请求添加前置脚本。

3. 点击 **Send** 发送请求，该脚本将在请求发送到接口前执行。

![请求添加前置脚本](../resource/c2.add.pre.png)

# 后置脚本

后置脚本是在`请求发送完成后`执行的代码片段。主要用来`断言`请求返回的结果是否正确，并可以将请求返回的结果数据写入环境变量等。

## 接口后置脚本

1. 打开一个请求，进入 **Tests** 标签页。

     ![添加后置脚本](../resource/c2.addtest.png)

2. 点击 **Add Script Block**，为请求添加前置脚本。

3. 点击 **Send** 发送请求，该脚本将在请求发送到接口后执行。

4. 运行后，在 **Result** 中查看断言结果：

     ![断言结果](../resource/c2.tests.result.png)

## 使用场景

### 1. 使用变量

#### 环境变量

```
// 设置环境变量 
arex.environment.set("variable_key", "variable_value");

// 获取环境变量 
arex.environment.get("variable_key");

// 删除环境变量 
arex.environment.delete("variable_key");
```
#### 临时变量

```
// 设置临时变量
arex.variables.set("variable_key", "variable_value")

// 获取临时变量
arex.variables.get("variable_key")

// 删除临时变量
arex.variables.delete("variable_key")
```

### 2. 发送接口请求

#### 发送 GET 请求

```
let response = await arex.sendRequest({method:"GET",url:"http://10.5.153.1:8090/api/config/schedule/useResult/appId/arex-0.2.4.test2"});
```

#### 发送 POST 请求

```
let response = await arex.sendRequest({url:"http://10.5.153.1:8088/api/report/queryDifferences",method:"POST",data:"{"categoryName":"ServletEntrance","operationName":"/owners/{ownerId}","planItemId":"633184edc9af0157f44eaeba"}",headers:{"Content-Type":"application/json","access-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbmZvIjoidGVzdCJ9.YeLmUW--fqrtmag1QTDmL8U7RVZlb34xPAAxorxSCPM"}});
```

### 3. 数据库查询

可实现连接到一个 MySQL 数据库，并执行一条 SQL 查询语句。

```
// 使用一个对象 connectConfig 来存储连接数据库所需的配置信息。其中包括数据库所在的主机地址（host）、端口号（port）、用户名（user）、密码（password）和数据库名（database）。
let connectConfig={host:"10.5.153.1",port:"13306",user:"root",password:"",database:"community"};

//使用另一个对象 executeBody 来存储执行 SQL 查询语句所需的信息。包括一条 SQL 查询语句（sql）和一个参数数组（params）。
let executeBody={sql:"select * from mealrecomrestaurant where id = ?",params:[1]};

//调用函数 arex.executeMySql(connectConfig,executeBody) 来连接数据库并执行 SQL 查询语句。该函数需要传入两个参数，即连接数据库所需的配置信息和执行 SQL 查询语句所需的信息。并将函数的返回值赋值给变量 response。
let response = await arex.executeMySql(connectConfig,executeBody);
```

### 4. 断言请求返回的结果是否正确：

```
// 设置断言，判断响应状态码是否为 200
arex.test("Status code is 200", ()=> {
    arex.expect(arex.response.status).toBe(200);
});

//示例：验证响应结果中的 age 属性是否等于 18
arex.test("Check JSON response property", ()=> {
    arex.expect(arex.response.body.age).toBe(18);
});
```
