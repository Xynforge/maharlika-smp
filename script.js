// MAHARLIKA SMP SETTINGS
// Change this to your real Minecraft server address.
const SERVER_IP = "maharlika.fusionpass.shop";

document.getElementById("serverIp").textContent = SERVER_IP;

function toast(message){
  const t=document.getElementById("toast");
  t.textContent=message;t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"),1800);
}
async function copyIP(){
  try{await navigator.clipboard.writeText(SERVER_IP);toast("Server IP copied!")}
  catch{toast("Copy failed — select the IP manually.")}
}
document.getElementById("copyIp").onclick=copyIP;
document.getElementById("copyIp2").onclick=copyIP;

document.querySelectorAll(".prices button").forEach(btn=>{
  btn.onclick=()=>toast("Add your payment/checkout link to this package.");
});

document.querySelector(".menu").onclick=()=>{
  const n=document.querySelector("nav");
  n.style.display=n.style.display==="flex"?"":"flex";
  if(n.style.display==="flex"){
    n.style.position="absolute";n.style.top="74px";n.style.left="0";n.style.right="0";
    n.style.padding="18px 6%";n.style.flexDirection="column";n.style.background="#0b0a11";
  }
};
