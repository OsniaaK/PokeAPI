import { getOne } from "./JS/api.js";
import { create, read, save, select, selectAll } from "./JS/utils.js";

const inputNumber = select("#searchPokemon");
const containerPokemon = select("#container-pokemon");
const Search = select("#Search");





const renderPoke = async (id) => {
  containerPokemon.innerHTML = "<b>Cargando...</b>";
  localStorage.removeItem(`Pokemon`)
  if (id == 0 || null) {
    alert("Insert a Valid Number")
    localStorage.removeItem(`Pokemon`)
    containerPokemon.innerHTML = "<b>Search a Pokemon!</b>";
    return;
  }
  
  if (id > 1025) {
    alert("There is no more Pokemons")
    localStorage.removeItem(`Pokemon`)
    containerPokemon.innerHTML = "<b>Search a Pokemon!</b>";
    return;
  }
  
  containerPokemon.innerHTML = "";
  
  const pokemon = await getOne(id);
  const { forms, sprites, abilities, height, weight, types} = pokemon;
  containerPokemon.innerHTML=`
  <article>
  <picture>
  <img src="${
    sprites.other.home.front_default
  }" alt="imagen de ${forms.map(nombre => nombre.name)}">
  </picture>
  <ul>
  <h2>${forms.map(nombre => nombre.name)}</h2>
  <li>Type/s <span>${types.map(tipo => tipo.type).map(nombre => nombre.name).join(' , ')}</span></li>
  <li>Ability/Abilities <span>${abilities.map((ability) => ability.ability.name).join(" , ")}</span></li>
  <li>Height: <span>${height / 10}/m</span></li>
  <li>Weight: <span>${weight / 10} /Kg</span></li>
  </ul>
  </article>`;
  save(`Pokemon`, pokemon.id);
};

Search.addEventListener("submit", (e) => {
  e.preventDefault();
  renderPoke(inputNumber.value);
});

if (read(`Pokemon`)) {
  renderPoke(read(`Pokemon`))
} else {
  containerPokemon.innerHTML = "<b>Search a Pokemon!</b>";
}