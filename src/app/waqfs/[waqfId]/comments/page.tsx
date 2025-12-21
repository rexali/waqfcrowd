'use client'

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import CommentList from './comment-list';
import { useAuth } from '@/hooks/use-auth';
import { postComment } from '../../api/postComment';
import WaqfCard from '../../waqf-card';
import { Paper } from '@mui/material';
import DonateModal from '@/components/common/donate-modal';
import DonateForm from '../../components/donate-form';
import { useWaqfComment } from './hooks/use-waqf-comment';
import { useGetWaqf } from '../../hooks/use-get-waqf';
import { savePathLink } from '@/utils/savePathLink';

export default function Comments({ params }: { params: { waqfId: string } }) {

    const { user } = useAuth();

    const waqf = useGetWaqf(params.waqfId);

    const [comment, setComment] = React.useState('');

    const [open, setOpen] = React.useState(false);

    const openCallback = () => {
        setOpen(true)
    }

    const comments = useWaqfComment(params.waqfId, comment);

    const handleCommentSubmit = async (evt: any) => {
        evt.preventDefault();
        if (user.userId) {
            let newComment = {
                body: comment,
                userId: user.userId,
                waqfId: params.waqfId,
                category: "waqf",
            };

            const result = await postComment(newComment);

            if (result.affectedRows === 1) {
                console.log("success");
                setComment("");
            }
        } else {
            savePathLink()
        }

    };

    const addComment = (evt: any) => {
        setComment(evt.target.value);
    }

    const renderCommentBox = () => {
        return (
            <Paper>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        position: "relative",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        m: 1,
                        alignItems: 'center',
                        mt: 8
                    }}
                    component={"form"}
                    onSubmit={handleCommentSubmit}
                >
                    <TextField
                        required
                        margin='normal'
                        id='comment'
                        label="Comment"
                        fullWidth
                        name='comment'
                        size='medium'
                        color='success'
                        defaultValue={comment}
                        onChange={addComment}
                    />
                    <Button
                        id="send"
                        type='submit'
                        size="medium"
                        startIcon={<SendIcon style={{ fontSize: 42, color: 'green' }} />}
                    >
                    </Button>
                </Box>
            </Paper>
        )
    }

    // if (!waqf?.comments.length) {
    if (!comments.length) {

        return (
            <Container style={{minHeight:"360px",  alignContent:'center'}} sx={{ mt: 8 }} component={"main"} maxWidth="md">
                <Box textAlign={'center'}>No comments found</Box>
                {/* comment box start */}
                {user.userId && renderCommentBox()}
            </Container>
        )
    }

    return (
        <Container sx={{ mt: 8 }} component="main" maxWidth="md" >
            <Box sx={{ mb: 4 }}>Waqf</Box>
            <WaqfCard
                waqf={waqf}
                openCallback={openCallback}
            />
            {/* donate form */}
            {open && <DonateModal openCallback={openCallback}><DonateForm waqfId={params.waqfId} /></DonateModal>}
            {/* comment list start here */}
            <Box sx={{ mt: 4 }}>Comment(s)</Box>
            <Grid container columnSpacing={1}>
                <CommentList comments={comments} />
            </Grid>
            {/* comment box start */}
            {user.userId && renderCommentBox()}
        </Container>
    );
}