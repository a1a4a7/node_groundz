# setup for 
[x]node(expressjs) 
-> [x]mysql | [x]mongodb -> [x]redis -> [x]kafka|zookeeper -> []docker -> [](kubernetes) -> []CI/CD -> []EBS  


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



- api design 
- db schema (mono) 
- switch mongodb / mysql  - connection - both

- tolerance ? failover
- concurrency








------ todos ------
redis: cache -> analytics -> (queue task) -> (rate limiter) -> pub/sub






------ enhancements ------
- change .env