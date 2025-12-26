"use client"

import WaqfCard from "./waqf-card";
import Grid from '@mui/material/Grid';

export default function WaqfList({ waqfs, openCallback }: { waqfs: any, openCallback?: any }) {

    return waqfs.map((waqf: any, index: any) => (
        <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <WaqfCard
                openCallback={openCallback}
                waqf={waqf}
            />
        </Grid>))
}
