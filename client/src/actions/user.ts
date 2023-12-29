import axios from 'axios';
import { setUser } from '../reducers/userReducer';

export const registration = async (email: string, password: string) => {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/registration', {
            email,
            password,
        });
        alert(response.data.message);
    } catch (e: any) {
        alert(e.response.data.message);
    }
};

export const login = (email: string, password: string) => {
    return async (dispatch: any) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password,
            });
            dispatch(setUser(response.data.user));
            localStorage.setItem('token', response.data.token);
            console.log(response.data);
        } catch (e: any) {
            alert(e.response.data.message);
        }
    };
};

export const auth = () => {
    return async (dispatch: any) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/auth/auth`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            dispatch(setUser(response.data.user));
            localStorage.setItem('token', response.data.token);
            console.log('auth', response.data);
        } catch (e: any) {
            // alert(e.response.data.message);
            localStorage.removeItem('token');
        }
    };
};
