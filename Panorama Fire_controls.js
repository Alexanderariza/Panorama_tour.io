PanoramaStudioViewerParams = {
"panoramaStudioViewer": {
"actions": [
        {
            "func": function(){ var enabled = this.viewer.gyroscopeEnabled(); var gb = this.get('gyrobutton'); if (gb){ gb.skin = enabled?gb.enabledskin:gb.disabledskin; gb.updateSkins(); } },
            "id": "updateGyroButton"
        },
        {
            "func": function(a){ var d = this.viewer.get('map'); if (d&&!d.collapsing){ d.collapsing = !0;  if (!d.visible){   d.viewer.action('hideGallery'); d.setVisible(true); d.style = 'opacity: 1.0;'; d.updateStyles();   var o = d.viewer.get('thumbnailGallery');   if (!!o&&o.align == d.align){ d.height = o.height; d.updateSize(); }   var dh = Math.min(Math.max(this.viewer.height()*0.6, 96), this.viewer.height() - 96);   d.tween({ 'time': 0.3, 'transition' : 'easeInOutSine', 'height' : dh, 'onUpdate' : function(a){ a.updateSize(); }, 'onComplete' : function(a){ a.collapsing = !1; a.height = dh; a.updateSize(); a.center(); } }); } else { d.style = 'opacity: 0.0;'; d.updateStyles(); d.tween({ 'time': 0.3, 'transition' : 'easeInOutSine', 'height' : 0, 'onUpdate' : function(a){ a.updateSize(); }, 'onComplete' : function(a){ a.collapsing = !1; a.height = 0; a.updateSize(); a.setVisible(false); } },true); }}},
            "id": "toggleMap"
        },
        {
            "func": function(delay){ var d=this.viewer.get('map'); if (d&&d.visible&&!d.collapsing){  d.collapsing = !0; d.updateStyles();  d.tween({'time': 0.5, 'delay': delay, 'transition': 'easeInOutSine', 'height': 0, 'onUpdate': function(a){ a.updateSize();  },'onComplete': function(a){ a.collapsing = !1; a.height = 0; a.updateSize(); a.setVisible(false); }},true);}},
            "id": "hideMap"
        },
        {
            "func": function(){ var map = this.get('map'); if (map && map.visible){  var h = Math.min(Math.max(this.viewer.height()*0.6, 96),this.viewer.height()-96);  map.height = h; map.updateSize();}},
            "id": "resizeMap"
        },
        {
            "func": function(c){  c.translate(c.canvas.width/2.0,c.canvas.height/2.0); c.rotate(Math.PI); c.translate(-c.canvas.width/2.0,-c.canvas.height/2.0); },
            "id": "rotateCanvas"
        },
        {
            "func": function(){ if (!this.viewer.fullEquirectangular()) return; this.viewer.panTo(this.viewer.getView().pan,0,100,1.0,0,'easeInOutQuad',true); this.tween({'time': 1.0, 'lp': 0.0, 'transition': 'easeInOutQuad', 'onInit' : function(a,dstParams){ a.lp=a.viewer.fisheyeDistortion(); }, 'onUpdate': function(a){ a.viewer.setFisheyeDistortion(a.lp);}}); },
            "id": "leaveLittlePlanet"
        },
        {
            "func": function(){ if (!this.viewer.fullEquirectangular()) return; this.viewer.panTo(this.viewer.getView().pan+90,90,150,1.0,0,'easeInOutQuad',true); this.tween({'time': 1.0, 'lp': 1.0, 'transition': 'easeInOutQuad', 'onInit' : function(a,dstParams){ a.lp=a.viewer.fisheyeDistortion(); }, 'onUpdate': function(a){ a.viewer.setFisheyeDistortion(a.lp);}}); },
            "id": "enterLittlePlanet"
        },
        {
            "func": function(a){ var id = this.viewer.currentMBId; if (!!id&&(a.id!=id)){this.viewer.action('hideMessage');} if (a.id!=id){ var s=this.viewer.get('globalData'); if (s&&s.messageBoxStyle){ a.style = s.messageBoxStyle; }this.viewer.currentMBId=null; if (!this.viewer.isVRModeEnabled()){ this.viewer.add('textbox',a); this.viewer.currentMBId=a.id; } } },
            "id": "showMessage"
        },
        {
            "func": function(){ if (this.viewer.currentMBId) this.viewer.remove(this.viewer.currentMBId); this.viewer.currentMBId=null; },
            "id": "hideMessage"
        },
        {
            "func": function(a){ var id = this.viewer.currentMBId; if (a.id!=id){ this.viewer.action('showMessage',a); } else { this.viewer.action('hideMessage'); } },
            "id": "toggleMessage"
        }
    ],
"button": [
        {
            "align": "leftbottom",
            "height": 24,
            "id": "showTbButton",
            "onclick": function(){ if (!this.allowClick) return; this.allowClick = false; var tb = this.get('toolbar'); tb.setVisible(true); tb.style = 'transform-origin: 50% 100% 0px; transform: translate(0px,0px) translateZ(10000px) perspective( 800px ) rotateX( 0deg ); background: rgba(0,0,0,0.5); transition: transform 500ms;'; tb.updateStyles(); var tt = this; setTimeout(function(){tt.setVisible(false); tt.get('hideTbButton').allowClick=true;},500); this.style = 'transform-origin: 50% 100% 0px; transform: translate(0px,0px) translateZ(10000px) perspective( 800px ) rotateX( 90deg ); transition: transform 500ms;'; this.updateStyles(); },
            "oninit": function(){ this.setVisible(false); this.allowClick = false; },
            "skin": "shadow(4,0,0,rgba(0,0,0,1));shadow(3,0,0,rgba(0,0,0,1));comp(1.0);copy(defaultSkin,128,192,64,64,0,0,24,24)",
            "style": "transform-origin: 50% 100% 0px; transform: translate(0px,0px) translateZ(10000px) perspective(800px) rotateX(90deg); transition: transform 500ms; ",
            "styleactive": " background-color:rgba(255, 255, 255, 0.25); box-shadow: 0px 0px 9px 8px rgba(255, 255, 255, 0.25); ",
            "stylehover": " background-color:rgba(255, 255, 255, 0.15); box-shadow: 0px 0px 9px 8px rgba(255, 255, 255, 0.15); ",
            "width": 24,
            "xoff": 0,
            "yoff": 0
        }
    ],
"buttonBox": [
        {
            "align": "bottom",
            "button": [
                {
                    "align": "left",
                    "id": "hideTbButton",
                    "index": 1,
                    "onclick": function(){ if (!this.allowClick) return; this.allowClick = false; var tb = this.get('toolbar'); tb.style = 'transform-origin: 50% 100% 0px; transform: translate(0px,0px) translateZ(10000px) perspective( 800px ) rotateX( 90deg ); background: rgba(0,0,0,0.5); transition: transform 500ms;', tb.updateStyles(); var tt = this; var tbb = this.get('showTbButton'); setTimeout(function(){tb.setVisible(false); tbb.allowClick=true;},501); var tbb = this.get('showTbButton');  tbb.setVisible(true); tbb.style ='transform-origin: 50% 100% 0px; transform: translate(0px,0px) translateZ(10000px) perspective( 800px ) rotateX( 90deg ); transition: transform 500ms;'; tbb.updateStyles();  tbb.tween({'delay': 0.01, 'time': 0.01, 'onComplete': function(a){ a.style ='transform-origin: 50% 100% 0px; transform: translate(0px,0px) translateZ(10000px) perspective( 800px ) rotateX( 0deg ); transition: transform 500ms;'; a.updateStyles(); } },true);},
                    "oninit": function(){ this.allowClick = true; },
                    "priority": 3,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,192,64,64,0,0,28,28);",
                    "xoff": 8,
                    "yoff": 0
                },
                {
                    "align": "left",
                    "id": "mapbutton",
                    "index": 3,
                    "onclick": function(){ this.viewer.action('toggleMap'); },
                    "oninit": function(){var m = this.viewer.map(); if (!!m){ this.setVisible(true);}},
                    "priority": 3,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,448,64,64,0,0,28,28);",
                    "visible": false,
                    "xoff": 8,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "id": "infobutton",
                    "index": 5,
                    "onclick": function(){ var d=this.viewer.get('localData'); d&&(d=d.infoTextBox); if(!d){ var d=this.viewer.get('globalData'); d&&(d=d.infoTextBox); } if (!!d){this.viewer.action('toggleMessage',d);} },
                    "onscenechanged": function(){ var d=this.viewer.get('localData'); var g=this.viewer.get('globalData'); var o=d&&d.infoTextBox||g&&g.infoTextBox; this.setVisible(!!o); },
                    "priority": 3,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,0,64,64,0,0,28,28);",
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 7,
                    "priority": 0,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,64,64,64,0,0,28,28);",
                    "type": 1,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 8,
                    "priority": 0,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,64,64,64,0,0,28,28);",
                    "type": 2,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 9,
                    "priority": 0,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,64,64,64,0,0,28,28)",
                    "type": 3,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 10,
                    "priority": 0,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,64,64,64,64,0,0,28,28)",
                    "type": 4,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 11,
                    "priority": 2,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,128,64,64,0,0,28,28)",
                    "type": 5,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 12,
                    "priority": 2,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,128,64,64,0,0,28,28)",
                    "type": 6,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "id": "playbutton",
                    "index": 13,
                    "onclick": function(){ if (this.viewer.isPlaying()) this.viewer.stopAutoPlay(); else this.viewer.startAutoPlay(); },
                    "priority": 1,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,64,0,64,64,0,0,28,28)",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,64,0,64,64,0,0,28,28)",
                    "skinhover": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,64,0,64,64,0,0,28,28)",
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "disabledskin": "shadow(5,0,0,rgba(0,0,0,1));comp(0.66);copy(defaultSkin,64,128,64,64,0,0,28,28);",
                    "enabledskin": "shadow(5,0,0,rgba(0,0,0,1));comp(1.0);copy(defaultSkin,64,128,64,64,0,0,28,28);",
                    "id": "gyrobutton",
                    "index": 18,
                    "onclick": function(){ var enabled = this.viewer.enableGyroscope(!this.viewer.gyroscopeEnabled()); } ,
                    "priority": 3,
                    "skin": "shadow(5,0,0,rgba(0,0,0,1));comp(0.66);copy(defaultSkin,64,128,64,64,0,0,28,28);",
                    "visible": false,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "right",
                    "id": "fullscreenButton",
                    "index": 16,
                    "onclick": function(){ this.viewer.toggleFullscreen();  } ,
                    "oninit": function(){ if (!this.viewer.fullscreenSupported()) this.viewer.remove('fullscreenButton');  } ,
                    "priority": 3,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,0,64,64,0,0,28,28);",
                    "xoff": 8,
                    "yoff": 0
                }
            ],
            "buttonheight": 28,
            "buttonstyle": "border-radius: 50%; background-color: rgba(255,255,255,0.0); transition: background-color 150ms,box-shadow 150ms;",
            "buttonstyleactive": "background-color: rgba(255,255,255,0.25);box-shadow: 0px 0px 9px 8px rgba(255,255,255,0.25);",
            "buttonstylehover": "background-color: rgba(255,255,255,0.15);box-shadow: 0px 0px 9px 8px rgba(255,255,255,0.15);",
            "buttonwidth": 28,
            "height": "48px",
            "hidestyle": "",
            "id": "toolbar",
            "mapElement": {
                "align": "lefttop",
                "apikey": "AIzaSyBMdzp-QlXoEA0EqjIox6WthoyoDRXV2T4",
                "contentstyle": "position: absolute; left: 4px; right: 4px; bottom: 4px; top: 4px; display: inline; overflow: hidden;",
                "gmapstype": "hybrid",
                "gmarker": "{ url: 'pap_marker_redorange.png', scaledSize: new google.maps.Size(30,48), anchor: new google.maps.Point(15, 42) }",
                "gmarkeractive": "{ url: 'pap_marker_lima.png', scaledSize: new google.maps.Size(30,48), anchor: new google.maps.Point(15, 42) }",
                "id": "map",
                "oninit": function(){ if (this.visible){ this.style = 'opacity: 1.0;'; this.updateStyles(); this.viewer.action('resizeMap'); } },
                "onmarkerclick": function(){ this.viewer.action('hideMap',0.3); },
                "radar": {
                    "radarcontext": function(c){ c.lineWidth = 1; if (!this.fillStyle){ var w = c.canvas.width/2; this.fillStyle=c.createRadialGradient(w,w,0,w,w,w); this.fillStyle.addColorStop(0,'rgba(255,255,255,0.5)');this.fillStyle.addColorStop(1,'rgba(255,255,255,0.1)');} c.fillStyle = this.fillStyle; if (!this.strokeStyle){ var w = c.canvas.width/2; this.strokeStyle=c.createRadialGradient(w,w,0,w,w,w); this.strokeStyle.addColorStop(0,'#ccc');this.strokeStyle.addColorStop(1,'rgba(192,192,192,0.7)');} c.strokeStyle = this.strokeStyle;  },
                    "radius": 0.99,
                    "width": 256
                },
                "style": "opacity: 1; transition: opacity 0.5s",
                "type": "gmap",
                "typecontrols": true,
                "visible": true,
                "zoom": 18,
                "zoomcontrols": true
            },
            "onresize": function() { var cmp = this.viewer.get('compass'); if (!!cmp && ('onresize' in cmp)) cmp.onresize(); },
            "spacing": 8,
            "style": "max-width: 100%;transform-origin: 50% 0px; transform: translate(0px,0px) translateZ(10000px) perspective( 800px ) rotateX( 0deg ); background: rgba(0,0,0,0.5); transition: transform 500ms;",
            "visible": true,
            "width": "500px",
            "yoff": 0
        }
    ],
