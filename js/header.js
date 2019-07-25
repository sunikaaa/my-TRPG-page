Vue.component('header-list', {
  data: function () {
    return {
      isActive: false
    }
  },
  props: ['list'],
  template: `<div class="pure-menu-item"><li :class="{nowpage : list.isNowPage}"><a :href="list.page" class="pre-menu-link">{{list.name}}</a></li></div>`
})

Vue.component('header-outer',{
  props:['lists'],
  template:`<div class="pure-menu pure-menu-horizontal">
<ul class="pure-menu-list"><header-list v-for="(list,index) in lists" :list="list" :key="index"></header-list></ul></div>`

})

Vue.component('magic-component',{
              props:['magics'],
              template:`     <table border="3" class="skill">
       <thead> 一般スキル</thead>
       <td>スキル名</td>
       <td>効果</td>
       <tr v-for="(magic,index) in magics" :calss="{obtain:magic.isObtain}">
         
       <td>{{magic.name}}</td>
       <td>{{magic.effect}}</td>
       </tr>
     </table>`
              })


new Vue({
  el: '#header',
  data: {
    lists: [{
        name: "ホーム",
        page: "index.html",
        isNowPage:false
      },
      {
        name: "進捗",
        page: "progress.html",
        isNowPage:false,
      }, {
        name: "bookreview",
        page: "#",
        isNowPage:false
      }
        
      ],
    nowhref: "#",

  },
  mounted: function(){
    this.nowhref = location.href
    this.lists.forEach(function(value,index){
//      value.page
      // console.log(value.page)
// console.log(this[index].isNowPage);
      if(value.page === location.pathname){
        this[index].isNowPage = true
        // console.log(this[index].isNowPage)
      }
    },this.lists)
      
//    console.log(this.lists[0].isNowPage)
    console.log(this.nowhref)
    console.log(location.pathname)
  }
})
