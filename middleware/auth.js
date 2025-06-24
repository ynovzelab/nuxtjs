export default defineNuxtRouteMiddleware(async (to, from) => {

    console.log('Auth middleware triggered for route:');
    const token = useCookie('token');
    if (!token.value) {
        return navigateTo('/login');
    }
    try {
        const me = await fetch('http://localhost:1337/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.value}`
            },
            body: JSON.stringify({
                query: `query {
                    me {
                        id
                        username
                    }
                }`
            })
        });
        const data = await me.json();
        console.log('Data from me query:', data);
        if (!data?.data?.me) {
            console.error('No user data found, redirecting to login');
            return navigateTo('/login');
        }
        console.log('User data found:', data.data.me);
        // Optionally, you can store user data in a global state or cookie if neede
    }
    catch (error) {
        console.error('Error fetching user data:', error);
        return navigateTo('/login');
    }
});