!function(a,b){var c,i,e=1,f=document.documentElement,g=document.querySelector('meta[name="viewport"]'),h="orientationchange"in window?"orientationchange":"resize";g.setAttribute("content","width=device-width,initial-scale="+e+",maximum-scale="+e+", minimum-scale="+e+",user-scalable=no,shrink-to-fit=no"),f.setAttribute("data-dpr",c),i=function(){clientWidth=f.clientWidth,clientWidth&&(f.style.fontSize=100*(clientWidth/750)+"px",document.body&&(document.body.style.fontSize=f.style.fontSize))},i(),a.addEventListener&&(b.addEventListener(h,i,!1),a.addEventListener("DOMContentLoaded",i,!1))}(document,window);