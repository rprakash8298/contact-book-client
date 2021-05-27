import axios from 'axios'

const API = axios.create({ baseURL: 'https://contact-book23.herokuapp.com/' })
API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return req;
});

export const signup = (postData) => API.post('/user/signup', postData)
export const signin = (postData) => API.post('/user/signin', postData)

export const add_contact = (post) => API.post('/contact/add_contact', post)
export const read_contact = () => API.get(`/contact/read_contact`)
export const contactBySearch = (searchQuery) => API.get(`/contact/search?searchQuery=${searchQuery}`)
export const update_contact = (id,post) => API.patch(`/contact/update_contact/${id}`,post)
export const delete_contact = (id) => API.delete(`/contact/delete_contact/${id}`)
