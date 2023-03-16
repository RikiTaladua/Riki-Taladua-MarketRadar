const stocks = [
    {
        name: "Vanguard S&P 500 ETF",
        ticker: "VOO",
        price: "$357.50",
        photo: "https://www.nert.com/wp-content/uploads/2017/11/vanguard.jpg",
        description: "Vanguard S&P 500 ETF seeks to track the investment performance of the S&P 500 Index, a widely recognized benchmark of U.S. stock market performance that is dominated by the stocks of large U.S. companies. Vanguard S&P 500 ETF is an exchange-traded share class of Vanguard 500 Index Fund.",
        isFeatured: true
    },
    {
        name: "Apple",
        ticker: "AAPL",
        price: "$152.85",
        photo: "https://cdn.worldvectorlogo.com/logos/apple.svg",
        description: "Apple Inc. (formerly Apple Computer Inc.) is an American computer and consumer electronics company famous for creating the iPhone, iPad and Macintosh computers. Apple is one of the largest companies globally with a market cap of over 2 trillion dollars.",
        isFeatured: false
    },
    {
        name: "Chevron",
        ticker: "CVX",
        price: "$153.70",
        photo: "https://cdn.worldvectorlogo.com/logos/chevron.svg",
        description: "Chevron Corp (Chevron) is an integrated oil and gas company. It operates in the oil and gas value chain including exploration and production, storage and pipeline transportation to refining, marketing and distribution of oil and gas products.",
        isFeatured: false
    },
    {
        name: "SPDR S&P 500 ETF",
        ticker: "SPY",
        price: "$388.98",
        photo: "https://g.foolcdn.com/art/companylogos/mark/SPY.png",
        description: "The SPDR S&P 500 ETF Trust, also known as the SPY ETF, is one of the most popular funds that aims to track the Standard & Poor's (S&P) 500 Index, which comprises 500 large-cap U.S. stocks. These stocks are selected by a committee based on market size, liquidity, and industry.",
        isFeatured: false,
        dateAdded: "2022-15-03T10:00:00.000Z"
    },
    {
        name: "Mastercard",
        ticker: "MA",
        price: "$348.08",
        photo: "https://cdn.worldvectorlogo.com/logos/mastercard-2.svg",
        description: "Mastercard, Inc. is a technology company, which engages in the payments industry that connects consumers, financial institutions, merchants, governments, and business. It offers payment solutions for the development and implementation of credit, debit, prepaid, commercial, and payment programs.",
        isFeatured: true
    },
    {
        name: "PepsiCo",
        ticker: "PEP",
        price: "$176.63",
        photo: "https://cdn.worldvectorlogo.com/logos/pepsico.svg",
        description: "PepsiCo is the largest food and beverage company in North America and the second-largest in the world, behind only Nestlé. PepsiCo's products include a wide range of household-name food and beverage brands, including Pepsi, Gatorade, Frito-Lay, Quaker Oats, Rockstar Energy, and Muscle Milk.",
        isFeatured: false
    },
    {
        name: "Monster Beverage Corp",
        ticker: "MNST",
        price: "$102.41",
        photo: "https://cdn.worldvectorlogo.com/logos/monster-energy.svg",
        description: "Monster Beverage Corp. is a holding company, which engages in the development, marketing, sale, and distribution of energy drink beverages and concentrates. It operates through the following segments: Monster Energy Drinks, Strategic Brands, and Other.",
        isFeatured: true
    }
]

// Export the seed data to `models/index.js`
module.exports = stocks
