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

var chromeWidth = 770;
var chromeHeight = 64;
var swfURL = 'swf/dlChrome.swf';
var strChrome = '<table cellspacing="0" cellpadding="0" border-top="10px" align="center"><tr><td>'
                +'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="' + chromeWidth + '" height="' + chromeHeight + '" id="ui" align="middle">'
			+'<param name="movie" value="' + swfURL + '" />'
				+'<param name="quality" value="high" />'
				+'<param name="bgcolor" value="#ffffff" />'
				+'<param name="play" value="true" />'
				+'<param name="loop" value="true" />'
				+'<param name="wmode" value="transparent" />'
				+'<param name="scale" value="showall" />'
				+'<param name="menu" value="true" />'
				+'<param name="devicefont" value="false" />'
				+'<param name="salign" value="" />'
				+'<param name="allowScriptAccess" value="always" />'
				+'<!--[if !IE]>-->'
				+'<object type="application/x-shockwave-flash" data="' + swfURL + '" width="' + chromeWidth + '" height="' + chromeHeight + '">'
				+'	<param name="movie" value="' + swfURL + '" />'
				+'	<param name="quality" value="high" />'
				+'	<param name="bgcolor" value="#ffffff" />'
				+'	<param name="play" value="true" />'
				+'	<param name="loop" value="true" />'
				+'	<param name="wmode" value="transparent" />'
				+'	<param name="scale" value="showall" />'
				+'	<param name="menu" value="true" />'
				+'	<param name="devicefont" value="false" />'
				+'	<param name="salign" value="" />'
				+'	<param name="allowScriptAccess" value="always" />'
				+'<!--<![endif]-->'
				+'	<a href="https://web.archive.org/web/20120211124210/http://www.adobe.com/go/getflash">'
				+'		<img src="https://web.archive.org/web/20120211124210/http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player" />'
				+'	</a>'
				+'<!--[if !IE]>-->'
				+'</object>'
				+'<!--<![endif]-->'
			+'</object></td></tr></table>';
document.write(strChrome);


}