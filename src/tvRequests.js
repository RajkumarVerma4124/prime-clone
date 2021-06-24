const API_KEY = "be010523b0166c9097a873ec75047a3b";

const tvrequests = [{
        title: "Discover TV Shows",
        url: `/discover/tv?api_key=${API_KEY}`,
        media: "tv",
    },
    {
        title: "Comedy TV Shows",
        url: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
        media: "tv",
    },
    {
        title: "Adventure TV Shows",
        url: `/discover/tv?api_key=${API_KEY}&with_genres=12`,
        media: "tv",
    },
    {
        title: "Popular in your Region TV Shows",
        url: `/discover/tv?api_key=${API_KEY}&region=IN`,
        media: "tv",
    },
];
export default tvrequests;