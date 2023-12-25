function isOnline() {
    if (typeof window !== 'undefined') {
        const state = window.navigator.onLine ? true : false;
        return state
    }
}

export {
    isOnline
}