"contextmenu": {
        "id": "menu",
        "items": [
            {
                "id": "fullscreenItem",
                "onclick": function(){ this.viewer.toggleFullscreen(); },
                "oninit": function(){ this.caption = this.viewer.tr('Fullscreen'); if (!this.viewer.fullscreenSupported()) this.visible = false;  } 
            },
            {
                "caption": "-"
            },
            {
                "id": "normalView",
                "onclick": function(){  if (this.viewer.fisheyeDistortion()!=0.0){ this.viewer.action('leaveLittlePlanet'); } },
                "oninit": function(){  this.caption = this.viewer.tr('Normal View'); }
            },
            {
                "id": "littlePlanetView",
                "onclick": function(){ if (this.viewer.fisheyeDistortion()!=1.0){ this.viewer.action('enterLittlePlanet'); } },
                "oninit": function(){  this.caption = this.viewer.tr('LittlePlanet View'); }
            },
            {
                "caption": "-"
            },
            {
                "id": "gyroItem",
                "onclick": function(){  var gb = this.get('gyrobutton'); if (gb){ gb.onclick(); } else { this.viewer.enableGyroscope(!this.viewer.gyroscopeEnabled()); } },
                "oninit": function(){  this.caption = this.viewer.tr('Gyroscope Control'); }
            },
            {
                "caption": "-"
            },
            {
                "onclick": function(){ window.open('http://www.tshsoft.com','_blank'); },
                "oninit": function(){  this.caption = this.viewer.tr('About PanoramaStudio...'); }
            }
        ],
        "onshow": function(){ var view1 = this.getItem('normalView'); if (view1){ view1.visible = (this.viewer.webglAvailable && this.viewer.fullEquirectangular()) ? true : false; } var view2 = this.getItem('littlePlanetView'); if (view2){ view2.visible = (this.viewer.webglAvailable && this.viewer.fullEquirectangular())?true:false; } var gyro = this.getItem('gyroItem'); if (gyro){ gyro.visible = this.viewer.gyroAvailable?true:false; }  this.update(); },
        "style": "background-color: rgba(255,255,255,0.8); box-shadow: 4px 4px 4px rgba(0,0,0,0.5); border-radius: 3px;"
    },
