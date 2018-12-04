(function() {
  var fn = function() {
    Bokeh.safely(function() {
      (function(root) {
        function embed_document(root) {
          
        var docs_json = '{"070435af-dcf6-498a-b654-562108f80652":{"roots":{"references":[{"attributes":{},"id":"292d3f58-31da-4a1a-9caa-5ed9c0ad5918","type":"LinearScale"},{"attributes":{},"id":"d528340e-0ecb-4b49-8cfc-af08edfd708b","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"field":"COLOR"},"line_color":{"field":"COLOR"},"size":{"units":"screen","value":10},"x":{"field":"num_ilinks"},"y":{"field":"num_langs"}},"id":"2a801099-aa75-4905-b1d1-a9721acbf61f","type":"Circle"},{"attributes":{},"id":"b55b8846-32e4-4a13-9dbc-a5f376807202","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Number of language pages","formatter":{"id":"b55b8846-32e4-4a13-9dbc-a5f376807202","type":"BasicTickFormatter"},"plot":{"id":"923e47d2-9f97-423f-ae9a-575b064c7bbc","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ec95816-6eb0-431a-813b-f637f6909129","type":"BasicTicker"}},"id":"802217e8-bb66-4abc-ab40-0de47ad0f2db","type":"LinearAxis"},{"attributes":{"callback":{"id":"bc24d578-2def-454d-bfbe-441e308a2c65","type":"OpenURL"}},"id":"845547aa-044e-4ec0-a5d4-fa3038af7d7e","type":"TapTool"},{"attributes":{},"id":"58e1f201-b927-4ec1-8e9c-7733a7ebea80","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"COLOR":["#228B8D","#9FD938","#1F938B","#37588C","#287A8E","#460C5F","#460C5F","#60C960","#30B47A","#2C728E","#26AC81","#3DBB74","#404487","#30B47A","#B7DD29","#3C4E8A","#2C728E","#2F698D","#228B8D","#472575","#3DBB74","#287A8E","#287A8E","#4DC26B","#37588C","#74D054","#3C4E8A","#2F698D","#25838D","#33618D","#60C960","#3C4E8A","#228B8D","#3C4E8A","#46307D","#433A83","#404487","#3DBB74","#8BD546","#30B47A","#46307D","#440154","#4DC26B","#33618D","#26AC81","#20A485","#20A485","#8BD546","#4DC26B","#33618D","#3C4E8A","#9FD938","#8BD546","#74D054","#30B47A","#404487","#60C960","#8BD546","#60C960","#74D054","#9FD938","#FDE724","#460C5F","#46307D","#433A83","#440154","#60C960","#20A485","#48196B","#FDE724","#472575","#460C5F","#4DC26B","#37588C","#460C5F","#472575","#74D054","#228B8D","#B7DD29","#4DC26B","#25838D","#26AC81","#B7DD29","#3DBB74","#CFE11C","#E7E419","#2F698D","#25838D","#60C960","#26AC81","#8BD546","#20A485","#30B47A","#B7DD29","#4DC26B","#3C4E8A","#33618D","#287A8E","#1F938B","#1E9B89","#46307D","#37588C","#228B8D","#433A83","#E7E419","#433A83","#1E9B89","#3DBB74","#33618D","#1E9B89","#2C728E","#472575","#9FD938","#440154","#433A83","#228B8D","#440154","#FDE724","#1E9B89","#37588C","#2F698D","#1E9B89","#48196B","#20A485","#25838D","#9FD938","#2F698D","#1E9B89","#2F698D","#30B47A","#25838D","#74D054","#E7E419","#287A8E","#440154","#CFE11C","#228B8D","#33618D","#404487","#3C4E8A","#B7DD29","#FDE724","#FDE724","#FDE724","#1F938B","#440154","#1F938B","#E7E419","#25838D","#460C5F","#48196B","#440154","#46307D","#460C5F","#CFE11C","#46307D","#9FD938","#472575","#CFE11C","#3DBB74","#1F938B","#8BD546","#433A83","#CFE11C","#20A485","#287A8E","#CFE11C","#26AC81","#1F938B","#37588C","#404487","#E7E419","#60C960","#26AC81","#404487","#2C728E","#4DC26B","#E7E419","#472575","#48196B","#1F938B","#2F698D","#B7DD29","#472575","#48196B","#2C728E","#FDE724","#30B47A","#E7E419","#2C728E","#287A8E","#8BD546","#20A485","#48196B","#433A83","#B7DD29","#37588C","#74D054"],"Length":[60357,93378,61101,43284,55728,19841,19526,80827,71670,53740,69628,73018,37629,70545,94877,41639,52767,48984,58578,32748,73876,54102,55691,80035,43384,84075,41363,51946,57680,46399,81066,42819,57896,42968,33141,35173,36930,75068,89552,71241,32906,123,76773,46804,69108,65682,64996,85476,78342,45317,39946,94295,85938,84815,70890,39351,80509,86318,82068,84895,91256,127330,25675,33532,36269,53,82583,67099,25879,119573,31394,21170,78916,43197,22438,32485,83705,60028,96430,78656,55983,68682,97411,74211,98472,107334,49603,57085,82088,68834,88774,66555,70808,94952,79413,42743,47128,55164,62120,62834,33962,43987,60461,35312,112370,34124,63534,76056,45869,63710,52962,31924,91983,18842,34665,59540,14446,120121,64138,44472,51691,63922,26213,67368,56147,89568,51163,63821,52749,69999,56864,83657,109053,54990,1683,105237,58644,48767,37973,42641,94460,121898,127153,136688,61945,147,60915,119029,56876,21069,25875,19275,32857,21303,101327,33562,89830,28759,100780,76314,61015,86525,36192,104799,68341,54270,103272,69854,60724,42995,39423,118344,81963,69021,39589,52942,80025,109587,32065,26758,61004,52374,96065,31902,28019,53169,125963,71297,110547,53307,55521,85993,66570,26219,33980,96356,43275,84036],"dlink":["docs.html#sec-1","docs.html#sec0","docs.html#sec1","docs.html#sec2","docs.html#sec3","docs.html#sec4","docs.html#sec5","docs.html#sec6","docs.html#sec7","docs.html#sec8","docs.html#sec9","docs.html#sec10","docs.html#sec11","docs.html#sec12","docs.html#sec13","docs.html#sec14","docs.html#sec15","docs.html#sec16","docs.html#sec17","docs.html#sec18","docs.html#sec19","docs.html#sec20","docs.html#sec21","docs.html#sec22","docs.html#sec23","docs.html#sec24","docs.html#sec25","docs.html#sec26","docs.html#sec27","docs.html#sec28","docs.html#sec29","docs.html#sec30","docs.html#sec31","docs.html#sec32","docs.html#sec33","docs.html#sec34","docs.html#sec35","docs.html#sec36","docs.html#sec37","docs.html#sec38","docs.html#sec39","docs.html#sec40","docs.html#sec41","docs.html#sec42","docs.html#sec43","docs.html#sec44","docs.html#sec45","docs.html#sec46","docs.html#sec47","docs.html#sec48","docs.html#sec49","docs.html#sec50","docs.html#sec51","docs.html#sec52","docs.html#sec53","docs.html#sec54","docs.html#sec55","docs.html#sec56","docs.html#sec57","docs.html#sec58","docs.html#sec59","docs.html#sec60","docs.html#sec61","docs.html#sec62","docs.html#sec63","docs.html#sec64","docs.html#sec65","docs.html#sec66","docs.html#sec67","docs.html#sec68","docs.html#sec69","docs.html#sec70","docs.html#sec71","docs.html#sec72","docs.html#sec73","docs.html#sec74","docs.html#sec75","docs.html#sec76","docs.html#sec77","docs.html#sec78","docs.html#sec79","docs.html#sec80","docs.html#sec81","docs.html#sec82","docs.html#sec83","docs.html#sec84","docs.html#sec85","docs.html#sec86","docs.html#sec87","docs.html#sec88","docs.html#sec89","docs.html#sec90","docs.html#sec91","docs.html#sec92","docs.html#sec93","docs.html#sec94","docs.html#sec95","docs.html#sec96","docs.html#sec97","docs.html#sec98","docs.html#sec99","docs.html#sec100","docs.html#sec101","docs.html#sec102","docs.html#sec103","docs.html#sec104","docs.html#sec105","docs.html#sec106","docs.html#sec107","docs.html#sec108","docs.html#sec109","docs.html#sec110","docs.html#sec111","docs.html#sec112","docs.html#sec113","docs.html#sec114","docs.html#sec115","docs.html#sec116","docs.html#sec117","docs.html#sec118","docs.html#sec119","docs.html#sec120","docs.html#sec121","docs.html#sec122","docs.html#sec123","docs.html#sec124","docs.html#sec125","docs.html#sec126","docs.html#sec127","docs.html#sec128","docs.html#sec129","docs.html#sec130","docs.html#sec131","docs.html#sec132","docs.html#sec133","docs.html#sec134","docs.html#sec135","docs.html#sec136","docs.html#sec137","docs.html#sec138","docs.html#sec139","docs.html#sec140","docs.html#sec141","docs.html#sec142","docs.html#sec143","docs.html#sec144","docs.html#sec145","docs.html#sec146","docs.html#sec147","docs.html#sec148","docs.html#sec149","docs.html#sec150","docs.html#sec151","docs.html#sec152","docs.html#sec153","docs.html#sec154","docs.html#sec155","docs.html#sec156","docs.html#sec157","docs.html#sec158","docs.html#sec159","docs.html#sec160","docs.html#sec161","docs.html#sec162","docs.html#sec163","docs.html#sec164","docs.html#sec165","docs.html#sec166","docs.html#sec167","docs.html#sec168","docs.html#sec169","docs.html#sec170","docs.html#sec171","docs.html#sec172","docs.html#sec173","docs.html#sec174","docs.html#sec175","docs.html#sec176","docs.html#sec177","docs.html#sec178","docs.html#sec179","docs.html#sec180","docs.html#sec181","docs.html#sec182","docs.html#sec183","docs.html#sec184","docs.html#sec185","docs.html#sec186","docs.html#sec187","docs.html#sec188","docs.html#sec189","docs.html#sec190","docs.html#sec191","docs.html#sec192","docs.html#sec193","docs.html#sec194","docs.html#sec195","docs.html#sec196"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197],"num_ilinks":[1694,1746,1085,708,878,748,683,1791,1530,1196,988,1257,980,1079,1596,798,710,1270,762,707,1207,776,746,1338,781,1605,772,1009,784,701,1015,737,1093,810,934,766,826,994,2097,1413,690,50,949,536,1627,1066,1108,1760,1892,796,561,785,771,1522,639,691,776,1878,1035,806,1124,2229,610,618,669,49,2014,1271,713,1786,663,729,721,724,725,855,1180,625,1796,1655,1395,1201,1739,1188,1448,2281,797,987,1483,891,1139,1227,1100,1279,1175,620,704,985,1263,865,734,867,877,671,1962,1091,1134,984,776,1155,1243,700,1526,643,651,1022,385,1336,1035,999,805,949,790,1007,938,890,841,929,1039,938,727,1370,1661,818,188,2018,581,1145,645,730,2215,2328,2206,1258,849,101,1094,2627,890,539,707,464,546,652,1398,778,1648,704,1131,1241,1019,1679,604,1342,1634,704,1920,1321,1110,747,634,1390,1369,1140,694,834,1111,2261,1083,644,789,913,2127,609,977,831,1418,923,1914,746,788,1157,967,814,506,984,772,1279],"num_langs":[239,254,237,252,229,121,194,253,246,253,263,252,194,218,231,194,246,258,204,217,133,224,227,236,215,266,217,257,213,213,222,214,263,206,120,205,212,283,268,227,195,60,214,204,254,217,229,248,224,209,184,187,212,251,198,198,213,250,230,186,290,275,152,211,208,61,277,222,136,258,186,124,198,202,198,202,196,201,247,248,269,248,252,226,242,279,213,205,264,217,240,220,225,233,181,207,212,220,241,223,198,207,222,234,256,237,232,216,200,226,199,209,238,129,205,193,120,253,236,229,226,224,115,211,212,218,215,227,223,197,205,226,277,208,34,239,202,188,214,230,230,277,257,152,209,19,244,286,206,169,173,163,173,188,228,208,240,191,201,229,243,241,172,211,243,186,269,217,220,202,198,256,255,227,217,218,236,258,203,200,182,210,284,210,118,206,264,209,283,215,214,233,261,113,115,215,206,211],"title":["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","The Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Democratic Republic of the Congo","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","French Guiana","Gabon","The Gambia","Georgia","Germany","Ghana","Great Britain","Greece","Grenada","Guadeloupe","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Israel","Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","North Korea","South Korea","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Republic of Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nepal","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pacific Islands","Pakistan","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","S\\u00e3o Tom\\u00e9 and Pr\\u00edncipe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Eswatini","Sweden","Switzerland","Syria","Tajikistan","Tanzania","Thailand","Netherlands","East Timor","Togo","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Uganda","Ukraine","United Arab Emirates","United States","Uruguay","Uzbekistan","Venezuela","Vietnam","British Virgin Islands","United States Virgin Islands","Yemen","Zambia","Zimbabwe"]},"selected":{"id":"9e7d1fda-e905-415c-9dfb-cd9487f900bb","type":"Selection"},"selection_policy":{"id":"b787df11-b728-4bd7-ad4d-fa0b534a439d","type":"UnionRenderers"}},"id":"9c6f1f37-715b-40f3-b5c5-6c2aa5245f6a","type":"ColumnDataSource"},{"attributes":{"source":{"id":"9c6f1f37-715b-40f3-b5c5-6c2aa5245f6a","type":"ColumnDataSource"}},"id":"12546afc-e43a-4e0c-a246-a9ca1d087978","type":"CDSView"},{"attributes":{"axis_label":"Number of internal links","formatter":{"id":"d528340e-0ecb-4b49-8cfc-af08edfd708b","type":"BasicTickFormatter"},"plot":{"id":"923e47d2-9f97-423f-ae9a-575b064c7bbc","subtype":"Figure","type":"Plot"},"ticker":{"id":"58e1f201-b927-4ec1-8e9c-7733a7ebea80","type":"BasicTicker"}},"id":"86122e2f-3123-4568-b039-a7045f8763cf","type":"LinearAxis"},{"attributes":{},"id":"e617b100-a8cd-4d3c-848f-eb880c4ead1d","type":"ResetTool"},{"attributes":{},"id":"e927510b-a780-4607-86a6-1363dd4613e7","type":"LinearScale"},{"attributes":{"callback":null,"renderers":"auto","tooltips":[["title","@title"],["Length","@Length"]]},"id":"19a4234c-045d-4184-ba3c-89407ec62f01","type":"HoverTool"},{"attributes":{"plot":{"id":"923e47d2-9f97-423f-ae9a-575b064c7bbc","subtype":"Figure","type":"Plot"},"ticker":{"id":"58e1f201-b927-4ec1-8e9c-7733a7ebea80","type":"BasicTicker"}},"id":"a0dce7ca-f6d0-4a0a-985b-b9cca15fa30d","type":"Grid"},{"attributes":{},"id":"b787df11-b728-4bd7-ad4d-fa0b534a439d","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"0227ece8-7ec0-482f-9440-cf43911e36a4","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"9bf9f4f9-5f54-4128-9cad-1913f4b583ab","type":"Title"},{"attributes":{},"id":"9e7d1fda-e905-415c-9dfb-cd9487f900bb","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"923e47d2-9f97-423f-ae9a-575b064c7bbc","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ec95816-6eb0-431a-813b-f637f6909129","type":"BasicTicker"}},"id":"c31d4e74-591d-4a91-aea8-0a8daa7c6146","type":"Grid"},{"attributes":{"callback":null},"id":"840cb58c-91e3-4c83-9053-def9dfbf6fe4","type":"DataRange1d"},{"attributes":{},"id":"8ec95816-6eb0-431a-813b-f637f6909129","type":"BasicTicker"},{"attributes":{"url":"@dlink"},"id":"bc24d578-2def-454d-bfbe-441e308a2c65","type":"OpenURL"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"num_ilinks"},"y":{"field":"num_langs"}},"id":"9767521f-abc0-41eb-b7f8-5a25ced50493","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":{"id":"c66d730b-70ca-40db-8f29-1cbc1d673875","type":"WheelZoomTool"},"active_tap":"auto","tools":[{"id":"19a4234c-045d-4184-ba3c-89407ec62f01","type":"HoverTool"},{"id":"132daf2f-2d64-402b-a962-f8ed3c58124b","type":"PanTool"},{"id":"c66d730b-70ca-40db-8f29-1cbc1d673875","type":"WheelZoomTool"},{"id":"e617b100-a8cd-4d3c-848f-eb880c4ead1d","type":"ResetTool"},{"id":"845547aa-044e-4ec0-a5d4-fa3038af7d7e","type":"TapTool"}]},"id":"8c96c165-e1fb-44fc-ad48-0ce40d346a92","type":"Toolbar"},{"attributes":{},"id":"132daf2f-2d64-402b-a962-f8ed3c58124b","type":"PanTool"},{"attributes":{"below":[{"id":"86122e2f-3123-4568-b039-a7045f8763cf","type":"LinearAxis"}],"left":[{"id":"802217e8-bb66-4abc-ab40-0de47ad0f2db","type":"LinearAxis"}],"plot_width":950,"renderers":[{"id":"86122e2f-3123-4568-b039-a7045f8763cf","type":"LinearAxis"},{"id":"a0dce7ca-f6d0-4a0a-985b-b9cca15fa30d","type":"Grid"},{"id":"802217e8-bb66-4abc-ab40-0de47ad0f2db","type":"LinearAxis"},{"id":"c31d4e74-591d-4a91-aea8-0a8daa7c6146","type":"Grid"},{"id":"f238581c-c719-432d-8d66-6b78ca649894","type":"GlyphRenderer"}],"title":{"id":"9bf9f4f9-5f54-4128-9cad-1913f4b583ab","type":"Title"},"toolbar":{"id":"8c96c165-e1fb-44fc-ad48-0ce40d346a92","type":"Toolbar"},"toolbar_location":"below","x_range":{"id":"0227ece8-7ec0-482f-9440-cf43911e36a4","type":"DataRange1d"},"x_scale":{"id":"e927510b-a780-4607-86a6-1363dd4613e7","type":"LinearScale"},"y_range":{"id":"840cb58c-91e3-4c83-9053-def9dfbf6fe4","type":"DataRange1d"},"y_scale":{"id":"292d3f58-31da-4a1a-9caa-5ed9c0ad5918","type":"LinearScale"}},"id":"923e47d2-9f97-423f-ae9a-575b064c7bbc","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"c66d730b-70ca-40db-8f29-1cbc1d673875","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"9c6f1f37-715b-40f3-b5c5-6c2aa5245f6a","type":"ColumnDataSource"},"glyph":{"id":"2a801099-aa75-4905-b1d1-a9721acbf61f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9767521f-abc0-41eb-b7f8-5a25ced50493","type":"Circle"},"selection_glyph":null,"view":{"id":"12546afc-e43a-4e0c-a246-a9ca1d087978","type":"CDSView"}},"id":"f238581c-c719-432d-8d66-6b78ca649894","type":"GlyphRenderer"}],"root_ids":["923e47d2-9f97-423f-ae9a-575b064c7bbc"]},"title":"Bokeh Application","version":"0.13.0"}}';
        var render_items = [{"docid":"070435af-dcf6-498a-b654-562108f80652","roots":{"923e47d2-9f97-423f-ae9a-575b064c7bbc":"55ed81c3-7aef-4040-8db0-8ab468236db9"}}];
        root.Bokeh.embed.embed_items(docs_json, render_items);
      
        }
        if (root.Bokeh !== undefined) {
          embed_document(root);
        } else {
          var attempts = 0;
          var timer = setInterval(function(root) {
            if (root.Bokeh !== undefined) {
              embed_document(root);
              clearInterval(timer);
            }
            attempts++;
            if (attempts > 100) {
              console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
              clearInterval(timer);
            }
          }, 10, root)
        }
      })(window);
    });
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();