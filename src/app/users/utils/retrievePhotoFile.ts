import { showPhoto } from "./showPhoto";
/**
 * Get the photo file
 * @param evt : an envent
 * @param getFilesCallback : a callback
 */
async function retrievePhotoFile(evt: any) {
    try {
        // get the image file
        var imgFile = await evt.target.files[0];
        // create the iamge url
        var imgURL = URL.createObjectURL(imgFile);
        // display an image
        showPhoto(imgURL);
    } catch (error) {
        // show warning if error
        console.warn(error);
    }

}

export {
    retrievePhotoFile
}