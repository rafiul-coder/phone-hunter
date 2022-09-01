const loadPhones = async (scarceText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${scarceText}`
    const res = await fetch(url);
    const data = await res.json();
    displayphones(data.data);
}

const displayphones = phones => {
    const phonesContainer = document.getElementById('phone-container');
    phonesContainer.textContent = '';
    // display 20 phones only
    phones = phones.slice(0, 10);

    //display no phones found

    //display all phones
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-4">
                <img src="${phone.image}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">${phone.phone_name}</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
        `;
        phonesContainer.appendChild(phoneDiv);
    })
}

document.getElementById('btn-search').addEventListener('click', function () {
    const scarceField = document.getElementById('search-field');
    const scarceText = scarceField.value;
    loadPhones(scarceText);
})

loadPhones();