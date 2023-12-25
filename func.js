const test = () => {
	log(dataVid("https://anoboy.monster/2022/05/pokemon-2019-episode-108/","https://194.163.183.129/boruto-episode-247/"))
}

function runFunction(){
	return gdata();
	}

  function dataVid(x,y) {

  $ = Cheerio.load(geturl(x))
    
    $(".vmiror:contains('Btube') a, .vmiror:contains('AC') a").attr({"class":"s1 dropdown-item", "style":"", "href":"#script"})
   
    $(".vmiror:contains('Btube') a, .vmiror:contains('AC') a").wrap('<li>')
    
   
    var src = $("iframe").attr("src")
    if(src){
      $(".vmiror:contains('Btube') a").first().attr("data-video", src)
      }
    var s1 = $(".vmiror:contains('Btube')").html()
    .replace("Btube", "<li><h5 class='dropdown-header'>Server 1</h5></li>")
    
    var s2 = $(".vmiror:contains('AC')").html()
    .replace("AC", "<li><h5 class='dropdown-header'>Server 2</h5></li>")
    .replace(/\/uploads/g, target+"/uploads")
    
    var strim = s1.replace(/\|/g,"")+s2.replace("|","")
  
  
	$ = Cheerio.load($("div#colomb").html(), null, false);
	$("amp-social-share,br:last-child, b").remove();
    var dl =''
    $("p > span").each((i,ii) =>{
              $(ii).find("a").wrapAll("<div class='d-flex flex-wrap'>")
              $(ii).find("a").addClass("p-1")
   dl = $("p").html().replace(/\|/g,"")
  })
  
return `
    cback({ "strim": ${JSON.stringify(strim) },
            "dl": ${JSON.stringify(dl) }
          });
    `
}
  
  
const cstext = (e) => ContentService.createTextOutput(e).setMimeType(ContentService.MimeType.JAVASCRIPT);
const geturl = (a) => UrlFetchApp.fetch(a, {muteHttpExceptions: true}).getContentText();
const log = (e) => Logger.log(e);

function geturlD(a) {
	var rah = {
		method: "get",
		contentType: "application/json",
		headers: {
			Authorization: "Bearer " + ScriptApp.getOAuthToken(),
			Accept: "application/json"
		},
		muteHttpExceptions: true
	};
	return UrlFetchApp.fetch(a, rah).getContentText();
}

function post(m, url, data) {
  try {
	var rah = {
		method: m,
		contentType: "application/json",
		headers: {
			"Authorization": "Bearer " + ScriptApp.getOAuthToken(),
			"Accept": "application/json",
            "Accept-Encoding": "gzip",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:67.0) Gecko/20100101 Firefox/67.0,gzip(gfe)"
		},
		muteHttpExceptions: true,
		payload: JSON.stringify(data)
	};

	return UrlFetchApp.fetch(url, rah).getContentText();
} catch (e){
  
  return JSON.stringify(e);
  }
}





function samurl(x) {
	$ = Cheerio.load(x);
	return `<a data-video="${$("li:contains('FULLHD') a:contains('Acefile')").attr("href").replace("/f/", "/player/")}" class="s1">1080p</a>`;

}

function sam(x) {
	$ = Cheerio.load(geturl('https://194.163.183.129/'));
	$ = Cheerio.load($(".widget_senction:contains('Update Anime')").html(), null, false);
	$("a").each(function() {
		var pp = $(this).text();
		pp = pp.replace(/[^\sa-zA-Z0-9]+/gi, '');
		$(this).text(pp);
	});
	var z = x.replace(/[^\sa-zA-Z0-9]+/gi, '').split(" ");
	z = `${z[0]} ${z[1]}`;
	try {

		return $(`.entry-title a:contains('${z}')`)
			.attr("href")
			.split("/")[3];
	} catch (e) {
		return 'err';

	}
}



const repl = (x) => {
      var xx = x.toLowerCase()
      .split(" sub")[0];
      xx = xx.replace(/[^\w\s]/gi, ' ');
      xx = xx.trim();
      xx = xx.replace(/  |   /gi, " ");
      xx = xx.replace(/  |   /gi, " ");
      xx = xx.replace(/ /gi,"-");
      return xx;
}