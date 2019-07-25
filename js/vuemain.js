'use strict'
var i;
var j;
var disenumber = function (dise, times, sum) {
  var dis = [];
  for (i = 0; i < times; ++i) {
    dis[i] = 0
    for (j = 0; j < sum; j++) {
      dis[i] = Math.floor(Math.random() * dise + 1) + dis[i];
    }

  }

  return dis;
}
var sum = function (array1, array2) {
  return array1.map(function (value, index) {
    return value + this[index];
  }, array2)
}

var Making = {
  name: "",
  race: '',
  stats: [0, 0, 0, 0, 0, 0, 0],
  bonus: '',
  base: [0, 0, 0],
  lived: '',
  histry: '',
  meet: '',
  jobLevel: [0, 0, 0, 0, 0, 0, 0, 0],
  gnSkill: [],
  adSkill: [],
  money: 100,
  sumExp: 3000,
  sumGrow: 10,
  trueMagic: [],
  miracleMagic: [],
  dragonMagic: [],
  spiritMagic: [],
  Items: []
}
//var Items = []
//var Weapon = []
//var Armor = []
//Vue.component('myWeapon', {
//
//  data: function () {
//    return {
//      Weapon: Weapon,
//      nowWeapon: '',
//      money: '',
//      page: '',
//      isWeaponHidden: true,
//      Making: Making
//    }
//
//    //これはコンポーネントでやる
//    //    下のItemsはpropsで値を受け取る。
//    //    $emitで値をルートvueに渡す。
//    //    渡された値をローカルストレージに個別に保存する。
//
//  },
//  template: `
//  <div>
//<div class="pure-g ">`
//})
Vue.component('myitem', {
      props: {
        name: String,
        isItems: {
          type: Boolean,
          default: false
        },
        isWeapon: {
          type: Boolean,
          default: false,
        },

        isArmor: {
          type: Boolean,
          default: false,
        },
        makeData: Object
      },
      data: function () {
        return {
          Items: new Array(),
          nowMakingItem: new Array(),
          nowItem: "",
          money: '',
          page: '',
          times: 0,
          isItemHidden: true,
//          Making: Making
        }

      },
      template: `
<div>
          <div class="pure-g item-list">
          <div class="pure-u-1-3">アイテム</div>
            <div class="pure-u-1-3">金額(銀貨)</div>
            <div class="pure-u-1-3">ページ</div>
            </div>
          <div class="pure-g item-push">
          <div class="pure-u-1-3"><input v-model="nowItem" class="item-name" :placeholder="name"></div>
            <div class="pure-u-1-3"><input type="number" v-model.number="money"　placeholder="金額（銀貨）"></div>
            <div class="pure-u-1-3"><input type="number" v-model.number="page" placeholder="ルルブページ"></div>
        </div>
<p><button class="pure-button"　@click="listPush">リスト追加</button>
<button class="pure-button" @click="isItemHidden = false">リスト表示</button></p>
<div class="item_box get" :class="{hidden: isItemHidden}">
<div class="hide_navi pure-g">
  <div class="pure-u-1-3">所持金{{makeData.money}}銀貨</div> <div class="navi"><a class="pure-button" @click="isItemHidden = true">×</a></div>
</div>
<ul>
<li v-for= "(Item,index) in Items" :key="index" class="item-choice">{{Item.name}}　<span>{{Item.money}}銀貨　</span><span>{{Item.page}}ページ</span><span><input type="number" v-model.number="Item.times"></span><span><button @click="itemDelete(index)" class="pure-button">削除</button></span>
</li>
</ul>
合計{{sumItem}}
<button class="pure-button" @click="buyItem">購入</button><button class="pure-button" @click="pickItem">拾う</button></div>
<div>
<ul>
<li v-for="(Item,index) in haveItem " :key="index" class="item-having">
{{Item.name}}　{{Item.having}}<button class="pure-button" @click="useOne(Item.id)">使う</button>
</li>
</ul>
</div>
{{haveItem}}
{{Items}}
</div>`,
      methods: {
        useOne: function (id) {
          //ここでアイテムを減らす
          Making.Items.forEach((value, index) => {
              if (value[0] === id) {
                value[1]--
                if (value[1] === 0) {
                  Making.Items.splice(index,1)
                  this.haveItem[index].isObtain =false
                  console.log(Making.Items)
                }
              }
        })
      Making.Items.splice()
      console.log(Making.Items)
    },
    upDateItem: function () {
      Making.Items.forEach(value => {
        console.log(this.Items.length)
        for (i = 0; i < this.Items.length; ++i) {
          if (this.Items[i].id === value[0]) {

            this.Items[i].isObtain = true;
            console.log("get item!", this.Items[i])
          }
        }
      })
    },
    listPush: function () {
      if (!this.nowItem == "") {
        let Ilength
        Ilength = this.Items.length
        console.log(Ilength)
        let Item = new Object()
        Item.id = Ilength
        Item.name = this.nowItem
        Item.money = this.money
        Item.page = this.page
        Item.times = this.times
        Item.isObtain = false
        this.Items.push(Item)
        var box = this.Items.slice()
        console.log(box)
        localStorage.setItem("itemList", JSON.stringify(box))
        this.nowItem = ''
        this.money = ''
        this.page = ''
        this.times = ''
      } else {
        alert(`${this.name}は必須項目です`)
      }
    },
    itemDelete: function (index) {
      let detetArray = Making.Items.forEach((value, index2) => {
        console.log(this.Items[index].id)
        if (value[0] === this.Items[index].id) {
          console.log('obtain!')
          Making.Items.splice(index2, 1)
        }
      })
      this.Items.splice(index, 1);
      var box = this.Items.splice();
      console.log(index)
      localStorage.setItem("itemList", JSON.stringify(box))
    },
    pickItem: function () {
      this.getItem()
    },
    buyItem: function (index) {
      if (Making.money > this.sumItem) {
        Making.money = Making.money - this.sumItem
        console.log(Making.money)
        this.getItem()
      }
    },
    getItem: function () {
      var haveItems = this.Items.filter((value) => value.times > 0)
      haveItems.forEach(function (value, index, array) {
        var key = [value.id, value.times]
        value.isObtain = true
        //        this[value.id].isObtain = true
        this.splice(value.id, 1, this[value.id])
        console.log(this[value.id])
        console.log(key)
        console.log(Making.Items.length)
        if (Making.Items.length == 0) {
          Making.Items.push(key)
        } else {
          var flag = true
          for (i = 0; i < Making.Items.length; i++) {

            if (Making.Items[i][0] == value.id) {
              Making.Items[i][1] = Making.Items[i][1] + value.times
              Making.Items[i].splice(1, 1, Making.Items[i][1])
              console.log(key)
              console.log(Making.Items[i][1])
              flag = false
            }
          }
          if (flag) {
            Making.Items.push(key)
            console.log(key)
          }
        }
      }, this.Items);
    },
  },
  mounted: function () {

    let box = JSON.parse(localStorage.getItem("itemList")) || this.Items
    this.Items = box.slice()
    console.log(this.Items)
    this.upDateItem()
  },
  computed: {
    sumItem: function () {
      let sum = 0
      this.Items.map((value, index) => sum = sum + value.money * value.times)
      return sum
    },
    haveItem: function () {
      console.log("move")
      var haveMyItem = this.Items.filter(value => value.isObtain)
      haveMyItem.forEach(function (value) {
        for (var i = 0; i < Making.Items.length; ++i) {

          if (Making.Items[i][0] === value.id) {
            value.having = Making.Items[i][1]
          }
        }
      })
      console.log(haveMyItem)
      return haveMyItem

    }
  }

})
//Vue.component('magic-component', {
//  data: function () {
//    return {
//      Making: Making,
//      havingMagic: [[], [], [], []]
//    }
//  },
//  //       <thead> 一般スキル</thead>
//  //       <td>スキル名</td>
//  //       <td>効果</td>
//  props: {
//    magics: Array,
//    magicnumber: Number
//  },
//  template: `   `,
//  methods: {
//    getMagic: function (index) {
//      if (this.magics[index].isObtain === false) {
//        //        this.getMagic.Obj = new Object()
//        //        this.getMagic.Obj = Object.assign(this.getMagic.Obj, this.magics[index]);
//        //        console.log(this.getMagic.Obj)
//        //        this.havingMagic.push[this.magicnumber].push(index)
//        //        this.getMagic.array =new Array(this.magicnumber,this.magics[index].id)
//        //        console.log(this.getMagic.array)
//        this.Making.magic[this.magicnumber].push(index)
//        console.log(this.Making.magic)
//        this.magics[index].isObtain = true
//      } else {
//        this.magics[index].isObtain = false
//        this.getMagic.index = this.Making.magic[this.magicnumber].findIndex(value => value[this.magicnumber][index] === index);
//        //        this.havingMagic[this.].splice()
//        this.Making.magic[this.magicnumber].splice(this.getMagic.index, 1)
//        //     console.log(this.Making.magic)
//      }
//      //      this.$emit('making-magic',"")
//    }
//
//  }
//
//})


