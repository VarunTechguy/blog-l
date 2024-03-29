import mongoose from 'mongoose';
//SCHEMA 
//Each post needs to have 
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: { type: [String], default: [], },
    createAt: {
        type: Date,
        default: new Date(),
    },

});

var PostMessage = mongoose.model('PostMessage', postSchema);

//Exporting a mongoose model || can run find create del and update
export default PostMessage;