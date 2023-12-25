/**
 * Append an image uploaded
 * @param file an upload file value
 */
function showPhoto(file: any) {
    try {
        // create an image element
        const img = document.createElement("img");
        // set src attribute
        img.setAttribute("src", file);
        // set id attribute

        img.setAttribute("id", "user-photo");
        // set height attribute

        img.setAttribute("height", "100px");
        // set width attribute

        img.setAttribute("width", "100px");
        // set diplay style

        img.style.display = "inline-block";
        // set margin style
        img.style.margin = "auto";
        // set borderRadius style
        img.style.borderRadius = "25px"
        // get the element by id "img" and append img element
        document.getElementById("img")?.appendChild(img);
    } catch (error) {
        // show errow
        console.warn(error);
    }
}

export {
    showPhoto
}