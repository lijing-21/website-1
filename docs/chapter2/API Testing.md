---
sidebar_position: 1
---

## Creating new requests

You can create a new request by selecting **Add Request** in the dropdown list of the collection to open a new tab.

<img src="https://i.328888.xyz/2023/02/09/3T59J.png" alt="New request" width="400" height="" />

After opening the new tab, you can add the details you need for your request.

![new tab](../resource/c2.request.png)

## Adding request details

### Setting request URLs

Each request you send requires a URL representing the API endpoint you are working with. The URL will typically be the base location plus path. For example, in the request `https://arextest.github.io/arex-doc`, `https://arextest.github.io/` is the base URL, and `/arex-doc` is the endpoint path.

Enter the URL for the request you want to request into the URL field.

![new tab](../resource/c2.requestURL.png)

### Selecting request methods

The default method for a new request is set as `GET`，which means retrieving data from an API. You can also use a variety of other methods, including the following most common options:

- POST — add new data
- PUT — replace existing data
- PATCH — update some existing data fields
- DELETE — delete existing data

### Setting parameters

You can send query parameters with your requests using the URL field and the **Parameters** tab. **Query parameters** are appended to the end of the request URL, following ? and listed in key value pairs, separated by & using the following syntax: `?id=1&type=new`.

To send a query parameter, you can add it directly to the URL or open **Parameters** tab and select "**+**" to enter the name and value.

![parameters](../resource/c2.parameters.png)

The ![disable params](../resource/c2.save.png)icon indicates that the parameter is in use, and you can click the icon to disable it.

Select ![re-enable params](../resource/c2.ban.png) icon to re-enable.

![disable params](../resource/c2.ban2.png)

### Configuring request headers

Some APIs require specific headers to be included in requests, usually to provide additional information about the operation being performed. These headers can be configured in the **Headers** tab. Simply enter the necessary key-value pairs, and AREX will include them in the request.

![request headers](../resource/c2.header.png)

You can select the **action.record** icon ![record](../resource/recordicon.png) to force record the request as test cases by sending it. See the details in [**Force Record**](/docs/chapter%203/Force%20record).

![force record](../resource/c1.force.record.png)

### Sending body data

When you need to add or update structured data, body data must be included in requests. This is typically done with `PUT`, `POST`, and `PATCH` requests.

![请求体](../resource/c2.body.png)

You can specify a JSON data in the **Body** tab to send with your request.

### Writing scripts

You can add JavaScript code to run before sending a request or after receiving a response with:

- Pre-request script in the **Pre-request Script** tab.
- Test script in the **Tests** tab.

#### Pre-request Script

To include code you want to execute before sending a request, select the **Pre-request Script** tab → **Add Script Block** and enter the JavaScript you need to process before the request runs, then select Save.

![Add pre-script](../resource/c2.add.pre.png)

The interface provides commonly used pre-request scripts that can be used directly by clicking on the right side.

![pre-script](../resource/c2.pre.demo.png)

#### Tests

Tests confirm that your API is working as expected. On the **Tests** tab, you can test the correctness of the request response results by writing test scripts in JavaScript. This can also help in debugging when something goes wrong with your API project. You can, for instance, write a test to validate your API's error handling by sending a request with missing information or incorrect parameters.

The page provides various commonly used post-request scripts that can be used directly by clicking on them.

![test script](../resource/c2.tests.png)

After configuring the request parameters, click **Send** to get the response.

## Receiving responses

The response viewer displays the status code, request time, and size of the request body at the top.

The Response Body is the content of the response, which is the data returned from the server. The default data format is JSON.

![status code](../resource/c2.response.png)

The Raw view displays the raw response body as a large text area, allowing you to see if the response is minified.

![raw](../resource/c2.raw.png)

Headers are displayed as key-value pairs under the **Headers** tab. 

![response header](../resource/c2.response.header.png)

The test results for the API request can be found in the **Result** tab, if any test scripts were run.

<img src="https://i.328888.xyz/2023/02/09/3aRio.png" alt="result" width="500" height="" />
