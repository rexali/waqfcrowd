"use client"

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import UpdateIcon from '@mui/icons-material/Update';
import CommentIcon from '@mui/icons-material/Comment';
import DeleleIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import MoneyIcon from '@mui/icons-material/Money';
import FavouriteIcon from '@mui/icons-material/Favorite';
import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { saveFavouriteWaqf } from './api/saveFavouriteWaqf';
import { useAuth } from '@/hooks/use-auth';
import styles from "./styles/waqf-card.module.css";
import SharePopover from './components/share-popover';
import { useMediaQuery } from 'react-responsive';

function WaqfDetailsCard({
    waqf,
    openCallback,
}: {
    waqf: any,
    openCallback: any,
}) {
   

    const isMobile = useMediaQuery({ maxDeviceWidth: 1024 })

    const { user } = useAuth();

    const [success, setSuceess] = React.useState(false);

    const successCallback = () => {
        setSuceess(true);
    }

    const failCallback = () => {
        console.log("Fail");
    }

    function supportWaqf(value: boolean, waqfId?: any) {
        openCallback(value, waqfId);
    }

    const userLike = waqf?.userIds?.includes(user.userId);

    return (
        <Card style={{ marginTop: isMobile ? 80 : 10 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <Box
                    component={"div"}
                    textAlign={"center"}
                >
                    <Link href={{
                        pathname: `/waqfs/${waqf.waqfId}`,
                    }}>
                        <Image
                            style={{
                                height: 150,
                                width: 200,
                                borderRadius: 10,
                            }}
                            src={require("../../assets/images/awf-logo.png")}
                            alt={"picture"} />
                    </Link>
                </Box>
                <CardContent>
                    {/* top action buttons */}
                    <CardActions sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <SharePopover waqfId={waqf.waqfId} />
                        <Button
                            sx={{ fontSize: 8 }}
                            size="small"
                            onClick={() => saveFavouriteWaqf({
                                userId: user.userId,
                                waqfId: waqf.waqfId,
                                category: "waqf"
                            }, successCallback, failCallback)}
                            startIcon={<FavouriteIcon style={{ color: userLike || success ? 'red' : "" }} />}
                        >Save</Button>
                        {waqf.userId === user.userId &&
                            (<Button size="small" className={styles.cardbutton} startIcon={<DeleleIcon />}>
                                <Link href={{
                                    pathname: `/waqfs/${waqf.waqfId}/delete`,
                                }} style={{ textDecoration: "none" }} prefetch>Delete</Link>
                            </Button>)}
                    </CardActions>
                    {/* Main card content */}
                    <Box>
                        <Typography gutterBottom variant="h6" fontSize={14} component="div" color="text.primary">
                            {waqf.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" noWrap={false}>
                            {waqf.description ? waqf.description : ''}
                            {/* {waqf.description ? waqf.description.slice(0, 120) + "..." : ""} */}
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                            {/* ...................................................................... */}
                        </Typography><br />
                        <Typography fontSize={10}>Donation: N{waqf.totalDonation ? waqf.totalDonation : 6} of {waqf.expectedAmount ? waqf.expectedAmount : 23} </Typography>
                    </Box>
                    {/* Bottom card action */}
                    <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Button href='' size="small" className={styles.cardbutton} onClick={() => supportWaqf(true, waqf.waqfId)} startIcon={<MoneyIcon />}>
                            <span style={{ fontSize: 8, textDecoration: "none", display: 'flex', flexDirection: 'column' }}>Support<span>{waqf.updatesNo}</span></span>
                        </Button>
                        <Button href='' size="small" className={styles.cardbutton} startIcon={<UpdateIcon />}>
                            <Link href={{
                                pathname: `/waqfs/${waqf.waqfId}/updates`,
                            }}
                                style={{ fontSize: 8, textDecoration: "none", display: 'flex', flexDirection: 'column' }}
                                prefetch>Updates<span>{waqf.updatesNo}</span></Link>
                        </Button>
                        <Button size="small" className={styles.cardbutton} startIcon={<CommentIcon />}>
                            <Link href={{
                                pathname: `/waqfs/${waqf.waqfId}/comments`,
                            }} style={{ fontSize: 8, textDecoration: "none", display: 'flex', flexDirection: 'column' }} prefetch>Comments <span>{waqf.commentsNo}</span></Link>
                        </Button>
                        {waqf.userId === user.userId &&
                            (<Button size="small" className={styles.cardbutton} startIcon={<EditIcon />}>
                                <Link href={{
                                    pathname: `/waqfs/${waqf.waqfId}/edit`,
                                }} style={{ fontSize: 8, textDecoration: "none" }} prefetch>Edit</Link>
                            </Button>)}
                    </CardActions>
                </CardContent>
            </Box>
        </Card>
    );
}

export default WaqfDetailsCard;
