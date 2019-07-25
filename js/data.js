'use strict'
var jobs = ["戦士", "武闘家", "野伏", "斥候", "神官", "竜司祭", "魔術師", "精霊使い"]

var livedHm = [
  {
    val: 0,
    lived: '冒険者',
    effect: [1000, 0, 0, false, false]
              }, {
    val: 1,
    lived: '無類',
    effect: [1000, 1, 1, false, '芸能']
              }, {
    val: 2,
    lived: '猟師',
    effect: [1000, 5, 2, '怪物知識', false]
              }, {
    val: 3,
    lived: '学者',
    effect: [1000, 1, 6, false, '文献調査']
              }, {
    val: 4,
    lived: '職人',
    effect: [0, 6, false, false, '職人']
              }, {
    val: 5,
    lived: '農民',
    effect: [0, 6, false, '頑健', '生産業']
              }, {
    val: 6,
    lived: '商人',
    effect: [0, 1, false, false, '交渉']
              }, {
    val: 7,
    lived: '兵士',
    effect: [1000, 5, 3, '第六感', false]
              }, {
    val: 8,
    lived: '騎士',
    effect: [1000, 1, 0, false, '騎乗']
              }, {
    val: 9,
    lived: '神官',
    effect: [1000, 1, false, false, false]
              }, {
    val: 10,
    lived: '貴族',
    effect: [0, 1, false, false, '統率']
}]

var livedDw = [
  {
    val: 0,
    lived: '冒険者',
    effect: [1000, 0, false, false, false]
              }, {
    val: 1,
    lived: '無類',
    effect: [1000, 1, 1, false, '芸能']
              }, {
    val: 2,
    lived: '猟師',
    effect: [1000, 5, 2, '怪物知識', false]
              }, {
    val: 3,
    lived: '商人',
    effect: [0, 1, false, false, '交渉']
              }, {
    val: 4,
    lived: '亭主',
    effect: [1000, 1, false, false, '観察']
              }, {
    val: 5,
    lived: '鍛冶師',
    effect: [0, 6, false, '手仕事', '職人']
              }, {
    val: 6,
    lived: '職人',
    effect: [0, 6, false, '手仕事', '職人']
              }, {
    val: 7,
    lived: '兵士',
    effect: [1000, 5, 3, '第六感', false]
              }, {
    val: 8,
    lived: '盾砕き',
    effect: [1000, 5, 0, '強打攻撃・斬', false]
              }, {
    val: 9,
    lived: '神官',
    effect: [1000, 1, false, false, '祈祷']
              }, {
    val: 10,
    lived: '貴族',
    effect: [0, 1, false, false, '統率']

}]

var livedEl = [
  {
    val: 0,
    lived: '冒険者',
    effect: [1000, 0, false, false, false]
              }, {
    val: 1,
    lived: '無類',
    effect: [1000, 1, 1, false, '芸能']
              }, {
    val: 2,
    lived: '半森人',
    effect: [1000, 5, false, '応急手当', false]
              }, {
    val: 3,
    lived: '細工師',
    effect: [0, 6, false, '手仕事', '職人']
              }, {
    val: 4,

    lived: '兵士',
    effect: [1000, 5, 3, '第六感', false]
              }, {
    val: 5,
    lived: '猟師',
    effect: [1000, 5, 2, '怪物知識', false]
              }, {
    val: 6,
    lived: '詩人',
    effect: [1000, 1, false, false, '芸能']
              }, {
    val: 7,
    lived: '楽士',
    effect: [1000, 1, false, false, '芸能']
              }, {
    val: 8,
    lived: '語り部',
    effect: [1000, 1, 7, false, '礼儀作法']
              }, {
    val: 9,
    lived: '祈祷師',
    effect: [1000, 1, 4, false, '祈祷']
              }, {
    val: 10,
    lived: '族長',
    effect: [0, 1, false, false, '統率']

  }
]

var livedRz = [
  {
    val: 0,
    lived: '冒険者',
    effect: [1000, 0, false, false, false],
              }, {
    val: 1,
    lived: '無類',
    effect: [1000, 1, 1, false, '芸能']
              }, {
    val: 2,
    lived: '奴隷',
    effect: [1000, 1, false, false, '職人']
              }, {
    val: 3,
    lived: '騎兵',
    effect: [1000, 1, 0, false, '騎乗']
              }, {
    val: 4,
    lived: '工兵',
    effect: [1000, 1, 3, false, '工作']
              }, {
    val: 5,
    lived: '弓兵',
    effect: [1000, 5, 2, '武器', false]
              }, {
    val: 6,
    lived: '槍兵',
    effect: [1000, 5, 0, '武器', false]
              }, {
    val: 7,
    lived: '歩兵',
    effect: [1000, 5, 0, '盾', false]
              }, {
    val: 8,
    lived: '軍師',
    effect: [1000, 5, false, '機先', false]
              }, {
    val: 9,
    lived: '司祭',
    effect: [1000, 1, false, false, '祈祷']
              }, {
    val: 10,
    lived: '王卵',
    effect: [0, 1, false, false, '統率']

  }
]

var livedLa = [
  {
    val: 0,
    lived: '冒険者',
    effect: [1000, 0, false, false, false]
              }, {
    val: 1,
    lived: '無類',
    effect: [1000, 1, 1, false, '芸能']
              }, {
    val: 2,
    lived: '詩人',
    effect: [1000, 1, false, false, '芸能']
              }, {
    val: 3,
    lived: '学者',
    effect: [1000, 1, 6, false, '文献調査']
              }, {
    val: 4,
    lived: '職人',
    effect: [0, 6, false, '手仕事', '職人']
              }, {
    val: 5,
    lived: '農民',
    effect: [0, 6, false, '頑健', '生産業']
              }, {
    val: 6,
    lived: '商人',
    effect: [0, 1, false, false, '交渉']
              }, {
    val: 7,
    lived: '亭主',
    effect: [1000, 1, false, false, '観察']
              }, {
    val: 8,
    lived: '庭師',
    effect: [1000, 1, false, false, '生産業']
              }, {
    val: 9,
    lived: '騎士',
    effect: [1000, 1, 0, false, '騎乗']
              }, {
    val: 10,
    lived: '地主',
    effect: [0, 1, false, false, '統率']
  }
]

