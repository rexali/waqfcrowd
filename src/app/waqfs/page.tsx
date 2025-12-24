"use client"

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import WaqfCategory from "./components/waqf-category";
import { useMediaQuery } from "react-responsive";
import { useWaqf } from "@/hooks/use-waqf";
import React from "react";
import Grid from "@mui/material/Grid";
import WaqfList from "./waqf-list";
import DonateModal from "@/components/common/donate-modal";
import DonateForm from "./components/donate-form";
import styles from "./styles/waqf.module.css";
import ReactPagination from "@/components/react-pagination";
import { mockWaqfs } from "@/mocks/waqfs";

export default function WaqfPage() {
    const waqfmocks = mockWaqfs; // render list
    const [activePage, setActivePage] = React.useState(1);
    const waqfx = useWaqf(activePage);
    const waqfs = waqfx.length ? waqfx: waqfmocks;
    const [waqfId, setWaqfId] = React.useState();
    const [category, setCategory] = React.useState("all");
    const [open, setOpen] = React.useState(false);

    const openCallback = (val: boolean, waqfId: any) => {
        setWaqfId(waqfId);
        setOpen(val);
    }

    const handlePageChange = (pageNumber: any) => {
        setActivePage(pageNumber)
    }

    const isMobile = useMediaQuery({ maxDeviceWidth: 1023 });

    const waqfPurposes = Array.from(new Set(waqfs.map((waqf: any, _: any) => waqf?.purpose)))??[];
    const categoryWaqfs = Array.from(new Set(waqfs.filter((waqf: any, _: any) => waqf?.purpose?.toLowerCase() === category?.toLowerCase())))??[];

    const getCategoryCallback = (cat: string) => {
        setCategory(cat);
    }


    if (!waqfs?.length) {
        return (
            <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
                <Box style={{minHeight:"360px",  alignContent:'center', textAlign:'center'}}>No waqf found</Box>
                <Box marginTop={4} display={"flex"} justifyContent={'center'}>
                    <ReactPagination
                        activePage={activePage}
                        itemsCountPerPage={5}
                        totalItemsCount={100}
                        pageRangeDisplayed={4}
                        onchangeCallback={handlePageChange} />
                </Box>
            </Container>
        );
    }

    return (
        <Container component={"main"}   style={{minHeight:650}} maxWidth={'md'}>
            <Box sx={isMobile ? {display:'block', marginLeft:'auto',marginRight:'auto'} : { display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <Box sx={isMobile ? { display: "none" } : { flex: 1, m: 4 }}>
                    <Paper>
                        <Typography component={"h1"} variant="h6" sx={{ m: 1, fontSize: 11 }}>CATEGORY</Typography>
                        <WaqfCategory purposes={waqfPurposes} getCategoryCallback={getCategoryCallback} />
                    </Paper>
                </Box>
                <Box sx={isMobile ? { marginTop: 8 } : { flex: 3, m: 2 }}>
                    <Typography marginTop={2} fontSize={11} marginBottom={1}>CATEGORY</Typography>
                    {isMobile &&
                        <div className={styles.scrollmenu} style={{ borderRadius: 5}} >
                            {["All", ...waqfPurposes].map((purpose: any, i: any) => <a href="#" style={{fontSize:14}}  key={i} onClick={() => getCategoryCallback(purpose.toLowerCase())} >{purpose}</a>)}
                        </div>
                    }
                    <Typography marginTop={1} fontSize={11}>SUPPORT AWQAF</Typography>
                    <Grid container spacing={2} columnSpacing={1} sx={{display:'block', marginLeft:'auto', marginRight:'auto'}}>
                        <WaqfList waqfs={category === "all" ? waqfs : categoryWaqfs} openCallback={openCallback} />
                    </Grid>
                    {open && <DonateModal openCallback={openCallback}><DonateForm waqfId={waqfId} /></DonateModal>}
                </Box>
            </Box>
            <Box marginTop={4} display={"flex"} justifyContent={'center'}>
                <ReactPagination
                    activePage={activePage}
                    itemsCountPerPage={5}
                    totalItemsCount={100}
                    pageRangeDisplayed={4}
                    onchangeCallback={handlePageChange} />
            </Box>
        </Container>
    );
}