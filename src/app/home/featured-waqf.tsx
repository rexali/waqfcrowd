"use client"

import Container from "@mui/material/Container";
import WaqfList from "../waqfs/waqf-list";
import Grid from "@mui/material/Grid";
import { useWaqf } from "@/hooks/use-waqf";
import DonateModal from "@/components/common/donate-modal";
import DonateForm from "../waqfs/components/donate-form";
import * as  React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { WaqfContext } from "@/context/WaqfContext";
import Link from "next/link";
import { mockWaqfs, getMockWaqfById } from '@/mocks/waqfs';


export default function FeaturedWaqfs() {

    const [open, setOpen] = React.useState(false);
    const [waqfId, setWaqfId] = React.useState();
    const waqfmocks = mockWaqfs; // render list
    

    const openCallback = (val: boolean, waqfId: any) => {
        setWaqfId(waqfId);
        setOpen(val);
    }

    const { state: { waqfs } } = React.useContext(WaqfContext);
    let data = waqfs.length ? waqfs : waqfmocks


    if (!data.length) {

        return (
            <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
                <Box textAlign={'center'}>No featured waqf found</Box>
            </Container>
        )
    }


    return (
        <Container component="main" maxWidth="md" >
            <h2>Featured</h2>
            <Box m={5} >
                <Grid container spacing={2} columnSpacing={1}>
                    <WaqfList waqfs={data.slice(0, 2)} openCallback={openCallback} />
                </Grid>
            </Box>
            {open && <DonateModal openCallback={openCallback}><DonateForm waqfId={waqfId} /></DonateModal>}
            <Box m={5} textAlign='center' >
                <Link href="/waqfs" prefetch style={{ borderRadius: 10, color: "#07609cff", textDecoration: "none", padding: 10}}>VIEW MORE</Link>
            </Box>
        </Container>
    )
}