var as = [{
    id: 0,
    name: "機先",
    effect: "先制力、不意打ち判定ボーナス",
    effectValue: [1, 2, 3, 4, 5],
    page: 249,
    isObtain: false
  },
  {
    id: 1,
    name: "頑健",
    effect: "生命力ボーナス",
    effectValue: [5, 10, 15, 20, 30],
    page: 249,
    isObtain: false,
  }, {
    id: 2,
    name: "忍耐",
    effect: "苦痛、疲労耐性「EX□を得る」",
    effectValue: '特殊',
    page: 250,
    isObtain: false,
  }, {
    id: 3,
    name: "呪文抵抗",
    effect: "呪文抵抗判定ボーナス",
    effectValue: [1, 2, 3, 4, 5],
    page: 250,
    isObtain: false
  }, {
    id: 4,
    name: "治癒適正",
    effect: "負傷数回復ボーナス",
    effectValue: [2, 4, 6, 8, 10],
    page: 250,
    isObtain: false
  }, {
    id: 5,
    name: "戦術移動",
    effect: "戦術移動可能、戦術移動判定、ヘイトコントロールボーナス",
    effectValue: [[0, 1, 2, 3, 4], [1.5, 1.5, 1.5, 2.0, 2.0], [1 / 2, 1 / 2, 1 / 2, 1 / 3, 1 / 3]],
    page: 252,
    isObtain: false
  }, {
    id: 6,
    name: "受け身",
    effect: "受け身可能、受け身時ボーナス",
    effectValue: [[3, 0], [3, 1], [6, 0], [6, 1], [6, 2]],
    page: 252,
    isObtain: false
  }, {
    id: 7,
    name: "幸運",
    effect: "幸運、祈念判定ボーナス",
    effectValue: [1, 2, 3, 4, 5],
    page: 253,
    isObtain: false
  }, {
    id: 8,
    name: "応急手当",
    effect: "応急手当判定、回復量ボーナス",
    effectValue: [1, 2, 3, 4, 5],
    page: 253,
    isObtain: false
  }, {
    id: 9,
    name: "隠密",
    effect: "隠密判定、命中ボーナス",
    effectValue: [[1, 2, 3, 4, 5], [0, 0, 1, 2, 3]],
    page: 254,
    isObtain: false
  }, {
    id: 10,
    name: "観察",
    effect: "観察判定、ペナルティ軽減ボーナス",
    effectValue: [[1, 2, 3, 4, 5], [0, 0, 0, 1 / 2, 1 / 4]],
    page: 254,
    isObtain: false
  }, {
    id: 11,
    name: "第六感",
    effect: "第六感判定ボーナス",
    effectValue: [1, 2, 3, 4, 5],
    page: 255,
    isObtain: false
  }, {
    id: 12,
    name: "免疫強化",
    effect: "体力抵抗判定ボーナス",
    effectValue: [1, 2, 3, 4, 5],
    page: 255,
    isObtain: false
  }, {
    id: 13,
    name: "手仕事",
    effect: "手仕事判定ボーナス",
    effectValue: [1, 2, 3, 4, 5],
    page: 256,
    isObtain: false
  }, {
    id: 14,
    name: "武器",
    effect: "武器命中判定ボーナス",
    effectValue: [1, 2, 3, 4, 5],
    page: 256,
    isObtain: false,
    isInput: true,
    inputName: "片手剣"
  }, {
    id: 15,
    name: "鎧",
    effect: "装甲値ボーナス",
    effectValue: [1, 2, 3, 4, 5],
    page: 257,
    isObtain: false,
    isInput: true,
    inputName: "衣鎧",
  }, {
    id: 16,
    name: "盾",
    effect: "盾受け判定、盾受け値ボーナス",
    effectValue: [1, 2, 3, 4, 5],
    page: 258,
    isObtain: false
  }, {
    id: 17,
    name: "体術",
    effect: "運動系判定ボーナス",
    effectValue: [1, 2, 3, 4, 5],
    page: 258,
    isObtain: false
  }, {
    id: 18,
    name: "過重行動",
    effect: "長時間行動ボーナス",
    effectValue: [1, 2, 3, 4, 5],
    page: 258,
    isObtain: false
  },
  {
    id: 19,
    name: "護衛",
    effect: "護衛可能、護衛回数ボーナス",
    effectValue: [1, 2, 3, 4, 5],
    page: 260,
    isObtain: false
    },
  {
    id: 20,
    name: "鉄壁",
    effect: "移動妨害判定ボーナス",
    effectValue: [2, 3, 4, 5, 6],
    page: 260,
    isObtain: false
    }, {
    id: 21,
    name: "挑発",
    effect: "挑発可能、挑発判定ボーナス",
    effectValue: [0, 1, 2, 3, 4],
    page: 261,
    isObtain: false
    },
  {
    id: 22,
    name: "受け流し",
    effect: "受け流し可能、回避判定ボーナス",
    effectValue: [0, 1, 2, 3, 4],
    page: 262,
    isObtain: false
    },
  {
    id: 23,
    name: "強打攻撃・斬",
    effect: "効力値ボーナス",
    effectValue: [1 / 4, 1 / 2, 1, 3 / 2, 2],
    page: 262,
    isObtain: false
    },
  {
    id: 24,
    name: "強打攻撃・殴",
    effect: "効力値ボーナス",
    effectValue: [1 / 4, 1 / 2, 1, 3 / 2, 2],
    page: 263,
    isObtain: false
    },
  {
    id: 25,
    name: "刺突攻撃",
    effect: "刺突効力値ボーナス",
    effectValue: [1, 2, 3, 4, 5],
    page: 263,
    isObtain: false
    },
  {
    id: 26,
    name: "斬落攻撃",
    effect: "大成功、失敗確率上昇",
    effectValue: [[11, 11, 10, 10, 9], [5, 4, 4, 3, 3]],
    page: 264,
    isObtain: false
    },
  {
    id: 27,
    name: "拘束攻撃",
    effect: "拘束攻撃可能、拘束ボーナス",
    effectValue: [2, 3, 4, 5, 6],
    page: 265,
    isObtain: false
    },
  {
    id: 28,
    name: "速射",
    effect: "速射可能、命中ペナルティ軽減ボーナス",
    effectValue: [1, 1, 1 / 2, 1 / 2, 1 / 2],
    page: 266,
    isObtain: false
    },
  {
    id: 29,
    name: "曲射",
    effect: "曲射可能、命中ボーナス",
    effectValue: [2, 3, 4, 5, 5],
    page: 267,
    isObtain: false
    },
  {
    id: 30,
    name: "死角移動",
    effect: "死角移動可能、命中判定ボーナス",
    effectValue: [2, 4, 6, 8, 10],
    page: 268,
    isObtain: false
    }, {
    id: 31,
    name: "狙撃",
    effect: "狙撃可能、遠隔攻撃命中威力判定ボーナス",
    effectValue: [4, 6, 8, 10, 12],
    page: 268,
    isObtain: false
    },
  {
    id: 32,
    name: "鉄の拳",
    effect: "素手威力ボーナス",
    effectValue: [1, 2, 4, 6, 8],
    page: 269,
    isObtain: false
    },
  {
    id: 33,
    name: "見切り",
    effect: "回避大成功、大失敗確率上昇",
    effectValue: [[11, 11, 10, 10, 9], [5, 4, 4, 3, 3]],
    page: 269,
    isObtain: false
    },
  {
    id: 34,
    name: "発勁",
    effect: "格闘威力ボーナス",
    effectValue: [[1, 0], [2, 0], [1, 3], [1, 6], [1, 6]],
    page: 270,
    isObtain: false
    },
  {
    id: 35,
    name: "二刀流",
    effect: "二刀流可能、命中ペナルティ軽減ボーナス",
    effectValue: [[4, 4, 3, 3, 2], [20, 6, 6, 5, 4]],
    page: 271,
    isObtain: false
    },
  {
    id: 36,
    name: "薙ぎ払い",
    effect: "薙ぎ払い可能、同時攻撃敵数増加",
    effectValue: [2, 3, 4, 5, 5],
    page: 272,
    isObtain: false
    },
  {
    id: 37,
    name: "怪物知識",
    effect: "怪物知識判定ボーナス",
    effectValue: [2, 4, 6, 8, 10],
    page: 273,
    isObtain: false
    },
  {
    id: 38,
    name: "呪文熟達",
    effect: "呪文行使、維持判定ボーナス",
    effectValue: [1, 2, 3, 4, 5],
    page: 273,
    isObtain: false,
    isInput: true
    },
  {
    id: 39,
    name: "の遣い手",
    effect: "大成功確率上昇、効力値ボーナス",
    effectValue: [[11, 11, 10, 10, 9], [0, 1, 2, 3, 4]],
    page: 274,
    isObtain: false,
    isInput: true
    },
  {
    id: 40,
    name: "呪文増強・威力",
    effect: "呪文威力ボーナス",
    effectValue: [1, 2, 3, 4, 5],
    page: 274,
    isObtain: false
    },
  {
    id: 41,
    name: "追加呪文",
    effect: "呪文追加習得可能",
    effectValue: [1, 2, 3, 4, 5],
    page: 275,
    isObtain: false,
    isInput: true
    },
  {
    id: 42,
    name: "魔法の才",
    effect: "魔法使用回数上昇",
    effectValue: [1, 2, 3, 4, 5],
    page: 276,
    isObtain: false
    },
         ]


