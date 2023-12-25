function saveWaqfData(waqfData:any) {
    if (typeof window !=="undefined") {
        window.sessionStorage.setItem("waqfData", JSON.stringify(waqfData))
    }
}

export{
    saveWaqfData
}