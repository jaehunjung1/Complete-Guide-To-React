import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
          Authorization: 'Client-ID 57675f0dad6be4b322de84d0291026f742858e7eac8da4909d653ae2d5dd9aee'
        },
});