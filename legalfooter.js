var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/****************************************************************/
/*  Disneylatino.com Legal Footer
/*  Updated 2010-03-04 by Diego Bretti
/****************************************************************/

var lfIsValidColor = false;
var lfDcWrtInf = "";

var lfDCOM3 = false;

var lFArVersion = navigator.appVersion.split("MSIE");
var lFVersion = parseFloat(lFArVersion[1]);
var lFBrowserAgent = navigator.userAgent;

var legalFooterLineWidth = 0;

if (typeof legalFooterWidth == "undefined") {
	var legalFooterWidth = 890;
}

if (typeof legalFooterColor == "undefined") {
	var legalFooterColor = "#000000";
}

if (typeof legalFooterImg == "undefined") {
	var legalFooterImg = "https://web.archive.org/web/20120211124139/http://www.disneylatino.com/globalmedia/legal_footer/images/disney_footer.png";
}

if (typeof legalFooterImgLink == "undefined") {
	var legalFooterImgLink = "https://web.archive.org/web/20120211124139/http://www.disneylatino.com/";
}

if (typeof legalFooterBlankGif == "undefined") {
	var legalFooterBlankGif = "https://web.archive.org/web/20120211124139/http://www.disneylatino.com/globalmedia/legal_footer/images/clear.gif";
}

if (typeof footerRow1 == "undefined") {
	var footerRow1 = ["Registro|http://www.disneylatino.com/registro/",
	"Publicidad|http://www.disneylatino.com/publicidad/",
	"Pol&iacute;ticas de Privacidad (Actualizada el 10 de febrero de 2012) |http://www.disneylatino.com/politicasdeprivacidad/",
	"T&eacute;rminos de Uso|http://www.disneylatino.com/terminosdeuso/",
	"Oportunidades Laborales|http://www.disneylatino.com/rrhh/"]; 
}

if (typeof footerRow2 == "undefined") {
var footerRow2 = [" "
				  ];
}

if (typeof footerCopyrightText == "undefined") {
	var footerCopyrightText = "&copy; Disney. Todos los derechos reservados.";
}



try {
	if(!legalFooterColor) {
		legalFooterColor="#000000";
	}
} catch(e) {
	var legalFooterColor="#000000";
}

try {
	if(legalFooterDCOM3){
		lfDCOM3=legalFooterDCOM3;
	}
} catch(e) {
}

lfCheckValidColor(legalFooterColor);
if(!lfIsValidColor) {
	legalFooterColor="#000000";
}

//Spit out the legal footer...
dolFooterMainTable="width:"+legalFooterWidth+"px; text-align:center; padding:0px; margin:10px 0px; background:transparent none; border:none; ";
dolFooterTableCell="padding:0px; margin:12px 0px; background:transparent none; border:none; ";
dolFooterSt="font-family:verdana,helvetica; color:"+legalFooterColor+"; background-color:transparent; text-align:center; font-size:10pt; border:none; "
dolFooterSmallSt="font-family:verdana,helvetica; color:"+legalFooterColor+"; background-color:transparent; text-align:center; font-size:10px; border:none; "
dolFooterLnk="font-size:10pt !important; ";
dolFooterSmallLnk="font-size:10px !important; ";
lfDcWrtInf+="<style>a.dolFooterLnk,a.dolFooterLnk:visited,a.dolFooterLnk:hover,a.dolFooterLnk:active,a.dolFooterSmallLnk,a.dolFooterSmallLnk:visited,a.dolFooterSmallLnk:hover,a.dolFooterSmallLnk:active{color:"+legalFooterColor+" !important;background-color:transparent !important;text-decoration:underline;}a.dolFooterLnkRed,a.dolFooterLnkRed:visited,a.dolFooterLnkRed:hover,a.dolFooterLnkRed:active{color:#FF0000 !important;background-color:transparent !important;text-decoration:underline;}</style>";
lfDcWrtInf+='<div id="legalFooterMainDiv" align="center"><table cellspacing="0" cellpadding="0" align="center" style="'+dolFooterMainTable+'"><tbody>';

legalFooterHostName=location.hostname;

