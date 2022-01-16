

const requestHandler = (req, res) =>{
    const url = req.url;
    const method = req.method;
    if (url === '/'){
        res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assign 01</title></head>');
    res.write('<body><h1>I dont like building HTML like this!!!</h1></body>');
    res.write('<body><form action ="/create-user"method="POST">');
    res.write('<label for="userName">User Name:</label><br>');
    res.write('<input type="text" name="userName"><button type="submit">Add User</button></body>');
    res.write('</html>');
    res.end();
    }
    if (url === '/create-user' && method === 'POST'){
        console.log("this worked");
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
            res.statusCode = 302;
            res.setHeader('Location', '/users');
            return res.end();
    
        });
    
    }



    if (url === '/users'){
        res.write('<html>');
    res.write('<head><title>Assign 01</title></head>');
    res.write('<body><ul><li>User1 </li>');
    res.write('<li>User 2</li>');
    res.write('<li>User 3</li></body>');
    res.write('</html>');
    res.end();

    }
}


exports.handler = requestHandler;