"events": {
        "id": "mainEvents",
        "onexit": function(){ this.viewer.action('hideMessage');  this.viewer.gyroWasEnabled = this.viewer.gyroAvailable&&this.viewer.gyroscopeEnabled();},
        "ongyroscopeavailable": function(available){ this.viewer.gyroAvailable = available; var o = this.get('gyrobutton'); if(!!o){ o.setVisible(available&&this.viewer.panoType()==0); } } ,
        "ongyroscopetoggle": function(enabled){ this.viewer.action('updateGyroButton'); },
        "oninit": function(){ var g = this.viewer.gallery(); this.viewer.hasGallery = ((!!g) && g.length>1); this.viewer.checkForGyroscope(); },
        "onplay": function(){ var o = this.get('playbutton'); if (!!o){ o.sbackup = o.skin; o.shbackup = o.skinhover; o.sabackup = o.skinactive; o.skin = 'shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,0,64,64,0,0,28,28)'; o.skinhover = 'shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,0,64,64,0,0,28,28)'; o.skinactive = 'shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,0,64,64,0,0,28,28)'; o.updateSkins(); } } ,
        "onresize": function(){ this.viewer.action('resizeMap');  },
        "onscenechanged": function(){ var o = this.get('gyrobutton'); if(!!o){ o.setVisible(this.viewer.gyroAvailable&&this.viewer.panoType()==0); this.viewer.gyroAvailable&&this.viewer.panoType()==0&&this.viewer.gyroWasEnabled&&o.onclick(); } if (this.viewer.isVRModeEnabled()){this.viewer.enableGyroscope(!0);}},
        "onstartaudio": function(senderId){ if (senderId=='gAudio'||senderId=='lAudio'){var o = this.get('audiobutton'); if (!!o){ o.skin = o.playskin; o.skinhover = o.playskinhover; o.skinactive = o.playskinactive; o.updateSkins(); }} } ,
        "onstop": function(){ var o = this.get('playbutton'); if (!!o){ o.skin = o.sbackup; o.skinhover = o.shbackup; o.skinactive = o.sabackup; o.updateSkins(); } } ,
        "onstopaudio": function(senderId){ if (senderId=='gAudio'||senderId=='lAudio'){var o = this.get('audiobutton'); if (!!o){ o.skin = o.pauseskin; o.skinhover = o.pauseskinhover; o.skinactive = o.pauseskinactive; o.updateSkins(); }} } ,
        "onuseswebgl": function(available){ this.viewer.webglAvailable = available; if (available){ var vr = this.get('vrButton'); vr&&vr.setVisible(true); } } 
    },
