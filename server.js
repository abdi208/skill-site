const express = require('express');
const ejsLayouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', function(req, res) {
    res.render('index')

});
app.get('/contacts', function(req, res) {
    res.render('contacts', {contacts: [
        {name: 'Name:Abdi'},
        {phone: 'Phone: 123-456-7890'},
        {email: 'Email: abdi@123.com'}
    ]})

});
app.get('/skills', function(req, res) {
    res.render('skills', skills = ["Punctual","Hard-Working","Detail-Oriented", "Resourceful","Problem Solver"])

});



app.listen(3000, function() {
    console.log("Port is running");
});