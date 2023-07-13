const app = require('./application');

app.listen(9000, () => {
    console.info("Server Started on port: " + 9000);
});

require('./controllers/heroRoutes')(app)