var gs = [{
  id: 0,
  name: "統率",
  effect: "統率判定ボーナス",
  effectValue: [1, 2, 4],
  page: 276,
  isObtain: false,
}, {
  id: 1,
  name: "祈祷",
  effect: "祈祷によるボーナス",
  effectValue: [1, 2, 4],
  page: 277,
  isObtain: false,
}, {
  id: 2,
  name: "瞑想",
  effect: "瞑想判定ボーナス",
  effectValue: [1, 2, 4],
  page: 278,
  isObtain: false,
}, {
  id: 3,
  name: "鑑定",
  effect: "鑑定判定ボーナス",
  effectValue: [1, 2, 4],
  page: 278,
  isObtain: false,
}, {
  id: 4,
  name: "交渉",
  effect: "交渉判定ボーナス",
  effectValue: [1, 2, 4],
  page: 280,
  isObtain: false,
}, {
  id: 5,
  name: "神学",
  effect: "神学判定ボーナス",
  effectValue: [1, 2, 4],
  page: 280,
  isObtain: false,
}, {
  id: 6,
  name: "生存術",
  effect: "生存術判定ボーナス",
  effectValue: [1, 2, 4],
  page: 281,
  isObtain: false,
}, {
  id: 7,
  name: "先入観なし",
  effect: "直感判定",
  effectValue: [1, 2, 4],
  page: 282,
  isObtain: false,
}, {
  id: 8,
  name: "冷静沈着",
  effect: "魂魄抵抗、知力抵抗ボーナス",
  effectValue: [1, 2, 4],
  page: 282,
  isObtain: false,
}, {
  id: 9,
  name: "博識",
  effect: "博識判定ボーナス",
  effectValue: [1, 2, 4],
  page: 283,
  isObtain: false,
}, {
  id: 10,
  name: "犯罪知識",
  effect: "犯罪知識ボーナス",
  effectValue: [1, 2, 4],
  page: 283,
  isObtain: false,
}, {
  id: 11,
  name: "文献調査",
  effect: "文献調査判定ボーナス",
  effectValue: [1, 2, 4],
  page: 283,
  isObtain: false,
}, {
  id: 12,
  name: "礼儀作法",
  effect: "礼儀作法判定ボーナス",
  effectValue: [1, 2, 4],
  page: 284,
  isObtain: false,
}, {
  id: 13,
  name: "労働",
  effect: "労働判定ボーナス",
  effectValue: [1, 2, 4],
  page: 284,
  isObtain: false,
}, {
  id: 14,
  name: "生産業",
  effect: "生産知識判定、生産技術判定ボーナス",
  effectValue: [1, 2, 4],
  page: 285,
  isObtain: false,
  isInput: true,
}, {
  id: 15,
  name: "職人",
  effect: "職人制作判定、職人知識判定ボーナス",
  effectValue: [1, 2, 4],
  page: 286,
  isObtain: false,
  isInput: true,
}, {
  id: 16,
  name: "芸能",
  effect: "芸能実演判定、芸能知識判定ボーナス",
  effectValue: [1, 2, 4],
  page: 287,
  isObtain: false,
  isInput: true,
}, {
  id: 17,
  name: "工作",
  effect: "工作判定ボーナス",
  effectValue: [1, 2, 4],
  page: 289,
  isObtain: false,
}, {
  id: 18,
  name: "長距離移動",
  effect: "長距離移動判定ボーナス",
  effectValue: [1, 2, 4],
  page: 289,
  isObtain: false,
}, {
  id: 19,
  name: "騎乗",
  effect: "騎乗判定ボーナス",
  effectValue: [[1, 3], [2, 6], [4, 100000]],
  page: 289,
  isObtain: false,
}, {
  id: 20,
  name: "料理",
  effect: "料理判定ボーナス",
  effectValue: [1, 2, 4],
  page: 290,
  isObtain: false,
}, {
  id: 21,
  name: "信仰心",
  nameval: ["信仰心:志高神", "信仰心:地母神", "信仰心:交易神", "信仰心:知識神", "信仰心:戦女神",
    "信仰心:祖竜"],
  effect: "無詠唱で呪文を行使できる。無詠唱ペナルティ",
  effectval: [4, 2, 0],
  page: 291,
  isObtain: false
}, {
  id: 22,
  name: "精霊の愛し子",
  effect: "触媒が不要になり、使用した場合ボーナス",
  effectValue: [0, 1, 2],
  page: 291,
  isObtain: false,
}, {
  id: 23,
  name: "竜の末裔",
  effect: "装甲、素手攻撃を斬属性にしボーナス",
  effectValue: [1, 2, 3],
  page: 292,
  isObtain: false,
}, {
  id: 24,
  name: "暗視",
  effect: "暗闇を見通せる",
  effectValue: [60, 120, 600],
  page: 292,
  isObtain: false,
}]



