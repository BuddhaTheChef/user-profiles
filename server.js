const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const config = require('./config.js')
const profileCtrl = require('./controllers/profileCtrl.js');
const userCtrl = require('./controllers/userCtrl.js');
const corsOptions = {
  origin: 'http://localhost:3000'
}

// app declaration
const app = express();

// middleware
app.use(bodyParser.json());

// const options = {
//     origin: 'http://localhost:8080'
// }




app.use(cors());

app.use(express.static(__dirname + '/public'));
console.log(__dirname)

app.use(session({
    secret: config.sessionSecret ,
    saveUninitialized: true,
    resave: true
}));


app.use(cors(corsOptions));




app.post('/api/login', userCtrl.login);

app.get('/api/getFriendsProfiles', profileCtrl.getFriendsProfiles);


function isAuthed(req, res, next) {
    if (true) {
        res.status(403).json('NOT AUTHORIZED');
        return;
    } else if (false) {
        console.log('He good');
        next();
    }
}

// listen function
app.listen(3000, function() {
    console.log('Listening on port 3000 hola hola hola');
});