lgFtHrLn='<hr style="border: 0; border-top: 1px solid #A3A3A3; height: 0px; background: #A3A3A3;">';
legalFooterLineWidth=(parseInt(legalFooterWidth)-205)/2;

lfDcWrtInf+='<tr><td style="width:'+legalFooterLineWidth+'px;text-align:center;">'+lgFtHrLn+'</td><td style="width:205px;text-align:center;">';
lfDcWrtInf+='<a href="'+legalFooterImgLink+'" name="&lid=footer_legal_image&lpos=footer_legal" class="dolFooterLnk" '+((lfDCOM3)?'id=\'legalFooterImageAnchor\'':'')+'>';
if(lfDCOM3){
	lfDcWrtInf+="<div id='legalFooterImage'>";
}
if((lFVersion>=5.5&&lFVersion<7)&&(document.body.filters)){
	lfDcWrtInf+='<img src="'+legalFooterBlankGif+'" border="0" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\''+legalFooterImgPath+'/'+legalFooterImg+'\')" id="lgDcomFtrImg">';
} else {
	lfDcWrtInf+='<img src="'+legalFooterImg+'" border="0" id="lgDcomFtrImg">';
}
if(lfDCOM3){
	lfDcWrtInf+="</div>";
}
	lfDcWrtInf+='</a>';
	lfDcWrtInf+='</td><td style="width:'+legalFooterLineWidth+'px;text-align:center;">'+lgFtHrLn+'</td></tr>';

lfDcWrtInf+='<tr><td align="center"  colspan="3" style="width:'+legalFooterWidth+'px; '+dolFooterSt+'" '+((lfDCOM3)?'id=\'lgContent\'':'')+'>';

footerRow1Length = footerRow1.length;
for (var i = 0; i < footerRow1Length; i++) {
	var thisLink = footerRow1[i];
	linkParts = thisLink.split('|');
	lfDcWrtInf += '<a href="' + linkParts[1] + '" target="_top" class="dolFooterLnk"  style="'+dolFooterLnk+'"';
	if (linkParts[2] != "") {
		lfDcWrtInf += ' name="' + linkParts[2] + '"';
	}
	lfDcWrtInf += '>' + linkParts[0] + '</a>';
	if (i < footerRow1Length - 1) {
		lfDcWrtInf += "&nbsp;|&nbsp;";
	}
}

lfDcWrtInf += '</td></tr>';

lfDcWrtInf+='<tr><td align="center"  colspan="3" style="width:'+legalFooterWidth+'px; '+dolFooterSt+'" '+((lfDCOM3)?'id=\'lgContent\'':'')+'>';

footerRow2Length = footerRow2.length;
for (var i = 0; i < footerRow2Length; i++) {
	var thisLink = footerRow2[i];
	linkParts = thisLink.split('|');
	lfDcWrtInf += '<a href="' + linkParts[1] + '" target="_top" class="dolFooterLnk"  style="'+dolFooterLnk+'"';
	if (linkParts[2] != "") {
		lfDcWrtInf += ' name="' + linkParts[2] + '"';
	}
	lfDcWrtInf += '>' + linkParts[0] + '</a>';
	if (i < footerRow2Length - 1) {
		lfDcWrtInf += "&nbsp;|&nbsp;";
	}
}

lfDcWrtInf += '</td></tr>';

lfDcWrtInf+='<tr><td colspan="3"><span style="'+dolFooterSmallSt+'" '+((lfDCOM3)?'id=\'lgCopyRight\'':'')+'>'+footerCopyrightText+'</span></td></tr></tbody></table></div><br />';

document.write(lfDcWrtInf);

function lfCheckValidColor(hexColor){
	var strPattern=/^#([0-9a-f]{1,2}){3}$/i;
	lfIsValidColor=strPattern.test(hexColor); 
	return lfIsValidColor;
}

function SetFooterOut(linkOut){
	try {
		hitbox.Footer_hbLink(linkOut);
	} catch(e) {
	}
}

function isThisPage(identifier){
	return(isThisPageURL.indexOf(identifier)!=-1)?true:false;
}

}