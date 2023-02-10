---
sidebar_position: 3
---

AREX allows you to add dynamic behavior to requests and collections through scripting (`JavaScript` code snippets).

#### What is scripts used for?

1. Test (assert) the correctness of the request return result (test script).
2. Dynamically modifying interface request parameters, such as adding interface signature parameters, etc. (pre-request script)
3. Passing data between interface requests (using scripts to manipulate variables).

You can add JavaScript code to execute during two events in the flow:

1. Before a request is sent to the server, as a pre-request script under the Pre-request Script tab.
2. After a response is received, as a test script under the Tests tab.

You can add pre-request and test scripts to a collection, a folder, or a single request within a collection:

- Set pre-request or test scripts for the entire collection or a folder under the collection. Once set, they will run for every request in the collection or direct child request in the folder.
- Set pre-request or test scripts for individual requests. Once set, they will run only for a single request.

# Execution order of scripts

The script execution order for a single request looks like this:

1. A pre-request script associated with a request will execute before the request is sent.
2. A test script associated with a request will execute after the request is sent.

![](../resource/c2.order1.png)

For every request in a collection, scripts will execute in the following order:

1. A pre-request script associated with a collection will run prior to every request in the collection.
2. A pre-request script associated with a folder will run prior to every direct child request in the folder.
3. A test script associated with a collection will run after every request in the collection.
4. A test script associated with a folder will run after every direct child request in the folder.

![](../resource/c2.order2.png)

# Writing pre-request scripts

## Re-using pre-request scripts

1. Select **Collection** in the sidebar.

2. Select the collection or the folder you want to add Re-using pre-request scripts.

3. Select the **Pre-request** Scripts tab >> **Add Script Block** >> **CustomScript**.

![添加集合脚本](../resource/c2.collection.addpre.png)

Enter code that will run before every request in the collection or direct child request in the folder.

![集合脚本](../resource/c2.collection.pre.png)

## Scripting before your request runs

1. Open the request, then select the **Pre-request Script** tab.

2. Select **Add Script Block** and enter the JavaScript you need to process before the request runs, then select Save.

3. Select Send to send the request. The code will execute before Postman sends the request to the API.

![请求添加前置脚本](../resource/c2.add.pre.png)

# Writing test scripts

You can use test scripts to `assert` whether your API is working as expected or not, and set the result data returned by the request as environment variables, etc.

## Validating responses

1. open the request and select the **Tests** tab.

     ![添加后置脚本](../resource/c2.addtest.png)

2. Select **Add Script Block** and enter your code for your request.

3. Select **Send** and the tests will execute after the request runs. 

4. The output is in the response's **Result** tab.

     ![断言结果](../resource/c2.tests.result.png)

## Reference

### 1. Using variables in scripts

#### Environment variables

Your scripts can use the arex.environment methods to access and manipulate variables in the active (currently selected) environment.

1. Set the variable with the specified name and value in the active environment:

```
arex.environment.set("variable_key", "variable_value");
```

2. Get the variable with the specified name in the active environment:

```
arex.environment.get("variable_key");
```

3. Delete the variable:

```
arex.environment.delete("variable_key");
```

#### Temporary variables

1. Set the temporary variables with the specified name and value:

```
arex.variables.set("variable_key", "variable_value")
```

2. Get the temporary variables:

``` 
arex.variables.get("variable_key")
```

3. Delete the temporary variables:

```
arex.variables.delete("variable_key")
```

### 2. Sending requests from scripts

1. Sending GET requests

```
let response = await arex.sendRequest({method:"GET",url:"http://10.5.153.1:8090/api/config/schedule/useResult/appId/arex-0.2.4.test2"});  
```

2. Sending POST requests

```
let response = await arex.sendRequest({url:"http://10.5.153.1:8088/api/report/queryDifferences",method:"POST",data:"{"categoryName":"ServletEntrance","operationName":"/owners/{ownerId}","planItemId":"633184edc9af0157f44eaeba"}",headers:{"Content-Type":"application/json","access-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbmZvIjoidGVzdCJ9.YeLmUW--fqrtmag1QTDmL8U7RVZlb34xPAAxorxSCPM"}});  
```

### 3. Database Query

You can use pre-request scripts to connect to a MySQL database and execute a SQL query statement.

Use a connectConfig object to store the configuration information required to connect to the database. This includes the host, port, username, password, and name of the database:

```
let connectConfig={host:"10.5.153.1",port:"13306",user:"root",password:"",database:"community"};
```

Use another object executeBody to store information required for executing the SQL query. It includes a SQL query statement (sql) and a parameter array (params):

```
let executeBody={sql:"select * from mealrecomrestaurant where id = ?",params:[1]};
```

Call the function arex.executeMySql(connectConfig, executeBody) to connect to the database and execute the SQL query. The function requires two parameters: the configuration information needed to connect to the database and the information needed to execute the SQL query. The return value of the function is assigned to the variable response:

```
let response = await arex.executeMySql(connectConfig,executeBody);
```

### 4. Validating responses

Test if the response status code is 200:

```
// 
arex.test("Status code is 200", ()=> {
    arex.expect(arex.response.status).toBe(200);
});
```

Test if the age in the result messages is 18:

```
arex.test("Check JSON response property", ()=> {
    arex.expect(arex.response.body.age).toBe(18);
});
```
