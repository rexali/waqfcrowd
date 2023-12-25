'use client'

import * as React from "react";
import SearchList from "./search-list";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import DonateModal from "@/components/common/donate-modal";
import DonateForm from "../waqfs/components/donate-form";
import { Typography } from "@mui/material";

export default function SearchResult({ waqfs }: { waqfs: any }) {
    const [waqfId, setWaqfId] = React.useState();
    const [open, setOpen] = React.useState(false);
    // callback to set waqfid and open or close the modal
    const openCallback = (val: boolean, waqfId: any) => {
        // set waqfid
        setWaqfId(waqfId);
        // open or close modal
        setOpen(val);
    }
    // check if waqfs is empty
    if (!waqfs?.length) {

        return (
            <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
                <Box textAlign={'center'}>No waqf found</Box>
            </Container>
        )
    }

    return (
        <Container sx={{ mt: 2}} component={"main"} maxWidth="md" >
            <Typography fontWeight={'bold'}>Search result(s)</Typography>
            <SearchList waqfs={waqfs} openCallback={openCallback} />
            {open && <DonateModal openCallback={openCallback}><DonateForm waqfId={waqfId} /></DonateModal>}
        </Container>
    )
}