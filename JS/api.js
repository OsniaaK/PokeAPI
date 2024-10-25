export const apiURL = "https://pokeapi.co/api/v2/pokemon";

export const getOne = async (number = 1) => {
  try {
    const query = await fetch(`${apiURL}/${number}/`);
    const datos = await query.json();
    if (!query.ok || !datos.id) {
      throw new Error("Pokémon no encontrado");
    }

    let { id, forms, abilities, sprites, weight, height, types } = datos;
    return { id, forms, abilities, sprites, weight, height, types };
  } catch (error) {
    throw new Error(error.message);
  }
};
