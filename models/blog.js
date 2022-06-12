const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


const blogSchema = new Schema ({
    title: {
        type: String,
        required: true
    },

    snippet: {
        type: String,
        required: true
    },

    bath: {
        type: String,
        required: true
    },

    bed: {
        type: String,
        required: true
    },

    photo: {
        type :String,
        required: true

    },

    cost: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;