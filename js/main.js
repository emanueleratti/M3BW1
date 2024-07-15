const apartments = {
    genova: [
    {
        img: "../assets/genova-1", 
        type: "Apartment",
        city: "Rapallo",
        rating: "4,86 (7)",
        beds: "2 Letti",
        host: "Stefania",
        price: 179,
        totalPrice: 339
    },
    {
        img: "../assets/genova-2", 
        type: "Apartment",
        city: "Rapallo",
        rating: "4,86 (7)",
        beds: "2 Letti",
        host: "Stefania",
        price: 179,
        totalPrice: 339
    },
    {
        img: "../assets/genova-3", 
        type: "Apartment",
        city: "Rapallo",
        rating: "4,86 (7)",
        beds: "2 Letti",
        host: "Stefania",
        price: 179,
        totalPrice: 339
    },
    {
        img: "../assets/genova-1", 
        type: "Apartment",
        city: "Rapallo",
        rating: "4,86 (7)",
        beds: "2 Letti",
        host: "Stefania",
        price: 179,
        totalPrice: 339
    },
    {
        img: "../assets/genova-1", 
        type: "Apartment",
        city: "Rapallo",
        rating: "4,86 (7)",
        beds: "2 Letti",
        host: "Stefania",
        price: 179,
        totalPrice: 339
    },
    ],
}

const apartmentCardTemplate = document.getElementById("apartment-card-template");
const templateContent = apartmentCardTemplate.content;
const apartmentCardContainer = document.querySelector(".apartment-card-container")


const cardCreation = (cardData) => {
    const card = document.importNode(templateContent, true);
    card.querySelector(".apartment-card .top img").setAttribute("src", cardData.img);
    card.querySelector(".apartment-card .bottom .type").textContent = cardData.type;
    card.querySelector(".apartment-card .bottom .city").textContent = cardData.city;
    card.querySelector(".apartment-card .bottom .rating").textContent = cardData.rating;
    card.querySelector(".apartment-card .bottom .beds").textContent = cardData.beds;
    card.querySelector(".apartment-card .bottom .host").textContent = cardData.host;
    card.querySelector(".apartment-card .bottom .price").textContent = cardData.price;
    card.querySelector(".apartment-card .bottom .total-price").textContent = cardData.totalPrice;
    section.appendChild(card);
    apartmentCardContainer.appendChild(card);
}

apartments.genova.forEach(apartment => {
    cardCreation(apartment);
})