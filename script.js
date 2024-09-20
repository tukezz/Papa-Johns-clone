let category  = [
  "kampaniyalar",
  "papadias",
  "pizzalar",
  "qelyanaltılar",
  "salatlar",
  "pastalar",
  "İçkilər",
  "desserts",
  "souslar"
]

// KATEQORIYALARI CIXARMAQ
const redLent =document.querySelector("#redlent")
let kod = ''
for (let i = 0; i < category.length; i++) {
    kod+= ' ' + `<a class="cursor" onclick = "filtertypes('${category[i]}')"  >${category[i]}  </a>`
  
}
redLent.innerHTML = kod
  
// KARTLARI EKRANA CIXARMAQ

 let pizzalar =[
  {
    "id": 1,
    "name": "Dabl Cheddar Çizburger Papadias",
    "img": "https://www.papajohns.az/uploads/images/Papadias/Dabl-cheddar-çİzburger-Papadİas-yeni-sayt.png",
    "composition": "1000 Ada sousu, Mal Əti, Pomidor, Mozzarella və Cheddar Pendirləri",
    "category": "Papadias",
    "price": 11
  },
  {
    "id": 2,
    "name": "Nyu Orleans Papadias",
    "img": "https://www.papajohns.az/uploads/images/Papadias/Nyu-Orleans-papadİas-yeni-sayt.png",
    "composition": "Sarımsaq Sousu, Yaşıl Bibər, Qril Toyuğu, Qarğıdalı, Mozzarella",
    "category": "Papadias",
    "price": 9
  },
  {
    "id": 3,
    "name": "Çiken Baffalo Papadias",
    "img": "https://www.papajohns.az/uploads/images/Papadias/Buffalo-Chiken-Papadias.jpg",
    "composition": "Ranç Sousu, Qril Toyuğu, Pomidor, Mozzarella, Baffalo Sousu",
    "category": "Papadias",
    "price": 9
  },
  {
    "id": 4,
    "name": "Acılı Çiken Ranç Papadias",
    "img": "https://www.papajohns.az/uploads/images/Papadias/Acili-çiken-ranç-papadias.png",
    "composition": "Ranç Sousu, Qril Toyuğu, Göbələk, Pomidor, Halapeno, Mozarella",
    "category": "Papadias",
    "price": 9
  },
  {
    "id": 5,
    "name": "İtalyan Papadias",
    "img": "https://www.papajohns.az/uploads/images/Papadias/İtalyan-papadias.png",
    "composition": "Pizza Sousu, İtalyan Sosisi, Pepperoni, Mozzarella, Parmezan, Italyan ədviyyatları",
    "category": "Papadias",
    "price": 9
  },
  {
    "id": 6,
    "name": "Cheddar Meksika Papadias",
    "img": "https://www.papajohns.az/uploads/images/Papadias/Cheddar-Mexican-Papadias-yeni-sayt.png",
    "composition": "Pizza sousu, Yaşıl Bibər, Qril Toyuğu, Mozzarella, Cheddar, Halapeno",
    "category": "Papadias",
    "price": 9
  },
  {
    "id": 7,
    "name": "Çiken BBQ Papadias",
    "img": "https://www.papajohns.az/uploads/images/Papadias/Çiken-BBQ-Papadias.png",
    "composition": "Qril Toyuğu, Göbələk, Mozzarella, Barbekyu sousu",
    "category": "Papadias",
    "price": 9
  },
  {
    "id": 285,
    "name": "Amerikan Hot",
    "img": "https://www.papajohns.az/uploads/images/pizza/american-hot.png",
    "category": "Pizzalar",
    "cath": [
      "vegan",
      "spicy"
    ],
    "price": {
      "xs": 5.5,
      "sm": 9,
      "md": 14,
      "lg": 19
    },
    "composition": "Pizza Sousu, Mozzarella, Pepperoni, Halapeno Bibəri"
  },
  {
    "id": 284,
    "name": "Acılı Çiken Ranç",
    "img": "https://www.papajohns.az/uploads/images/pizza/Spicy-chicken-ranch.png",
    "category": "Pizzalar",
    "cath": [
      "chick",
      "spicy"
    ],
    "price": {
      "xs": 5.5,
      "sm": 11,
      "md": 16,
      "lg": 22
    },
    "composition": "Ranç Sousu, Qril Toyuğu, Göbələk, Halapeno Bibəri, Pomidor, Mozzarella"
  },
  {
    "id": 305,
    "name": "Karnaval",
    "img": "https://www.papajohns.az/uploads/images/pizza/Karnaval.jpg",
    "category": "Pizzalar",
    "cath": [
      "vegan"
    ],
    "price": {
      "xs": 5.5,
      "sm": 11,
      "md": 16,
      "lg": 22
    },
    "composition": "Pizza Sousu, Göbələk, Qara Zeytun, Pepperoni, Mozzarella"
  },
  {
    "id": 307,
    "name": "NY Style Margarita (40 sm)",
    "img": "https://www.papajohns.az/uploads/images/pizza/New-York-Style-Margarita.jpg",
    "category": "Pizzalar",
    "cath": [
      "vegan"
    ],
    "price": {
      "lg": 22
    },
    "composition": "Pizza Sousu, Mozzarella, Pomidor, Oreqano"
  },
  {
    "id": 111,
    "img": "https://www.papajohns.az/uploads/images/chicken_barbekyu.jpg",
    "category": "Pizzalar",
    "name": "Çiken Barbekyu",
    "cath": [
      "chick"
    ],
    "price": {
      "xs": 5.5,
      "sm": 10,
      "md": 16,
      "lg": 22
    },
    "composition": "Qril Toyuq, Göbələk, Barbekyu Sousu, Mozzarella Pendiri"
  },
  {
    "id": 13,
    "name": "4 Pendir",
    "img": "https://www.papajohns.az/uploads/images/pizza/4-pendir.png",
    "category": "Pizzalar",
    "cath": [
      "vegan"
    ],
    "price": {
      "sm": 11,
      "md": 16,
      "lg": 22
    },
    "composition": "Pizza sousu, Mozzarella, Feta, Parmezan və Cheddar Pendirləri"
  },
  {
    "id": 14,
    "name": "Meksika",
    "img": "https://www.papajohns.az/uploads/images/pizza/american-hot.png",
    "category": "Pizzalar",
    "cath": [
      "chick",
      "spicy"
    ],
    "price": {
      "xs": 5.5,
      "sm": 9,
      "md": 15,
      "lg": 20
    },
    "composition": "Pizza sousu, Qril Toyuğu, Pomidor, Göbələk, Yaşıl Bibər, Halapeno Bibəri, Mozzarella"
  },
  {
    "id": 15,
    "name": "Super Papa",
    "img": "https://www.papajohns.az/uploads/images/pizza/4-pendir.png",
    "category": "Pizzalar",
    "cath": [
      "meat",
      "spicy"
    ],
    "price": {
      "sm": 12,
      "md": 18,
      "lg": 23
    },
    "composition": "Pizza sousu, Pepperoni, İtalyan Sosisi, Vetçina, Göbələk, Yaşıl Bibər, Qara Zeytun, Mozzarella"
  },
  {
    "id": 16,
    "name": "Yunan",
    "img": "https://www.papajohns.az/uploads/images/pizza/4-pendir.png",
    "category": "Pizzalar",
    "cath": [
      "vegan",
      "spicy"
    ],
    "price": {
      "sm": 8,
      "md": 13,
      "lg": 16
    },
    "composition": "Pizza sousu, Pomidor, Pepperonçini, Qara Zeytun, Feta Pendiri, Oreqano, Mozzarella Pendiri"
  },
  {
    "id": 17,
    "name": "Çiken Çizburger",
    "img": "https://www.papajohns.az/uploads/images/chicken_cheeseburger.jpg",
    "category": "Pizzalar",
    "cath": [
      "chick"
    ],
    "price": {
      "sm": 12,
      "md": 19,
      "lg": 23
    },
    "composition": "1000 ada sousu, Qril Toyuğu, Turşu Xiyar, Pomidor, Mozzarella"
  },
  {
    "id": 18,
    "name": "Marqarita",
    "img": "https://www.papajohns.az/uploads/images/chicken_cheeseburger.jpg",
    "category": "Pizzalar",
    "cath": [
      "vegan"
    ],
    "price": {
      "xs": 5.5,
      "sm": 8,
      "md": 13,
      "lg": 16
    },
    "composition": "Pizza sousu, Pomidor, Oreqano, Ekstra Mozzarella"
  },
  {
    "id": 19,
    "name": "Qarışıq Ət",
    "img": "https://www.papajohns.az/uploads/images/qarishiq_et.jpg",
    "category": "Pizzalar",
    "cath": [
      "meat"
    ],
    "price": {
      "sm": 13,
      "md": 21,
      "lg": 25
    },
    "composition": "Pizza sousu, Pepperoni, İtalyan Sosisi, Mal Əti, Vetçina, Mozzarella"
  },
  {
    "id": 20,
    "name": "Vegetarian",
    "img": "https://www.papajohns.az/uploads/images/vegetarian.jpg",
    "category": "Pizzalar",
    "cath": [
      "vegan"
    ],
    "price": {
      "xs": 5.5,
      "sm": 9,
      "md": 13,
      "lg": 18
    },
    "composition": "Pizza sousu, Pomidor, Göbələk, Yaşıl Bibər, Qara Zeytun, Mozzarella"
  },
  {
    "id": 21,
    "name": "Rastik",
    "img": "https://www.papajohns.az/uploads/images/Campaigns/2023/Noyabr/New%20products/Rustik-320x220-px.png",
    "category": "Pizzalar",
    "cath": [
      "meat"
    ],
    "price": {
      "sm": 12,
      "md": 18,
      "lg": 23
    },
    "composition": "BBQ sousu, İtalyan sosisi, Pepperoni, Göbələk, Yaşıl bibər, Mozzarella"
  },
  {
    "id": 22,
    "name": "Qarışıq ət BBQ",
    "img": "https://www.papajohns.az/uploads/images/Campaigns/2023/Noyabr/New%20products/Qarishiq-et-BBQ-320x220-px.png",
    "category": "Pizzalar",
    "price": {
      "xs": 5.5,
      "sm": 10,
      "md": 16,
      "lg": 22
    },
    "composition": "BBQ sousu, İtalyan sosisi, Mal əti, Vetçina, Pepperoni, Mozzarella"
  },
  {
    "id": 23,
    "name": "Bonanza",
    "img": "https://www.papajohns.az/uploads/images/Campaigns/2023/Noyabr/New%20products/Qarishiq-et-BBQ-320x220-px.png",
    "category": "Pizzalar",
    "cath": [
      "meat"
    ],
    "price": {
      "sm": 13,
      "md": 21,
      "lg": 25
    },
    "composition": "BBQ sousu, Mal əti, Vetçina, Pomidor, Mozzarella, Halapeno Bibəri"
  },
  {
    "id": 24,
    "name": "Dabl Çizburger",
    "img": "https://www.papajohns.az/uploads/images/Campaigns/2023/Noyabr/New%20products/Qarishiq-et-BBQ-320x220-px.png",
    "category": "Pizzalar",
    "cath": [
      "meat"
    ],
    "price": {
      "sm": 12,
      "md": 19,
      "lg": 23
    },
    "composition": "1000 ada sousu, Mal Əti, Turşu Xiyar, Pomidor, Mozzarella"
  },
  {
    "id": 25,
    "name": "Havay",
    "img": "https://www.papajohns.az/uploads/images/havay.jpg",
    "category": "Pizzalar",
    "cath": [
      "chick"
    ],
    "price": {
      "sm": 12,
      "md": 19,
      "lg": 23
    },
    "composition": "Pizza sousu, Qril Toyuğu, Ananas, Ekstra Mozzarella"
  },
  {
    "id": 26,
    "name": "Vestern Barbekyu",
    "img": "https://www.papajohns.az/uploads/images/vestern_barbekyu.jpg",
    "category": "Pizzalar",
    "cath": [
      "meat"
    ],
    "price": {
      "sm": 12,
      "md": 19,
      "lg": 23
    },
    "composition": "Mal Əti, Göbələk, Barbekyu Sousu, Mozzarella Pendiri"
  },
  {
    "id": 8,
    "name": "Küncütlü Pendirli Çubuqlar",
    "img": "https://www.papajohns.az/uploads/images/snacks/pendirli-chubuqlar-kuncut%20(1).png",
    "composition": "Sarımsaq Sousu, Mozzarella, Küncüt",
    "category": "Qelyanaltılar",
    "price": 9
  },
  {
    "id": 9,
    "name": "Sarımsaqlı Çubuqlar",
    "img": "https://www.papajohns.az/uploads/images/sarimsaqli_cubuqlar.jpg",
    "composition": "Sarımsaq Sousu, Pizza-Sous",
    "category": "Qelyanaltılar",
    "price": 9
  },
  {
    "id": 10,
    "name": "Çiken Poppers BBQ",
    "img": "https://www.papajohns.az/uploads/images/Campaigns/2023/Noyabr/New%20products/Chiken-Poppers-BBQ-320x220.png",
    "composition": "150 qram",
    "category": "Qelyanaltılar",
    "price": 9
  },
  {
    "id": 158,
    "name": "Sezar Salatı",
    "img": "https://www.papajohns.az/uploads/images/Caesar%20Salad.jpg",
    "composition": "Qril Toyuq, Aysberq Kahı, Suxari, Pomidor, Parmesan, Sezar Sousu",
    "category": "Salatlar",
    "price": 9
  },
  {
    "id": 157,
    "name": "Yunan Salatı",
    "img": "https://www.papajohns.az/uploads/images/Greek%20Salad.jpg",
    "composition": "Xiyar, Pomidor, Aysberq Kahı, Qara Zeytun, Feta Pendiri, İtalyan Sousu",
    "category": "Salatlar",
    "price": 6
  },
  {
    "id": 156,
    "name": "Tərəvəz Salatı",
    "img": "https://www.papajohns.az/uploads/images/Garden%20Slad.jpg",
    "composition": "Xiyar, Pomidor, Aysberq Kahı, Qara Zeytun, Yaşıl Bibər, İtalyan Sousu",
    "category": "Salatlar",
    "price": 5
  },
  {
    "id": 264,
    "name": "Tuna Salatı",
    "img": "https://www.papajohns.az/uploads/images/salads/Tuna%20Salad_no_tomato_Azer_158_1.jpg",
    "composition": "Ton Balığı, Aysberq Kahı, Qara Zeytun, Qarğıdalı, Xiyar, İtalyan Sousu",
    "category": "Salatlar",
    "price": 8
  },
  {
    "id": 184,
    "name": "Coca Cola 500ml",
    "img": "https://www.papajohns.az/uploads/images/drinks/1cocacola.png",
    "category": "İçkilər",
    "price": 2.5
  },
  {
    "id": 191,
    "name": "Coca-Cola Şəkərsiz 500ml",
    "img": "https://www.papajohns.az/uploads/images/drinks/1Coca-cola-shekersiz.png",
    "category": "İçkilər",
    "price": 2.5
  },
  {
    "id": 186,
    "name": "Sprite 500ml",
    "img": "https://www.papajohns.az/uploads/images/drinks/1Sprite.png",
    "category": "İçkilər",
    "price": 2.5
  },
  {
    "id": 232,
    "name": "Meyvə Şirələri - Cappy",
    "img": "https://www.papajohns.az/uploads/images/drinks/1Cappi.png",
    "category": "İçkilər",
    "price": 1.5,
    "variations": [
      {
        "name": "Portağal (200 ml)",
        "price": 1.5
      },
      {
        "name": "Multivitamin (200 ml)",
        "price": 1.5
      },
      {
        "name": "Albalı (200 ml)",
        "price": 1.5
      },
      {
        "name": "Şaftalı (200 ml)",
        "price": 1.5
      },
      {
        "name": "Alma (200 ml)",
        "price": 1.5
      }
    ]
  },
  {
    "id": 211,
    "name": "Ayran 200ml",
    "img": "https://www.papajohns.az/uploads/images/milla.jpg",
    "category": "İçkilər",
    "price": 1.5,
    "variations": [
      {
        "name": "Nanəli",
        "price": 1.5
      },
      {
        "name": "Adi",
        "price": 1.5
      }
    ]
  },
  {
    "id": 187,
    "name": "Fanta 500ml",
    "img": "https://www.papajohns.az/uploads/images/drinks/1Fanta.png",
    "category": "İçkilər",
    "price": 2.5
  },
  {
    "id": 183,
    "name": "Qazsız Su 500ml",
    "img": "https://www.papajohns.az/uploads/images/drinks/1Bonaqua.png",
    "category": "İçkilər",
    "price": 1
  },
  {
    "id": 182,
    "name": "Qazlı Su 500ml",
    "img": "https://www.papajohns.az/uploads/images/drinks/1Bonaqua.png",
    "category": "İçkilər",
    "price": 1
  },
  {
    "id": 229,
    "name": "Fuse Tea, 500ml",
    "img": "https://www.papajohns.az/uploads/images/drinks/1Fusetea.png",
    "category": "İçkilər",
    "price": 3,
    "variations": [
      {
        "name": "Şaftalı",
        "price": 3
      },
      {
        "name": "Limon",
        "price": 3
      },
      {
        "name": "Mango Ananas",
        "price": 3
      }
    ]
  },
  {
    "id": 275,
    "name": "Brownie",
    "img": "https://www.papajohns.az/uploads/images/desert/Brownie--320x220-px.png",
    "category": "Desserts",
    "price": 7
  },
  {
    "id": 279,
    "name": "Tiramisu",
    "img": "https://www.papajohns.az/uploads/images/desert/Tiramisu--320x220-px.png",
    "category": "Desserts",
    "price": 7
  },
  {
    "id": 314,
    "name": "Şokoladlı Sufle",
    "img": "https://www.papajohns.az/uploads/images/desert/%C5%9Eokoladl%C4%B1-sufle.png",
    "category": "Desserts",
    "price": 5
  },
  {
    "id": 313,
    "name": "Moruqlu Cheesecake",
    "img": "https://www.papajohns.az/uploads/images/desert/raspberry-CHEESECAKE.png",
    "category": "Desserts",
    "price": 7
  },
  {
    "id": 258,
    "name": "Dondurma",
    "img": "https://www.papajohns.az/uploads/images/desert/dondurma%20algida.jpg",
    "category": "Desserts",
    "price": 2,
    "variations": [
      {
        "name": "Çiyələkli",
        "price": 2
      },
      {
        "name": "Şokoladlı",
        "price": 2
      }
    ]
  },
  {
    "id": 174,
    "name": "Ranç Sousu",
    "img": "https://www.papajohns.az/uploads/images/Ranch.jpg",
    "category": "Souslar",
    "price": 0.8
  },
  {
    "id": 170,
    "name": "Barbekyu Sousu",
    "img": "https://www.papajohns.az/uploads/images/Barbeque.jpg",
    "category": "Souslar",
    "price": 0.8
  },
  {
    "id": 169,
    "name": "Sarımsaq Sousu",
    "img": "https://www.papajohns.az/uploads/images/Garlic.jpg",
    "category": "Souslar",
    "price": 0.8
  },
  {
    "id": 171,
    "name": "Baffalo Sousu",
    "img": "https://www.papajohns.az/uploads/images/Buffalo.jpg",
    "category": "Souslar",
    "price": 0.8
  },
  {
    "id": 176,
    "name": "1000 Ada Sousu",
    "img": "https://www.papajohns.az/uploads/images/Thousand-island.jpg",
    "category": "Souslar",
    "price": 0.8
  },
  {
    "id": 173,
    "name": "Pizza Sousu",
    "img": "https://www.papajohns.az/uploads/images/Pizza.jpg",
    "category": "Souslar",
    "price": 0.8
  },
  {
    "name": "Pasta Super Papa",
    "img": "https://www.papajohns.az/uploads/images/pasta_super_papa.jpg",
    "composition": "Spagetti, Pepperoni, Vetçina, İtalyan Sosisləri, Yaşıl Bibər, Göbələk, Pizza Sous, Mozzarella ",
    "category": "Pastalar",
    "price": 9
  },
  {
    "name": "Çiken Ranç Pasta",
    "img": "https://www.papajohns.az/uploads/images/pasta_chicken_ranch.jpg",
    "composition": "Spagetti, Qril Toyuğu, Göbələk, Ranç Sousu, Mozzarella  ",
    "category": "Pastalar",
    "price": 9
  },
  {
    "name": "Mama Pasta",
    "img": "https://www.papajohns.az/uploads/images/pasta_mamas_pasta.jpg",
    "composition": "Spagetti, Parmezan, Oregano, Pizza Sous, Mozzarella ",
    "category": "Pastalar",
    "price": 7
  }

]

