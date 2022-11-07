import axios from "axios";

const baseURL = 'https://school-crud-b0423-default-rtdb.firebaseio.com/'

const  instance = axios.create({baseURL})

export default instance
