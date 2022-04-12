import { useEffect, useState } from "react";
import axios from 'axios';

const API_KEY = import.meta.env.VITE_GIPHY_API;


export const useFetch = (keyword: string) => {
    const [gifUrl, setGifUrl] = useState('');

    useEffect(() => {
        const fetchGifs = async () => {
            try {
                const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(" ").join("")}&limit=1`);
                const data = await response.data;
                const image = data.data[0].images.downsized_medium.url;
                setGifUrl(image);
            } catch (error) {
                setGifUrl('https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284');
            }
        };

        fetchGifs();
    }, [keyword]);

    return gifUrl;
};