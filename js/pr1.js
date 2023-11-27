"use strict";
console.log("pr1.js file was loaded");

const students = [
  {
    name: "James",
    gender: "male",
    age: 25,
    town: "Vilnius",
    hasCar: true,
    id: 1,
  },
  {
    name: "Jill",
    gender: "female",
    age: 28,
    town: "Kaunas",
    hasCar: true,
    id: 2,
  },
  {
    name: "Mike",
    gender: "male",
    age: 18,
    town: "Kaunas",
    hasCar: false,
    id: 3,
  },
  {
    name: "Jane",
    gender: "female",
    age: 22,
    town: "Klaipeda",
    hasCar: false,
    id: 4,
  },
  {
    name: "Jannet",
    gender: "female",
    age: 29,
    town: "Klaipeda",
    hasCar: true,
    id: 5,
  },
  {
    name: "Cory",
    gender: "male",
    age: 30,
    town: "Siauliai",
    hasCar: true,
    id: 6,
  },
  {
    name: "Minks",
    gender: "male",
    age: 19,
    town: "Siauliai",
    hasCar: false,
    id: 7,
  },
];

// taikomes
const els = {
  studentsList: document.getElementById("students"),
  allStdBtn: document.getElementById("btn1"),
  siauliaiBtn: document.getElementById("btn2"),
};
console.log("els ===", els);
// students.forEach((studObj) => {
//   console.log(studObj.age);
// });

// sugeneruoti id kiekvienam studentui

// const stSuId = students.map((studObj, idx) => {
//   // prideti dijanti id prie kiekvieno stud
//   studObj.id = idx + 1;
//   // idx++
//   // idx = idx + 1
//   return studObj;
// });
// console.log(JSON.stringify(stSuId, null, 1));
console.table(students);
// st1. sugeneruoti studentu nerikiuota sarasa htmle kuriame butu studentu vardas ir miestas
function generateStudHtml(arr) {
  // istrinti sarasa
  els.studentsList.innerHTML = "";
  // sukurti cikla ir jo viduje
  arr.forEach((studObj) => {
    // sukurti li
    const liEl = document.createElement("li");
    // prideti varda ir miesta
    liEl.textContent = `Vardas:${studObj.name}, Miestas: ${studObj.town} amzius: ${studObj.age}`;
    // console.log('liEl ===', liEl);
    // ideti li i ul
    els.studentsList.append(liEl);
    // 2. generateStudHtml() sudeda i html ne students elementus bet argumentu gauta masyva
  });
}
generateStudHtml(getStudenstByTown("Klaipeda"));

// st2. Parasyti funkcija, kuriai paduodam miesta kaip argumenta ir ji atrenka studentus is to miesto
function getStudenstByTown(argTown) {
  const atrikti = students.filter((studObj) => studObj.town === argTown);
  console.table(atrikti);
  // 1. funkcija grazina atrinktus studentus
  return atrikti;
}
const klaipedieciai = getStudenstByTown("Klaipeda");
// 3. su generateStudHtml atspaudinti atrinktus studentus
generateStudHtml(klaipedieciai);
//

// atspaundinti visus students lsu btn1
els.allStdBtn.addEventListener("click", () => generateStudHtml(students));

els.siauliaiBtn.addEventListener("click", () => {
  // gauti studentus is siauliu
  const siaulieciai = getStudenstByTown("Siauliai");
  // sugeneruoti i html
  generateStudHtml(siaulieciai);
});

//
// st3. Parasyti funkcija, kuriai paduodam amziu kaip argumenta ir ji atrenka studentus kuriu amzius didesnis uz argumenta.

function getStudentAbove(amzius) {
  // atrinkti stucondentus
  const atrinkti = students.filter((stdObj) => {
    stdObj.age > amzius;
    return stdObj.age > amzius;
  });
  return atrinkti;
}
getStudentAbove(20);

// st4. prie st1 sugeneruoto saraso pridedam mygtuka su textu 'delete'. mygtuka paspaudus istiname ta li el kuriame yra paspaustas mygtukas
