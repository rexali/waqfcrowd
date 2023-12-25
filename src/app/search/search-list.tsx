"use client"

import WaqfCard from "../waqfs/waqf-card";
import Grid from '@mui/material/Grid';

export default function SearchList({ waqfs,openCallback }: { waqfs: any, openCallback?:any }) {
    
    return waqfs?.map((waqf: any, index: any) =>
        <Grid item  xs={12} md={6} key={index}>
            <WaqfCard waqf={waqf} openCallback={openCallback} />            
        </Grid>)
}