var trueMagic = [
    //なんか５０個もあるじゃんこいつ
  {
    id: 0,
    name: '分身',
    effect: '分身を創り出す',
    effectDfficulty: 20, 
    efficacy: false, 
    isObtain: false,
    page:297,
},{
    id: 1,
    name: '解錠',
    effect: '鍵などを開ける',
    effectDfficulty: 10, 
    efficacy: [19,29,30], 
    isObtain: false,
    page:297,
},{
    id: 2,
    name: '贋金',
    effect: '金銀財宝の幻影',
    effectDfficulty: 15, 
    efficacy: [19,29,30], 
    isObtain: false,
    page:298,
},{
    id: 3,
    name: '通訳',
    effect: '異なる言語で会話',
    effectDfficulty: 10, 
    efficacy: false, 
    isObtain: false,
    page:298,
},{
    id: 4,
    name: '天候',
    effect: '望む天候を呼び寄せる',
    effectDfficulty: 15, 
    efficacy: [19,29,30], 
    isObtain: false,
    page:299,
},{
    id: 5,
    name: '脱出',
    effect: '危険からの脱出をひらめく',
    effectDfficulty: 0, 
    efficacy: false, 
    isObtain: false,
    page:299,
},{
    id: 6,
    name: '力与',
    effect: '武器に魔力を付与',
    effectDfficulty: 10, 
    efficacy: [19,29,30], 
    isObtain: false,
    page:300,
},{
    id: 7,
    name: '火与',
    effect: '武器を炎で包む',
    effectDfficulty: 10, 
    efficacy: [19,29,30], 
    isObtain: false,
    page:300,
},{
    id: 8,
    name: '抗魔',
    effect: '魔法の効力に耐性をつける',
    effectDfficulty: 10, 
    efficacy: false, 
    isObtain: false,
    page:301,
},{
    id: 9,
    name: '魅了',
    effect: '相手を魅了する',
    effectDfficulty: 10, 
    efficacy: [19,29,30], 
    isObtain: false,
    page:301,
},{
    id: 10,
    name: '破裂',
    effect: '小石に魔法のエネルギーを込めて、爆発させる',
    effectDfficulty: 5, 
    efficacy: [9,14,19,29,30], 
    isObtain: false,
    page:302,
},{
    id: 11,
    name: '流砂',
    effect: '地面を流砂に変える',
    effectDfficulty: 10, 
    efficacy: [19,29,39,40], 
    isObtain: false,
    page:303,
},{
    id: 12,
    name: '無手',
    effect: '手で物を持てなくなる',
    effectDfficulty: 10, 
    efficacy: false, 
    isObtain: false,
    page:303,
},{
    id: 13,
    name: '小鬼',
    effect: 'ゴブリンを召喚',
    effectDfficulty: 10, 
    efficacy: [14,19,24,29,30], 
    isObtain: false,
    page:304,
},{
    id: 14,
    name: '巨人',
    effect: '巨人を召喚する',
    effectDfficulty: 20, 
    efficacy: [24,29,39,40], 
    isObtain: false,
    page:305,
},{
    id: 15,
    name: '水薬',
    effect: '回復薬を作る',
    effectDfficulty: 10, 
    efficacy: false, 
    isObtain: false,
    page:306,
},{
    id: 16,
    name: '支配',
    effect: '知能の低い動物を操る',
    effectDfficulty: 10, 
    efficacy: false, 
    isObtain: false,
    page:306,
},{
    id: 17,
    name: '混乱',
    effect: '混乱させ、同士討ちを誘う',
    effectDfficulty: 10, 
    efficacy: [14,19,24,29,30], 
    isObtain: false,
    page:307,
},{
    id: 18,
    name: '石壁',
    effect: '石の壁を創り出す',
    effectDfficulty: 15, 
    efficacy: [19,24,29,30], 
    isObtain: false,
    page:307,
},{
    id: 19,
    name: '剛力',
    effect: '術者の体力増強',
    effectDfficulty: 10, 
    efficacy: [19,29,30], 
    isObtain: false,
    page:308,
},{
    id: 20,
    name: '粘糸',
    effect: '動作や移動を阻害する',
    effectDfficulty: 10, 
    efficacy: [14,19,24,29,30], 
    isObtain: false,
    page:308,
},{
    id: 21,
    name: '惰眠',
    effect: '生物を眠らせる',
    effectDfficulty: 10, 
    efficacy: [14,19,24,29,30], 
    isObtain: false,
    page:309,
},{
    id: 22,
    name: '停滞',
    effect: '敵の動きを遅くする',
    effectDfficulty: 15, 
    efficacy: [19,24,29,39,49,50], 
    isObtain: false,
    page:309,
},{
    id: 23,
    name: '落下',
    effect: '落下速度を緩やかにする',
    effectDfficulty: 10, 
    efficacy: false, 
    isObtain: false,
    page:310,
},{
    id: 24,
    name: '分影',
    effect: '幻影を5つ作る',
    effectDfficulty:15, 
    efficacy: false, 
    isObtain: false,
    page:310,
},{
    id: 25,
    name: '察知',
    effect: '危険を察知する',
    effectDfficulty: 5, 
    efficacy: [14,29,30], 
    isObtain: false,
    page:310,
},{
    id: 26,
    name: '舞踏',
    effect: '相手を眠らす',
    effectDfficulty: 5, 
    efficacy: false, 
    isObtain: false,
    page:311,
},{
    id: 27,
    name: '嫌気',
    effect: '相手の戦意をくじく',
    effectDfficulty: 10, 
    efficacy: [14,19,29,30], 
    isObtain: false,
    page:311,
},{
    id: 28,
    name: '矢避',
    effect: '矢による攻撃を防ぐ',
    effectDfficulty: 10, 
    efficacy: [14,19,24,29,30], 
    isObtain: false,
    page:312,
},{
    id: 29,
    name: '透過',
    effect: '透明になる',
    effectDfficulty: 10, 
    efficacy: false, 
    isObtain: false,
    page:312,
},{
    id: 30,
    name: '恐慌',
    effect: '恐怖させる',
    effectDfficulty: 10, 
    efficacy: [14,19,29,30], 
    isObtain: false,
    page:313,
},{
    id: 31,
    name: '獣心',
    effect: '動物の心を読み取り会話ができる',
    effectDfficulty: 10, 
    efficacy: false, 
    isObtain: false,
    page:313,
},{
    id: 32,
    name: '幻影',
    effect: '幻影を創り出す',
    effectDfficulty:5, 
    efficacy: [9,19,29,3940], 
    isObtain: false,
    page:314,
},{
    id: 33,
    name: '巨大',
    effect: '巨大化させる',
    effectDfficulty: 10, 
    efficacy: [14,19,29,39,40], 
    isObtain: false,
    page:315,
},{
    id: 34,
    name: '火球',
    effect: '火球で攻撃する',
    effectDfficulty: 10, 
    efficacy: [14,19,24,29,30], 
    isObtain: false,
    page:316,
},{
    id: 35,
    name: '火矢',
    effect: '炎の矢を放って攻撃する',
    effectDfficulty: 5, 
    efficacy: [9,14,19,24,29,30], 
    isObtain: false,
    page:316,
},{
    id: 36,
    name: '遠見',
    effect: '近い将来を見る',
    effectDfficulty: 20, 
    efficacy: false, 
    isObtain: false,
    page:317,
},{
    id: 37,
    name: '力場',
    effect: '自在に力を変えられる力場の壁を創り出す',
    effectDfficulty: 15, 
    efficacy: [19,24,29,39,49,50], 
    isObtain: false,
    page:317,
},{
    id: 38,
    name: '突風',
    effect: '風を巻き起こす',
    effectDfficulty: 5, 
    efficacy: [14,19,24,29,30], 
    isObtain: false,
    page:318,
},{
    id: 39,
    name: '呼気',
    effect: '呼吸を保つ',
    effectDfficulty:10, 
    efficacy: [19,29,30], 
    isObtain: false,
    page:318,
},{
    id: 40,
    name: '吹雪',
    effect: '円錐状に吹雪を発生させて攻撃',
    effectDfficulty: 20, 
    efficacy: [24,29,34,39,40], 
    isObtain: false,
    page:319,
},{
    id: 41,
    name: '浮遊',
    effect: '自由に宙を舞える',
    effectDfficulty: 10, 
    efficacy: [19,29,39,40], 
    isObtain: false,
    page:319,
},{
    id: 42,
    name: '加速',
    effect: '俊敏性と思考速度を高める',
    effectDfficulty: 15, 
    efficacy: [19,24,29,39,49,50], 
    isObtain: false,
    page:320,
},{
    id: 43,
    name: '読心',
    effect: '思考を読み取る',
    effectDfficulty: 10, 
    efficacy: [19,29,30], 
    isObtain: false,
    page:320,
},{
    id: 44,
    name: '力矢',
    effect: 'エネルギーの矢を放つ',
    effectDfficulty: 10, 
    efficacy: [14,19,29,30], 
    isObtain: false,
    page:321,
},{
    id: 45,
    name: '魔霧',
    effect: '視界を遮る霧を生み出す',
    effectDfficulty: 10, 
    efficacy: false, 
    isObtain: false,
    page:321,
},{
    id: 46,
    name: '円盾',
    effect: '魔法の盾としての性質を与える',
    effectDfficulty: 10, 
    efficacy: [19,29,30], 
    isObtain: false,
    page:322,
},{
    id: 47,
    name: '光明',
    effect: '物体を光らせたり光の球を生み出し操る',
    effectDfficulty: 5, 
    efficacy: [14,29,30], 
    isObtain: false,
    page:322,
},{
    id: 48,
    name: '稲妻',
    effect: '稲妻を放ち攻撃する',
    effectDfficulty: 15, 
    efficacy: [19,24,30,35,39,40], 
    isObtain: false,
    page:323,
},{
    id: 49,
    name: '施錠',
    effect: '魔法の力で施錠する',
    effectDfficulty: 5, 
    efficacy: [14,19,29,39,40], 
    isObtain: false,
    page:323,
}
]

