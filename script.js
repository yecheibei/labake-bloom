(function(){
var C={price:500,opts:[1,2,5,10],wa:"2348148182055",acct:"8148182055",max:1000};
var $=function(i){return document.getElementById(i)},qty=0,keep=false;
var f=function(n){return "₦"+n.toLocaleString("en-NG")};
var num=function(s){return parseInt(String(s).replace(/\D/g,""),10)||0};
var lf=null;document.addEventListener("submit",function(e){lf=e.target},true);
var open=function(t){var u="https://wa.me/"+C.wa+"?text="+encodeURIComponent(t);try{window.open(u,"_blank")}catch(e){}
var f=lf||document.body,o=f.querySelector(".wa");if(o)o.remove();
var d=document.createElement("div");d.className="wa";d.setAttribute("role","status");d.innerHTML="<p>Your message is ready. If WhatsApp didn’t open, tap the button below.</p>";
var a=document.createElement("a");a.className="btn bk";a.href=u;a.target="_blank";a.rel="noopener noreferrer";a.textContent="Open WhatsApp";d.appendChild(a);
var c=document.createElement("button");c.type="button";c.className="lk";c.textContent="Copy message instead";c.onclick=function(){try{navigator.clipboard.writeText(t).then(function(){c.textContent="Copied ✓"})}catch(e){}};d.appendChild(c);f.appendChild(d);d.scrollIntoView({block:"nearest",behavior:"smooth"})};
document.querySelectorAll(".pr").forEach(function(e){e.textContent=f(C.price)});
var chips=$("chips");
C.opts.forEach(function(n){var b=document.createElement("button");b.type="button";b.className="chip";b.setAttribute("aria-pressed","false");b.dataset.n=n;b.innerHTML=n+"<small>"+f(n*C.price)+"</small>";b.onclick=function(){$("cq").value="";$("cqe").textContent="";set(n)};chips.appendChild(b)});
function set(n){
  qty=n;keep=false;$("mis").hidden=true;
  chips.querySelectorAll(".chip").forEach(function(b){b.setAttribute("aria-pressed",String(+b.dataset.n===n))});
  $("sl").textContent=n?n+(n>1?" Blooms":" Bloom"):"Nothing selected yet";
  $("tv").textContent=f(n*C.price);
  $("am").textContent=n?f(n*C.price):"—";
}
$("cq").oninput=function(){
  var v=this.value.replace(/\D/g,"");this.value=v;var n=+v;
  if(!v){$("cqe").textContent="";set(0);return}
  if(n<1||n>C.max){$("cqe").textContent="Enter a number from 1 to "+C.max+".";set(0);return}
  $("cqe").textContent="";set(n);
};
$("cp").onclick=function(){
  var b=this,ok=function(){b.textContent="Copied ✓";setTimeout(function(){b.textContent="Copy"},2000)};
  try{navigator.clipboard.writeText(C.acct).then(ok,sel)}catch(e){sel()}
  function sel(){var r=document.createRange();r.selectNodeContents($("an"));var s=getSelection();s.removeAllRanges();s.addRange(r);b.textContent="Selected"}
};
$("ut").onclick=function(){if(qty)$("pa").value=(qty*C.price).toLocaleString("en-NG")};
$("pa").oninput=function(){keep=false;$("mis").hidden=true};
function send(){
  var n=num($("pa").value),w=$("pw").value.trim();
  open("Labake Blooms transfer\n\nName: "+$("pn").value.trim()+"\nAmount: "+f(n)+(qty?"\nBlooms: "+qty:"")+(w?"\n\nWish: "+w:""));
}
$("cfm").onsubmit=function(e){
  e.preventDefault();var n=num($("pa").value),err=$("ce");
  if(!$("pn").value.trim()){err.textContent="Enter the name on the transfer.";$("pn").focus();return}
  if(!n){err.textContent="Enter the amount you transferred.";$("pa").focus();return}
  err.textContent="";
  if(qty&&n!==qty*C.price&&!keep){
    $("mt").textContent="You picked "+qty+(qty>1?" Blooms":" Bloom")+" ("+f(qty*C.price)+") but entered "+f(n)+".";
    $("mf").textContent="Use "+f(qty*C.price);$("mis").hidden=false;return;
  }
  send();
};
$("mf").onclick=function(){$("pa").value=(qty*C.price).toLocaleString("en-NG");$("mis").hidden=true;keep=true;send()};
$("mk").onclick=function(){keep=true;$("mis").hidden=true;send()};
$("wf").onsubmit=function(e){
  e.preventDefault();var t=$("wt").value.trim(),n=$("wn").value.trim();
  if(!t){$("we").textContent="Write your wish first.";$("wt").focus();return}
  $("we").textContent="";
  open("Birthday wish for Omolabake\n\n"+t+(n?"\n\n— "+n:""));
};
set(0);
})();