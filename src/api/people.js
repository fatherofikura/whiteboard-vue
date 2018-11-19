// 商品リストの配列
var database = [
  {id:1,name:'高橋 竜太郎',position:'部長',extension_number:'(20)602',status:'在席',section:'A開発課',note:''},
  {id:2,name:'前野 耕太',position:'課長',extension_number:'(20)691',status:'未出社',section:'A開発課',note:''},
  {id:3,name:'国分 和敏',position:'課長補佐',extension_number:'(20)512',status:'帰宅',section:'A開発課',note:''},
  {id:4,name:'西久保 啓一郎',position:'課長補佐',extension_number:'(20)401',status:'出張',section:'A開発課',note:''},
  {id:5,name:'井村 典子',position:'主任技師',extension_number:'(20)378',status:'外出',section:'A開発課',note:''},
  {id:6,name:'杉澤 弘子',position:'技師',extension_number:'(20)378',status:'社内',section:'A開発課',note:''},
  {id:7,name:'草柳 由起',position:'技師',extension_number:'(20)378',status:'休み',section:'A開発課',note:''},
  {id:8,name:'宇梶 未来',position:'一般',extension_number:'(20)378',status:'その他',section:'A開発課',note:''},
  {id:9,name:'鎌田 誠',position:'一般',extension_number:'(20)354',status:'在席',section:'A開発課',note:''},
  {id:10,name:'内野 和彦',position:'一般',extension_number:'(20)354',status:'在席',section:'A開発課',note:''},
  {id:11,name:'崔 英樹',position:'一般',extension_number:'(20)354',status:'在席',section:'A開発課',note:''},
  {id:12,name:'井野 純',position:'一般',extension_number:'(20)355',status:'未出社',section:'A開発課',note:''},
  {id:13,name:'砂川 寿',position:'一般',extension_number:'(20)355',status:'未出社',section:'A開発課',note:''},
  {id:14,name:'広岡 研二',position:'一般',extension_number:'(20)355',status:'未出社',section:'A開発課',note:''},
  {id:15,name:'富松 鉄也',position:'一般',extension_number:'(20)356',status:'帰宅',section:'A開発課',note:''},
  {id:16,name:'庄 雄樹',position:'一般',extension_number:'(20)356',status:'帰宅',section:'A開発課',note:''},
  {id:17,name:'北野 梨紗',position:'部長',extension_number:'(20)441',status:'在席',section:'B設計課',note:''},
  {id:18,name:'鶴見 ゆり',position:'課長',extension_number:'(20)442',status:'在席',section:'B設計課',note:''},
  {id:19,name:'桝田 真依子',position:'課長補佐',extension_number:'(20)443',status:'在席',section:'B設計課',note:''},
  {id:20,name:'堀野 祐希',position:'一般',extension_number:'(20)444',status:'在席',section:'B設計課',note:''},
]


// インポート先で使用できる関数をオブジェクトとしてまとめたもの
export default {
  select(switchedFilters, sectionName) {
    return database.filter(function(value) {
      return switchedFilters.includes(value.status) && value.section==sectionName
    })
  },
  update(checkedList, buttonName, note){
    checkedList.forEach(function(value) {
      const index = database.findIndex(function(check) {
        return check.id == value.id
      })
      database[index].status = buttonName
      database[index].note = note
    })
  }
}
