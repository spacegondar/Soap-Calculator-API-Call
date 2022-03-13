// Framework importlanması
const axios = require("axios");

// Postman code snipped kısmından alınan Api callun parametreler ile fonksiyona tanımlanması
const requestCalculator = async (op, intA, intB) => {
    var data = '<?xml version="1.0" encoding="utf-8"?>\n<soap12:Envelope xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">\n  <soap12:Body>\n    <' + op + ' xmlns="http://tempuri.org/">\n      <intA>' + intA + '</intA>\n      <intB>' + intB + '</intB>\n    </' + op + '>\n  </soap12:Body>\n</soap12:Envelope>\n';

    var config = {
        method: 'post',
        url: 'http://www.dneonline.com/calculator.asmx?wsdl/calculator.asmx',
        headers: {
            'Content-Type': 'text/xml; charset=utf-8',
            'SOAPAction': 'http://tempuri.org/' + op
        },
        data: data
    };

    // axios(config)
    //     .then(function (response) {
    //         res.send(JSON.stringify(response.data));
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    try {
        const response = await axios(config);
        return response.data
    } catch (error) {
        console.log("error");
    }
}


// Xml şeklinde dönen cevaptan sayının çekilmesi
const xmlToJson = (xnl, op) => {
    return xnl.split('<' + op + 'Result>').pop().split('</' + op + 'Result>')[0];
}

// Yazılan fonksiyonların diğer dosyalarda kullanılması için export
module.exports = {
    requestCalculator,
    xmlToJson,
};
