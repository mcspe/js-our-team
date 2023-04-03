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
  //console.log(ourTeam[i]);
}

//console.log(ourTeam);
const cardContainer = document.querySelector('.card-container');

for (const member of ourTeam) {
  cardContainer.append(printCard(member));
}

function printCard(member) {
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card';
  const cardImg = document.createElement('div');
  cardImg.className = 'card-img';
  cardImg.append(member.picture);
  const name = document.createElement('h3');
  name.innerHTML = `${member.firstName} ${member.lastName}`
  const role = document.createElement('p');
  role.innerHTML = `${member.role}`
  cardDiv.append(cardImg, name, role);
  return cardDiv;
}