const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

let votes = {};

app.post('/vote', (req, res) => {
    const { candidate } = req.body;
    if (votes[candidate]) {
        votes[candidate] += 1;
    } else {
        votes[candidate] = 1;
    }
    res.json({ success: true });
});

app.get('/votes', (req, res) => {
    res.json(votes);
});

app.post('/reset', (req, res) => {
    votes = {};
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
