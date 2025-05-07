import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Post title is required'],
            trim: true,
        },
        content: {
            type: String,
            required: [true, 'Post content is required'],
        },
        author: {
            //   type: mongoose.Schema.Types.ObjectId,
            type: String,
            ref: 'User',
            required: true,
        },
        tags: [
            {
                type: String,
            },
        ],
        image: {
            type: String, // URL or filename if stored locally
        },
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt
    }
);

const Post = mongoose.model('Post', postSchema);

export default Post;
