import * as React from "react";
import WaqfList from "../waqfs/waqf-list";

export default function UserWaqf() {

    const waqfs = [1, 2, 3];

    return <WaqfList waqfs={waqfs} />
}