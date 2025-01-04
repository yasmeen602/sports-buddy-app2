// JavaScript for Sports Buddy App

// Mobile Navigation Toggle
const navLinks = document.querySelector('nav');
const toggleButton = document.createElement('button');
toggleButton.innerText = '☰'; // Hamburger icon
toggleButton.style.cssText = `
  position: absolute;
  top: 10px;
  right: 20px;
  background: #34495e;
  color: white;
  font-size: 1.5rem;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: none;
`;

// Add button for small screens
document.body.insertBefore(toggleButton, navLinks);
toggleButton.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Adjust display for screen size
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.style.display = 'flex';
    toggleButton.style.display = 'none';
  } else {
    navLinks.style.display = 'none';
    toggleButton.style.display = 'block';
  }
});

// Search for Sports Buddies
const searchButton = document.createElement('button');
searchButton.innerText = 'Find a Buddy';
searchButton.style.cssText = `
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color:rgb(39, 174, 167);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: block;
`;

document.querySelector('.container').appendChild(searchButton);

searchButton.addEventListener('click', () => {
  const sport = prompt('Which sport are you interested in?');
  if (sport) {
    alert(`Searching for buddies who play ${sport}...`);
  } else {
    alert('Please enter a sport!');
  }
});

// Highlight Selected Sports
const sportCards = document.querySelectorAll('.sport');
sportCards.forEach(card => {
  card.addEventListener('click', () => {
    sportCards.forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    alert(`You selected: ${card.querySelector('h3').innerText}`);
  });
});

// Add a CSS class for selected cards
const style = document.createElement('style');
style.innerText = `
  .sport.selected {
    border-color:rgb(174, 39, 133);
    box-shadow: 0 4px 12px rgba(174, 39, 129, 0.4);
  }
`;
document.head.appendChild(style);

