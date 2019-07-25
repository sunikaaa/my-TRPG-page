
var Making = {
    name:'',
    stats:[0,0,0,0,0,0,0,0],
    UpDown:[0,0,0,0,0,0,0,0]
  };

var i;
var j;
var disenumber = function (dise, times, sum = 1) {
  var dis = [];
  for (i = 0; i < times; ++i) {
    dis[i] = 0
    for (j = 0; j < sum; j++) {
      dis[i] = Math.floor(Math.random() * dise + 1) + dis[i];
    }
  }
  return dis;
}

Vue.component('main_stats',{
  data:function(){
    return{
      Making:Making
    }
  },
    template:`<div><div class="pure-g"><div class="pure-u-1-6">ステータス</div><div class="pure-u-1-6">値</div><div class="pure-u-1-6">増減</div><div class="pure-u-1-6">合計</div></div>
    <div class="pure-g"><div class="pure-u-1-6">STR</div><div class="pure-u-1-6">{{Making.stats[0]}}</div><div class="pure-u-1-6">{{Making.UpDown[0]}}</div><div class="pure-u-1-6">合計</div></div>
    <div class="pure-g"><div class="pure-u-1-6">CON</div><div class="pure-u-1-6">{{Making.stats[1]}}</div><div class="pure-u-1-6">{{Making.UpDown[1]}}</div><div class="pure-u-1-6">合計</div></div>
    <div class="pure-g"><div class="pure-u-1-6">POW</div><div class="pure-u-1-6">{{Making.stats[2]}}</div><div class="pure-u-1-6">{{Making.UpDown[2]}}</div><div class="pure-u-1-6">合計</div></div>
    <div class="pure-g"><div class="pure-u-1-6">DEX</div><div class="pure-u-1-6">{{Making.stats[3]}}</div><div class="pure-u-1-6">{{Making.UpDown[3]}}</div><div class="pure-u-1-6">合計</div></div>
    <div class="pure-g"><div class="pure-u-1-6">APP</div><div class="pure-u-1-6">{{Making.stats[4]}}</div><div class="pure-u-1-6">{{Making.UpDown[4]}}</div><div class="pure-u-1-6">合計</div></div>
    <div class="pure-g"><div class="pure-u-1-6">SIZ</div><div class="pure-u-1-6">{{Making.stats[5]}}</div><div class="pure-u-1-6">{{Making.UpDown[5]}}</div><div class="pure-u-1-6">合計</div></div>
    <div class="pure-g"><div class="pure-u-1-6">INT</div><div class="pure-u-1-6">{{Making.stats[6]}}</div><div class="pure-u-1-6">{{Making.UpDown[6]}}</div><div class="pure-u-1-6">合計</div></div>
    <div class="pure-g"><div class="pure-u-1-6">EDU</div><div class="pure-u-1-6">{{Making.stats[7]}}</div><div class="pure-u-1-6">{{Making.UpDown[7]}}</div><div class="pure-u-1-6">合計</div></div>
    </div>`
})

new Vue({
    el:'#app',
    data:{
Making:Making,
catraces:catraces,
    },
    methods: {
        diserool:function(){
          this.diserool.number =  disenumber(3,1)
          this.diserool.number1d6 = disenumber(6,7)
        }
    },
})