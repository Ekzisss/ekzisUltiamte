import axios from 'axios';

const fether = (url: string) => axios.get(url).then((res) => res.data);

export default fether;
