import * as api from './api.js'

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const logout = api.logout;
export const register = api.register;

//app specific

export async function getCars() {
    return await api.get(host + '/data/cars?sortBy=_createdOn%20desc');
}

export async function getCarById(id) {
    return await api.get(host + '/data/cars/' + id);
}

export async function deleteCar(id) {
    return await api.del(host + '/data/cars/' + id);
}

export async function createCar(car) {
    return await api.post(host + '/data/cars', car);
}

export async function editCar(carId, car) {
    return await api.put(host + '/data/cars/' + carId, car);
}

export async function getMyCars(userId) {
    return await api.get(host + `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function search(query) {
    console.log('fff')
    return await api.get(host + `/data/cars?where=year%3D${query}`);
}

