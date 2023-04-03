const ourTeam = [
  {
    firstName:'Wayne',
    lastName:'Barnett',
    role:'Founder & CEO',
    picture: new Image()
  },
  {
    firstName:'Angela',
    lastName:'Caroll',
    role:'Chief Editor',
    picture: new Image()
  },
  {
    firstName:'Walter',
    lastName:'Gordon',
    role:'Office Manager',
    picture: new Image()
  },
  {
    firstName:'Angela',
    lastName:'Lopez',
    role:'Social Media Manager',
    picture: new Image()
  },
  {
    firstName:'Scott',
    lastName:'Estrada',
    role:'Developer',
    picture: new Image()
  },
  {
    firstName:'Barbara',
    lastName:'Ramos',
    role:'Graphic Designer',
    picture: new Image()
  }
];
const imgSrc = [
  '../img/wayne-barnett-founder-ceo.jpg',
  '../img/angela-caroll-chief-editor.jpg',
  '../img/walter-gordon-office-manager.jpg',
  '../img/angela-lopez-social-media-manager.jpg',
  '../img/scott-estrada-developer.jpg',
  '../img/barbara-ramos-graphic-designer.jpg'
]
for (let i in ourTeam) {
  ourTeam[i].picture.src = imgSrc[i];
}

console.log(ourTeam);