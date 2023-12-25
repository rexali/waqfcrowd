function calculateZakat(total_assets: any, total_liabilities: any) {

    const net_asset = parseInt(total_assets) - parseFloat(total_liabilities);
    const payableZakat = net_asset / 40;
    return payableZakat;
}

export {
    calculateZakat
}