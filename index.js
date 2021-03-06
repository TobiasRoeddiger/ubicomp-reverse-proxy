var express = require("express");
var app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
 console.log("Server running...");
});

const https = require('https')




app.get("/whova", (req, res, next) => {
    https.request('https://whova.com/xems/whova_backend/agenda_webpage/get_data/?view=&event_id=ubico_202109', function(response) {
        response.pipe(res);
    }).on('error', function(e) {
        res.sendStatus(500);
    }).end();
});

app.get('/', (req, res, next) => {
    res.sendFile('static/gather-town.html' , { root : __dirname});
});

app.get("/schedule", (req, res, next) => {
    res.sendFile('static/schedule.html' , { root : __dirname});
});

app.get("/debug", (req, res, next) => {
    res.sendFile('static/control.html' , { root : __dirname});
});