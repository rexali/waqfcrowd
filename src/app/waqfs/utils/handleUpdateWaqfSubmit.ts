import { BASE_URL } from "@/constants/url";
import FormData from "form-data";
import axios from "axios";
import { getToken } from "@/utils/getToken";
import { savePathLink } from "@/utils/savePathLink";

const handleUpdateWaqfSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    user: any,
    successCallback?: any,
    failureCallback?: any
) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget) as any;
    if (user.userId) {
        try {
            const formData = new FormData();
            formData.append("userId", user.userId);
            formData.append("waqfId", form.get('waqfId'));
            formData.append("name", form.get('title'));
            formData.append("description", form.get('description'));
            formData.append('address', form.get('address'));
            formData.append("expectedAmount", form.get("expectedAmount"));
            formData.append("state", form.get('state'))
            formData.append("localGovt", form.get('localGovt'));
            formData.append("purpose", form.get('purpose'));
            formData.append("country", form.get('country'));
            formData.append("endAt", form.get('endAt'));
            formData.append("organisation", form.get('organisation'));

            if (form.get("document").name) {
                formData.append("document", form.get("document"), form.get("document").name);
            } else {
                formData.append("document", form.get("old_document"));
            }

            if (form.get('logo').name) {
                formData.append("logo", form.get('logo'), form.get('logo').name);
            } else {
                formData.append("logo", form.get('old_logo'));
            }

            const { data } = await axios.patch(`${BASE_URL}/waqfs/update`, formData, {
                headers: {
                    'Authorization': 'Bearer ' + getToken("jwtoken"),
                }
            });

            if (data.affectedRows === 1) {
                successCallback("success");
                setTimeout(() => {
                    successCallback("");
                }, 10000);
                console.log("success")
            }
        } catch (error) {
            failureCallback("Error!");
            setTimeout(() => {
                failureCallback("");
            }, 10000);
            console.warn(error);
        }
    } else {
        // save path for redirect
        savePathLink()
    }

};

export {
    handleUpdateWaqfSubmit
}