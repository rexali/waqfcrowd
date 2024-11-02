import { subscribeToNewsLetter } from "../api/subscribeToNewsLetter";

const handleSubscribeToNewsLetterSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
        let result = await subscribeToNewsLetter(data.get('email')) as any;
        console.log(result);
        if (result.affectedRows === 1) {
            console.log("success");
        }
    } catch (error) {
        console.warn(error);
    }
};

export {
    handleSubscribeToNewsLetterSubmit
}