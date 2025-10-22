const express = require('express');
let mysql = require('mysql2');
const port =  3001;
const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '123',
    database: 'mahasiswa'
});

db.connect((err) => {
    if (err) {
        console.log('Error connecting to Mysql' + err.stack);
        return;
    }
    console.log('mysql connected to Mysql successfully');
})




app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
