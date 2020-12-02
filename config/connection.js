const mysql = require('mysql2');

process.env.NODE_ENV=process.env.NODE_ENV || 'dev';

let urlDB;

if(process.env.NODE_ENV==='dev'){
    urlDB={
        host:'localhost',
        user:'root',
        password:'',
        database:'db_adsi630_test'
    }
}else{
    urlDB={
        host:'85.10.205.173',
        user:'adsi630_miguel',
        password:'12345678',
        database:'db_adsi630'
    }
}

const connection=mysql.createConnection(urlDB);

module.exports=connection;