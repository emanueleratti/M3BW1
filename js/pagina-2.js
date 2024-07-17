const apartments = {
    genova: [
    {
        img: "./assets/genova-6.jpeg", 
        type: "Apartment",
        city: "Rapallo",
        rating: "4,86 (7)",
        beds: "2 Letti",
        host: "Stefania",
        price: 179
        
    },
    {
        img: "./assets/genova-8.jpeg", 
        type: "Apartment",
        city: "Rapallo",
        rating: "4,86 (7)",
        beds: "2 Letti",
        host: "Stefania",
        price: 179
        
    },
    {
        img: "./assets/genova-3.jpeg", 
        type: "Apartment",
        city: "Rapallo",
        rating: "4,86 (7)",
        beds: "2 Letti",
        host: "Stefania",
        price: 179
        
    },
    {
        img: "./assets/genova-4.jpeg", 
        type: "Apartment",
        city: "Rapallo",
        rating: "4,86 (7)",
        beds: "2 Letti",
        host: "Stefania",
        price: 179
        
    },
    {
        img: "./assets/genova-7.jpeg", 
        type: "Apartment",
        city: "Rapallo",
        rating: "4,86 (7)",
        beds: "2 Letti",
        host: "Stefania",
        price: 179
        
    },
    {
        img: "./assets/genova-6.jpeg", 
        type: "Apartment",
        city: "Rapallo",
        rating: "4,86 (7)",
        beds: "2 Letti",
        host: "Stefania",
        price: 179
        
    },
    {
        img: "./assets/genova-3.jpeg", 
        type: "Apartment",
        city: "Rapallo",
        rating: "4,86 (7)",
        beds: "2 Letti",
        host: "Stefania",
        price: 179
       
    },
    {
        img: "./assets/genova-7.jpeg", 
        type: "Apartment",
        city: "Rapallo",
        rating: "4,86 (7)",
        beds: "2 Letti",
        host: "Stefania",
        price: 179
        
    },
    {
        img: "./assets/genova-4.jpeg", 
        type: "Apartment",
        city: "Rapallo",
        rating: "4,86 (7)",
        beds: "2 Letti",
        host: "Stefania",
        price: 179
        
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
    
    apartmentCardContainer.appendChild(card);
}

apartments.genova.forEach(apartment => {
    cardCreation(apartment);
})