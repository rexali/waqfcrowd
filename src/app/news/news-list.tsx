import * as React from "react";
import NewsItem from "./news-item";
import Grid from "@mui/material/Grid";

export default function NewsList({ newsdata }: { newsdata: any }) {

    return newsdata.map((news: any, index: any) =>
        <Grid item xs={12} md={6} key={index}>
            <NewsItem news={news} />
        </Grid>
    );
}