/* // kafkaConsumer.js
const kafka = require('kafka-node');
const client = new kafka.KafkaClient({kafkaHost: process.env.KAFKA_HOST || 'kafka:9092'});
const Consumer = kafka.Consumer;

const consumer = new Consumer(
  client,
  [{ topic: 'your-topic-name', partition: 0 }], // 订阅的主题和分区
  {
    autoCommit: true, // 自动提交偏移量，确保每条消息只被消费一次
  }
);

consumer.on('message', function (message) {
  console.log('Received message:', message);
  // 根据消息内容执行业务逻辑
  // 解析消息内容
  try {
    const data = JSON.parse(message.value);
    console.log('parsed', data);
  } catch (err) {
    console.log('err',err);
  }
  // 在这里添加处理接收到的消息的逻辑
});

consumer.on('error', function (err) {
  console.log('Error:', err);
});

module.exports = consumer;
 */