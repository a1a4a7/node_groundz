// kafkaProducer.js
const kafka = require('kafka-node');
const client = new kafka.KafkaClient({kafkaHost: 'localhost:9092'});
const Producer = kafka.Producer;
const producer = new Producer(client);

producer.on('ready', () => {
  console.log('Kafka Producer is connected and ready.');
});

producer.on('error', (error) => {
  console.error('Producer error:', error);
});

const sendMessage = (message, topic) => {
  return new Promise((resolve, reject) => {

    const messageBuffer = Buffer.from(JSON.stringify(message)); // 确保消息是 JSON 字符串
    const payloads = [
      { topic: 'your-topic-name', messages: messageBuffer }
    ];
    producer.send(payloads, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports = { sendMessage };
