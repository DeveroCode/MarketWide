export function isAuthenticated() {
    const token = localStorage.getItem('AUTH_TOKEN');
    return !!token;
}