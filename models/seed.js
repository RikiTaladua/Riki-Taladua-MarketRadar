const stocks = [
    {
        name: "Vanguard S&P 500 ETF",
        ticker: "VOO",
        price: "$357.50",
        photo: "VOO-LOGO.jpg",
        description: "Vanguard S&P 500 ETF seeks to track the investment performance of the S&P 500 Index, a widely recognized benchmark of U.S. stock market performance that is dominated by the stocks of large U.S. companies. Vanguard S&P 500 ETF is an exchange-traded share class of Vanguard 500 Index Fund.",
        isFeatured: false,
        dateAdded: "2022-15-03T10:00:00.000Z"
    },
    {
        name: "Apple",
        ticker: "AAPL",
        price: "$152.85",
        photo: "APPLE-LOGO.jpg",
        description: "Whiskers is a playful cat who loves to nap in the sun.",
        isFeatured: false,
        dateAdded: "2022-11-03T10:00:00.000Z"
    },
    {
        name: "Max",
        photo: "https://www.mybestfrienddogcare.co.uk/wp-content/uploads/2019/12/My-Best-Friend-64-scaled.jpg",
        description: "Max is a loyal and energetic dog who loves to run and play.",
        isFeatured: true,
        dateAdded: "2022-11-05T10:00:00.000Z"
    },
    {
        name: "Mittens",
        photo: "https://cdn2-www.cattime.com/assets/uploads/gallery/european-shorthair-cat-breed-pictures/european-shorthair-cat-breed-pictures-8.jpg",
        description: "Mittens is a cuddly cat who loves to be petted.",
        isFeatured: false,
        dateAdded: "2022-11-07T10:00:00.000Z"
    },
    {
        name: "Rocky",
        photo: "https://animalsbreeds.com/wp-content/uploads/2015/01/Boxer-3.jpg",
        description: "Rocky is a protective dog who loves to play with his toys.",
        isFeatured: true,
        dateAdded: "2022-11-09T10:00:00.000Z"
    },
    {
        name: "Milo",
        photo: "https://catcuddles.com/images/white-persian-cat.jpg",
        description: "Milo is a calm and curious cat who loves to explore.",
        isFeatured: false,
        dateAdded: "2022-11-11T10:00:00.000Z"
    },
    {
        name: "Daisy",
        photo: "https://animalsbreeds.com/wp-content/uploads/2014/07/Beagle.jpg",
        description: "Daisy is a friendly and outgoing dog who loves to meet new people.",
        isFeatured: true,
        dateAdded: "2022-11-13T10:00:00.000Z"
    }
]

// Export the seed data to `models/index.js`
module.exports = stocks
