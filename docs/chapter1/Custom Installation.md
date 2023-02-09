---
sidebar_position: 2
---

## Multi-instance installation

In the previous [Quick Installation Guide](/docs/chapter1/Quick%20Installation#deploy-arex-agent), we introduced how to install all AREX components including AREX UI, services, database, etc. by using the `docker-compose.yml` file provided by AREX.

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

当然你也可以**修改** `docker-compose-distribute.yml` 配置文件，根据自己的需求配置多实例。

## 服务单独部署及非容器化安装

如你不需要使用 AREX 自带的 MongoDB 数据存储服务，或是需要使用自己的分布式环境，对 Schedule、Storage 等高 CPU 服务进行扩缩容，那么你也可以进行服务单独部署及非容器化安装，单独安装服务。（不推荐用非容器化安装，有人提需求再说）

但需要自己完成服务间调用的配置。具体如下：

### 配置环境变量

#### Windows

```
set JAVA_OPTS=-Darex.storage.service.url=http://10.3.1.4:8080 -Darex.storage.mongo.host=mongodb://username:password@my-mongodb:27017/arex_storage_db -Darex.report.email.host=smtp.msn.com // set JAVA_OPTS 查看配置
```

#### Linux

```
export JAVA_OPTS=-Darex.storage.service.url=http://10.3.1.4:8080 -Darex.storage.mongo.host=mongodb://username:password@my-mongodb:27017/arex_storage_db -Darex.report.email.host=smtp.msn.com // echo $SERVICE_REPORT_URL 查看配置
```

### AREX 前端配置

需要配置 2 个环境变量，分别对应报告分析服务地址、和调度服务地址。如你使用的是 0.2.4 以下版本，则还需要配置 Config 服务地址。

#### Windows 

运行如下命令进行设置：

```
set SERVICE_REPORT_URL=http://10.192.1.1:8080  // 设置报告分析服务地址 
set SERVICE_SCHEDULE_URL=http://10.192.1.1:8080  // 设置调度服务地址 
set SERVICE_Config_URL=http://10.192.1.1:8080  // 设置调度服务地址
```

#### Linux

运行如下命令进行设置：

```
export SERVICE_REPORT_URL=http://10.192.1.1:8080 // 设置报告分析服务地址 
export SERVICE_REPORT_URL=http://10.192.1.1:8080  // 设置调度服务地址 
set SERVICE_Config_URL=http://10.192.1.1:8080  // 设置调度服务地址
```

### AREX 调度服务配置

#### 源码配置

```
arex.storage.service.api=http://arex-storage-service:8080 
arex.report.service.api=http://arex-report-service:8080
```

#### 单独部署配置

例：

```
environment:
  - "JAVA_OPTS=-Darex.storage.service.api=http://10.3.1.1:8080 -Darex.report.service.api=http://10.3.1.2:8080 "
```

### AREX 存储服务配置

#### 源码配置

```
arex.storage.cache.expired.seconds=7200 
arex.storage.cache.provider.host= 
mongo.host=mongodb://arex:iLoveArex@mongodb:27017/arex_storage_db
```

#### 单独部署配置

例：

```
environment:
  - "JAVA_OPTS=-Darex.storage.service.api=http://arex-storage-service:8080 -Darex.report.service.api=http://arex-report-service:8080
```

### AREX 报告分析服务配置

#### 源码配置

```
arex.report.mongo.uri=mongodb://arex:iLoveArex@ip:27017/arex_storage_db 
arex.storage.service.url=http://arex-storage-service:8080 
arex.ui.url=http://your_arex_ip_address:port
```

#### 单独部署配置

例：

```
environment:
  - "JAVA_OPTS=-Darex.storage.service.url=http://10.3.1.4:8080 -Darex.storage.mongo.host=mongodb://username:password@my-mongodb:27017/arex_storage_db -Darex.report.email.host=smtp.msn.com -Darex.ui.url=http://your_arex_ip_address:port" 
```

### MongoDB 配置

首先需要在官方提供的 docker-compose.yml 文件中删除 MongoDB 的相关配置。MongoDB 没有初始化的配置，依赖 MongoDB 的服务，其参数需要按照你自己的实际服务来配置。

#### **后续操作**

Agent 配置同[快速安装指南](/docs/chapter1/fastsetup#部署-arex-agent)。
