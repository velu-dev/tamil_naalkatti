const express = require("express");
const bodyParser = require("body-parser");

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.get("/get-calendar", (req, res) => {
    //கிழமை தமிழாக்கம் 
    var kilamai = ["ஞாயிறு", "திங்கள்", "செவ்வாய்", "அறிவன்", "வியாழன்", "வெள்ளி", "காரி"];

    //மாதம் தமிழாக்கம் 
    var maatham = ["சுறவம்", "கும்பம்", "மீனம்", "மேழம்", "விடை", "ஆடவை", "கடகம்", "மடங்கள்", "கன்னி", "துலை", "நளி", "சிலை"];

    var d = new Date();
    var nday = d.getDay();
    var nmonth = d.getMonth();
    var ndate = d.getDate();
    var nyear = d.getFullYear() + 31;
    var nhour = d.getHours(), nmin = d.getMinutes(), nsec = d.getSeconds();

    //பொழுது வகைப்பாடு 
    if (nhour === 0) { ap = " வைகறை"; nhour = 0; }
    else if (nhour < 4) { ap = "வைகறை"; }
    else if (nhour < 8) { ap = "காலை"; }
    else if (nhour < 12) { ap = "நன்பகல்"; }
    else if (nhour < 16) { ap = "எற்பாடு"; }
    else if (nhour < 20) { ap = "மாலை"; }
    else if (nhour < 24) { ap = "யாமம்"; }

    //நொடிகள் சீர்படுத்துதல்          
    if (nmin <= 9) nmin = "0" + nmin;
    if (nsec <= 9) nsec = "0" + nsec;

    //தமிழ் மாதத்திற்க்கான நாள் மற்றும் மாதம்  சீர்படுத்துதல்       
    //மாதங்கள் எண்கள் 00-சுறவம் 
    if (nmonth == '00' && ndate <= 14) { nmonth = nmonth - 1; ndate = ndate + 15; }
    else if (nmonth == '00' && ndate >= 15) { ndate = ndate - 13; }
    //மாதங்கள் எண்கள் 01-கும்பம் 
    if (nmonth == 01 && ndate <= 13) { nmonth = nmonth - 1; ndate = ndate + 14; }
    else if (nmonth == 01 && ndate >= 14) { ndate = ndate - 16; }
    //மாதங்கள் எண்கள் 02-மீனம் 
    if (nmonth == 02 && ndate <= 16) { nmonth = nmonth - 1; ndate = ndate + 17; }
    else if (nmonth == 02 && ndate >= 15) { ndate = ndate - 14; }
    //மாதங்கள் எண்கள் 03-மேழம்
    if (nmonth == 03 && ndate <= 13) { nmonth = nmonth - 1; ndate = ndate + 18; }
    else if (nmonth == 03 && ndate >= 14) { ndate = ndate - 13; }
    //மாதங்கள் எண்கள் 04-விடை
    if (nmonth == 04 && ndate <= 14) { nmonth = nmonth - 1; ndate = ndate + 17; }
    else if (nmonth == 04 && ndate >= 15) { ndate = ndate - 14; }
    //மாதங்கள் எண்கள் 05-ஆடவை
    if (nmonth == 05 && ndate <= 14) { nmonth = nmonth - 1; ndate = ndate + 17; }
    else if (nmonth == 05 && ndate >= 15) { ndate = ndate - 14; }
    //மாதங்கள் எண்கள் 06-கடகம்
    if (nmonth == 06 && ndate <= 16) { nmonth = nmonth - 1; ndate = ndate + 16; }
    else if (nmonth == 06 && ndate >= 17) { ndate = ndate - 16; }
    //மாதங்கள் எண்கள் 07-மடங்கள்
    if (nmonth == 07 && ndate <= 16) { nmonth = nmonth - 1; ndate = ndate + 15; }
    else if (nmonth == 07 && ndate >= 17) { ndate = ndate - 16; }
    //மாதங்கள் எண்கள் 08-கன்னி 
    if (nmonth == 08 && ndate <= 16) { nmonth = nmonth - 1; ndate = ndate + 17; }
    else if (nmonth == 08 && ndate >= 17) { ndate = ndate - 16; }
    //மாதங்கள் எண்கள் 09-துலை
    if (nmonth == 09 && ndate <= 17) { nmonth = nmonth - 1; ndate = ndate + 18; }
    else if (nmonth == 09 && ndate >= 18) { ndate = ndate - 17; }
    //மாதங்கள் எண்கள் 10-நளி 
    if (nmonth == 10 && ndate <= 17) { nmonth = nmonth - 1; ndate = ndate + 14; }
    else if (nmonth == 10 && ndate >= 18) { ndate = ndate - 17; }
    //மாதங்கள் எண்கள் 11-சிலை 
    if (nmonth == 11 && ndate <= 16) { nmonth = nmonth - 1; ndate = ndate + 14; }
    else if (nmonth == 11 && ndate >= 17) { ndate = ndate - 16; }

    let data = {};
    //நாள்க்காட்டியை தொதமிழ்ப்படுத்தித் தொகுப்பது 
    data = {
        naazhi: "" + nhour + ":" + nmin + ":" + nsec + "",
        pozhuthu: "" + kilamai[nday] + "," + ap + "",
        thingal: "" + maatham[nmonth] + "",
        naal: "" + ndate + "",
        varudam: "" + nyear + ""
    }
    res.json({ status: true, data: data })
})
app.get("/tamil-ealuthukkal", (req, res) => {
    tamil_uyir_ealuthukkal = ["அ", "ஆ", "இ", "ஈ", "உ", "ஊ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "ஔ"];
    tamil_mei_ealuthukkal = ["க்", "ங்", "ச்", "ஞ்", "ட்", "ண்", "த்", "ந்", "ப்", "ம்", "ய்", "ர்", "ல்", "வ்", "ழ்", "ள்", "ற்", "ன்"];
    ayudha_ealuthu = ["ஃ"];
    eangal = ["க", "௨", "௩", "௪", "௫", "௬", "௭", "௮", "௯"];
    let data = {};
    data = { tamil_uyir_ealuthukkal: tamil_uyir_ealuthukkal, tamil_mei_ealuthukkal: tamil_mei_ealuthukkal, ayudha_ealuthu: ayudha_ealuthu, eangal: eangal };
    res.json({ status: true, data: data })
})
// define a simple route
app.get("/", (req, res) => {
    res.json({
        message:
            "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."
    });
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});