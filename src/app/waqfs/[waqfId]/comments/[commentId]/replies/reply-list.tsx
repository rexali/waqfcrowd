import * as React from "react";
import ReplyCard from "./reply-card";
import Grid from "@mui/material/Grid";

export default function ReplyList({ replies }: { replies: any }) {

    return replies.map((reply: any, index: any) =>
        <Grid item xs={12} sm={6} md={4} key={reply.replyId+index}>
            <ReplyCard reply={reply} />
        </Grid>
    );
}