'use client'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import UpdateIcon from '@mui/icons-material/Update';
import CommentIcon from '@mui/icons-material/Comment';
import MoneyIcon from '@mui/icons-material/Money';
import FavouriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import styles from "../styles/waqf-card.module.css";
import Image from 'next/image';
import Copyright from '@/components/common/copyright';
import { useMediaQuery } from 'react-responsive';
import { Container } from '@mui/material';
import DonateModal from '@/components/common/donate-modal';
import DonateForm from '../components/donate-form';
import { saveFavouriteWaqf } from '../api/saveFavouriteWaqf';
import { useAuth } from '@/hooks/use-auth';
import Link from 'next/link';
import { useGetWaqf } from '../hooks/use-get-waqf';
import SharePopover from '../components/share-popover';


export default function ViewWaqf({ params }: { params: { waqfId: string } }) {

    const { user } = useAuth();
    const waqf = useGetWaqf(params.waqfId);
    const isMobile = useMediaQuery({ maxDeviceWidth: 1023 });
    const [open, setOpen] = React.useState(false);

    const openCallback = (val: boolean) => {
        setOpen(val);
    }

    function supportWaqf(value: boolean) {
        openCallback(value);
    }

    return (
        <Container >
            <Card style={{ marginTop: isMobile ? 80 : 10 }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Grid container columnSpacing={1}>

                        <Grid item xs={12} md={4} textAlign={'center'}>
                            <Image
                                src="https://placehold.co/250x250/green/white.jpg?text=waqf"
                                width={250}
                                height={250}
                                alt="Picture of the author"
                                style={{ borderRadius: 20, }}
                            />
                        </Grid>

                        <Grid item xs={12} md={8}>
                            {/* <Box> */}
                            <Typography gutterBottom variant="h5" component="div">
                                {waqf?.name ? waqf.name : ""}
                            </Typography>

                            <CardActions  >
                                {/* <Button size="small" onClick={() => shareLink(params.waqfId)} startIcon={<ShareIcon />}>Share</Button> */}
                                <SharePopover waqfId={params.waqfId} />
                                <Button
                                    size="small"
                                    onClick={() => saveFavouriteWaqf({
                                        userId: user.userId,
                                        waqfId: params.waqfId,
                                        category: "waqf"
                                    })}
                                    startIcon={<FavouriteIcon />}
                                >Save</Button>
                            </CardActions>

                            <Typography variant="body1" color="text.secondary"  >
                                {waqf?.description ? waqf.description : ""}
                            </Typography>

                            <CardActions>
                                <Button href='' size="small" className={styles.cardbutton} onClick={() => supportWaqf(true)} startIcon={<MoneyIcon />}>Support</Button>
                                <Button href='' size="small" className={styles.cardbutton} startIcon={<UpdateIcon />}>
                                    <Link href={{
                                        pathname: `/waqfs/${params.waqfId}/updates`,
                                    }}
                                        style={{ textDecoration: "none" }}
                                    >Update(s)</Link>
                                </Button>
                                <Button size="small" className={styles.cardbutton} startIcon={<CommentIcon />}>
                                    <Link href={{
                                        pathname: `/waqfs/${params.waqfId}/comments`,
                                    }} style={{ textDecoration: "none" }}>Comments</Link>
                                </Button>
                            </CardActions>
                            {/* </Box> */}
                        </Grid>
                    </Grid>
                    {open && <DonateModal openCallback={openCallback}><DonateForm waqfId={params.waqfId} /></DonateModal>}
                </CardContent>
            </Card>
            <Copyright />
        </Container>
    );
}