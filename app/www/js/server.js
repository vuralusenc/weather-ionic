
var cheerio = require("cheerio");
var request = require("request");
var express = require("express");
var cors    = require("cors");
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser());
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.use(cors());
app.get('/kgm',function(req,res){
//var sehir_kodu="ceyhan-2343888";
var url = 'http://www.kgm.gov.tr/Sayfalar/KGM/SiteTr/YolDanisma/GunlukYolDurumuBulteni.aspx';

request(url,function(error,response,body){
   if(!error && response.statusCode){
   var $ = cheerio.load(body);

var aciklamalar = [];
$('.tdAciklamaYolBulteni').each(function(i, elem) {
 aciklamalar[i] = $(this).text();
});
   res.json({ _ : aciklamalar });

   }
  // console.log(aciklamalar[1]);
});
});

//




app.post('/havadurumu',function(req,res,next){
request('http://www.mgm.gov.tr/mobile/tahmin-il-ve-ilceler.aspx?m='+req.body.il,function(err,result,body){
if(!err && result.statusCode){
   var $ = cheerio.load(body);

   var bilgiler = [];

   $('tbody tr').each(function(i, elem) {
             var gunBilgi = {};

     $(this).children('th').each(function(i, elem) {
     	gunBilgi.gun = $(this).text();
     });

     $(this).children('td').each(function(i, elem) {
     	switch(i){
     	case 0:
     	gunBilgi.enDusukSicaklik = $(this).text();
     	break;
     	case 1:
     	gunBilgi.enYuksekSicaklik = $(this).text();
     	break;
     	case 2:
     	gunBilgi.hadise = $(this).find('img').attr('title');
     	break;
     	case 3:
     	gunBilgi.enDusukNem = $(this).text();
     	break;
     	case 4:
     	gunBilgi.enYuksekNem = $(this).text();
     	break;
     	case 5:
      gunBilgi.ruzgarYon = $(this).find('img').attr('title');
     	break;
     	case 6:
      gunBilgi.ruzgarHiz = $(this).text();
     	break;
     	}
     });

 bilgiler.push(gunBilgi);
});

   res.json({ _ : bilgiler });
}
});
});

/*yahoo botu*/
app.get('/yahoo',function(req,res){
var yahoo_url = 'https://weather.yahoo.com/turkey/';

request(yahoo_url,function(error,response,body){
    if(!error && response.statusCode){
      var $ = cheerio.load(body);

      var data = [];

    $('#page1').each(function(i,elem){
        data[i] = $(this).text();

        });
        res.send(data);
        }
        console.log(data[0]);

      });

    });
app.listen('1313');
console.log('calisiyor');
