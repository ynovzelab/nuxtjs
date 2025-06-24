import { LOGIN } from '~/graphql/queries/mutations';

export const useAuth = () => { 
    const login = async (username, password) => { 
        console.log('Logging in with:', username, password);
        try {
            const res = await fetch('http://localhost:1337/graphql', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: LOGIN,
                    variables: {
                        input: {
                            identifier: username,
                            password: password
                        }
                    }
                })
            });
            const data = await res.json();
            if (data?.data?.login.jwt) {
                console.log('Setting cookie with JWT:', data.data.login.jwt);
                const token = useCookie('token', {
                    maxAge: 60 * 60 * 24 * 7, // 1 week
                });
                token.value = data.data.login.jwt;
            }
        }
        catch (error) {
            console.error('Login error:', error);
            throw new Error('Login failed');
        }
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