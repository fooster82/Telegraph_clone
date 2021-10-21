const db = connect("mongodb://localhost:27017/telegraph");

db.posts.drop();

db.posts.insertMany([
    { title: "Church", pseudonym: "Sandra", body: "I went to Church today, it was nice to see everyone." },
    { title: "Arsenal", pseudonym: "Footyfan99", body: "Saw Arsenal play last night and we were terrible again. How Arteta is still in the job is beyond me..." },
    { title: "Dog Walk", pseudonym: "Jess", body: "I took the dog out on a lovely walk today in the sunshine and saw many people out doing the same. It was really nice catching up with people I haven't seen in a long while!" },
    { title: "Good Day", body: "Today was a good day!" },
    { title: "Story Idea", body: "New short story idea: A man wakes up one morning to find his dog walking on two legs and his cat making breakfast for him, we follow him as the day gets more and more weird..." }
]);