export function menorAmayor (a, b) {
    if (a.population > b.population) {
      return 1;
    }
    if (a.population < b.population) {
      return -1;
    }    
    return 0;
  };

  export function mayorAmenor (a, b) {
    if (b.population > a.population) {
      return 1;
    }
    if (b.population < a.population) {
      return -1;
    }
    return 0;
  };
  export function alfabeticamente (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  };
  export function alfabeticamenteZ (a, b) {
    if (b.name > a.name) {
      return 1;
    }
    if (b.name < a.name) {
      return -1;
    }
    return 0;
  };
  export function actividades (a, b) {
    if (b.activities.length > a.activities.length) {
      return 1;
    }
    if (b.activities.length < a.activities.length) {
      return -1;
    }
    return 0;
  };
 export function actividadesz (a, b) {
    if (a.activities.length > b.activities.length) {
      return 1;
    }
    if (a.activities.length < b.activities.length) {
      return -1;
    }
    return 0;
  };

  export default {
    menorAmayor,
     mayorAmenor,
      alfabeticamente,
       alfabeticamenteZ,
        actividades,
        actividadesz
};
  