import { makePayment } from "@/app/waqfs/utils/makePayment";
import { sendZakatPaymentData } from "../api/sendZakatPaymentData";
import { payWithPaystack } from "@/services/payWithPaystack";

const handlePayZakatSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const amount = data.get('amount') as string;
    const message = data.get('message');
    payWithPaystack(email,parseInt(amount))
    // await makePayment(amount,email);
    // sendZakatPaymentData({category:"zakat",amount});
};

export {
    handlePayZakatSubmit
}