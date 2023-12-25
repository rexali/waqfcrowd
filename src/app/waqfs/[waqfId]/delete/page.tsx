'use client'

import DeleteForever from "@mui/icons-material/DeleteForever";
import { Alert, AlertTitle, Box, Button, Stack, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { useRouter } from "next/navigation";
import React from "react";
import { deleteUserWaqf } from "../../api/deleteUserWaqf";
import { useAuth } from "@/hooks/use-auth";

export default function DeletePage({ params }: { params: { waqfId: any } }) {

    const [id, setId] = React.useState();
    const [result, setResult] = React.useState<any>({});
    const { user } = useAuth();

    const handleDelete = async () => {
        setId(params.waqfId);
        setResult(await deleteUserWaqf({ userId: user.userId, waqfId: params.waqfId }));
    }

    const router = useRouter();

    if (!id) {

        return (
            <Container
                component={'main'}
                maxWidth="md"
                style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 400 }}
            >
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert
                        severity="warning"
                        variant="filled"
                        action={
                            <Box>
                                <Button size="small" onClick={() => router.back()} style={{ color: "white" }} startIcon={<DeleteForever />}>No</Button>
                                <Button size="small" onClick={() => handleDelete()} startIcon={<DeleteForever />}>Yes</Button>
                            </Box>
                        }
                    >
                        <AlertTitle>Warning!</AlertTitle>
                        Do you really want to delete this?
                    </Alert>
                </Stack>
            </Container>
        )
    }

    return (
        <Container
            component={'main'}
            maxWidth="md"
            style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 400, }}
        >
            {result?.affectedRows === 1 ? <Alert onClose={() => router.back()}>Success</Alert> : <Alert severity="error" onClose={() => router.back()}>Error</Alert>}
        </Container>
    )
}
