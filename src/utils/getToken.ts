import "client-only";

const getToken = (key: string) => {
    try {
        if (typeof window !== "undefined") {
            
            return  window.sessionStorage.getItem(key)
        }
    } catch (error) {
        console.warn(error);
    }
}

export {
    getToken,
}