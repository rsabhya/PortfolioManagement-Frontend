// Specify the NodeJS packages we need.
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

// Configure app to use bodyParser() and JSON, so we can easily get data from the HTTP body.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure CORS (i.e. cross-origin requests)
var originsWhitelist = ['http://localhost:4200'];
var corsOptions = {
    origin: function(origin, callback){
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
    },
    credentials: true
};
app.use(cors(corsOptions));


// Get an instance of the express Router.
var router = express.Router();

// Our application data.
function Film(id, title, blurb, price, score, genres) {
    this.id = id;
    this.title = title;
    this.blurb = blurb;
    this.price = price;
    this.score = score;
    this.genres = genres;
    return this;
}

var films = [
    new Film(0, 'Spectre', 'Bond is back in a frantic battle against his classic foe and his white cat', 8.99, 4.9, ['action', 'spy']),
    new Film(1, 'The Hateful Eight', 'Classic Quentin Tarantino sensory indulgence in the wild west', 7.59, 3.8, ['western', 'action']),
    new Film(2, 'Paddington', 'Furry fun and frosty fridge adventures for all the family', 5.50, 4.2, ['children', 'humour']),
    new Film(3, 'Jaws', 'Blood-curdling shark fest that spooked a generation', 3.55, 4.1, ['drama', 'shark']),
    new Film(4, 'Star Wars', 'A long time ago in a galaxy far far away, etc etc etc ...', 8.99, 4.9, ['action', 'spy']),
    new Film(5, 'The Hunger Games', 'Post apocalyptic action adventure, reality TV with a macabre twist', 9.99, 4.5, ['action', 'teen']),
    new Film(6, 'The Martian', 'One man\'s determination to survive on the red planet', 7.99, 3.9, ['drama', 'space']),
    new Film(7, 'Minions', 'Three unlikely minion heroes out to save Minionkind', 6.25, 3.1, ['children', 'animation']),
    new Film(8, 'Love Actually', 'Heart-warming yarn of love found and lost at Christmastime', 5.99, 5.0, ['romcom', 'chickflick']),
];
var nextid = 9;

// HTTP handler methods.
router.get('/films', function (req, res) {
    res.status(200).json(films);
    return;
})

router.get('/films/:id', function (req, res) {
    var id = req.params.id;
    for (var i = 0; i < films.length; i++) {
        if (films[i].id == id) {
            res.status(200).json(films[i]);
            return;
        }
    }
    res.status(404).send('Invalid id');
    return;
})

router.post('/films', function (req, res) {
    var film = req.body;
    film.if = nextid++;
    films.push(film);
    res.status(201).json(film);
})

router.put('/films/:id', function (req, res) {
    var id = req.params.id;
    var film = req.body;
    for (var i = 0; i < films.length; i++) {
        if (films[i].if == id) {
            films[i] = film;
            res.status(200).send('Successfully updated');
            return;
        }
    }
    res.status(410).send('Film not found');
    return;
})

router.delete('/films/:id', function (req, res) {
    var id = req.params.id;
    for (var i = 0; i < films.length; i++) {
        if (films[i].if == id) {
            films.splice(i, 1);
            res.status(410).send('Successfully deleted');
            return;
        }
    }
    res.status(404).send('Invalid id');
    return;
})

// For requests that have the /api prefix, use the router to route the request to the appropriate HTTP handler method above.
app.use('/api', router);

// Start listening on port 8080.
app.listen(8080);
console.log("Films Service listening at http://localhost:8080");
