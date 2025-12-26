import * as React from "react";
import CommentCard from "./comment-card";
import Grid from "@mui/material/Grid";

export default function CommentList({ comments}: { comments: any }) {

    return comments?.map((comment: any, index: any) =>
    (<Grid item xs={12} sm={6} md={4} key={comment.commentId + index}>
        <CommentCard
            comment={comment} />
    </Grid>)
    )
}