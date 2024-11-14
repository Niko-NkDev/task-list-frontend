import axios from 'axios'; /*encargado de hacer consumo de api rest*/


const API_URL = 'https://lista-tareas-informa-backend-latest.onrender.com/api/tasks';

export const getTasks = () => axios.get(API_URL, {
    // Solo usa withCredentials si necesitas enviar cookies o encabezados de autenticación
    withCredentials: false
});
export const createTask = (task) => axios.post(API_URL, task, {
    // Solo usa withCredentials si necesitas enviar cookies o encabezados de autenticación
    withCredentials: false
});
export const updateTask = (id, task) => axios.put(`${API_URL}/${id}`, task, {
    // Solo usa withCredentials si necesitas enviar cookies o encabezados de autenticación
    withCredentials: false
});
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`, {
    // Solo usa withCredentials si necesitas enviar cookies o encabezados de autenticación
    withCredentials: false
});
export const getTaskById = (id) => axios.get(`${API_URL}/${id}`, {
    // Solo usa withCredentials si necesitas enviar cookies o encabezados de autenticación
    withCredentials: false
});