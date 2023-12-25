
function xt(){
  
    var plogin =
   {
     "email":"telokuh@gmail.com",
     "password" : "naruto02",
     "action" : "login"
   };
  var headers = {
    'Content-Type':'application/x-www-form-urlencoded',
    'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Cookie':'__lang=ID; __utmmobile=0xe13d09961ead65af; session=w5~8e9e4b1d292645db8d67cd1ee19577bc20361473992161; __template=mobile; xt_screener_=1651338486+180.246.94.225+180.246.94.225; _xta_vid=09a53808350c0583691e158cec2773e9-1651338788; _xt_bc3f77f55117930a90851d76c86e=1651340588#d84aab31510b09964b60cfd88859f470',
  }
  var opsi =
   {
     "method" : "get",
     "headers": headers,
     "payload" : "",
     "followRedirects" : true
   };
  
  log(UrlFetchApp.fetch("https://xtgem.com/autologin/eca24e0b4f4156fac9247eb37c29d7b7/dmFuZ2tlLnh0Z2VtLmNvbQ==",opsi).getContentText() )
  }




function wapka() {
  
        var url = "https://62.182.83.93/2022/04/black%e2%98%85%e2%98%85rock-shooter-dawn-fall-episode-3/"
      const wk = new PostData(url)
                   
  
  var payload = 
   {
     "sub_title" : wk.title,
     "content" : ct(wk.$.html(), wk.url),
     "title": wk.cc,
     "thumb": wk.img,
     "wk_token":"",
     "wk_cid":""
   };
   
  var plogin =
   {
     "user":"Admin",
     "pass" : "naruto02",
     "wk_cid": "",
     "wk_token":"",
     "submit" : "Login"
   };
  var headers = {
    'Connection':'keep-alive',
    'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Cookie':'',
  }
  var opsi =
   {
     "method" : "post",
     "headers": headers,
     "payload" : "",
     "followRedirects" : true
   };
  
  var uri = "https://animebot.wapka.top/wpost"
  var login = UrlFetchApp.fetch(uri)
  $ = Cheerio.load( login.getContentText() )
  var cid = $("[name='wk_cid']").attr("value")
  var token = $("[name='wk_token']").attr("value")
  
  var kukiLogin = login.getAllHeaders()['Set-Cookie'].replace(/[|]/g,'').split(";")[0];
  plogin.wk_cid = cid
  plogin.wk_token = token
  opsi.payload = plogin
  headers.Cookie = kukiLogin
  var exec = UrlFetchApp.fetch(
    uri
  , opsi);
  //log(exec.getContentText() )
  
  
  
  var t = UrlFetchApp.fetch(
    uri, opsi);
  
  $ = Cheerio.load(t.getContentText());
  cid = $("[name='wk_cid']").attr("value")
  token = $("[name='wk_token']").attr("value")
  
  payload.wk_token = token
  payload.wk_cid = cid
  opsi.payload = payload;
  
  
  var post = UrlFetchApp.fetch( uri, opsi);
 
    $ = Cheerio.load(post.getContentText())
    log( $(".res").html() )
  
}
