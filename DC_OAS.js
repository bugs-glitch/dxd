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

OAS_url = 'https://web.archive.org/web/20120301005342/http://ads.rmla.com.ar/RealMedia/ads/';
if(window.OAS_query == undefined) OAS_query = '';

OAS_rn = '001234567890'; OAS_rns = '1234567890';
OAS_rn = new String (Math.random()); OAS_rns = OAS_rn.substring (2, 11);

function OAS_AD(pos) {
	document.write('<SCR' + 'IPT LANGUAGE=JavaScript1.1 SRC="' + OAS_url + 'adstream_jx.ads/' + OAS_sitepage + '/1' + OAS_rns + '@' + pos + '?' + OAS_query + '"><\/SCRIPT>');
}


}