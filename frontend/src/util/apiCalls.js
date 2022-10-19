import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
console.log({API_URL});
axios.defaults.baseURL = API_URL; 


export function fetchPerfumes (req, res) {
  return axios.get('/perfumes');
  }

export function fetchMales (req, res) {
return axios.get('/perfumes/males');
}
export function fetchFeMales (req, res) {
  return axios.get('/perfumes/females');
  }
  export function fetchTeam (req, res) {
    return axios.get('/team');
    }
   