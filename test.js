function myFunction() {
  var nav = "page/"
  var url = "https://62.182.83.93/category/boruto-naruto-next-generations/"
             +nav;
  var path = urlPath("http://www.jutsuterlarang.my.id/2021/01/boruto-episode-184-subtitle-indonesia.html?m=1")
  var f = 13
 
  var sel = ".column-content a"
 
  var a = ''
  $ = Cheerio.load(geturl(url+1))
  var titl = $("h3.ibox1").eq(0).text()
  log(titl)
  for(var i = 1;i < f; i++){
  $ = Cheerio.load(geturl(url+i))
  var lbl = urlPath($(sel).eq(1).attr("href"))
  var cc = lbl.split("/")[3].split("-episode")[0].replace(/-/g, " ")+ " sub indo"
    var img = $("amp-img").eq(6).attr("src")
  var desc = $(".contentdeks").html()
  $("tbody tr").first().remove()
  var info = $(".contenttable").html()
  var tt = $("h3.ibox1").eq(0).text().split(" Episode")[0]
  var e = $("h3.ibox1").eq(0).text().split("Episode ")[1]
  /*var dates = $("time")
                   .attr("datetime")
                   .split(" ")[0]
                   .replace(/\//g, "-")
  var time = $("time")
                   .attr("datetime")
                   .split(" ").pop();
  var dIso = `${dates}T${time}Z`;
  */
  
  $(sel+":contains('Download')").remove()
  $(sel).each( function(i,va){
    log( $(this).find("h3").html())
    if($(this).find("h3").html() != null ){
  a += `\n<div class="col-4"><button class="eps btn border text-center text-truncate p-1" data-eps="${ urlPath( $(this).attr("href") )}">
    Episode ${ $(this).find("h3").html().split("Episode ")[1] }
    </button></div>\n`
    }
    })
    }
  

          var id = JSON.parse(geturlD(`https://www.googleapis.com/blogger/v3/blogs/${bid}/posts/bypath?path=${path}&fields=id`)).id
                        log(id)
	var ct = `
  <div data-nosnippet="true">
  <p style="display:none">Lihat juga eps lain anime <b>${tt}</b> </p>
  
  <div data-samurl="err" data-anurl="" class="vid"></div>
  </div>
  <div id="eps">
  <div class="eps row">
    ${a}
  </div>
  </div>
  <div style="text-align:center">Download</div>
  <div class="separator" style="clear: both; text-align: center;">
  <a href="${   img   }" imageanchor="1" style="margin-left: 1em; margin-right: 1em;">
  <img loading="lazy" border="0" src="${   img   }" />
  </a></div>
  
  <div class="row">
    <div class="col-12 col-md-6 sinopsis">
     Sinopsis: ${desc}
    </div>
    <div class="col-12 col-md-6 info">
     ${ info }
    </div>
   </div>
  `;
  
  
  
  
  var push = {
        content: `${ct}`,
        title: `${titl} Sub Indo`,
        labels: ["anime", cc],
        published: date
      }
    log(  post(
        "patch",
        `https://www.googleapis.com/blogger/v3/blogs/${ bid }/posts/${id}?fields=kind,title`,
        push
      ) ) 
  
  //return ct
}
