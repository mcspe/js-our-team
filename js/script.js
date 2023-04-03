const ourTeam = [
  {
    firstName:'Wayne',
    lastName:'Barnett',
    role:'Founder & CEO',
    picture: '../img/wayne-barnett-founder-ceo.jpg'
  },
  {
    firstName:'Angela',
    lastName:'Caroll',
    role:'Chief Editor',
    picture: '../img/angela-caroll-chief-editor.jpg'
  },
  {
    firstName:'Walter',
    lastName:'Gordon',
    role:'Office Manager',
    picture: '../img/walter-gordon-office-manager.jpg'
  },
  {
    firstName:'Angela',
    lastName:'Lopez',
    role:'Social Media Manager',
    picture: '../img/angela-lopez-social-media-manager.jpg'
  },
  {
    firstName:'Scott',
    lastName:'Estrada',
    role:'Developer',
    picture: '../img/scott-estrada-developer.jpg'
  },
  {
    firstName:'Barbara',
    lastName:'Ramos',
    role:'Graphic Designer',
    picture: '../img/barbara-ramos-graphic-designer.jpg'
  }
];

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
  const img = new Image();
  img.src = member.picture;
  cardImg.append(img);
  const name = document.createElement('h3');
  name.innerHTML = `${member.firstName} ${member.lastName}`
  const role = document.createElement('p');
  role.innerHTML = `${member.role}`
  cardDiv.append(cardImg, name, role);
  return cardDiv;
}