const express = require('express'); // Sempre instale antes.
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const posts = require('../model/posts');

const options = {
    origin: "http://localhost:3000"
}

router.get("/all", cors(options), (req, res) => {
    res.json(JSON.stringify(posts.getAll()));
});

router.post("/new", bodyParser.json(), (req, res) => {
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description);
    res.send("Post Adicionado");
});

module.exports = router;