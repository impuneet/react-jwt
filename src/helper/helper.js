import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const getJWT = () => {
    return cookies.get('auth-token');
}