"orientation": [
        {
            "align": "rightbottom",
            "height": 60,
            "id": "compass",
            "onresize": function() { var tb = this.get('toolbar'); if (!tb) return; var v = this.viewer; var sl = v.width() - tb.offsetWidth(); if (tb.align == 'bottom') sl /= 2; else if (tb.align == 'rightbottom') sl = 0;  var m, tg, hd; hd = !(tb.visible && ((m = this.get('map')) && m.visible || (tg = this.get('thumbnailGallery')) && tg.visible));if (sl < (this.width + 16) && this.yoff != 56) { this.yoff = 56; this.updateAlign(); }else if (sl >= (this.width + 16) && this.yoff != 8) { this.yoff = 8; this.updateAlign(); }if (this.yoff != 56) { if (!this.visible) this.setVisible(true); } else if (this.visible != hd) this.setVisible(hd);},
            "rotatedial": false,
            "skindial": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultCompass,384,0,128,128,0,0,60,60);copy(defaultCompass,0,0,128,128,10,10,40,40);",
            "skinframe": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultCompass,256,0,128,128,0,0,60,60);",
            "skinneedle": "shadow(3,0,0,rgba(0,0,0,1)); copy(defaultCompass,128,0,128,128,0,0,60,60,#ffffff,rotateCanvas); copy(defaultCompass,128,0,128,128,0,0,60,60,#ff0000); shadow(3,0,0,rgba(0,0,0,1)); copy(defaultCompass,128,0,128,128,0,0,60,60,#ffffff,rotateCanvas);",
            "type": "compass",
            "width": 60,
            "xoff": 8,
            "yoff": 8
        }
    ],
"settings": {
        "safeareamargin": "-8 -8 -8 -8"
    },
"translate": {
        "de": {
            "About PanoramaStudio...": "&Uuml;ber PanoramaStudio...",
            "Fullscreen": "Vollbild",
            "Gyroscope Control": "Gyroskop-Steuerung",
            "LittlePlanet View": "LittlePlanet-Ansicht",
            "Normal View": "Normale Ansicht"
        }
    }
}
}