const form = document.querySelector("form");

function cancelPopup(event) {
  event.preventDefault();
  const invalidField = form.querySelector(":user-invalid");
  if (invalidField) {
    invalidField.focus();
  }
}

if (form) {
  form.addEventListener("invalid", cancelPopup, true);
}

const urlParams = new URLSearchParams(window.location.search);

const valgtMad = urlParams.get("mad");
const madBilleder = document.querySelectorAll("#lasagne, #burger, #pizza");

if (madBilleder.length > 0) {
  madBilleder.forEach((billede) => {
    billede.style.display = "none";
  });

  if (valgtMad) {
    const valgtBillede = document.getElementById(valgtMad);
    if (valgtBillede) {
      valgtBillede.style.display = "block";
    }
  }
}

const valgteDrikke = urlParams.getAll("drikke");
const drikkeBilleder = document.querySelectorAll(
  "#vand, #juice, #saftevand, #sodavand",
);

if (drikkeBilleder.length > 0) {
  drikkeBilleder.forEach((billede) => {
    billede.style.display = "none";
  });

  valgteDrikke.forEach((drik) => {
    const valgtBillede = document.getElementById(drik);
    if (valgtBillede) {
      valgtBillede.style.display = "block";
    }
  });
}

const navn = document.querySelector(".nickname");

if (navn) {
  const nickname = urlParams.get("nickname");
  navn.textContent = nickname;
}
const tal = document.querySelector(".alder");
if (tal) {
  const alder = urlParams.get("alder");
  tal.textContent = alder;
}
const deltagelse = document.querySelector(".deltag");
if (deltagelse) {
  const deltag = urlParams.get("deltag");
  deltagelse.textContent = deltag;
}
const hypeFelt = document.querySelector(".hype");
if (hypeFelt) {
  const hype = urlParams.get("hype");
  hypeFelt.textContent = hype;
}
// Vis valgte drikkevarer som tekst under overskriften
const drikkeTekstFelt = document.querySelector(".valgte-drikke-tekst");
if (drikkeTekstFelt) {
  drikkeTekstFelt.textContent =
    valgteDrikke.length > 0 ? valgteDrikke.join(", ") : "Ingen valgt";
}

// Vis valgt mad som tekst under overskriften
const madTekstFelt = document.querySelector(".valgt-mad-tekst");
if (madTekstFelt) {
  madTekstFelt.textContent = valgtMad ? valgtMad : "Ingen valgt";
}
