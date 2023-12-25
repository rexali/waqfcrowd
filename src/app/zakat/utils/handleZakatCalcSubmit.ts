import { calculateZakat } from "./calculateZakat";

const handleZakatCalcSubmit = (event: React.FormEvent<HTMLFormElement>, getTotal: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const total_assets = data.get('total_assets');
    const total_liabilities = data.get('total_liabilities');
    getTotal(calculateZakat(total_assets,total_liabilities));
};

export {
    handleZakatCalcSubmit
}