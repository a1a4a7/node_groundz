// messageController.js
const { sendMessage } = require('../../kafka/producer');

exports.send = (req, res) => {
  sendMessage(req.body.message, 'your-topic-name')
    .then(() => res.status(200).send('Message sent successfully'))
    .catch(err => res.status(500).send(err.message));
};
