//var Items = []
//Vue.component('myitem', {
//  data: function () {
//    return {
//      Items: Items,
//      nowItem: "",
//      money: 0,
//      page: 0,
//      times: 0,
//      isItemHidden: true,
//             Making:Making
//    }
//  },
//  template: `
//<div>
//          <div class="pure-g item-list">
//          <div class="pure-u-1-3">アイテム</div>
//            <div class="pure-u-1-3">金額(銀貨)</div>
//            <div class="pure-u-1-3">ページ</div>
//            </div>
//          <div class="pure-g item-push">
//          <div class="pure-u-1-3"><input v-model="nowItem" class="item-name"></div>
//            <div class="pure-u-1-3"><input type="number" v-model.number="money"></div>
//            <div class="pure-u-1-3"><input type="number" v-model.number="page"></div>
//        </div>
//<p><button class="pure-button"　@click="listPush">リスト追加</button>
//<button class="pure-button" @click="isItemHidden = false">リスト表示</button></p>
//<div class="item_box get" :class="{hidden: isItemHidden}">
//<div class="hide_navi pure-g">
//  <div class="pure-u-1-4">所持金{{Making.money}}銀貨</div>
//</div>
//<ul>
//<li v-for= "(Item,index) in Items" :key="index" class="item-choice">{{Item.name}}　<span>{{Item.money}}銀貨　</span><span>{{Item.page}}ページ</span><span><input type="number" v-model.number="Item.times"></span><span>{{Item.isObtain}}</span><span><button @click="itemDelete(index)" class="pure-button">削除</button></span>
//</li>
//</ul>
//合計{{sumItem}}
//<button class="pure-button" @click="buyItem">購入</button><button class="pure-button" @click="pickItem">拾う</button></div>
//<div>
//<ul>
//<li v-for="(Item,index) in haveItem " :key="index" class="item-having">
//{{Item.name}}　{{Item.having}}
//</li>
//</ul>
//</div>
//</div>`,
//  methods: {
//    upDateItem: function () {
//      Making.Items.forEach(value => {
//        console.log(this.Items.length)
//        for (i = 0; i < this.Items.length; ++i) {
//          if (this.Items[i].id === value[0]) {
//            this.Items[i].isObtein = true;
//            console.log("get item!",this.Items[i])
//          }
//        }
//      })
//    },
//    listPush: function () {
//      if(!this.nowItem == ""){
//      let Ilength
//      Ilength = this.Items.length;
//      console.log(Ilength)
//      let Item = new Object();
//      Item.id = Ilength
//      Item.name = this.nowItem
//      Item.money = this.money
//      Item.page = this.page
//      Item.times = this.times
//      Item.isObtein = false
//      this.Items.push(Item)
//      localStorage.setItem("itemList", JSON.stringify(this.Items))
//      this.nowItem = ""
//      this.money = 0
//      this.page = 0
//      this.times = 0
//      }else{
//        alert("アイテム名は必須項目です")
//      }
//    },
//    itemDelete: function (index) {
//      let detetArray = Making.Items.forEach((value, index2) => {
//        console.log(this.Items[index].id)
//        if (value[0] === this.Items[index].id) {
//          console.log('obtain!')
//          Making.Items.splice(index2, 1)
//        }
//      })
//      this.Items.splice(index, 1);
//      console.log(index)
//      localStorage.setItem("itemList", JSON.stringify(this.Item))
//    },
//    pickItem: function () {
//      this.getItem()
//    },
//    buyItem: function (index) {
//      if (Making.money > this.sumItem) {
//        Making.money = Making.money - this.sumItem
//        console.log(Making.money)
//        this.getItem()
//      }
//    },
//    getItem: function () {
//      var haveItems = this.Items.filter((value) => value.times > 0)
//      haveItems.forEach(function (value, index,array) {
//        var key = [value.id, value.times]
//        value.isObtein = true
////        this[value.id].isObtein = true
//        this.splice(value.id,1,this[value.id])
//        console.log(this[value.id])
//        console.log(key)
//        console.log(Making.Items.length)
//        if (Making.Items.length == 0) {
//          Making.Items.push(key)
//        } else {
//          var flag = true
//          for (i = 0; i < Making.Items.length; i++) {
//
//            if (Making.Items[i][0] == value.id) {
//              Making.Items[i][1] = Making.Items[i][1] + value.times
//              Making.Items[i].splice(1, 1, Making.Items[i][1])
//              console.log(key)
//              console.log(Making.Items[i][1])
//              flag = false
//            }
//          }
//          if (flag) {
//            Making.Items.push(key)
//            console.log(key)
//          }
//        }
//      },this.Items );
//    },
//  },
//  mounted: function () {
//    
//  let  box = JSON.parse(localStorage.getItem("itemList")) || this.Items
//    this.Items = box
//    console.log(this.Items)
//    this.upDateItem()
//  },
//  computed: {
//    sumItem: function () {
//      let sum = 0
//      this.Items.map((value, index) => sum = sum + value.money * value.times)
//      return sum
//    },
//    haveItem: function () {
//      console.log("move")
//      var haveMyItem = this.Items.filter(value => value.isObtein)
//      haveMyItem.forEach(function(value){
//      for(var i = 0; i < Making.Items.length; ++i){
//        
//      if(Making.Items[i][0] === value.id){
//        value.having = Making.Items[i][1]
//      }
//      }
//      })
////      haveMyItem.forEach(value =>value.times =)
//      console.log(haveMyItem)
//      return haveMyItem
//    }
//  }
//  
//})