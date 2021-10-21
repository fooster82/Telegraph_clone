const { init } = require('../dbConfig');

class Post {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.pseudonym = data.pseudonym;
        this.body = data.body;
    };

    // Return all posts
    static get all() {
        return new Promise(async (resolve, reject) => {
            try {
                const db = await init();
                const postData = await db.collection('posts').find().toArray();
                const allPosts = postData.map(p => new Post({ ...p, id: p.id }));
                resolve(allPosts);
            } catch (err) {
                reject('Unable to retrieve posts');
            };
        });
    };

    // Find a post by an id
    static findById(postId) {
        return new Promise(async (resolve, reject) => {
            try {
                const db = await init();
                let postData = await db.collection('posts').find({ id: postId }).toArray();
                let post = new Post({ ...postData[0], id: postData[0].id });
                resolve(post);
            } catch (err) {
                reject(`Post ${postId} not found`);
            };
        });
    };

    // Create a post
    static createPost(title, pseudonym, body) {
        return new Promise(async (resolve, reject) => {
            try {
                const db = await init();
                let postData = await db.collection('posts').insertOne({ title, pseudonym, body });
                console.log(postData)
                let newPost = new Post(postData.ops[0]);
                resolve(newPost);
            } catch (err) {
                console.log("ERROR", err)
                reject('Unable to create new post');
            };
        });
    };
};

module.exports = Post;