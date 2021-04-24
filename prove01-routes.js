const requestHandler = (req, res) => {
    const url = req.url;
    //const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Greetings</title></head>');
        res.write(
            '<body><h1>Greetings User</h1></body>'
        );
        res.write('<form action="/create-user" method="POST"><input type="text" name="new-user"><button type="submit">Send</button></form>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title><head>');
        res.write('<body><ul><li>Dummy 1</li><li>Dummy 2</li><li>Dummy 3</li></ul></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
          console.log(chunk);
          body.push(chunk);
        });
        req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          console.log(parsedBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
     
};

exports.handler = requestHandler;
exports.someText = 'Server Start';