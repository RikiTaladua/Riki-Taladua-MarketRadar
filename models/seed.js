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
        description: "Apple Inc. (formerly Apple Computer Inc.) is an American computer and consumer electronics company famous for creating the iPhone, iPad and Macintosh computers. Apple is one of the largest companies globally with a market cap of over 2 trillion dollars.",
        isFeatured: false,
        dateAdded: "2022-15-03T10:00:00.000Z"
    },
    {
        name: "Chevron",
        ticker: "CVX",
        price: "$153.70",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.marketbeat.com%2Fstocks%2FNYSE%2FCVX%2F&psig=AOvVaw1yjDumjK3ehMRgBKOe-QmO&ust=1679004804939000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJjzprr63v0CFQAAAAAdAAAAABAE",
        description: "Chevron Corp (Chevron) is an integrated oil and gas company. It operates in the oil and gas value chain including exploration and production, storage and pipeline transportation to refining, marketing and distribution of oil and gas products.",
        isFeatured: true,
        dateAdded: "2022-15-03T10:00:00.000Z"
    },
    {
        name: "SPDR S&P 500 ETF",
        ticker: "SPY",
        price: "$388.98",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.ssga.com%2Flibrary-content%2Fimages%2Fthumbnails%2Fspy-ticker-lg.png&imgrefurl=https%3A%2F%2Fwww.ssga.com%2Fus%2Fen%2Fintermediary%2Fetfs%2Fcapabilities%2Fspdr-core-equity-etfs%2Fspy-sp-500&tbnid=i2k1WMun412XyM&vet=12ahUKEwic2oe8-979AhUGOkQIHeTxBE8QMygCegUIARC_AQ..i&docid=uF5gwGXsveMBkM&w=1200&h=653&q=SPDR%20S%26P%20500%20ETF%20logo&hl=en&ved=2ahUKEwic2oe8-979AhUGOkQIHeTxBE8QMygCegUIARC_AQ",
        description: "The SPDR S&P 500 ETF Trust, also known as the SPY ETF, is one of the most popular funds that aims to track the Standard & Poor's (S&P) 500 Index, which comprises 500 large-cap U.S. stocks. These stocks are selected by a committee based on market size, liquidity, and industry.",
        isFeatured: false,
        dateAdded: "2022-15-03T10:00:00.000Z"
    },
    {
        name: "Mastercard",
        ticker: "MA",
        price: "$348.08",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fmastercard-logo-mastercard-logo-white-background-vector-format-avaliable-127602378.jpg&tbnid=xwIXpzf_vI5a1M&vet=12ahUKEwil-M-C_N79AhUwOkQIHcn2Ck0QMygAegUIARDXAQ..i&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fillustration%2Flogo-mastercard.html&docid=CBfeHAgTDubR_M&w=800&h=566&q=mastercard%20stock%20logo&hl=en&ved=2ahUKEwil-M-C_N79AhUwOkQIHcn2Ck0QMygAegUIARDXAQ",
        description: "Mastercard, Inc. is a technology company, which engages in the payments industry that connects consumers, financial institutions, merchants, governments, and business. It offers payment solutions for the development and implementation of credit, debit, prepaid, commercial, and payment programs.",
        isFeatured: true,
        dateAdded: "2022-15-05T10:00:00.000Z"
    },
    {
        name: "PepsiCo",
        ticker: "PEP",
        price: "$176.63",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2022%2F03%2FPepsico-Emblem.png&tbnid=fF7aJ0X5sUJTwM&vet=12ahUKEwjtjpHI_d79AhXFO0QIHbLIBG0QMygCegUIARDoAQ..i&imgrefurl=https%3A%2F%2Flogos-world.net%2Fpepsico-logo%2F&docid=ipTfR6lH65sWDM&w=3840&h=2160&q=pepsico%20logo&hl=en&ved=2ahUKEwjtjpHI_d79AhXFO0QIHbLIBG0QMygCegUIARDoAQ",
        description: "PepsiCo is the largest food and beverage company in North America and the second-largest in the world, behind only Nestlé. PepsiCo's products include a wide range of household-name food and beverage brands, including Pepsi, Gatorade, Frito-Lay, Quaker Oats, Rockstar Energy, and Muscle Milk.",
        isFeatured: false,
        dateAdded: "2022-15-3T10:00:00.000Z"
    },
    {
        name: "Monster Beverage Corp",
        ticker: "MNST",
        price: "$102.41",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.monsterenergy.com%2Fmedia%2Fuploads_image%2F2018%2F01%2F23%2Fauto%2F400%2F0670b28ecfe047ba34a0178a4184cbf0.png&tbnid=vEyGltpyVLi1EM&vet=12ahUKEwipt_GQ_979AhVcOkQIHeO8A2MQMygAegUIARC8AQ..i&imgrefurl=https%3A%2F%2Fwww.monsterenergy.com%2F&docid=JNaLzciRv__ZdM&w=881&h=400&q=monster%20beverage%20corp%20logo&hl=en&ved=2ahUKEwipt_GQ_979AhVcOkQIHeO8A2MQMygAegUIARC8AQ",
        description: "Monster Beverage Corp. is a holding company, which engages in the development, marketing, sale, and distribution of energy drink beverages and concentrates. It operates through the following segments: Monster Energy Drinks, Strategic Brands, and Other.",
        isFeatured: true,
        dateAdded: "2022-15-3T10:00:00.000Z"
    }
]

// Export the seed data to `models/index.js`
module.exports = stocks
