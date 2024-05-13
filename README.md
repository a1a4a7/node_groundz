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


setup for node(expressjs) -> mysql -> redis -> kafka -> docker -> (kubernetes) -> CI/CD -> EBS  

- api design 
- db schema (mono) 
- switch mongodb / mysql  - connection - both

- tolerance ? failover
- concurrency








------ todos ------
redis: cache -> analytics -> (queue task) -> (rate limiter) -> pub/sub






------ enhancements ------
- change .env