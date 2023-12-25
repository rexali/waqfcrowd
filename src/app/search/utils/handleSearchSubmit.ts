import { searchWaqfToSupport } from "../api/searchWaqfToSupport";

const handleSearchSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    setSearchedData: any,
    setOpen: any,
    pageNumber?: any
) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const searched_data = await searchWaqfToSupport(data.get('term'), pageNumber);

    setSearchedData(searched_data);

    setOpen(true);
};
export {
    handleSearchSubmit
}