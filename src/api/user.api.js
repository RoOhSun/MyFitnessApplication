import axios from 'axios';

export const getAllPosts = () => {
    return axios({
      method: 'get',
      url: ' http://192.168.100.58:3000/posts',
    }).then((response) => response.data);
  };