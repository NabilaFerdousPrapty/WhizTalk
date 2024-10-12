require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const chats = require('./data/data');
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Lets chat with WhizChat');
}
);
app.get('/api/chat', (req, res) => {
    res.send(chats);
}
);
app.get('/api/chat/:id', (req, res) => {
    const { id } = req.params;
    const singleChat = chats.find((chat) => chat._id === id);
    res.send(singleChat);

});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);