//கிழமை தமிழாக்கம் 
         var kilamai=["ஞாயிறு","திங்கள்","செவ்வாய்","அறிவன்","வியாழன்","வெள்ளி","காரி"];
         
//மாதம் தமிழாக்கம் 
         var maatham=["சுறவம்","கும்பம்","மீனம்","மேழம்","விடை","ஆடவை","கடகம்","மடங்கள்","கன்னி","துலை","நளி","சிலை"];
         
         function VinVeli(){
         var d=new Date();
         var nday=d.getDay();
         var nmonth=d.getMonth();
         var ndate=d.getDate();
         var nyear=d.getFullYear() + 31;
         var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds();
         
//பொழுது வகைப்பாடு 
         if(nhour===0){ap=" வைகறை";nhour=0;}
         else if(nhour<4){ap="வைகறை";  }
         else if(nhour<8){ap="காலை";}
         else if(nhour<12){ap="நன்பகல்";}
         else if(nhour<16){ap="எற்பாடு";}
         else if(nhour<20){ap="மாலை"; }
         else if(nhour<24){ap="யாமம்";}
         
//நொடிகள் சீர்படுத்துதல்          
         if(nmin<=9) nmin="0"+nmin;
         if(nsec<=9) nsec="0"+nsec;
         
//தமிழ் மாதத்திற்க்கான நாள் மற்றும் மாதம்  சீர்படுத்துதல்       
//மாதங்கள் எண்கள் 00-சுறவம் 
         if(nmonth=='00' && ndate<=14){ nmonth= nmonth -1; ndate= ndate+15;}
         else if(nmonth=='00' && ndate>=15){ ndate= ndate -13;}
//மாதங்கள் எண்கள் 01-கும்பம் 
         if(nmonth==01 && ndate<=13){ nmonth= nmonth -1; ndate= ndate+14;}
         else if(nmonth==01 && ndate>=14){ ndate= ndate -16;}
//மாதங்கள் எண்கள் 02-மீனம் 
         if(nmonth==02 && ndate<=16){ nmonth= nmonth -1; ndate= ndate+17;}
         else if(nmonth==02 && ndate>=15){ ndate= ndate -14;}
//மாதங்கள் எண்கள் 03-மேழம்
         if(nmonth==03 && ndate<=13){ nmonth= nmonth -1; ndate= ndate+18;}
         else if(nmonth==03 && ndate>=14){ ndate= ndate -13;}
//மாதங்கள் எண்கள் 04-விடை
         if(nmonth==04 && ndate<=14){ nmonth= nmonth -1; ndate= ndate+17;}
         else if(nmonth==04 && ndate>=15){ ndate= ndate -14;}
//மாதங்கள் எண்கள் 05-ஆடவை
         if(nmonth==05 && ndate<=14){ nmonth= nmonth -1; ndate= ndate+17;}
         else if(nmonth==05 && ndate>=15){ ndate= ndate -14;}
//மாதங்கள் எண்கள் 06-கடகம்
         if(nmonth==06 && ndate<=16){ nmonth= nmonth -1; ndate= ndate+16;}
         else if(nmonth==06 && ndate>=17){ ndate= ndate -16;}
//மாதங்கள் எண்கள் 07-மடங்கள்
         if(nmonth==07 && ndate<=16){ nmonth= nmonth -1; ndate= ndate+15;}
         else if(nmonth==07 && ndate>=17){ ndate= ndate -16;}
//மாதங்கள் எண்கள் 08-கன்னி 
         if(nmonth==08 && ndate<=16){ nmonth= nmonth -1; ndate= ndate+17;}
         else if(nmonth==08 && ndate>=17){ ndate= ndate -16;}
//மாதங்கள் எண்கள் 09-துலை
         if(nmonth==09 && ndate<=17){ nmonth= nmonth -1; ndate= ndate+18;}
         else if(nmonth==09 && ndate>=18){ ndate= ndate -17;}
//மாதங்கள் எண்கள் 10-நளி 
         if(nmonth==10 && ndate<=17){ nmonth= nmonth -1; ndate= ndate+14;}
         else if(nmonth==10 && ndate>=18){ ndate= ndate -17;}
//மாதங்கள் எண்கள் 11-சிலை 
         if(nmonth==11 && ndate<=16){ nmonth= nmonth -1; ndate= ndate+14;}
         else if(nmonth==11 && ndate>=17){ ndate= ndate -16;}

            
//நாள்க்காட்டியை தொதமிழ்ப்படுத்தித் தொகுப்பது 
         var naazhi=""+nhour+":"+nmin+":"+nsec+"";
         var pozhuthu=""+kilamai[nday]+","+ap+"";
         var thingal=""+maatham[nmonth]+"";
         var naal=""+ndate+"";
         var varudam=""+nyear+"";
         
         document.getElementById('kaalan').innerHTML=naazhi;
         document.getElementById('pozhuthu').innerHTML=pozhuthu;
         document.getElementById('thingal').innerHTML=thingal;
         document.getElementById('naal').innerHTML=naal;
         document.getElementById('varudam').innerHTML=varudam;
         }
         VinVeli(); setInterval(VinVeli,1000);