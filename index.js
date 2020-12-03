const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./routes/estudiantes');
 
const app = express();            
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET, POST, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

routes(app)

process.env.PORT=process.env.PORT || 3000


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})