"use strict";

const circulo = document.querySelector(".circulo");

circulo.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("clase", e.target.className);
  // console.log(e.dataTransfer.getData("clase"))
});
// circulo.addEventListener("drag", ()=>console.log(2));
// circulo.addEventListener("dragend", ()=>console.log(3));

const rectangulo = document.querySelector(".rectangulo");

rectangulo.addEventListener("dragenter", () => console.log(1));
rectangulo.addEventListener("dragover", (e) => {
  e.preventDefault();
  console.log(2);
});

rectangulo.addEventListener("drop", (e) => {
  console.log(e.dataTransfer.getData("clase"));
});
rectangulo.addEventListener("dragleave", () => console.log(4));
