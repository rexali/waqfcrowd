"use client"

import Box from "@mui/material/Box";
import Link from "next/link";
import * as React from "react";

export default function WaqfCategory({ purposes = [], getCategoryCallback }: { purposes: any, getCategoryCallback: any }) {

    return (<Box sx={{ display: "flex", flexDirection: "column" }}>
        <Link key={"sx"} href={"#"} style={{ textDecoration: "none", margin: 10 }} onClick={() => getCategoryCallback("all")}>
            {"all".toUpperCase()}
        </Link>
        {
            purposes.map((purpose: any, index: any) => (
                <Link key={index} href={"#"} style={{ textDecoration: "none", margin: 10 }} onClick={() => getCategoryCallback(purpose.toUpperCase())}>
                    {purpose.toUpperCase()}
                </Link>))
        }
    </Box>
    );
}