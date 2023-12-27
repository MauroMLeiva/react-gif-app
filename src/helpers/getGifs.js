export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=RH9ogR1wprsAVnlHrVDXnInAHL1PLfPr&q=${category}&limit=10`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.fixed_width.webp,
    }));

    return gifs;
};
