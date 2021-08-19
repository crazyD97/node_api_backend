var mysql = require('mysql');
let express = require('express');
let app = express();
let port = 8080;

var con = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Y2u=L(CYdp;w'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get('/', (req, res) => {
    res.send('main route');
});

app.get('/products', (req, res) => {
    res.send('products api route');
});

app.get('/users', (req, res) => {
    res.send('users api route');
});

app.listen(port, ()=> {
	console.log(`servinf http://localhost:8080 with nginx`);
});
