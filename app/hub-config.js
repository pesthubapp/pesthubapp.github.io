/* PestHub demo: shared settings from the Admin page, read from the sample data in this browser. */
(function(){
  var cbs=[];
  function read(){ try{ return window.__demoCfg?JSON.parse(JSON.stringify(window.__demoCfg())):{}; }catch(e){ return {}; } }
  window.HUB=read();
  window.hubReady=function(f){cbs.push(f);};
  window.hubRules=function(){var r=window.HUB.rules||{},d={reviewDays:80,reviewAhead:7,unlockMin:30,ptoHours:80,noticeDays:3,ncnsStrikes:2,resetAt:3,expireMonths:6,cleanDays:90,disputeDays:7,shareDays:2};Object.keys(d).forEach(function(k){if(r[k]!==undefined)d[k]=r[k];});return d;};
  window.hubRefresh=function(){var c=read(),same=JSON.stringify(c)===JSON.stringify(window.HUB);window.HUB=c;if(!same)cbs.forEach(function(f){try{f(c);}catch(e){}});return Promise.resolve();};
})();
