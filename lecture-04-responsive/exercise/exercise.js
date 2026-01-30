console.log("JS connected ✅");

const btnName = document.getElementById("btnName");
const nameOut = document.getElementById("nameOut");

btnName.onclick = function () {
  nameOut.innerText = "Your Name Here"; // students should replace
};
 

const btnToggle = document.getElementById("btnToggle");
const toggleOut = document.getElementById("toggleOut");
//const toggleOut = document.getElementById("btnonoff");

btnToggle.onclick = function () {
  if (toggleOut.innerText === "OFF") {
    toggleOut.innerText = "ON";
  } else {
    toggleOut.innerText = "OFF";
    //btnonoff.innerText = "Turn ON";
  }
}


const btnBg = document.getElementById("btnBg");
const btnBgReset = document.getElementById("btnBgReset");
const btnBgcard = document.getElementById("btnBgcard");
const btnBgResetcard = document.getElementById("btnBgResetcard");

const card3 = document.getElementById("card3");

btnBg.onclick = function () {
  document.body.style.backgroundColor = "lavender";
};
btnBgReset.onclick = function () {
  document.body.style.backgroundColor = "";
};
btnBgcard.onclick = function () {
  card3.style.backgroundColor = "pink";
};
btnBgResetcard.onclick = function () {
  card3.style.backgroundColor = "";
};