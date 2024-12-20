import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import WaqfList from "../waqfs/waqf-list";
import DonateModal from "@/components/common/donate-modal";
import DonateForm from "../waqfs/components/donate-form";
import { AuthContext } from "@/context/AuthContext";
import Box from "@mui/material/Box";
import { useUserWaqf } from "./hooks/use-userwaqf";

export default function UserWaqf() {
    const [open, setOpen] = React.useState(false);
    const [waqfId, setWaqfId] = React.useState();

    const openCallback = (val: boolean, waqfId: any) => {
        setWaqfId(waqfId);
        setOpen(val);
    }
    const { state } = React.useContext(AuthContext);
    const userWaqfs = useUserWaqf(state.user.userId);

    if (!userWaqfs.length) {
        return (
            <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
                <Box textAlign={'center'}>No waqf(s) found</Box>
            </Container>
        )
    }

    return <Container>
        <Grid container spacing={2} columnSpacing={1}>
            <WaqfList waqfs={userWaqfs} openCallback={openCallback} />
        </Grid>
        {open && <DonateModal openCallback={openCallback}><DonateForm waqfId={waqfId} /></DonateModal>}
    </Container>
}