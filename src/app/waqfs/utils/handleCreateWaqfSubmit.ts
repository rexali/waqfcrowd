import { BASE_URL } from "@/constants/url";
import { fetchData } from "../api/fetchData";
import FormData from "form-data";
import axios from "axios";
import { getToken } from "@/utils/getToken";
import { savePathLink } from "@/utils/savePathLink";

const handleCreateWaqfSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    user: any,
    successCallback?:any,
    failureCallback?:any
) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget) as any;
    if (user.userId) {
        try {
            const formData = new FormData();
            formData.append("userId", user.userId);
            formData.append("name", form.get('title'));
            formData.append("description", form.get('description'));
            formData.append('address', form.get('address'));
            formData.append("expectedAmount", form.get("expectedAmount"));
            formData.append("state", form.get('state'))
            formData.append("localGovt", form.get('localGovt'));
            formData.append("purpose", form.get('purpose'));
            formData.append("country", form.get('country'));
            formData.append("logo", form.get('logo'), form.get('logo').name);
            formData.append("old_logo", form.get('old_logo'));
            formData.append("endAt", form.get('endAt'));
            formData.append("organisation", form.get('organisation'));
            formData.append("document", form.get("document"), form.get("document").name);
            formData.append("old_document", form.get("old_document"));

            const { data } = await axios.post(`${BASE_URL}/waqfs`, formData, {
                headers: {
                    'Authorization': 'Bearer ' + getToken("jwtoken"),
                }
            });
            if (data.affectedRows === 1) {
                successCallback("success")
                console.log("success")
            }
        } catch (error) {
            failureCallback("Error!")
            console.warn(error);
        }
    } else {
        savePathLink()
    }

};

export {
    handleCreateWaqfSubmit
}