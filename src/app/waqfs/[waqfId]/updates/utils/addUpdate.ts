import { fetchData } from "@/app/waqfs/api/fetchData";
import { BASE_URL } from "@/constants/url";
import { savePathLink } from "@/utils/savePathLink";

const handleUpdateSubmit = async (
    event: any,
    setUpdateSuccess: any,
    setUpdateError: any,
    userId: any,
    waqfId: any,
) => {
    event.preventDefault();
    if (userId) {
        try {
            const {
                title,
                body,
            } = event.target.elements;

            const updateData = {
                userId,
                title: title.value,
                body: body.value,
                waqfId,
            }
            let result = await fetchData(`${BASE_URL}/updates`, { body: JSON.stringify(updateData), method: "post" });
            if (result.affectedRows === 1) {
                setUpdateSuccess("Success")
            } else {
                setUpdateError("Error!")
            }
        } catch (error) {
            setUpdateError("Error!")
            console.warn(error);
        };

    } else {
        savePathLink()
    }
}

export {
    handleUpdateSubmit
}