import * as React from "react";
import MessageCard from "./update-card";
import Grid from "@mui/material/Grid";

export default function UpdateList({ updates }: { updates: any }) {

    return updates.map((update: any, index: any) =>
        <Grid item xs={12} md={6} key={update.updateId+index}>
            <MessageCard title={update.name} body={update.body}/>
        </Grid>
    )
}