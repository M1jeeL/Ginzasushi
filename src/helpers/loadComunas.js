const url = "https://apis.digital.gob.cl/dpa/regiones/13/comunas";

export const loadComunas = async () => {
  const res = await fetch(url);

  const comunas = res.json();

  return comunas;
};
