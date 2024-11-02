function calculateZakat(total_assets: any, total_liabilities: any) {

    const net_asset = Number(total_assets) - Number(total_liabilities);
    const payableZakat = net_asset / 40;
    return payableZakat;
}

export {
    calculateZakat
}