const header = document.getElementById('header')
const posts = document.getElementById('all-posts')
const form = document.getElementById('story-form')

const createLink = document.getElementById('createLink')
const postLink = document.getElementById('postLink')

form.addEventListener('submit', createPost);
getAll();

// createLink.addEventListener('click', e => {
//     e.preventDefault();
//     console.log("create clicked")
//     header.style.display = "none";
//     form.style.display = "flex";
//     posts.style.display = "none";
// })

// postLink.addEventListener('click', e => {
//     e.preventDefault();
//     console.log("post clicked");
//     header.style.display = "block";
//     form.style.display = "none";
//     posts.style.display = "block";
// })


// const buttonInput = document.getElementById('button-input')

// form.addEventListener('submit', e => {
//    e.preventDefault()
//    createPost(e)
// })




// function createPost(e) {
//     e.preventDefault();
//        const newPost = { title: e.target[0].value, pseudonym: e.target[1].value, body: e.target[2].value}
//        const options = {
//        method: "POST",
//        body: JSON.stringify(newPost),
//        headers: {"Content-Type": "application/json; charset=UTF-8"}       
//        }
//        fetch('http://localhost:3000/posts', options)
//           .then(r => r.json())
//           .then(appendPost)
//           .then(() => e.target.reset())
//           .catch(console.warn)
// }

async function getAll() {
    try {
        const response = await fetch('http://localhost:3000/posts');
        const data = await response.json();
        const postSection = document.getElementById('all-posts');
        for (let i = 0; i < data.length; i++) {
            let newDiv = docuemnt.createElement('div')
            let postTitle = document.createElement('h4');
            let postPseudonym = document.createElement('h6');
            let postBody = document.createElement('p');

            newDiv.id = `post${i}`;
            postTitle.textContent = data[i].title;
            postPseudonym.textContent = data[i].pseudonym;
            postBody.textContent = data[i].body;

            newDiv.append(postTitle)
            newDiv.append(postPseudonym)
            newDiv.append(postBody)

            postSection.append(newDiv)
            console.log("post added")
        }
        return data;
    } catch (err) {
        console.warn(err);
    };
};

async function getPost(postId) {
    try {
        const response = await fetch(`http://localhost:3000/posts/${postId}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.warn(err);
    };
};

async function createPost(e) {
    e.preventDefault();
    try {
        const newPost = {
            title: e.target[0].value,
            pseudonym: e.target[1].value,
            body: e.target[2].value,
        };

        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPost)
        };

        const response = await fetch('http://localhost:3000/posts', options);
        const data = await response.json();
        console.log(data)
    } catch (err) {
        console.warn(err);
    };
};

// function appendPosts(data) {
//     data.posts.forEach(appendPost);
// };

// function appendPost(postData) {
//     const newDiv = document.createElement('div')
//     const newTitle = document.createElement('h2');
//     const newName = document.createElement('h4');
//     const newBody = document.createElement('p')
//     newTitle.textContent = postData.title
//     newName.textContent = postData.pseudonym
//     newBody.textContent = postData.body
//     newDiv.append(newTitle)
//     newDiv.append(newName)
//     newDiv.append(newBody)
//     posts.append(newDiv)
// };
