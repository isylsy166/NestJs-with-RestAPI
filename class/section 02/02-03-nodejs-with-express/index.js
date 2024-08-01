// express를 따로 설치해줘야 한다 
// yarn init - 엔터 하면 pakage.json이 생긴다
// yarn add express -> node_modules 생김

const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Home Page!</h1>');
});

app.get('/post', (req, res) => {
    res.send('<h1>Post Page!</h1>');
});

app.get('/user', (req, res) => {
    res.send('<h1>User Page!</h1>');
});

app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found Page!</h1>');
})

// app.post();
// app.delete();
// app.put();

app.listen(3000, () => {
    console.log('server running on http://localhost:3000')
})