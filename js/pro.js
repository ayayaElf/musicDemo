"use strict";!function(a,n){var r,i,o,l=0,m=function(n){n=Math.round(n);var t=Math.floor(n/60),e=n-60*t;return(t=t<10?"0"+t:t)+":"+(e=e<10?"0"+e:e)},c=function(n){var t=m(n*r);a(".cur-time").html(t);var e=100*(n-1);a(".pro-top").css({transform:"translateX("+e+"%)"})};n.pro={renderAllTime:function(n){var t=m(r=n);a(".all-time").html(t)},start:function(n){l=null==n?l:n,cancelAnimationFrame(i),o=(new Date).getTime();!function n(){var t=(new Date).getTime(),e=l+(t-o)/(1e3*r);e<=1?c(e):cancelAnimationFrame(i),i=requestAnimationFrame(n)}()},stop:function(n){l=null==n?l:n,cancelAnimationFrame(i);var t=(new Date).getTime();l+=(t-o)/(1e3*r)},updata:c}}(window.Zepto,window.player||(window.player={}));