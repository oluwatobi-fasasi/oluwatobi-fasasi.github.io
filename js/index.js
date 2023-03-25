// JavaScript goes here
const navBar = document.querySelector('nav');
const menu = document.querySelector('.menu');
const cancel = document.querySelector('.cancel');

menu.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  navBar.classList.toggle('hidden');
});

cancel.addEventListener('click', () => {
  navBar.classList.toggle('hidden');
  menu.classList.toggle('hidden');
});

// Dynamic Feature Section

const feature = [
  {
    name: 'Dixon Afred',
    title: 'Director of Development IITA',
    description: 'Alfred Gilbert Dixon is the Director of the Development and Delivery Office.',
    speakerImage: '../images/Dixon-Alfred-2.jpg',
    alt: 'Dixon',
  },

  {
    name: 'Abebe Menkir ',
    title: 'Maize Breeder-Geneticist IITA',
    description: 'Abebe Menkir holds BSc-in Plant Science, MSc and PhD in Plant Breeding (Ethiopia)',
    speakerImage: '../images/Abebe-Menkir.jpg',
    alt: 'Abebe',
  },
  {
    name: 'Richard Downey',
    title: 'Canadian Agricultural Scientist',
    description: 'Keith Downey, known as the “Father of CANOLA,” is a plant breeder rapeseed into canola.',
    speakerImage: '../images/Richard-Keith-Downey.jpeg',
    alt: 'Richard',
  },
  {
    name: 'Agbabiaka Quadri',
    title: 'CEO JustAgric',
    description: 'As a young, agriculturist, I provide farmers and aspiring farmers basic guides.',
    speakerImage: '../images/Agbabiaka.jpeg',
    alt: 'Agbabiaka',
  },
  {
    name: 'John Derera',
    title: 'Head of Breeding IITA',
    description: 'John Derera, a Zimbabwean, is currently the Head of Breeding in IITA.',
    speakerImage: '../images/John-Derera.jpg',
    alt: 'Derera',
  },
  {
    name: 'Monty Jones',
    title: 'Agricultural & Nutritional Scientist',
    description: 'He began his professional career at the National Rice Research station.',
    speakerImage: '../images/monty_jones.jpg',
    alt: 'Monty',
  },
];

const cardWrapper = document.querySelector('.card-wrapper');

feature.forEach((speaker, index) => {
  const speakersCards = document.createElement('div');
  speakersCards.classList.add('test');
  const featureContent = `<div id="card${index + 1}">
          <div class="dot-photo">
            <img src="./images/rectdot.png" alt="" class="dot">
            <img src="./images/${speaker.speakerImage}" alt="${speaker.alt}" class="speaker-img">
          </div>
          <div class="speaker-details">
            <h4 class="speaker-name">${speaker.name}</h4>
            <p class="speaker-title"><em>${speaker.title}</em></p>
            <div class="speaker-line"></div>
            <p class="speaker-text">${speaker.description}</p>
          </div>
        </div>
        </div>
        </div>`;

  speakersCards.innerHTML = featureContent;
  cardWrapper.appendChild(speakersCards);
});
