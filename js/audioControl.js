"use strict";function _classCallCheck(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,a){for(var t=0;t<a.length;t++){var i=a[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,a,t){return a&&_defineProperties(e.prototype,a),t&&_defineProperties(e,t),e}!function(e,a){var t=function(){function e(){_classCallCheck(this,e),this.audio=new Audio,this.status="pause"}return _createClass(e,[{key:"play",value:function(){this.audio.play(),this.status="play"}},{key:"pause",value:function(){this.audio.pause(),this.status="pause"}},{key:"getAudio",value:function(e){this.audio.src=e,this.audio.load()}},{key:"playTo",value:function(e){this.audio.currentTime=e}}]),e}();a.audioManager=new t}(window.Zepot,window.player||(window.player={}));