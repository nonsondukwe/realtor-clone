import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '52810c365dmsh36f0954fffc9a85p1ae0b0jsn42884c59a372',
    },
  });
    
  return data;
}