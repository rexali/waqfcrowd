'use client'

import * as React from "react";
import SearchList from "./search-list";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useSearchParams } from "next/navigation";
import Grid from "@mui/material/Grid";
import { useSearch } from "./hooks/use-search";
import ReactPagination from "@/components/react-pagination";

export default function SearchPage() {

    const [activePage, setActivePage] = React.useState(1);
    const params = useSearchParams();
    const term = params.get("term");
    const { data } = useSearch(term, activePage);

    const handlePageChange = (pageNumber: any) => {
        setActivePage(pageNumber)
    }    

    if (!data) {

        return (
            <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
                <Box style={{minHeight:"360px",  alignContent:'center', textAlign:'center'}}>No waqf found</Box>
            </Container>
        )
    }

    return (
        <Container sx={{ mt: 8, }} component={"main"} maxWidth="md">
            <Grid container spacing={2} columnSpacing={1}>
                <SearchList waqfs={data} openCallback={undefined} />
            </Grid>
            <Box marginTop={4} display={"flex"} justifyContent={'center'}>
                <ReactPagination
                    activePage={activePage}
                    itemsCountPerPage={5}
                    totalItemsCount={100}
                    pageRangeDisplayed={4}
                    onchangeCallback={handlePageChange} />
            </Box>
        </Container>
    )
}