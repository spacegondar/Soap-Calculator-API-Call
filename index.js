// Fonksiyon ve Framework importlanması
const express = require("express");
const { requestCalculator, xmlToJson } = require("./helper");
const app = express();
// const path = require('path') SOnrasında middleware kullanımı için


// Middleware kullanımı için dosya isminin tanıtılması
app.use(express.static('public'));


// Url üzerinden işlem parametrelerinin ayarlanması

app.get('/', (req, res) => {
    res.status(200).send('INDEX SAYFASI')
});

app.get("/add", (req, res) => {
    requestCalculator("Add", req.query.intA, req.query.intB).then((response) => {
        res.status(200).send(xmlToJson(response, "Add"))
    });
});

app.get("/divide", (req, res) => {
    requestCalculator("Divide", req.query.intA, req.query.intB).then((response) => {
        res.status(200).send(xmlToJson(response, "Divide"))
    });
});

app.get("/multiply", (req, res) => {
    requestCalculator("Multiply", req.query.intA, req.query.intB).then((response) => {
        res.status(200).send(xmlToJson(response, "Multiply"))
    });
});

app.get("/subtract", (req, res) => {
    requestCalculator("Subtract", req.query.intA, req.query.intB).then((response) => {
        res.status(200).send(xmlToJson(response, "Subtract"))
    });
});

app.get('*', (req, res) => {
    res.status(404).send('404 SAYFA BULUNAMADI')
})

// Middleware için Static dosyaların linklenmesi



// })


// Port seçimi ve konsol bildirimi
const port = 3000;

app.listen(port, () => {
    console.log(`Sunucu port ${port} da çalışmaya başladı...`)
})




