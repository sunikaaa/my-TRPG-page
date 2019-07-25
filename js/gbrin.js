(function(){
  
 
var race;
 var i = 0;
 var dis = [0, 0, 0, 0, 0, 0, 0];
 var raceval = [1, 0, 0, 1, 0, 2, 0, 3];
 var statsval = [0, 0, 0, 0, 0, 0, 0];
 var bonusval = [0, 0, 0, 0, 0, 0, 0];
 var powb = $(".powb");
 var conb = $(".conb");
 var tecb = $(".tecb");
 var intb = $(".intb");
 var livedrool = 0;
 var playerchara;
 var Playerchara;
 var race;
 var maindis = [0, 0, 0, 0, 0, 0, 0];
 for (i = 0; i < 8; ++i) {

   statsval[i] = bonusval[i] + raceval[i] + maindis[i];
 }

 function diserool() {
   statsbonus();
   mainstats();
   racecase();
   lived();
   hstrymeet();
   statssum();
   choicerool();
 }
 $(function () {

   $('.race').change(function () {

     statsbonus();
     racecase();
     statssum();

   });
   $('.bonus').change(function () {
     statsbonus();
     racecase();
     statssum();
   });
 });

 var lived = function () {
   disenumber(6, 2);
   console.log(livedis, dis);
   var livedis = dis.slice();
   livedrool = livedis[0] + livedis[1] - 2;
   if (livedrool < 10) {
     livedrool = "0" + livedrool;
   }
   var race = $(".race").val();
   console.log(livedrool, race);
   console.log(livedrool, race);
   switch (race) {
     case "人間":
       $(".lived select").val("0" + livedrool);
       break;
     case "ドワーフ":
       $(".lived select").val("1" + livedrool);
       break;
     case "エルフ":
       $(".lived select").val("2" + livedrool);
       break;
     case "リザードマン":
       $(".lived select").val("3" + livedrool);
       break;
     case "レーア":
       $(".lived select").val("4" + livedrool);
       break;
   };
 }
 var racecase = function () {
   var race = $(".race").val();
   switch (race) {
     case "人間":
       raceval = [1, 0, 0, 1, 0, 2, 0, 3];
       $(".lived select").val("0" + livedrool);

       break;
     case "ドワーフ":
       raceval = [2, 0, 2, -1, 1, 1, -1, 2];
       $(".lived select").val("1" + livedrool);
       break;
     case "エルフ":
       raceval = [-1, 1, 1, 1, 0, -1, 1, 4];
       $(".lived select").val("2" + livedrool);
       break;
     case "リザードマン":
       raceval = [2, 1, 0, 0, 1, 0, 0, 2];
       $(".lived select").val("3" + livedrool);
       break;
     case "レーア":
       raceval = [-1, 2, 1, 0, -1, 0, 2, 3];
       $(".lived select").val("4" + livedrool);
       break;
   };
   for (i = 0; i < 7; ++i) {
     statsval[i] = maindis[i] + raceval[i] + bonusval[i];
     $(`.stats${i}`).val(`${maindis[i]}+${raceval[i]}+${bonusval[i]}`);
   }
 }
 var mainstats = function () {
   disenumber(3, 7);
   maindis = dis.slice();
   for (i = 0; i < 7; ++i) {
     statsval[i] = maindis[i] + raceval[i] + bonusval[i];
     $(`.stats${i}`).val(`${maindis[i]}+${raceval[i]}+${bonusval[i]}`);
   }
 }

 var statsbonus = function () {
   var bonussw = $(".bonus").val();
   switch (bonussw) {
     case "con":
       bonusval = [1, 0, 0, 0, 0, 0, 0];
       break;
     case "pow":
       bonusval = [0, 1, 0, 0, 0, 0, 0];
       break;
     case "tec":
       bonusval = [0, 0, 1, 0, 0, 0, 0];
       break;
     case "int":
       bonusval = [0, 0, 0, 1, 0, 0, 0];
       break;

   };
   //console.log(bonusval);
 }




 var statssum = function () {
   for (i = 0; i < 3; ++i) {
     //    console.log(statsval[0], statsval[4+i]);
     $(`.con${i}`).text(statsval[0] + statsval[4 + i]);
     $(`.pow${i}`).text(statsval[1] + statsval[4 + i]);
     $(`.tec${i}`).text(statsval[2] + statsval[4 + i]);
     $(`.int${i}`).text(statsval[3] + statsval[4 + i]);
   }
 }

 var disenumber = function (dise, times) {
   for (i = 0; i < times; ++i) {
     dis[i] = Math.floor(Math.random() * dise + 1);

   }
 }

 var choicerool = function () {
   disenumber(6, 6);
   var choicedis = dis.slice();
   for (i = 0; i < 3; ++i) {
     $(`.choice${i}`).val(choicedis[2 * i] + choicedis[2 * i + 1]);
   }
   updatechoice();
 }

 var downbutton1 = function () {
   var k = $(".choice0").val();
   var s = $(".choice1").val();
   //  console.log(k,s);
   var i = k;
   $(".choice0").val(s);
   $(".choice1").val(i);
   updatechoice();
 }
 var downbutton2 = function () {
   var k = $(".choice1").val();
   var s = $(".choice2").val();
   console.log(k, s);
   var i = k;
   $(".choice1").val(s);
   $(".choice2").val(i);
   updatechoice();
 }
 var upbutton1 = function () {
   var k = $(".choice0").val();
   var s = $(".choice1").val();
   console.log(k, s);
   var i = k;
   $(".choice0").val(s);
   $(".choice1").val(i);
   updatechoice();
 }
 var upbutton2 = function () {
   var k = $(".choice1").val();
   var s = $(".choice2").val();
   console.log(k, s);
   var i = k;
   $(".choice1").val(s);
   $(".choice2").val(i);
   updatechoice();

 }

 var updatechoice = function () {
   var a = statsval[0];
   var b = statsval[1];
   var c = statsval[2];
   var d = $(".choice0").val() * 1;
   console.log(a, b, c, d);
   HP = a + b + c + d;
   $(".HP").text(`${HP}/${HP*2}`);
   var spd = $(".choice1").val() * 1 * raceval[7] * 1;

   $(".spd").text(spd);
   var MP = $(".choice2").val();
   if (MP < 7) {
     $(".MP").text("0");
   } else if (MP < 10) {
     $(".MP").text("1");
   } else if (MP < 12) {
     $(".MP").text("2");
   } else {
     $(".MP").text("3")
   };
 }

 var hstrymeet = function () {
   disenumber(6, 2);
   var histrydis = dis.slice();
   var histryval = histrydis[0] + histrydis[1];
   $(".histry select").val(histryval);
   disenumber(6, 2);
   var meetdis = dis.slice();
   var meetval = meetdis[0] + meetdis[1];
   $(".meet select").val(meetval);
 }

 var playerchara = function () {
   this.name = $(".playercharacter").text();
 }

 var serve = function () {
   var name1 = $(".playerchacter").from();
   console.log(name1);
 }

 var getstage = {
   0: "無し",
   1: "初歩",
   2: "習熟",
   3: "熟練",
   4: "達人"
 }

 var adventuredata = {
     {
       "id": 0,
       "name": "機先",
       "stage": getstage
     },
     {
       "id": 0,
       "name": "機先",
       "stage": getstage
     },
   },
 }
})();