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

// Endpoint untuk ambil semua data dari tabel mahasiswa
app.get('/api/mahasiswa', (req, res) => {
    const sql = 'SELECT * FROM biodata';
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Database Error" });
        }
        res.json(results);
    });
});



app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