var miracleMagic = [
  {
    id: 0,
    name: '解毒',
    effect: '毒や病気を解除する',
    effectDfficulty: 10,
    efficacy: false,
    isObtain: false,
    page: 324,
  }, {
    id: 1,
    name: '沈黙',
    effect: '音が発生しなくなる',
    effectDfficulty: 10,
    efficacy: [19, 29, 30],
    isObtain: false,
    page: 325,
  }, {
    id: 2,
    name: '聖域',
    effect: '聖水などで結界を張る',
    effectDfficulty: 15,
    efficacy: false,
    isObtain: false,
    page: 326,
  }, {
    id: 3,
    name: '敵意',
    effect: '敵意や害意を持つものが近づいているのを感知',
    effectDfficulty: 10,
    efficacy: false,
    isObtain: false,
    page: 326,
  }, {
    id: 4,
    name: '看破',
    effect: '嘘を見抜く',
    effectDfficulty: 10,
    efficacy: false,
    isObtain: false,
    page: 326,
  }, {
    id: 5,
    name: '解呪',
    effect: '呪文で創造された存在を消す',
    effectDfficulty: 10,
    efficacy: false,
    isObtain: false,
    page: 326,
  }, {
    id: 6,
    name: '鎮静',
    effect: '悪影響を引き受け、改めて抵抗を行えます',
    effectDfficulty: 10,
    efficacy: false,
    isObtain: false,
    page: 327,
  }, {
    id: 8,
    name: '賊活',
    effect: '消耗を回復する。',
    effectDfficulty: 10,
    efficacy: [19, 29, 30],
    isObtain: false,
    page: 327,
  }, {
    id: 9,
    name: '小癒',
    effect: '負傷を回復する',
    effectDfficulty: 5,
    efficacy: [9, 14, 19, 24, 29, 30],
    isObtain: false,
    page: 328,
  }, {
    id: 10,
    name: '聖歌',
    effect: '儀式の成功率を高める',
    effectDfficulty: 5,
    efficacy: false,
    isObtain: false,
    page: 328,
  }, {
    id: 11,
    name: '浄化',
    effect: '異物を取り除きます',
    effectDfficulty: 5,
    efficacy: [9, 19, 29, 39, 40],
    isObtain: false,
    page: 329,
  }, {
    id: 12,
    name: '祝福',
    effect: '武器に祝福を与え、命中と威力を高めます',
    effectDfficulty: 10,
    efficacy: [14, 19, 24, 29, 30],
    isObtain: false,
    page: 329,
  }, {
    id: 13,
    name: '聖壁',
    effect: '敵対者の移動や攻撃を阻む',
    effectDfficulty: 15,
    efficacy: false,
    isObtain: false,
    page: 330,
  }, {
    id: 14,
    name: '聖撃',
    effect: '稲妻を飛ばし攻撃を行う',
    effectDfficulty: 5,
    efficacy: [9, 14, 19, 24, 29, 30],
    isObtain: false,
    page: 331,
  }, {
    id: 15,
    name: '聖光',
    effect: 'アンデットを祓う力を持つ光を放つ',
    effectDfficulty: 10,
    efficacy: false,
    isObtain: false,
    page: 331,
  }, {
    id: 16,
    name: '戦槍',
    effect: '光の槍を放ち攻撃',
    effectDfficulty: 15,
    efficacy: [19, 24, 29, 34, 39, 49, 50],
    isObtain: false,
    page: 332,
    goddes: '戦女神'
  }, {
    id: 17,
    name: '鼓舞',
    effect: '恐怖に対する抵抗',
    effectDfficulty: 10,
    efficacy: [14, 19, 24, 29, 30],
    isObtain: false,
    page: 332,
    goddes: '戦女神'
  }, {
    id: 18,
    name: '聖鎧',
    effect: '鎧具足や装束を呼び出し恩恵を得る',
    effectDfficulty: 15,
    efficacy: [19, 29, 39, 40],
    isObtain: false,
    page: 333,
    goddes: '戦女神'
  }, {
    id: 18,
    name: '契約',
    effect: '合意の上で強制の持つ契約を結ばせる',
    effectDfficulty: 20,
    efficacy: false,
    isObtain: false,
    page: 333,
    goddes: '交易神'
  }, {
    id: 19,
    name: '旅人',
    effect: '対象の人または乗り物の移動速度を早める',
    effectDfficulty: 15,
    efficacy: [19, 29, 30],
    isObtain: false,
    page: 334,
    goddes: '交易神'

  }, {
    id: 20,
    name: '逆転',
    effect: '運不運への干渉',
    effectDfficulty: 10,
    efficacy: false,
    isObtain: false,
    page: 334,
    goddes: '交易神'
  }, {
    id: 21,
    name: '審問',
    effect: '奇跡を封じる',
    effectDfficulty: 10,
    efficacy: false,
    isObtain: false,
    page: 335,
    goddes:'至高神'
  }, {
    id: 22,
    name: '鑑定',
    effect: '物品を識別し詳細を知る',
    effectDfficulty: 15,
    efficacy: false,
    isObtain: false,
    page: 335,
    goddes:'至高神'
  }, {
    id: 23,
    name: '聖断',
    effect: '瞬間攻撃力強化',
    effectDfficulty: 20,
    efficacy:[29,39,40],
    isObtain: false,
    page: 335,
    goddes:'至高神'
  }, {
    id: 24,
    name: '天啓',
    effect: '知識神に対して「是」か「否」か問う',
    effectDfficulty: 10,
    efficacy: false,
    isObtain: false,
    page: 336,
    goddes:'知識神'
  },{
    id: 25,
    name: '真灯',
    effect: 'わずかな未来視で行動を成功に導く',
    effectDfficulty: 10,
    efficacy: false,
    isObtain: false,
    page: 336,
    goddes:'知識神'
  },{
    id: 26,
    name: '読解',
    effect: '知らない言語を解読できる',
    effectDfficulty: 10,
    efficacy: [19,29,30],
    isObtain: false,
    page: 337,
    goddes:'知識神'
  },{
    id: 27,
    name: '聖餐',
    effect: '生きるための糧を創り出す',
    effectDfficulty: 15,
    efficacy: false,
    isObtain: false,
    page: 337,
    goddes:'地母神'
  },{
    id: 28,
    name: '不動',
    effect: '無移動で強力な防御・回復能力を得る',
    effectDfficulty: 10,
    efficacy: [14,19,29,39,40],
    isObtain: false,
    page: 338,
    goddes:'地母神'
  },{
    id: 29,
    name: '和睦',
    effect: '戦意を低下させる',
    effectDfficulty: 15,
    efficacy: false,
    isObtain: false,
    page: 338,
    goddes:'地母神'
  }
]

