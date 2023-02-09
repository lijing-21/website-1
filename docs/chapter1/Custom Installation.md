---
sidebar_position: 2
---

## Multi-instance installation

In the previous [Quick Installation](Quick%20Installation), we introduced how to install all AREX components including AREX UI, services, database, etc. by using the `docker-compose.yml` file provided by AREX.

If you want to install multiple instances according to your needs, you can use the provided `docker-compose-distribute.yml` file for a simple Out-of-the-box setup. Run the following command:

```Powershell
git clone https://github.com/arextest/deployments.git 
cd deployments 
docker-compose -f docker-compose-distribute.yml up -d
```

```
docker-compose -f docker-compose-distribute.yml down -v // Stopping command
docker-compose -f docker-compose-distribute.yml ps // List running containers and their status
```

The default setup of the scheduling and storage service involves 2 instances, with the following specific components:

The default configuration of the scheduling service and storage service is 2 instances, with specific component instances as follows:

| ID   | Number of Instance | Model Name                                                   | Description                                                  |
| ---- | -------------------| ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1    | 2                  | [Schedule Service](https://github.com/arextest/arex-replay-schedule) | A set of schedule APIs that provide replay send and retrieve all responses for comparison. |
| 2    | 1                  | [Replay Report Service](https://github.com/arextest/arex-report) | A set of report APIs that provide difference summaries and show the difference result details after the responses are compared. |
| 3    | 2                  | [Storage Service](https://github.com/arextest/arex-storage)  | A set of remote storage APIs that provide [Agent Hook Service](https://github.com/arextest/arex-agent-java) to save records and get responses as mocks. |
| 4    | 1                  | [Front-End](https://github.com/arextest/arex-front-end)      | A visual web site that provide entry to all operations in your **AREX**. |
| 5    | 1                  | MongoDB                                                      | 数据存储及配置管理数据库                                      |
| 6    | 1                  | Redis                                                        | 高速回放缓存                                                 |
| 7    | 1                  | Nginx                                                        | Schedule 负载均衡服务                                        |
| 8    | 1                  | Nginx                                                        | Storage 负载均衡服务                                         |

You an also **modify** the `docker-compose-distribute.yml` configuration file to configure multiple instances according to your needs.

## Individual service deployment and non-containerized installation

If you don't need to use the MongoDB data storage services provided by AREX, or if you need to scale the Schedule, Storage, etc. high CPU services in your own distributed environment, then you can also perform individual service deployment and non-containerized installation and install the services individually. (Non-containerized installation is not recommended, we'll consider the request if there is a demand for it). 

However, you will need to configure the service-to-service calls yourself. Details are as follows:

### Configure environment variables

#### Windows

Set environment variables in the JAVA_OPTS environment variable.

```
# set the URL for a storage service to http://10.3.1.4:8080
set JAVA_OPTS=-Darex.storage.service.url=http://10.3.1.4:8080

# set the host for a MongoDB database to mongodb://username:password@my-mongodb:27017/arex_storage_db
-Darex.storage.mongo.host=mongodb://username:password@my-mongodb:27017/arex_storage_db

# set the host for an email service to smtp.msn.com
-Darex.report.email.host=smtp.msn.com 
```

#### Linux

```
export JAVA_OPTS=-Darex.storage.service.url=http://10.3.1.4:8080 -Darex.storage.mongo.host=mongodb://username:password@my-mongodb:27017/arex_storage_db -Darex.report.email.host=smtp.msn.com
```

### Configure AREX UI

You need to configure two environment variables需要配置 2 个环境变量，分别对应报告分析服务地址、和调度服务地址。

#### Windows 

Run the following command:

```
# set the URL for a report service to http://10.192.1.1:8080
set SERVICE_REPORT_URL=http://10.192.1.1:8080

# set the URL for a schedule service to http://10.192.1.1:8080
set SERVICE_SCHEDULE_URL=http://10.192.1.1:8080
```

#### Linux

Run the following command:

```
# set the URL for a report service to http://10.192.1.1:8080
export SERVICE_REPORT_URL=http://10.192.1.1:8080

# set the URL for a schedule service to http://10.192.1.1:8080
export SERVICE_REPORT_URL=http://10.192.1.1:8080
```

### Configure AREX Schedule Service

#### Configuration with source code

```
arex.storage.service.api=http://arex-storage-service:8080 
arex.report.service.api=http://arex-report-service:8080
```

#### Individual deployment configuration

For example:

```
environment:
  - "JAVA_OPTS=-Darex.storage.service.api=http://10.3.1.1:8080 -Darex.report.service.api=http://10.3.1.2:8080 "
```

### Configure AREX Storage Service

#### Configuration with source code

```
arex.storage.cache.expired.seconds=7200 
arex.storage.cache.provider.host= 
mongo.host=mongodb://arex:iLoveArex@mongodb:27017/arex_storage_db
```

#### Individual deployment configuration

For example:

```
environment:
  - "JAVA_OPTS=-Darex.storage.service.api=http://arex-storage-service:8080 -Darex.report.service.api=http://arex-report-service:8080
```

### Configure AREX Report Service

#### Configuration with source code

```
arex.report.mongo.uri=mongodb://arex:iLoveArex@ip:27017/arex_storage_db 
arex.storage.service.url=http://arex-storage-service:8080 
arex.ui.url=http://your_arex_ip_address:port
```

#### Individual deployment configuration

For example:

```
environment:
  - "JAVA_OPTS=-Darex.storage.service.url=http://10.3.1.4:8080 -Darex.storage.mongo.host=mongodb://username:password@my-mongodb:27017/arex_storage_db -Darex.report.email.host=smtp.msn.com -Darex.ui.url=http://your_arex_ip_address:port" 
```

### Configure MongoDB

First, you should remove the related configuration for MongoDB in the official `docker-compose.yml` file. MongoDB does not have an initialized configuration, so the parameters of the services that rely on MongoDB need to be configured based on your actual service.

#### Deploy AREX Agent

The same as [Quick Installation](Quick%20Installation#deploy-arex-agent).