const cards = document.querySelector(".cards")
const types = document.querySelector(".types")

// TYPES FILTER
// function filtertypes(category) {
//   let kod2 = ''
//   let flag = false
//   for (let i = 0; i < pizzalar.length; i++) {
//       let item = pizzalar[i];
//       if (item.category.toLowerCase() === category.toLowerCase()) {
//           kod2 += `<div class="card">
//                       <div class="card-img">
//                           <img src="${item.img}" alt="">
//                       </div>
//                       <div class="title">
//                           <span>${item.name}</span>
//                         <button onclick = "openModel(${item.id})">Bunu seç</button>
//                       </div>
//                       <p>${item.composition}</p>
//                   </div>`

//                   if(item.category.toLowerCase() === "pizzalar"){
//                     flag=true
//                   }
//       }
//       if (item.composition === undefined) {
//         item.composition = ""
//       }


//   }
//   types.style.display = flag ? "block" : "none"
//   cards.innerHTML = kod2;
// }


// window.onload = function() {
//   filtertypes('Pizzalar');
// };
 

function renderCards(items) {
  let filter = '';
  for (let i = 0; i < items.length; i++) {
      let item = items[i];
      filter += `<div class="card">
                       <div class="card-img">
                           <img src="${item.img}" alt="">
                      </div>
                       <div class="title">
                           <span>${item.name}</span>
                        <button onclick = "openModel(${item.id})">Bunu seç</button>
                       </div>
                       <p>${item.composition}</p>
                  </div>`
  }

  cards.innerHTML = filter;
}

function filtertypes(category) {
  let showSpecies = false;

  if (category.toLowerCase() === 'pizzalar') {
      showSpecies = true;
      getSpecies('Hamısı'); // Default olaraq 'Hamısı' seçilir
  } else {
      const filteredItems = pizzalar.filter(item => item.category.toLowerCase() === category.toLowerCase());
      renderCards(filteredItems);
  }
  
  types.style.display = showSpecies ? 'flex' : 'none';
}

function getSpecies(speciesType) {
  selectedSpecies = speciesType; // Seçili növü dəyiş

  const filteredItems = pizzalar.filter(item => {
      if (item.category.toLowerCase() !== 'pizzalar') {
          return false;
      }
      if (selectedSpecies === 'Hamısı') {
          return true;
      }
      return item.cath && item.cath.includes(selectedSpecies);
  });

  renderCards(filteredItems);
}
// Səhifə yükləndikdə 'Pizzalar' kateqoriyasını seç
filtertypes('Pizzalar');


