// var navlinks = document.getElementById('navLinks');

// var hamburgerMenu = document.querySelector("fa-bars");
// var timesMenu = document.querySelector("fa-times")

// function showMenu() {
//     navlinks.style.display = 'block'
// }

// function hideMenu () {
//     navlinks.style.display = "none"
// }


// hamburgerMenu.addEventListener("click", showMenu)
// timesMenu.addEventListener("click", hideMenu)


var bodyParser = require('body-parser')
var express = require('express');


var app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');


// app.get('/', function(res, req) {
//     res.sendFile(__dirname + "/index.html")
// })


app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html")
})


// app.get('/success', function(req, res) {
//     res.render('success')
// })


app.post("/", function(req, res) {

    // var nameOfUsr = req.body.name;
    // var emailOfUsr = req.body.email;

    res.render('success', {person: req.body.name, email: req.body.email})
})













app.listen(3000, function() {
    console.log('server started at 3000.... .')
})






















