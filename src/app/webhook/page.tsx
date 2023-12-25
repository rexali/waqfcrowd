'use client'

import { getToken } from "@/utils/getToken";
import Container from "@mui/material/Container";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function WebhookPage() {
    const params = useSearchParams();
    const status = params.get("status");
    const supportData = getToken("waqfData");
    // send support data to database donations table
    console.log(supportData);

    if (!status) {

        return (
            <Container
                component={'main'}
                maxWidth="md"
                style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 400 }}
            >Transaction failed</Container>
        )
    }

    return (
        <Container
            component={'main'}
            maxWidth="md"
            style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 400, }}
        >Transaction successful</Container>
    )
}
