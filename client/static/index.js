// const header = document.getElementById('header')
// const posts = document.getElementById('all-posts')
const form = document.getElementById('story-form')

// const createLink = document.getElementById('createLink')
// const postLink = document.getElementById('postLink')

form.addEventListener('submit', addPost);

// createLink.addEventListener('click', e => {
//     e.preventDefault();
//     header.style.display = "none";
//     form.style.display = "flex";
//     posts.style.display = "none";
// })

// postLink.addEventListener('click', e => {
//     e.preventDefault();
//     header.style.display = "block";
//     form.style.display = "none";
//     posts.style.display = "block";
// })


// const buttonInput = document.getElementById('button-input')

// form.addEventListener('submit', e => {
//    e.preventDefault()
//    createPost(e)
// })


// function getAll() {

// }

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

function addPost(e) {
    e.preventDefault();
    console.log("button clicked")
    // const title = e.target.titlebox.value
    // const name = e.target.authorbox.value
    // const body = e.target.story.value
    // const img = e.target.chosefile.value
    const content = {
        title: e.target[0].value,
        name: e.target[1].value,
        body: e.target[2].value,

    }
    const methods = {
        method: 'POST',
        body: JSON.stringify(content),
        headers: { "Content-Type": "application/json" }
    };


    fetch('http://localhost:3000/posts', methods)
        .then(res => res.json())
        // .then(appendSinglePost)
        .then(() => e.target.reset())
        .then(() => location.reload())
        .catch(console.warn)

    console.log(content)
}


// function appendPosts(data){
//     data.posts.forEach(appendPost);
// };

// function appendPost(postData){
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
