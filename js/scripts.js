// document.addEventListener('DOMContentLoaded', () => {
//   loadAds();
//
//   document.getElementById('adForm').addEventListener('submit', (e) => {
//     e.preventDefault();
//     postAd();
//   });
// });
//
// function loadAds(page = 1) {
//   fetch(`/api/ads?page=${page}`)
//     .then(response => response.json())
//     .then(data => {
//       displayAds(data.ads);
//       displayPagination(data.page, data.totalPages);
//     })
//     .catch(error => console.error('Error fetching ads:', error));
// }
//
// function displayAds(ads) {
//   const container = document.getElementById('adsContainer');
//   container.innerHTML = '';
//   ads.forEach(ad => {
//     const adElement = document.createElement('div');
//     adElement.innerHTML = `<h3>${ad.email}</h3><p>${ad.description}</p>`;
//     container.appendChild(adElement);
//   });
// }
//
// function displayPagination(currentPage, totalPages) {
//   const pagination = document.getElementById('pagination');
//   pagination.innerHTML = '';
//   for (let i = 1; i <= totalPages; i++) {
//     const pageLink = document.createElement('button');
//     pageLink.textContent = i;
//     pageLink.onclick = () => loadAds(i);
//     if (i === currentPage) {
//       pageLink.disabled = true;
//     }
//     pagination.appendChild(pageLink);
//   }
// }
//
// function searchAds() {
//   const query = document.getElementById('searchInput').value;
//   fetch(`/api/ads?search=${query}`)
//     .then(response => response.json())
//     .then(data => {
//       displayAds(data.ads);
//       displayPagination(data.page, data.totalPages);
//     })
//     .catch(error => console.error('Error searching ads:', error));
// }
//
// function showPostForm() {
//   document.getElementById('postForm').classList.toggle('hidden');
// }
//
// function postAd() {
//   const email = document.getElementById('email').value;
//   const description = document.getElementById('description').value;
//
//   fetch('/api/ads', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ email, description })
//   })
//     .then(response => response.json())
//     .then(data => {
//       if (data.success) {
//         loadAds();
//         showPostForm();
//       } else {
//         alert('Error posting ad');
//       }
//     })
//     .catch(error => console.error('Error posting ad:', error));
// }

document.addEventListener('DOMContentLoaded', () => {
  loadAds();

  document.getElementById('adForm').addEventListener('submit', (e) => {
    e.preventDefault();
    postAd();
  });
});

function loadAds(page = 1) {
  // fetch(`http://localhost:3000/api/ads?page=${page}`) // Ensure the correct port
  fetch(`http://localhost:3000/api/ads`) // Ensure the correct port
    .then(response => response.json())
    .then(data => {
      displayAds(data.ads);
      displayPagination(data.page, data.totalPages);
    })
    .catch(error => console.error('Error fetching ads:', error));
}

function displayAds(ads) {
  const container = document.getElementById('adsContainer');
  container.innerHTML = '';
  ads.forEach(ad => {
    const adElement = document.createElement('div');
    adElement.innerHTML = `<h3>${ad.email}</h3><p>${ad.description}</p>`;
    container.appendChild(adElement);
  });
}

function displayPagination(currentPage, totalPages) {
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement('button');
    pageLink.textContent = i;
    pageLink.onclick = () => loadAds(i);
    if (i === currentPage) {
      pageLink.disabled = true;
    }
    pagination.appendChild(pageLink);
  }
}

function searchAds() {
  const query = document.getElementById('searchInput').value;
  fetch(`http://localhost:3000/api/ads?search=${query}`) // Ensure the correct port
    .then(response => response.json())
    .then(data => {
      displayAds(data.ads);
      displayPagination(data.page, data.totalPages);
    })
    .catch(error => console.error('Error searching ads:', error));
}

function showPostForm() {
  document.getElementById('postForm').classList.toggle('hidden');
}

function postAd() {
  const email = document.getElementById('email').value;
  const description = document.getElementById('description').value;

  fetch('http://localhost:3000/api/ads', { // Ensure the correct port
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, description })
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        loadAds();
        showPostForm();
      } else {
        alert('Error posting ad');
      }
    })
    .catch(error => console.error('Error posting ad:', error));
}
