// Interaktiv SVG-side
const svgPlaceholder = document.querySelector(".svg-placeholder");

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}

const kort = document.querySelector(".svg-kort");

document
  .querySelector("#details-start")
  .addEventListener("toggle", opdaterFigur);
document.querySelector("#details-hus").addEventListener("toggle", opdaterFigur);
document.querySelector("#details-pav").addEventListener("toggle", opdaterFigur);
document
  .querySelector("#details-springvand")
  .addEventListener("toggle", opdaterFigur);
document
  .querySelector("#details-skov")
  .addEventListener("toggle", opdaterFigur);
document
  .querySelector("#details-skat")
  .addEventListener("toggle", opdaterFigur);

function opdaterFigur() {
  const aabent = document.querySelector(".accordion-item[open]");
  if (aabent) {
    kort.dataset.position = aabent.dataset.position;
    document.querySelector("#besked").textContent =
      "Valgt sted: " + aabent.querySelector("summary").textContent;
  } else {
    delete kort.dataset.position;
    document.querySelector("#besked").textContent =
      "Alt er lukket. Figuren står ved indgangen.";
  }
}
opdaterFigur();
const figur = document.querySelector(".figur");

figur.addEventListener("transitionstart", (e) => {
  if (e.propertyName === "translate") kort.classList.add("gaar");
});

["transitionend", "transitioncancel"].forEach((hændelse) => {
  figur.addEventListener(hændelse, (e) => {
    if (e.propertyName === "translate") kort.classList.remove("gaar");
  });
});
