const loadPhones = async (scarceText, datalimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${scarceText}`
    const res = await fetch(url);
    const data = await res.json();
    displayphones(data.data, datalimit);
}

const displayphones = (phones, datalimit) => {
    const phonesContainer = document.getElementById('phone-container');
    phonesContainer.textContent = '';
    // display 20 phones only
    const showAll = document.getElementById('show-all');
    if (datalimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none');
    }
    else {
        showAll.classList.add('d-none');
    }

    //display no phones found
    const noPhone = document.getElementById('no-found-message');
    if (phones.length === 0) {
        noPhone.classList.remove('d-none')
    }
    else {
        noPhone.classList.add('d-none');
    }
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
    //stop loder
    toggleSpinner(false);
}
const processSearch = (datalimit) => {
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText, datalimit);
}

document.getElementById('btn-search').addEventListener('click', function () {
    //start loder
    processSearch(10);
})
const toggleSpinner = isLodding => {
    const loderSection = document.getElementById('loder');
    if (isLodding) {
        loderSection.classList.remove('d-none');
    }
    else {
        loderSection.classList.add('d-none');
    }
}
document.getElementById('btn-show-all').addEventListener('click', function () {
    processSearch();
})

// loadPhones();