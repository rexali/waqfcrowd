'use client'

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ReplyList from './reply-list';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { postReply } from '@/app/waqfs/api/postReply';
import Paper from '@mui/material/Paper';
import { useCommentReply } from './hooks/use-comment-reply';
import { useAuth } from '@/hooks/use-auth';
import { useGetWaqf } from '@/app/waqfs/hooks/use-get-waqf';
import { savePathLink } from '@/utils/savePathLink';


export default function Replies({ params }: { params: { commentId: string, waqfId: string } }) {
    const { user } = useAuth();
    
    const waqf = useGetWaqf(params.waqfId);

    const [reply, setReply] = React.useState(' ');

    const replies = useCommentReply(params.commentId, reply);

    const addReply = (evt: any) => {
        setReply(evt.target.value);
    }
    const renderReplyBox = () => {

        return (
            <Paper><Box
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
                onSubmit={handleReplySubmit}
            >
                <TextField
                    required
                    margin='normal'
                    id='reply'
                    label="Comment"
                    fullWidth
                    name='reply'
                    size='medium'
                    color='success'
                    defaultValue={reply}
                    onChange={addReply}
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

    const handleReplySubmit = async (evt: any) => {
        evt.preventDefault();
        if (user.userId) {
            let newReply = {
                body: reply,
                userId: user?.userId,
                commentId: params.commentId,
                category: "waqf",
            };
            const result = await postReply(newReply);

            if (result.affectedRows === 1) {
                setReply("");
            }
        } else {
            savePathLink()
        }

    };

    if (!replies.length) {

        return <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
            <Box textAlign={'center'}>No replie(s) found</Box>
            {/* reply box */}
            {user?.userId === parseInt(waqf.userId as string) && renderReplyBox()}
        </Container>
    };


    return (
        <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
            <Grid container columnSpacing={1}>
                <ReplyList replies={replies} />
            </Grid>
            {/* reply start */}
            {user?.userId === parseInt(waqf.userId as string) && renderReplyBox()}
            {/* reply end */}
        </Container>
    );
}