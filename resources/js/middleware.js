export default async function checkAuth(to, from, next) {
    const isAuth = await verifyLogin();

    if (isAuth) {
        next();
    } else {
        next('/login');
    }
}

async function verifyLogin() {
    if (localStorage.getItem('token')) {
        const token = localStorage.getItem('token');
        const response = await fetch(`/api/auth/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
            }
        });

        const data = await response.json();

        if (response.status === 200) {
            localStorage.setItem('user', JSON.stringify(data));
            return true;
        } else {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return false;
        }
    } else {
        return false;
    }
}
