import { findDateDifference } from "@/utils/findDateDifference";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export default function CommentCard({
    comment,
}: { comment: any, }) {

    return (<Card sx={{ maxWidth: 345, marginTop: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", m: 0 }}>
            <Image
                style={{
                    height: 50,
                    width: 50,
                    borderRadius: 20
                }}
                src={require("../../../../assets/images/awf-logo.png")}
                alt={"picture"}
            />
            <Typography sx={{ mr: 2 }} component={"span"} >
                <span style={{ fontWeight: 'bold' }}><em style={{ fontSize: 10 }}>{findDateDifference(comment.createdAt)}</em></span>
            </Typography>
        </Box>
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                {comment.body}
            </Typography>
        </CardContent>
        {/* reply button */}
        <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"}>
            <Link href={{
                pathname: `/waqfs/${comment.waqfId}/comments/${comment.commentId}/replies`,
            }} style={{ textDecoration: "none", margin:1 }}>{comment.repliesNo} replies</Link>
            <Link href={{
                pathname: `/waqfs/${comment.waqfId}/comments/${comment.commentId}/replies`,
            }} style={{ textDecoration: "none", margin:1 }}>reply</Link>
        </Box>
    </Card>)
}