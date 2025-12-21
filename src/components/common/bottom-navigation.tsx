'use client'

import React from "react"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from "@mui/material/Container";
import Link from "next/link";
import Copyright from "./copyright";

export default function BottomNavigation() {

    const pages = [
        "Home",
        "About",
        "Services",
        "Contact",
        "News",
        "Zakat",
        "Waqf",
        "Site map",
        "Privacy",
        "Terms"
    ];

    const renderGridItems = pages.map((page, index) => (<Grid xs={4} md={4} sx={{ textAlign: "start" }} key={index}>
        <Link
            type="button"
            color="success"
            style={{ textDecoration: 'none', color: "white" }}
            href={`${page === "Waqf" ? "/waqfs" : page === "Home" ? "/" : page === "Privacy" ? "/privacy" : page === 'Site map' ? "/sitemap" : page === "Terms" ? "/terms" : "/" + page.toLocaleLowerCase()}`}
        >
            {page}
        </Link>
    </Grid>))

    return (
        <Container component="main" maxWidth={false}>
            <Container component="main" maxWidth="lg" sx={{ mt: 5, mb: 5, backgroundColor: "#07609cff" }} >
                <Box sx={{ position: "relative", bottom: 0, left: 0, right: 0, ml: 1 }}>
                    <Grid container spacing={1} sx={{ textAlign: 'center' }}>
                        {renderGridItems}
                    </Grid>
                </Box>
            </Container>
            <Copyright />
        </Container>
    )
}
