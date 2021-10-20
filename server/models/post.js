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
                const allPosts = postData.map(p => new Post({ ...p, id: p._id }));
                resolve(allPosts);
            } catch (err) {
                reject('Unable to retrieve posts');
            };
        });
    };

    // Find a post by an id
    static findById(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const db = await init();
                let postData = await db.collection('posts').find({ id: `${id}` }).toArray();
                let post = new Post({ ...postData[0], id: postData[0].id });
                resolve(post);
            } catch (err) {
                reject(`Post ${id} not found`);
            };
        });
    };

    // Create a post
    static createPost(title, pseudonym, body) {
        return new Promise(async (resolve, reject) => {
            try {
                const db = await init();
                let postData = await db.collection('posts').insertOne({ title, pseudonym, body });
                let newPost = new Post(postData.ops[0]);
                resolve(newPost);
            } catch (err) {
                reject('Unable to create new post');
            };
        });
    };
};

module.exports = Post;