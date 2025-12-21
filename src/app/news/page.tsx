"use client"
import * as  React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import NewsList from "./news-list";
import { useNews } from "@/hooks/use-news";
import Box from "@mui/material/Box";


export default function NewsPage() {
    const data = useNews();

    if (!data.length) {

        return (
            <Container style={{minHeight:"360px",  alignContent:'center'}}  sx={{ mt: 8 }} component={"main"} maxWidth="md">
                <Box textAlign={'center'}>No post(s) found</Box>
            </Container>
        )
    }

    return (
        <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
            <Grid container columnSpacing={1}>
                <NewsList newsdata={data} />
            </Grid>
        </Container>
    );
}