import { findDateDifference } from "@/utils/findDateDifference";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import * as React from "react";


export default function ReplyCard({
    reply,
}: { reply: any, }) {

    return (
        <Card sx={{ maxWidth: 345, marginTop: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', m: 0 }}>
                <Image
                    style={{
                        height: 50,
                        width: 50,
                        borderRadius: 20
                    }}
                    src={require("../../../../../../assets/images/awf-logo.png")}
                    alt={"picture"}
                />
                <Typography sx={{ mr: 2 }} component={"span"}>
                    <span style={{ fontWeight: 'bold' }}><em style={{ fontSize: 10 }}>{findDateDifference(reply.createdAt)}</em></span>
                </Typography>
            </Box>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {reply.body}
                </Typography>
            </CardContent>
        </Card>
    )
}