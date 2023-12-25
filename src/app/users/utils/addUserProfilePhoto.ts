import { retrievePhotoFile } from "./retrievePhotoFile";
/**
 * Create, click and get an input element value
 * @param getFilesCallback : a callback to get all the files
 */
async function addUserProfilePhoto(getFilesCallback:any) {
    try {
        // check if window is defined
        if (typeof window !== "undefined") {
            // create an input element
            const input = document.createElement("input");
            // set type attribute
            input.type = "file";
            // set name attribute
            input.name = "file";
            // set onChange attribute
            input.onchange = (evt) => { retrievePhotoFile(evt); getFilesCallback(evt) }
            // click the input element
            input.click();
        }
    } catch (error) {
        // show error if any
        console.warn(error);
    }

}

export { addUserProfilePhoto }