var dragonMagic = [
  {
    id: 0,
    name: '擬態',
    effect: '背景に溶け込む',
    effectDfficulty: 10,
    efficacy: false,
    isObtain: false,
    page: 339,
  }, {
    id: 1,
    name: '念話',
    effect: 'テレパシー',
    effectDfficulty: 10,
    efficacy: false,
    isObtain: false,
    page: 339,
  }, {
    id: 2,
    name: '竜牙刀/竜爪',
    effect: '武器を作ったり素手を強化する',
    effectDfficulty: 10,
    efficacy: [14, 19, 24, 29, 30],
    isObtain: false,
    page: 340,
  }, {
    id: 3,
    name: '敵意',
    effect: '敵意や害意を感知',
    effectDfficulty: 10,
    efficacy: [19, 29, 30],
    isObtain: false,
    page: 340,
  }, {
    id: 4,
    name: '突撃',
    effect: '強力な突進攻撃',
    effectDfficulty: 10,
    efficacy: [14, 19, 29, 39, 40],
    isObtain: false,
    page: 341,
  }, {
    id: 5,
    name: '狩場',
    effect: '位置を探り結界を張る',
    effectDfficulty: 15,
    efficacy: false,
    isObtain: false,
    page: 341,
  }, {
    id: 6,
    name: '竜眼',
    effect: '視力強化',
    effectDfficulty: 10,
    efficacy: [14, 19, 29, 30],
    isObtain: false,
    page: 342,
  }, {
    id: 7,
    name: '竜鱗',
    effect: '分厚い鎧を纏う',
    effectDfficulty: 10,
    efficacy: [19, 29, 30],
    isObtain: false,
    page: 342,
  }, {
    id: 8,
    name: '竜牙兵',
    effect: '竜牙兵を創り出す',
    effectDfficulty: 15,
    efficacy: [19, 29, 30],
    isObtain: false,
    page: 343,
  }, {
    id: 9,
    name: '竜血',
    effect: '血を飲ませた相手に、祖竜術をかける',
    effectDfficulty: 0,
    efficacy: false,
    isObtain: false,
    page: 343,
  }, {
    id: 10,
    name: '竜命',
    effect: '耐性会得',
    effectDfficulty: 10,
    efficacy: [19, 29, 30],
    isObtain: false,
    page: 344,
  }, {
    id: 11,
    name: '竜息',
    effect: 'ブレスで攻撃',
    effectDfficulty: 10,
    efficacy: [19, 29, 39, 40],
    isObtain: false,
    page: 345,
  }, {
    id: 12,
    name: '竜吠',
    effect: '咆哮を放つ',
    effectDfficulty: 15,
    efficacy: [19, 29, 39, 40],
    isObtain: false,
    page: 346,
  }, {
    id: 13,
    name: '対決',
    effect: '自分への攻撃を強制',
    effectDfficulty: 10,
    efficacy: false,
    isObtain: false,
    page: 346,
  }, {
    id: 14,
    name: '擬竜',
    effect: '体力点加算',
    effectDfficulty: 10,
    efficacy: [19, 29, 30],
    isObtain: false,
    page: 347,
  }, {
    id: 15,
    name: '賊活',
    effect: '消耗回復',
    effectDfficulty: 10,
    efficacy: [19, 29, 30],
    isObtain: false,
    page: 347,
  }, {
    id: 16,
    name: '小癒',
    effect: '負傷回復',
    effectDfficulty: 5,
    efficacy: [9, 14, 19, 24, 29, 30],
    isObtain: false,
    page: 347,
  }, {
    id: 17,
    name: '胃石',
    effect: '毒などの耐性と攻撃性が高まる',
    effectDfficulty: 10,
    efficacy: false,
    isObtain: false,
    page: 348,
  }, {
    id: 18,
    name: '腐食',
    effect: '金属を腐食させる',
    effectDfficulty: 5,
    efficacy: false,
    isObtain: false,
    page: 349,
  }, {
    id: 19,
    name: '竜翼',
    effect: '空を飛ぶ',
    effectDfficulty: 20,
    efficacy: false,
    isObtain: false,
    page: 349,
  },
]


