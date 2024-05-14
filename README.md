# setup for monorepo
[x]node(expressjs) 
-> [x]mysql | [x]mongodb -> [x]redis -> [x]kafka|zookeeper -> [x]docker -> []CI/CD -> []EBS(1-for-all soln)  

Route 2: 
-> ECR -> ECS -> codePipeline & CodeBuild(compose)

# run 
redis-server redis.conf

# run zoo
- /opt/homebrew/Cellar/zookeeper/3.9.2/libexec/bin/zkServer.sh start /Users/mankitho/Desktop/projects_2024/node_build/zoo.cfg

# CLI check Zookeeper
- /opt/homebrew/Cellar/zookeeper/3.9.2/libexec/bin/zkCli.sh -server localhost:2181
  
# find zookeeper :  /opt/homebrew/Cellar/zookeeper/3.9.2 -name zkServer.sh
# find kafka : brew info kafka

# run kafka 
/opt/homebrew/opt/kafka/bin/kafka-server-start /opt/homebrew/etc/kafka/server.properties

# kafka CLI 创建一个测试主题：
/opt/homebrew/bin/kafka-topics --create --topic test --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1
# 启动生产者发送消息：
/opt/homebrew/bin/kafka-console-producer --broker-list localhost:9092 --topic test
# 启动消费者接收消息：
/opt/homebrew/bin/kafka-console-consumer --bootstrap-server localhost:9092 --topic test --from-beginning

# check all replicas partitions locations
/opt/homebrew/bin/kafka-topics --describe --topic test --bootstrap-server localhost:9092


# mysql
brew services start mysql

# run
mysql -u root -p

# mongodb
brew services start mongodb/brew/mongodb-community
# status check 
brew services list

# docker build
docker-compose up --build

# docker remove
docker-compose down

# zookeeper cleanup
rm -rf /opt/homebrew/Cellar/zookeeper/data/*

- api design 
- db schema (mono) 
- switch mongodb / mysql  - connection - both

- tolerance ? failover
- concurrency

# kafka-1 enter kafka container
docker exec -it <kafka-1 #ID> /bin/bash
docker exec -it db3a36b9969d481d0d7d9bd21dd10c49643b2fa83501f6afaf4a7fdf33430906 /bin/bash

# kafka create topic
kafka-topics --bootstrap-server kafka:9092 --create --topic your-topic-name --partitions 1 --replication-factor 1

# kafka ls topics
kafka-topics --bootstrap-server kafka:9092 --list


# debug docker 
docker-compose logs node-api


# aws setup
pip install awsebcli

aws ec2 create-key-pair --key-name MyKeyPair --query 'KeyMaterial' --output text > MyKeyPair.pem

git remote set-url codecommit-origin https://<smurf-at-370052297002:<password>@git-codecommit.us-west-2.amazonaws.com/v1/repos/origin



aws secretsmanager create-secret --name 


------ todos ------
redis: cache -> analytics -> (queue task) -> (rate limiter) -> pub/sub

kafka: .. via redis 





------ enhancements ------
- change .env
- [](kubernetes)