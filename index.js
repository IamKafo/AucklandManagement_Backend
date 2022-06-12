const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const Blog = require('./models/blog');
require("dotenv").config();

app.use(express.json());
app.use(cors());


mongoose.connect("mongodb://mongodb:27017/test", {useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {console.log("db connected")}, app.listen(3001,() => {console.log("server is running on port 3001...")}))
    .catch((err) => console.log(err))


// app.get('/insert', async (req, res) => {
//     const blog = new Blog({
//         title: 'house 1',
//         snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mattis vel conse.',
//         bath: '1 Bath',
//         bed: '2 beds',
//         photo: "/unsplash_sZ9F_XkGJfI.png",
//         cost: "$536"
//     });
//     await blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         })

// })

app.get('/all', async (req, res) => {
 Blog.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
})

