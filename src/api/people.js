// 商品リストの配列
const database = [
  {id:1,'user':{name:'高橋 竜太郎',position:'部長',extension_number:'(20)602'},status:'在席'},
  {id:2,'user':{name:'前野 耕太',position:'課長',extension_number:'(20)691'},status:'未出社'},
  {id:3,'user':{name:'国分 和敏',position:'課長補佐',extension_number:'(20)512'},status:'帰宅'},
  {id:4,'user':{name:'西久保 啓一郎',position:'課長補佐',extension_number:'(20)401'},status:'出張'},
  {id:5,'user':{name:'井村 典子',position:'主任技師',extension_number:'(20)378'},status:'外出'},
  {id:6,'user':{name:'杉澤 弘子',position:'技師',extension_number:'(20)378'},status:'社内'},
  {id:7,'user':{name:'草柳 由起',position:'技師',extension_number:'(20)378'},status:'休み'},
  {id:8,'user':{name:'宇梶 未来',position:'一般',extension_number:'(20)378'},status:'その他'},
  {id:9,'user':{name:'鎌田 誠',position:'一般',extension_number:'(20)354'},status:'在席'},
  {id:10,'user':{name:'内野 和彦',position:'一般',extension_number:'(20)354'},status:'在席'},
  {id:11,'user':{name:'崔 英樹',position:'一般',extension_number:'(20)354'},status:'在席'},
  {id:12,'user':{name:'井野 純',position:'一般',extension_number:'(20)355'},status:'未出社'},
  {id:13,'user':{name:'砂川 寿',position:'一般',extension_number:'(20)355'},status:'未出社'},
  {id:14,'user':{name:'広岡 研二',position:'一般',extension_number:'(20)355'},status:'未出社'},
  {id:15,'user':{name:'富松 鉄也',position:'一般',extension_number:'(20)356'},status:'帰宅'},
  {id:16,'user':{name:'庄 雄樹',position:'一般',extension_number:'(20)356'},status:'帰宅'},
]

// インポート先で使用できる関数をオブジェクトとしてまとめたもの
export default {
  fetch(id) { return database },
  fetchWithFilter(switchedFilters) {
    return database.filter(function(value) {
      return switchedFilters.includes(value.status)
    })
  },
  find(id) { return database.find(el => el.id === id) },
  asyncFind(id, callback) {
    setTimeout(()=> {
      callback(database.find(el => el.id === id))
    }, 1000)
  }
}
