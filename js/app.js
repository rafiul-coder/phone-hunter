const loadPhones = async () => {
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`
    const res = await fetch(url);
    const data = await res.json();
    displayphones(data.data);
}

const displayphones = phones => {
    console.log(phones);
}
loadPhones();