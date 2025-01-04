
// app.js
document.addEventListener('DOMContentLoaded', () => {
    const buddyList = document.getElementById('buddyList');
  
    // Mock data for buddies
    // const buddies = [
    //   { name: 'Alex', sport: 'Tennis', location: 'New York' },
    //   { name: 'Jamie', sport: 'Soccer', location: 'Chicago' },
    //   { name: 'Taylor', sport: 'Basketball', location: 'Los Angeles' },
    // ];
  
    // Populate the buddy list
    buddies.forEach(buddy => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<strong>${buddy.name}</strong> - ${buddy.sport} (${buddy.location})`;
      buddyList.appendChild(listItem);
    });
  });
  