var spiritMagic = [
  {
    id: 0,
    name: '命水',
    effect: '負傷と疲労回復',
    effectDfficulty: 10,
    efficacy: [14, 19, 24, 29, 30],
    isObtain: false,
    page: 349,
  }, {
    id: 1,
    name: '燦光',
    effect: '範囲内にあるものを光らせる',
    effectDfficulty: 5,
    efficacy: [9, 19, 29, 30],
    isObtain: false,
    page: 350,
  }, {
    id: 2,
    name: '隠蔽',
    effect: '姿を隠す',
    effectDfficulty: 15,
    efficacy: false,
    isObtain: false,
    page: 350,
  }, {
    id: 3,
    name: '風化',
    effect: '物質の時間を進める',
    effectDfficulty: 5,
    efficacy: [9, 19, 29, 30],
    isObtain: false,
    page: 351,
  }, {
    id: 4,
    name: '水歩',
    effect: '水の上を歩く、水中の物を浮かばせる',
    effectDfficulty: 10,
    efficacy: [19, 29, 30],
    isObtain: false,
    page: 351,
  }, {
    id: 5,
    name: '猫目',
    effect: 'ケットシーの力を借りる',
    effectDfficulty: 10,
    efficacy: [14, 19, 24, 29, 30],
    isObtain: false,
    page: 352
  }, {
    id: 6,
    name: '雨乞',
    effect: '雨を降らす',
    effectDfficulty: 10,
    efficacy: [14, 19, 24, 29, 30],
    isObtain: false,
    page: 353,
  }, {
    id: 7,
    name: '使役',
    effect: '精霊を呼び出し指示を出す',
    effectDfficulty: 10,
    efficacy: [19, 29, 30],
    isObtain: false,
    page: 354,
  }, {
    id: 8,
    name: '雷矢',
    effect: '雷を放ち攻撃',
    effectDfficulty: 10,
    efficacy: [14, 19, 24, 29, 30],
    isObtain: false,
    page: 354,
  }, {
    id: 9,
    name: '石弾',
    effect: '石礫で球状の範囲を攻撃',
    effectDfficulty: 10,
    efficacy: [14, 19, 24, 29, 39, 40],
    isObtain: false,
    page: 355
  }, {
    id: 10,
    name: '泥罠',
    effect: '地面に汚泥を生み出す',
    effectDfficulty: 10,
    efficacy: [19, 29, 39, 40],
    isObtain: false,
    page: 355,
  }, {
    id: 11,
    name: '霊壁',
    effect: '任意の属性に対応する壁',
    effectDfficulty: 15,
    efficacy: false,
    isObtain: false,
    page: 356,
  }, {
    id: 12,
    name: '暗黒',
    effect: '範囲内を暗黒にする',
    effectDfficulty: 10,
    efficacy: [14, 19, 24, 29, 30],
    isObtain: false,
    page: 357,
  }, {
    id: 13,
    name: '追風',
    effect: '対象 乗物の速度を速める',
    effectDfficulty: 5,
    efficacy: [9, 19, 29, 30],
    isObtain: false,
    page: 357,
  }, {
    id: 14,
    name: '着火',
    effect: '物を急速に熱し火を通す',
    effectDfficulty: 5,
    efficacy: false,
    isObtain: false,
    page: 358,
  }, {
    id: 15,
    name: '酪酊',
    effect: '判断を狂わせたり眠らせたり',
    effectDfficulty: 10,
    efficacy: [14, 19, 24, 29, 30],
    isObtain: false,
    page: 358
  }, {
    id: 16,
    name: '隧道',
    effect: '穴をあけ、トンネルを作る',
    effectDfficulty: 15,
    efficacy: false,
    isObtain: false,
    page: 359,
  }, {
    id: 17,
    name: '放逐',
    effect: '召喚された精霊を返す',
    effectDfficulty: 10,
    efficacy: false,
    isObtain: false,
    page: 359,
  },
  {
    id: 18,
    name: '力球',
    effect: '不可視の力場を叩きつける',
    effectDfficulty: 20,
    efficacy: false,
    isObtain: false,
    page: 359,
  },
  {
    id: 19,
    name: '熱波',
    effect: '高熱を発し、近くの敵にダメージ',
    effectDfficulty: 10,
    efficacy: [19, 29, 30],
    isObtain: false,
    page: 360,
  },
  {
    id: 20,
    name: '火矢',
    effect: '炎の矢で攻撃',
    effectDfficulty: 5,
    efficacy: [9, 14, 19, 24, 29, 30],
    isObtain: false,
    page: 360,
  },
  {
    id: 21,
    name: '恐怖',
    effect: '戦場に恐怖を与える',
    effectDfficulty: 10,
    efficacy: [14, 19, 29, 30],
    isObtain: false,
    page: 361,
  },
  {
    id: 22,
    name: '降下',
    effect: '落下速度を操作する',
    effectDfficulty: 10,
    efficacy: [19, 29, 30],
    isObtain: false,
    page: 362,
  },
  {
    id: 23,
    name: '吹雪',
    effect: '円錐状に吹雪を発生させ攻撃',
    effectDfficulty: 20,
    efficacy: [24, 29, 34, 39, 40],
    isObtain: false,
    page: 362,
  },
  {
    id: 24,
    name: '呼気',
    effect: '水の悪影響に耐性',
    effectDfficulty: 10,
    efficacy: [19, 29, 30],
    isObtain: false,
    page: 363,
  },
  {
    id: 25,
    name: '捕縛',
    effect: '移動を封じる',
    effectDfficulty: 10,
    efficacy: false,
    isObtain: false,
    page: 363,
  }
]