new Vue({
  el: '#app',
  data: {
    nowExp: 3000,
    sumExp: 3000,
    nowGrow: 10,
    sumGrow: 10,
    playerLebel: 1,
    players: [],
    race: 'ヒューマン',
    raceval: {
      stats: [0, 0, 0, 0, 0, 0, 0],
      spd: 0,
      id: 0
    },
    jobs: jobs,
    css: {
      ul: "list-unstyled",
      ulline: "list-inline",
      li: "list-inline-item"
    },
    havingGeneralSkills: [],
    GeneralSkills: gs,
    adventuerSkills: as,
    havingAdventuerSkills: [],
    gnL: [],
    playerSelect: 1,
    generalLevels: {
      0: "削除",
      1: "初級",
      2: "習熟",
      3: "熟練"
    },
    adL: [],
    adventuerLevels: {
      0: "削除",
      1: "初級",
      2: "習熟",
      3: "熟練",
      4: "達人",
      5: "伝説"
    },
    jobsExp: [0, 1000, 1000, 1500, 2000, 2500, 3500, 5000, 7000, 9500, 12500],
    jobsLevel: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    bonus: '',
    bonusval: [0, 0, 0, 0, 0, 0, 0],
    sidestats: 1,
    mainstats: 2,

    //    items: Items,
    //    weapon: Weapon,
    //    armor: Armor,
    mGrow: 10,
    Making: Making,
    dise: 0,
    con: [],
    pow: [],
    tec: [],
    int: [],
    base: {
      HP: 0,
      spd: 0,
      MP: 0,
    },
    basestats: {
      HP: 0,
      MP: 0,
      spd: 0,
    },
    MPup: 0,
    lived: [{
      val: 0,
      lived: 0,
      effect: [0, 0, false, false, false],
    }],
    livedmodel: 0,
    living: "",
    histrys: ["奴隷", "牢獄", "戦場", "神殿", "孤児", "平穏", "貧困", "学校", "箱入り", "贅沢", "宮廷"],
    meets: ["宿敵", "上司", "後輩", "取引相手", "部下", "家族", "親友", "先輩", "婚約者", "好敵手", "師匠"],
    Glevel: 1,
    copy: {},
    jobL: [],
    spExp: 0,
    spGrow: 0,
    trueMagics: trueMagic,
    miracleMagics: miracleMagic,
    dragonMagics: dragonMagic,
    spiritMagics: spiritMagic,
    magicNumber: 0,
    isHidden: [true, true, true, true, true, true],
    isNavi: true,
    spMagicNumber: 0
  },
  methods: {
    doHidden: function (index) {
      this.isHidden = [true, true, true, true, true, true];
      this.isNavi = true
      if (index <= 6) {
        this.doHidden.scrool = document.getElementById("app").scrollTop
        this.isHidden.splice(index, 1, false)
        this.isNavi = false
        document.getElementById("app").scrollTop = 0
      } else(
        document.getElementById("app").scrollTop = this.doHidden.scroll
      )
    },
    magicLord: function () {
      this.Making.trueMagic.forEach((value, index, array) => this.trueMagics[value].isObtain = true)
      this.Making.miracleMagic.forEach((value, index, array) => this.miracleMagics[value].isObtain = true)
      this.Making.dragonMagic.forEach((value, index, array) => this.dragonMagics[value].isObtain = true)
      this.Making.spiritMagic.forEach((value, index, array) => this.spiritMagics[value].isObtain = true)

    },
    skillInitial: function () {
      this.adventuerSkills.forEach((value) => value.isObtain = false);
      this.GeneralSkills.forEach((value) => value.isObtain = false);
      this.trueMagics.forEach((value) => value.isObtain = false);
      this.miracleMagics.forEach((value) => value.isObtain = false);
      this.dragonMagics.forEach((value) => value.isObtain = false);
      this.spiritMagics.forEach((value) => value.isObtain = false);
      this.havingAdventuerSkills = new Array;
      this.havingGeneralSkills = new Array;
    },
    getTrueMagic: function (index) {
      if (this.trueMagics[index].isObtain === false) {
        this.Making.trueMagic.push(index)
        //        console.log(this.Making.magic)
        console.log(this.Making.trueMagic)
        this.trueMagics[index].isObtain = true
      } else {
        this.trueMagics[index].isObtain = false
        this.getTrueMagic.index = this.Making.trueMagic.findIndex(value => value[index] === index);
        this.Making.trueMagic.splice(this.getTrueMagic.index, 1)
      }
      console.log(this.Making.trueMagic)
    },
    getMiracleMagic: function (index) {
      if (this.miracleMagics[index].isObtain === false) {
        this.Making.miracleMagic.push(index)
        //        console.log(this.Making.magic)
        console.log(this.Making.miracleMagic)
        this.miracleMagics[index].isObtain = true
      } else {
        this.miracleMagics[index].isObtain = false
        this.getMiracleMagic.index = this.Making.miracleMagic.findIndex(value => value[index] === index);
        this.Making.miracleMagic.splice(this.getMiracleMagic.index, 1)
      }
      console.log(this.Making.miracleMagic)
    },
    getDragonMagic: function (index) {
      if (this.dragonMagics[index].isObtain === false) {
        this.Making.dragonMagic.push(index)
        //        console.log(this.Making.magic)
        console.log(this.Making.dragonMagic)
        this.dragonMagics[index].isObtain = true
      } else {
        this.dragonMagics[index].isObtain = false
        this.getDragonMagic.index = this.Making.dragonMagic.findIndex(value => value[index] === index);
        this.Making.dragonMagic.splice(this.getDragonMagic.index, 1)
      }
      console.log(this.Making.dragonMagic)
    },
    getSpiritMagic: function (index) {
      if (this.spiritMagics[index].isObtain === false) {
        this.Making.spiritMagic.push(index)
        //        console.log(this.Making.magic)
        console.log(this.Making.spiritMagic)
        this.spiritMagics[index].isObtain = true
      } else {
        this.spiritMagics[index].isObtain = false
        this.getSpiritMagic.index = this.Making.spiritMagic.findIndex(value => value[index] === index);
        this.Making.spiritMagic.splice(this.getSpiritMagic.index, 1)
      }
      console.log(this.Making.spiritMagic)
    },
    allDelete: function () {
      if (confirm("本当に削除しますか？")) {

        localStorage.setItem("playersaved", null)
        sessionStorage.setItem("datalist", null)
        this.players = []
      }

    },
    livedchange: function () {
      this.Making.lived = this.livedmodel;
      console.log(this.lived[this.livedmodel])
      this.living = this.lived[this.livedmodel].lived;
      console.log(this.living)
      this.raceChange()
    },
    livedchange: function () {
      this.Making.lived = this.livedmodel;
      console.log(this.lived[this.livedmodel])
      this.living = this.lived[this.livedmodel].lived;
      console.log(this.living)
      this.raceChange()
    },
    //    getMagic: function (index) {
    //
    //    },
    getAdSkill: function (index) {
      if (this.adventuerSkills[index].isObtain === false) {
        this.getAdSkill.Obj = new Object()
        this.getAdSkill.Obj = Object.assign(this.getAdSkill.Obj, this.adventuerSkills[index]);
        this.havingAdventuerSkills.push(this.getAdSkill.Obj)
        this.adL.push(1)
        console.log("getOK")
        if (this.adventuerSkills[index].isInput) {
          this.Making.adSkill.push([this.adventuerSkills[index].id, this.adL[this.havingAdventuerSkills.length - 1], this.adventuerSkills[index].inputName])
        } else {

          this.Making.adSkill.push([this.adventuerSkills[index].id, this.adL[this.havingAdventuerSkills.length - 1]])
        }

        this.adventuerSkills[index].isObtain = true

      } else {
        this.adventuerSkills[index].isObtain = false

        this.getAdSkill.index = this.havingAdventuerSkills.findIndex(value => value.id === index);

        this.adL.splice(this.getAdSkill.index, 1);
        this.havingAdventuerSkills.splice(this.getAdSkill.index, 1);
        this.Making.adSkill.splice(this.getAdSkill.index, 1);
      }
      sessionStorage.setItem("datalist", JSON.stringify(this.Making));

      //        console.log(this.getAdSkill.index)
      this.aLevelInterpret();
    },
    getGnSkill: function (index) {
      //      this.havingGeneralSkills =new Array();
      //      this-.Making.gnSkill =new Array();
      console.log(this.GeneralSkills[index].isObtain)
      if (this.GeneralSkills[index].isObtain === false) {
        this.getGnSkill.Obj = new Object()
        this.getGnSkill.Obj = Object.assign(this.getGnSkill.Obj, this.GeneralSkills[index]);
        console.log(this.getGnSkill.Obj)
        this.havingGeneralSkills.push(Object.assign({}, this.getGnSkill.Obj))
        this.gnL.push(1)
        this.getGnSkill.array = new Array(this.GeneralSkills[index].id, this.gnL[this.havingGeneralSkills.length - 1])
        console.log(this.getGnSkill.array)
        if (this.GeneralSkills[index].isInput) {
          this.Making.gnSkill.push([this.GeneralSkills[index].id, this.gnL[this.havingGeneralSkills.length - 1], this.GeneralSkills[index].inputName])
        } else {
          this.Making.gnSkill.push([this.GeneralSkills[index].id, this.gnL[this.havingGeneralSkills.length - 1]])
        }
        this.GeneralSkills[index].isObtain = true

      } else {
        console.log(this.GeneralSkills[index].isObtain)
        this.GeneralSkills[index].isObtain = false
        this.getGnSkill.index = this.havingGeneralSkills.findIndex(value => value.id === index);
        this.gnL.splice(this.getGnSkill.index, 1);
        console.log(this.getGnSkill.index)
        this.havingGeneralSkills.splice(this.getGnSkill.index, 1);
        this.Making.gnSkill.splice(this.getGnSkill.index, 1);
      }
      sessionStorage.setItem("datalist", JSON.stringify(this.Making));
      this.aLevelInterpret()
    },
    magicUpdate: function () {

    },
    skillLord: function () {
      console.log(this.Making.adSkill.length)
      for (i = 0; i < this.Making.adSkill.length; ++i) {
        if (this.adventuerSkills[this.Making.adSkill[i][0]].isObtain == false) {

          this.adventuerSkills[this.Making.adSkill[i][0]].isObtain = !this.adventuerSkills[this.Making.adSkill[i][0]].isObtain;
        }

        this.skillLord.Obj = new Object()
        this.skillLord.Obj = Object.assign(this.skillLord.Obj, this.adventuerSkills[this.Making.adSkill[i][0]]);
        this.havingAdventuerSkills.push(this.skillLord.Obj)
        if (this.skillLord.Obj.isInput) {
          this.havingAdventuerSkills[i].inputName = this.Making.adSkill[i][2]
        }
        this.adL.push(this.Making.adSkill[i][1])
      }
      //一般スキルの処理
      for (i = 0; i < this.Making.gnSkill.length; ++i) {
        if (this.GeneralSkills[this.Making.gnSkill[i][0]].isObtain == false) {

          this.GeneralSkills[this.Making.gnSkill[i][0]].isObtain = !this.GeneralSkills[this.Making.gnSkill[i][0]].isObtain;
        }

        this.skillLord.Obj2 = new Object()
        this.skillLord.Obj2 = Object.assign(this.skillLord.Obj2, this.GeneralSkills[this.Making.gnSkill[i][0]]);
        this.havingGeneralSkills.push(this.skillLord.Obj2)
        if (this.skillLord.Obj2.isInput) {
          this.havingGeneralSkills[i].inputName = this.Making.gnSkill[i][2]
        }
        this.gnL.push(this.Making.gnSkill[i][1])
      }
      this.aLevelInterpret()
    },
    save: function () {
      this.save.val = this.playerSelect;
      this.players.splice(this.save.val, 1, Object.assign({}, this.Making))
      localStorage.setItem("playersaved", JSON.stringify(this.players))
    },
    newsave: function () {
      this.players.push(Object.assign({}, this.Making));
      this.playerSelect = this.players.length - 1
      localStorage.setItem("playersaved", JSON.stringify(this.players))
    },
    remove: function () {
      this.players.splice(this.playerSelect, 1)
      localStorage.setItem("playersaved", JSON.stringify(this.players))
    },

    diserool: function () {
      this.Making.stats = disenumber(3, 7, 1);
      this.sidestats = sum(this.bonusval, this.raceval.stats);
      this.mainstats = sum(this.sidestats, this.Making.stats);
      this.Making.base[0] = disenumber(6, 1, 2)[0];
      this.Making.base[1] = disenumber(6, 1, 2)[0];
      this.Making.base[2] = disenumber(6, 1, 2)[0];
      this.livedmodel = disenumber(6, 1, 2)[0] - 2;
      this.Making.lived = this.livedmodel;
      this.Making.histry = disenumber(6, 1, 2)[0] - 2;
      this.Making.meet = disenumber(6, 1, 2)[0] - 2;
      this.raceChange()
    },
    basefn: function () {

      this.basestats.HP = this.mainstats[0] + this.mainstats[1] + this.mainstats[5] + this.Making.base[0];
      var MP;

      if (this.Making.base[1] < 7) {
        MP = 0;
      } else if (this.Making.base[1] < 10) {
        MP = 1;
      } else if (this.Making.base[1] < 12) {
        MP = 2;
      } else {
        MP = 3;
      }
      this.basestats.MP = MP + this.MPup;
      this.basestats.spd = this.Making.base[2] * this.raceval.spd;
      console.log("baseok");
    },
    Button1: function () {
      console.log(this.Making.base)
      this.copy = this.Making.base.slice()
      console.log(this.copy)

      this.Making.base.splice(0, 1, this.copy[2])
      this.Making.base.splice(2, 1, this.copy[0])

    },
    Button2: function () {
      this.copy = this.Making.base.slice()

      this.Making.base.splice(2, 1, this.copy[1])
      this.Making.base.splice(1, 1, this.copy[2])
      //      this.Making.base = this.base
      //      this.Making.base = this.base;

    },
    aLevelInterpret: function () {

      //レベル変更時のトリガー、経験点の再計算
      this.aLevelInterpret.change = this.adL.map(function (value, index, array) {
        if (value == 1) {
          return 5
        }
        if (value == 2) {
          return 10
        }
        if (value == 3) {
          return 15
        }
        if (value == 4) {
          return 25
        }
        if (value == 5) {
          return 40
        } else return 0;

      })
      this.aLevelInterpret.sum = this.aLevelInterpret.change.reduce((a, x) => a += x, 0)
      console.log(this.aLevelInterpret.sum)
      this.aLevelInterpret.change2 = this.gnL.map(function (value, index, array) {
        if (value == 1) {
          return 1
        }
        if (value == 2) {
          return 5
        }
        if (value == 3) {
          return 15
        } else return 0;

      })
      this.aLevelInterpret.sum2 = this.aLevelInterpret.change2.reduce((a, x) => a += x, 0)
      console.log(this.aLevelInterpret.sum2)
      this.nowGrow = this.Making.sumGrow - this.aLevelInterpret.sum - this.aLevelInterpret.sum2 + this.spGrow;
    },
    jobLevelChange: function (index) {
      this.Making.jobLevel.splice(index, 1, this.jobL[index]);
      this.jobUpdate();
    },
    jobUpdate: function () {
      this.jobsum = 0
      this.magicNumber = 0
      for (i = 0; i < 8; ++i) {
        this.index = this.jobL[i] + 0
        console.log(this.jobL[i])
        if (i > 3) {
          this.magicNumber = this.magicNumber + this.index
        }
        for (j = 0; j <= this.index; ++j) {
          this.jobsum = this.jobsum + this.jobsExp[j]
        }
      }
      this.nowExp = this.Making.sumExp - this.jobsum + this.spExp;
      this.magicNumber = this.magicNumber + this.spMagicNumber
    },
    jobLevelInterpret: function () {
      this.jobsLevel.splice(0, this.jobsLevel.length, this.Making.jobLevel)

    },
    aLevelChange: function (index) {
      this.havingAdventuerSkills[index].level = this.adL[index];
      console.log(this.adL[index])
      if (this.adL[index] == 0) {
        //       this.aLevelChange.index = this.havingAdventuerSkills.findIndex(value => value.id === index);
        this.aLevelChange.index = this.havingAdventuerSkills[index].id
        console.log(this.aLevelChange.index);
        this.adL.splice(index, 1);
        this.havingAdventuerSkills.splice(index, 1);
        this.Making.adSkill.splice(index, 1);
        //        this.AdventuerSkills[index].isObtain = false;
        this.adventuerSkills[this.aLevelChange.index].isObtain = !this.adventuerSkills[this.aLevelChange.index].isObtain;
        sessionStorage.setItem("datalist", JSON.stringify(this.Making));
        this.aLevelInterpret()
      } else {

        this.Making.adSkill[index][1] = this.adL[index];
        sessionStorage.setItem("datalist", JSON.stringify(this.Making));
        this.aLevelInterpret()
      }
    },
    skillNameChange: function (index) {
      console.log(index)
      this.Making.adSkill[index].pop()
      this.Making.adSkill[index].push(this.havingAdventuerSkills[index].inputName);
      sessionStorage.setItem("datalist", JSON.stringify(this.Making));
      console.log(this.havingAdventuerSkills[index].inputName)
      console.log(this.Making.adSkill[index])
    },
    skillNameChangeGn: function (index) {
      console.log(index)
      this.Making.gnSkill[index].pop()
      this.Making.gnSkill[index].push(this.havingGeneralSkills[index].inputName);
      sessionStorage.setItem("datalist", JSON.stringify(this.Making));
      console.log(this.havingGeneralSkills[index].inputName)
      console.log(this.Making.gnSkill[index])
    },
    skillSave: function () {

    },
    changing_Skill: function (index) {
      this.changing_Skill.Obj = new Object()
      this.changing_Skill.Obj = Object.assign(this.changing_Skill.Obj, this.adventuerSkills[this.havingAdventuerSkills[index].id]);

      this.havingAdventuerSkills.push(this.changing_Skill.Obj)
      this.Making.adSkill.push([this.havingAdventuerSkills[index].id, this.adL[this.havingAdventuerSkills.length - 1], this.havingAdventuerSkills[index].inputName])
    },
    gLevelChange: function (index) {
      this.havingGeneralSkills[index].level = this.gnL[index];
      console.log(this.gnL[index])
      if (this.gnL[index] == 0) {
        //       this.aLevelChange.index = this.havingAdventuerSkills.findIndex(value => value.id === index);
        this.gLevelChange.index = this.havingGeneralSkills[index].id
        console.log(this.gLevelChange.index);
        this.gnL.splice(index, 1);
        this.havingGeneralSkills.splice(index, 1);
        this.Making.gnSkill.splice(index, 1);
        //        this.AdventuerSkills[index].isObtain = false;
        this.GeneralSkills[this.gLevelChange.index].isObtain = !this.GeneralSkills[this.gLevelChange.index].isObtain;
        sessionStorage.setItem("datalist", JSON.stringify(this.Making));
        this.aLevelInterpret()
      } else {
        this.Making.gnSkill[index][1] = this.gnL[index];
        sessionStorage.setItem("datalist", JSON.stringify(this.Making));
        this.aLevelInterpret()
      }
    },
    doDecide: function () {
      this.spExp = this.lived[this.livedmodel].effect[0];
      this.spGrow = this.lived[this.livedmodel].effect[1];
      this.jobL[this.lived[this.livedmodel].effect[2]] = 1;
      if (!(this.lived[this.livedmodel].effect[2] === false)) {
        this.jobLevelChange(this.lived[this.livedmodel].effect[2])
      }
      if (!(this.lived[this.livedmodel].effect[3] === false)) {
        this.raceChange.index = this.adventuerSkills.filter(item => item.name == this.lived[this.livedmodel].effect[3])
        console.log(this.raceChange.index[0].id)
        //          this.adventuerSkills[this.raceChange.index[0].id].isObtain =  !this.adventuerSkills[this.raceChange.index[0].id].isObtain;
        console.log(this.adventuerSkills[this.raceChange.index[0].id].isObtain = true)
        this.getAdSkill(this.raceChange.index[0].id)
      }
      if (!(this.lived[this.livedmodel].effect[4] === false)) {
        console.log("OK2")
        this.raceChange.index2 = this.GeneralSkills.filter(item => item.name == this.lived[this.livedmodel].effect[4])
        console.log(this.raceChange.index2[0])
        //        this.GeneralSkills[this.raceChange.index2[0].id].isObtain = !this.GeneralSkills[this.raceChange.index2[0].id].isObtain

        this.getGnSkill(this.raceChange.index2[0].id)
      }
      // console.log(this.lived[this.livedmodel].effect)
      this.aLevelInterpret();
    },
    changing_SkillGn: function (index) {
      this.changing_SkillGn.Obj = new Object()
      this.changing_SkillGn.Obj = Object.assign(this.changing_SkillGn.Obj, this.GeneralSkills[this.havingGeneralSkills[index].id]);
      console.log(this.changing_SkillGn.Obj)
      this.havingGeneralSkills.push(this.changing_SkillGn.Obj)
      this.Making.gnSkill.push([this.havingGeneralSkills[index].id, this.gnL[this.havingGeneralSkills.length - 1], this.havingGeneralSkills[index].inputName])
    },
    raceChange: function () {
      this.Making.race = this.race;
      console.log(this.race)
      switch (this.Making.race) {
        case "ヒューマン":
          this.raceval.stats = [1, 0, 0, 1, 0, 2, 0];
          this.raceval.spd = 3;
          this.raceval.id = 1;
          this.lived = livedHm
          break;
        case "ドワーフ":
          this.raceval.stats = [2, 0, 2, -1, 1, 1, -1];
          this.raceval.spd = 2;
          this.raceval.id = 2;
          this.lived = livedDw;
          break;
        case "エルフ":
          this.raceval.stats = [-1, 1, 1, 1, 0, -1, 1];
          this.raceval.spd = 4;
          this.raceval.id = 3;
          this.lived = livedEl;
          break;
        case "リザードマン":
          this.raceval.stats = [2, 1, 0, 0, 1, 0, 0];
          this.raceval.spd = 2;
          this.raceval.id = 4;
          this.lived = livedRz;

          break;
        case "レーア":
          this.raceval.stats = [-1, 2, 1, 0, -1, 0, 2];
          this.raceval.spd = 3;
          this.raceval.id = 5;
          this.lived = livedLa
          break;
      };
      sessionStorage.setItem("datalist", JSON.stringify(this.Making));
      this.Making.lived = this.livedmodel;

      //      console.log(this.lived[this.livedmodel].effect[2])

      //ジョブ、技能の取得

      //      console.log(this.lived[this.livedmodel * 1].lived);
      this.living = this.lived[this.livedmodel * 1].lived;
      //      console.log(this.livedmodel)
      this.sidestats = sum(this.bonusval, this.raceval.stats);
      this.mainstats = sum(this.sidestats, this.Making.stats);
      this.basestats.spd = this.base.spd * this.raceval.spd;

    },
  },
  beforeMount: function () {
    console.log("ok");
    //    this.jobL =[0, 0, 0, 0, 0, 0, 0, 0]
    this.Making = Object.assign(this.Making, JSON.parse(sessionStorage.getItem("datalist")));
    this.players = JSON.parse(localStorage.getItem("playersaved")) || this.players;
    //    if(this.Making)
    this.race = this.Making.race;
    this.raceChange()
    this.bonus = this.Making.bonus;
    //    this.base = this.Making.base;
    //      this.diseapply();
    this.livedmodel = this.Making.lived;
    this.jobL = new Array()
    for (i = 0; this.Making.jobLevel.length > i; i++) {
      this.jobL.push(this.Making.jobLevel[i])
    }
    this.jobUpdate()
    //    this.jobL.splice(0, 8, this.Making.jobLevel)
    this.skillLord()
    this.magicLord()
    //ここまで
    //    var objectname = this.adventuerSkills.filter(function (item, index) {
    //      return item.name == "頑健"
    //    })
    //    console.log(objectname[0].name)
  },
  computed: {
    remainMagic: function () {
      let times = 0;
      console.log(this.Making.trueMagic.length);
      console.log(this.Making.miracleMagic.length);
      console.log(this.Making.dragonMagic.length);
      console.log(this.Making.spiritMagic);
      times = this.Making.trueMagic.length + this.Making.miracleMagic.length + this.Making.dragonMagic.length + this.Making.spiritMagic.length;
      console.log(times)
      return this.magicNumber - times
    },
    obtainTrueMagic: function () {
      return this.trueMagics.filter(value => value.isObtain)
    },
    obtainMiracleMagic: function () {
      return this.miracleMagics.filter(value => value.isObtain)
    },
    obtainDragonMagic: function () {
      return this.dragonMagics.filter(value => value.isObtain)
    },
    obtainSpiritMagic: function () {
      return this.spiritMagics.filter(value => value.isObtain)
    },

  },
  watch: {
    playerSelect: function () {
      //        JSON.parse(localStorage.getItem("playersaved"))
      this.skillInitial()
      this.Making = Object.assign({}, this.players[this.playerSelect]);
      //        console.log(this.Making.stats)
      this.race = this.Making.race;
      this.bonus = this.Making.bonus;
      this.base = this.Making.base;
      this.jobL.splice(0, 8, this.Making.jobLevel)
      this.skillLord();
      this.magicLord();
    },
    Making: {
      handler: function () {
        this.Making.stats.forEach(function (value, index, array) {
          //            console.log(value);
          if (value > 3) {
            value = value % 10;
            //            console.log(value)
          }
          if (value > 3) {
            value = 0;
          }
          array[index] = value * 1;
        });
        var number = this.Making.base.map(function (value, index, array) {
          array[index] = Number(array[index])
          if (array[index] > 12) {
            array[index] = value % 10;
          }
          if (value > 12) {
            value = 0;
          }
        })
        this.sidestats = sum(this.bonusval, this.raceval.stats);
        this.mainstats = sum(this.sidestats, this.Making.stats);
        this.basefn();
        sessionStorage.setItem("datalist", JSON.stringify(this.Making));
      },
      deep: true
    },
    bonus: function () {
      this.Making.bonus = this.bonus;
      switch (this.bonus) {
        case "con":
          this.bonusval = [1, 0, 0, 0, 0, 0, 0];
          break;
        case "pow":
          this.bonusval = [0, 1, 0, 0, 0, 0, 0];
          break;
        case "tec":
          this.bonusval = [0, 0, 1, 0, 0, 0, 0];
          break;
        case "int":
          this.bonusval = [0, 0, 0, 1, 0, 0, 0];
          break;
      };
      this.sidestats = sum(this.bonusval, this.raceval.stats);
      this.mainstats = sum(this.sidestats, this.Making.stats)
    },
    mainstats: function () {
      for (i = 0; i < 3; ++i) {
        this.con[i] = this.mainstats[0] + this.mainstats[4 + i];
        this.pow[i] = this.mainstats[1] + this.mainstats[4 + i];
        this.tec[i] = this.mainstats[2] + this.mainstats[4 + i];
        this.int[i] = this.mainstats[3] + this.mainstats[4 + i];
      }
    },
  },

})


const menuItems = document.querySelectorAll('.menu li a');
const contents = document.querySelectorAll('.content');

menuItems.forEach(clickedItem => {
  clickedItem.addEventListener('click', e => {
    e.preventDefault();

    menuItems.forEach(item => {
      item.classList.remove('active');
    });
    clickedItem.classList.add('active');

    contents.forEach(content => {
      content.classList.remove('active');
    });
    document.getElementById(clickedItem.dataset.id).classList.add('active');
  });
})
const menuItems2 = document.querySelectorAll('.mini_menu li a');
const contents2 = document.querySelectorAll('.content2');

menuItems2.forEach(clickedItem => {
  clickedItem.addEventListener('click', e => {
    e.preventDefault();

    menuItems2.forEach(item => {
      item.classList.remove('active');
    });
    clickedItem.classList.add('active');

    contents2.forEach(content => {
      content.classList.remove('active');
    });
    document.getElementById(clickedItem.dataset.id).classList.add('active');
  });
})
//      });
