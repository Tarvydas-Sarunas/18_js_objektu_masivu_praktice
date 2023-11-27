"use strict";
console.log("script.js file was loaded");

// data

const nowObj = new Date();
console.log("nowObj ===", nowObj);
console.log("+nowObj ===", +nowObj);
console.log("nowObj ===", nowObj.getFullYear());
console.log("nowObj ===", nowObj.getMonth() + 1);
console.log("nowObj ===", nowObj.getDate()); //diena
console.log("nowObj ===", nowObj.toLocaleDateString()); //diena
console.log("nowObj ===", nowObj.toLocaleTimeString()); //diena

// date.toLocaleString('kalba', papildomi nustatymai)

const niceDate = nowObj.toLocaleString("lt-LT", { dateStyle: "full" });
const niceTime = nowObj.toLocaleString("lt-LT", { timeStyle: "short" });
const niceDateTime = nowObj.toLocaleString("lt-LT", {
  dateStyle: "full",
  timeStyle: "full",
});
console.log("niceDate ===", niceDate);
console.log("niceTime ===", niceTime);
console.log("niceDateTime ===", niceDateTime);

// patalpinti data i h2 date

const els = {
  date: document.getElementById("date"),
  laikas: document.getElementById("time"),
};
els.date.textContent = niceDate;
els.laikas.textContent = niceTime;

function laikas(ele) {
  els.textContent = ele;
  return ele;
}
laikas(els);

// setInterval(funkcija, laikas ms)
setInterval(laikas, 1000);
