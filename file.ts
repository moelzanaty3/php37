let foodDynamic = [
  {
    id: 457,
    name: 'Gemüse',
    rank: 0,
    unitType: '1 stück',
    owner: 'mohammed',
    schoolId: 1,
    disabled: false,
    weight: 0.0,
    euro: 2.0,
    co2: 0.9,
    image: 'icons/rmf_gemuese.svg'
  },
  {
    id: 458,
    name: 'Salat',
    rank: 0,
    unitType: '1 stück',
    owner: 'mohammed',
    schoolId: 1,
    disabled: false,
    weight: 0.0,
    euro: 2.0,
    co2: 0.9,
    image: 'icons/rmf_salat.svg'
  },
  {
    id: 459,
    name: 'Obst',
    rank: 0,
    unitType: '1 stück',
    owner: 'mohammed',
    schoolId: 1,
    disabled: false,
    weight: 0.0,
    euro: 2.0,
    co2: 0.7,
    image: 'icons/rmf_obst.svg'
  },
  {
    id: 460,
    name: 'Fleisch',
    rank: 0,
    unitType: '1 stück',
    owner: 'mohammed',
    schoolId: 1,
    disabled: false,
    weight: 0.0,
    euro: 2.0,
    co2: 8.0,
    image: 'icons/rmf_fleisch.svg'
  },
  {
    id: 461,
    name: 'Fisch',
    rank: 0,
    unitType: '1 stück',
    owner: 'mohammed',
    schoolId: 1,
    disabled: false,
    weight: 0.0,
    euro: 2.0,
    co2: 5.0,
    image: 'icons/rmf_fisch.svg'
  },
  {
    id: 462,
    name: 'Milchprod',
    rank: 0,
    unitType: '1 stück',
    owner: 'mohammed',
    schoolId: 1,
    disabled: false,
    weight: 0.0,
    euro: 2.0,
    co2: 3.0,
    image: 'icons/rmf_milchpr.svg'
  },
  {
    id: 463,
    name: 'Trockenprod',
    rank: 0,
    unitType: '1 stück',
    owner: 'mohammed',
    schoolId: 1,
    disabled: false,
    weight: 0.0,
    euro: 2.0,
    co2: 2.5,
    image: 'icons/rmf_teig02.svg'
  },
  {
    id: 464,
    name: 'Backwaren',
    rank: 0,
    unitType: '1 stück',
    owner: 'mohammed',
    schoolId: 1,
    disabled: false,
    weight: 0.0,
    euro: 2.0,
    co2: 1.5,
    image: 'icons/rmf_back.svg'
  },
  {
    id: 465,
    name: 'Dessert',
    rank: 0,
    unitType: '1 stück',
    owner: 'mohammed',
    schoolId: 1,
    disabled: false,
    weight: 0.0,
    euro: 2.0,
    co2: 2.5,
    image: 'icons/rmf_susspeisen.svg'
  },
  {
    id: 466,
    name: 'Getränke',
    rank: 0,
    unitType: '1 stück',
    owner: 'mohammed',
    schoolId: 1,
    disabled: false,
    weight: 0.0,
    euro: 2.0,
    co2: 0.7,
    image: 'icons/rmf_getraenk.svg'
  },
  {
    id: 467,
    name: 'Fertigprod',
    rank: 0,
    unitType: '1 stück',
    owner: 'mohammed',
    schoolId: 1,
    disabled: false,
    weight: 0.0,
    euro: 2.0,
    co2: 3.7,
    image: 'icons/rmf_fertigprodukte.svg'
  },
  {
    id: 468,
    name: 'Reste',
    rank: 0,
    unitType: '1 stück',
    owner: 'mohammed',
    schoolId: 1,
    disabled: false,
    weight: 0.0,
    euro: 2.0,
    co2: 3.3,
    image: 'icons/rmf_gemischt.svg'
  }
];
let foodStatic = [
  {
    name: 'Gemüse',
    image: 'icons/rmf_gemuese.svg',
  },
  {
    name: 'Salat',
    image: 'icons/rmf_salat.svg',
  },
  {
    name: 'Obst',
    image: 'icons/rmf_obst.svg',
  },
  {
    name: 'Fleisch',
    image: 'icons/rmf_fleisch.svg',
  },
  {
    name: 'Fisch',
    image: 'icons/rmf_fisch.svg',
  },
  {
    name: 'Milchprod',
    image: 'icons/rmf_milchpr.svg',
  },
  {
    name: 'Trockenprod',
    image: 'icons/rmf_teig02.svg',
  },
  {
    name: 'Backwaren',
    image: 'icons/rmf_back.svg',
  },
  {
    name: 'Dessert',
    image: 'icons/rmf_susspeisen.svg',
  },
  {
    name: 'Getränke',
    image: 'icons/rmf_getraenk.svg',
  },
  {
    name: 'Fertigprod',
    image: 'icons/rmf_fertigprodukte.svg',
  },
  {
    name: 'Reste',
    image: 'icons/rmf_gemischt.svg',
  }
];


result = []

foodStatic.forEach(foodStaticEl => {
    currentFoodItem = foodDynamic.filter(foodDynamicEl => foodDynamicEl.name === foodStaticEl.name);
    update(foodStaticEl, currentFoodItem[0])
    result.push(foodStaticEl); 
})

function update(obj/*, …*/) {
    for (var i=1; i<arguments.length; i++) {
        for (var prop in arguments[i]) {
            var val = arguments[i][prop];
            if (typeof val == "object") // this also applies to arrays or null!
                update(obj[prop], val);
            else
                obj[prop] = val;
        }
    }
    return obj;
}

console.log(result);