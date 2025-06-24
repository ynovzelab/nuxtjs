import { LOGIN } from '~/graphql/queries/mutations';

export const useAuth = () => { 
    const login = async (username, password) => { 
        console.log('Logging in with:', username, password);
    }
    const register = async (username, email, password) => { 
        console.log('Registering with:', username, email, password);
    }
    const logout = async () => { 
        console.log('Logging out');
    }
    return {
        login,
        register,
        logout
    }
}