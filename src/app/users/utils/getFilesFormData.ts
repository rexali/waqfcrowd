import FormData from "form-data";

/**
 * Get all files for form data
 * @param files from the form
 * @returns  formdata object
 */
function getFilesFormData(files: any) {
    // create instance of form data
    const formdata = new FormData();
    // loop through each file
    files.map((file: any, index: any) => {
        // append each file to form data
        // formdata.append(file?.name, file.file, file?.name);
        formdata.append('photo', files[0].file, files[0]?.name);
    })
     console.log(formdata);
     
    return { formdata }
}

export {
    getFilesFormData
}