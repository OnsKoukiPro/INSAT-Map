System.register([],(function(a,e){return{execute:function(){a((()=>{"use strict";var a={d:(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(a,e)=>Object.prototype.hasOwnProperty.call(a,e),r:a=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}},e={};a.r(e),a.d(e,{default:()=>g});var t={lessThanXSeconds:{one:"kurang dari 1 detik",other:"kurang dari {{count}} detik"},xSeconds:{one:"1 detik",other:"{{count}} detik"},halfAMinute:"setengah menit",lessThanXMinutes:{one:"kurang dari 1 menit",other:"kurang dari {{count}} menit"},xMinutes:{one:"1 menit",other:"{{count}} menit"},aboutXHours:{one:"sekitar 1 jam",other:"sekitar {{count}} jam"},xHours:{one:"1 jam",other:"{{count}} jam"},xDays:{one:"1 hari",other:"{{count}} hari"},aboutXWeeks:{one:"sekitar 1 minggu",other:"sekitar {{count}} minggu"},xWeeks:{one:"1 minggu",other:"{{count}} minggu"},aboutXMonths:{one:"sekitar 1 bulan",other:"sekitar {{count}} bulan"},xMonths:{one:"1 bulan",other:"{{count}} bulan"},aboutXYears:{one:"sekitar 1 tahun",other:"sekitar {{count}} tahun"},xYears:{one:"1 tahun",other:"{{count}} tahun"},overXYears:{one:"lebih dari 1 tahun",other:"lebih dari {{count}} tahun"},almostXYears:{one:"hampir 1 tahun",other:"hampir {{count}} tahun"}};function n(a){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width?String(e.width):a.defaultWidth,n=a.formats[t]||a.formats[a.defaultWidth];return n}}const i={date:n({formats:{full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"d/M/yyyy"},defaultWidth:"full"}),time:n({formats:{full:"HH.mm.ss",long:"HH.mm.ss",medium:"HH.mm",short:"HH.mm"},defaultWidth:"full"}),dateTime:n({formats:{full:"{{date}} 'pukul' {{time}}",long:"{{date}} 'pukul' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var r={lastWeek:"eeee 'lalu pukul' p",yesterday:"'Kemarin pukul' p",today:"'Hari ini pukul' p",tomorrow:"'Besok pukul' p",nextWeek:"eeee 'pukul' p",other:"P"};function u(a){return function(e,t){var n;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&a.formattingValues){var i=a.defaultFormattingWidth||a.defaultWidth,r=null!=t&&t.width?String(t.width):i;n=a.formattingValues[r]||a.formattingValues[i]}else{var u=a.defaultWidth,o=null!=t&&t.width?String(t.width):a.defaultWidth;n=a.values[o]||a.values[u]}return n[a.argumentCallback?a.argumentCallback(e):e]}}const o={ordinalNumber:function(a,e){return"ke-"+Number(a)},era:u({values:{narrow:["SM","M"],abbreviated:["SM","M"],wide:["Sebelum Masehi","Masehi"]},defaultWidth:"wide"}),quarter:u({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["Kuartal ke-1","Kuartal ke-2","Kuartal ke-3","Kuartal ke-4"]},defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:u({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agt","Sep","Okt","Nov","Des"],wide:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]},defaultWidth:"wide"}),day:u({values:{narrow:["M","S","S","R","K","J","S"],short:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],abbreviated:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],wide:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]},defaultWidth:"wide"}),dayPeriod:u({values:{narrow:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},abbreviated:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},wide:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},abbreviated:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},wide:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"}},defaultFormattingWidth:"wide"})};function l(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.width,i=n&&a.matchPatterns[n]||a.matchPatterns[a.defaultMatchWidth],r=e.match(i);if(!r)return null;var u,o=r[0],l=n&&a.parsePatterns[n]||a.parsePatterns[a.defaultParseWidth],d=Array.isArray(l)?s(l,(function(a){return a.test(o)})):m(l,(function(a){return a.test(o)}));u=a.valueCallback?a.valueCallback(d):d,u=t.valueCallback?t.valueCallback(u):u;var h=e.slice(o.length);return{value:u,rest:h}}}function m(a,e){for(var t in a)if(a.hasOwnProperty(t)&&e(a[t]))return t}function s(a,e){for(var t=0;t<a.length;t++)if(e(a[t]))return t}var d,h={ordinalNumber:(d={matchPattern:/^ke-(\d+)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}},function(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.match(d.matchPattern);if(!t)return null;var n=t[0],i=a.match(d.parsePattern);if(!i)return null;var r=d.valueCallback?d.valueCallback(i[0]):i[0];r=e.valueCallback?e.valueCallback(r):r;var u=a.slice(n.length);return{value:r,rest:u}}),era:l({matchPatterns:{narrow:/^(sm|m)/i,abbreviated:/^(s\.?\s?m\.?|s\.?\s?e\.?\s?u\.?|m\.?|e\.?\s?u\.?)/i,wide:/^(sebelum masehi|sebelum era umum|masehi|era umum)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^s/i,/^(m|e)/i]},defaultParseWidth:"any"}),quarter:l({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^K-?\s[1234]/i,wide:/^Kuartal ke-?\s?[1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:l({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|mei|jun|jul|agt|sep|okt|nov|des)/i,wide:/^(januari|februari|maret|april|mei|juni|juli|agustus|september|oktober|november|desember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^ma/i,/^ap/i,/^me/i,/^jun/i,/^jul/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:l({matchPatterns:{narrow:/^[srkjm]/i,short:/^(min|sen|sel|rab|kam|jum|sab)/i,abbreviated:/^(min|sen|sel|rab|kam|jum|sab)/i,wide:/^(minggu|senin|selasa|rabu|kamis|jumat|sabtu)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^m/i,/^s/i,/^s/i,/^r/i,/^k/i,/^j/i,/^s/i],any:[/^m/i,/^sen/i,/^sel/i,/^r/i,/^k/i,/^j/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:l({matchPatterns:{narrow:/^(a|p|tengah m|tengah h|(di(\swaktu)?) (pagi|siang|sore|malam))/i,any:/^([ap]\.?\s?m\.?|tengah malam|tengah hari|(di(\swaktu)?) (pagi|siang|sore|malam))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^pm/i,midnight:/^tengah m/i,noon:/^tengah h/i,morning:/pagi/i,afternoon:/siang/i,evening:/sore/i,night:/malam/i}},defaultParseWidth:"any"})};const g={code:"id",formatDistance:function(a,e,n){var i,r=t[a];return i="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"dalam waktu "+i:i+" yang lalu":i},formatLong:i,formatRelative:function(a,e,t,n){return r[a]},localize:o,match:h,options:{weekStartsOn:1,firstWeekContainsDate:1}};return e})())}}}));