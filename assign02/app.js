const express = require ('express');

const app = express();

app.use('/users',(req, res, next) =>{
    console.log('this is users');
    res.send('<h1>Hello from Users!</h1>');
});

app.use('/', (req, res, next)=>{
    console.log('this is slash');
    res.send('<h1>Hello from Slash!</h1>');
});



app.listen(3000);