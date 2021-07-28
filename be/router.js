const express = require("express");
const router = express.Router();
const Pusher = require('pusher');

const pusher = new Pusher({
  appId: "1163089",
  key: "9d6d76d7125a54e6b368",
  secret: "0b9aae5fa551eeb8f823",
  cluster: "ap1",
  useTLS: true
});

router.get("/", (req, res) => {
  res.send({ response: "Server is up and running." }).status(200);
});

router.post('/', (req, res) => {

  const data = req.body;

  pusher.trigger(data.user.room, 'test', {
      user: {
        id: data.user.id,
        name: data.user.name
      },
      text: data.message
  });
});

module.exports = router;