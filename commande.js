// Remplace le texte après "lacaleche-" par des lettres/chiffres au hasard : c'est le "mot de passe" du canal de notifications.
const NTFY_TOPIC="lacaleche-cmd-CHANGE-MOI-x7k29q";
const cart={};
// Horaires de commande (0=dimanche ... 5=vendredi, 6=samedi) : [heure d'ouverture, heure de fermeture]
const HORAIRES={0:[8,23],1:[8,23],2:[8,23],3:[8,23],4:[8,23],5:[15,23],6:[8,23]};
function ouvert(){
 const d=new Date(new Date().toLocaleString("en-US",{timeZone:"Africa/Algiers"}));
 const h=d.getHours()+d.getMinutes()/60,[a,b]=HORAIRES[d.getDay()];
 return h>=a&&h<b;
}

const $=s=>document.querySelector(s);
const da=n=>n.toLocaleString("fr-FR")+" DA";
const lines=()=>Object.entries(cart).map(([k,q])=>{const[c,i]=k.split("-");const[n,p]=MENU[c][1][i];return{n,p,q}});
function render(){
 $("#commander-menu").innerHTML=MENU.map(([c,it],ci)=>`<details><summary>${c}</summary>${it.map(([n,p],i)=>`<div class="plat"><span>${n}<small>${da(p)}</small></span><span class="qty"><button type="button" onclick="chg('${ci}-${i}',-1)">−</button><b id="q${ci}-${i}">0</b><button type="button" onclick="chg('${ci}-${i}',1)">+</button></span></div>`).join("")}</details>`).join("");
}
function chg(k,d){
 cart[k]=Math.max(0,(cart[k]||0)+d);if(!cart[k])delete cart[k];
 $("#q"+k).textContent=cart[k]||0;
 const l=lines();
 $("#recap").innerHTML=l.map(x=>`<li>${x.q} × ${x.n} — ${da(x.p*x.q)}</li>`).join("");
 $("#total").textContent=da(l.reduce((s,x)=>s+x.p*x.q,0));
}
async function commander(e){
 e.preventDefault();
  if(!ouvert())return alert("Les commandes en ligne sont fermées pour le moment.");
 const l=lines();if(!l.length)return alert("Votre panier est vide.");
 const f=e.target,mode=f.mode.value,num="#"+Date.now().toString().slice(-5);
 const total=l.reduce((s,x)=>s+x.p*x.q,0);
 const msg=`${f.nom.value} – ${f.tel.value}\n${mode}${mode==="Livraison"?" : "+f.adresse.value:""}\n\n`+l.map(x=>`${x.q} × ${x.n}`).join("\n")+`\n\nTotal : ${da(total)}`+(f.note.value?`\nRemarque : ${f.note.value}`:"");
 try{
  const r=await fetch("https://ntfy.sh/",{method:"POST",body:JSON.stringify({topic:NTFY_TOPIC,title:"Nouvelle commande "+num,message:msg,priority:5,tags:["bell"]})});
  if(!r.ok)throw 0;
  alert("Commande "+num+" envoyée ! Nous vous appelons pour confirmer.");location.reload();
 }catch{alert("Erreur d'envoi. Merci de nous appeler.")}
}
document.addEventListener("DOMContentLoaded",()=>{
 render();
 if(!ouvert()){
  document.querySelectorAll("#form-commande input,#form-commande select,#form-commande textarea,#form-commande button,.qty button").forEach(x=>x.disabled=true);
  $("#commander-menu").insertAdjacentHTML("beforebegin",'<p class="ferme">Les commandes en ligne sont fermées. Horaires : samedi à jeudi de 08h à 23h, vendredi de 15h à 23h.</p>');
 }
});