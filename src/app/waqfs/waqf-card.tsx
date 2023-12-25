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

function WaqfCard({
  waqf,
  openCallback,
}: {
  waqf: any,
  openCallback: any,
}) {

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
  
  const userLike = waqf.userIds.includes(user.userId);

  return (
    <Card sx={{ maxWidth: 320, marginTop: 2 }}>
      <CardActions sx={{ flexDirection: 'row', justifyContent: 'space-between' }} >
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
          </Button>)
        }
      </CardActions>
      <Box
        component={"div"}
        textAlign={"center"}
      >
        <Link href={{
          pathname: `/waqfs/${waqf.waqfId}`,
        }} >
          <Image
            style={{
              height: 150,
              width: 200,
              borderRadius: 10,
            }}
            src={require("../../assets/images/awf-logo.png")}
            alt={"picture"}
          />
        </Link>
      </Box>

      <CardContent>
        <Typography gutterBottom variant="h6" fontSize={14} component="div" color="text.primary">
          {waqf.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap={false} width={310}>
          {waqf.description ? waqf.description.slice(0, 100) + "..." : ""}
        </Typography>
        <Typography variant="body2" color="text.primary">
          ......................................................................
        </Typography>
        <Typography>Donation: N{waqf.totalDonation ? waqf.totalDonation : 6} of {waqf.expectedAmount ? waqf.expectedAmount : 23} </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button href='' size="small" className={styles.cardbutton} onClick={() => supportWaqf(true, waqf.waqfId)} startIcon={<MoneyIcon />}>
          <span style={{ textDecoration: "none", display: 'flex', flexDirection: 'column' }}>Support<span>{waqf.updatesNo}</span></span>
        </Button>
        <Button href='' size="small" className={styles.cardbutton} startIcon={<UpdateIcon />}>
          <Link href={{
            pathname: `/waqfs/${waqf.waqfId}/updates`,
          }}
            style={{ textDecoration: "none", display: 'flex', flexDirection: 'column' }}
            prefetch>Updates<span>{waqf.updatesNo}</span></Link>
        </Button>
        <Button size="small" className={styles.cardbutton} startIcon={<CommentIcon />}>
          <Link href={{
            pathname: `/waqfs/${waqf.waqfId}/comments`,
          }} style={{ textDecoration: "none", display: 'flex', flexDirection: 'column' }} prefetch>Comments <span>{waqf.commentsNo}</span></Link>
        </Button>
        {waqf.userId === user.userId &&
          (<Button size="small" className={styles.cardbutton} startIcon={<EditIcon />}>
            <Link href={{
              pathname: `/waqfs/${waqf.waqfId}/edit`,
            }} style={{ textDecoration: "none" }} prefetch>Edit</Link>
          </Button>)
        }
      </CardActions>
    </Card>
  );
}

export default WaqfCard;
