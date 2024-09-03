export function isServer() {
    return typeof window === 'undefined';
}

export function logIsServer() {
    if (isServer()) {
        console.log("Application is running on server side");
    } else {
        alert("Application is running on client side");
    }
}
