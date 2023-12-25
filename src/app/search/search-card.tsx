"use client"

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
import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { saveFavouriteWaqf } from '../waqfs/api/saveFavouriteWaqf';
import { useAuth } from '@/hooks/use-auth';
import styles from "./styles/search-card.module.css";
import SharePopover from '../waqfs/components/share-popover';

function SearchCard({
  waqf,
  openCallback,

}: {
  waqf:any,
  openCallback: any

}) {

  const { user } = useAuth();

  function supportWaqf(value: boolean, waqfId?: any) {
    openCallback(value, waqfId);
  }

  return (
    <Card sx={{ maxWidth: 320, marginTop: 2 }}>
      <CardActions sx={{ flexDirection: 'row', justifyContent: 'space-between' }} >
        <SharePopover waqfId={waqf.waqfId} />
        <Button
        sx={{fontSize:8}}
          size="small"
          onClick={() => saveFavouriteWaqf({
            userId: user?.userId,
            waqfId: waqf.waqfId,
            category: "waqf"
          })}
          startIcon={<FavouriteIcon sx={{color:"red"}} />}
        >Save</Button>
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
        <Typography gutterBottom variant="h5" component="div">
          {waqf.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap  >
          {waqf.description ? waqf.description : ""}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div>
          ...................................................................... 
          </div>
        </Typography>
        <Typography className={styles.button}>Donation:{waqf.totalDonation ? waqf.totalDonation : 600}</Typography>
        <Typography>Target: {waqf.expectedAmount ? waqf.expectedAmount : 23000}</Typography>
        <Typography>Supporters: {waqf.donationsNo ? waqf.donationsNo : 23}</Typography>
      </CardContent>
      <CardActions sx={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button className={styles.cardbutton}  size="small" onClick={() => supportWaqf(true, waqf.waqfId)} startIcon={<MoneyIcon />}>Support</Button>
        <Button href='#' size="small" className={styles.cardbutton} startIcon={<UpdateIcon />}>
          <Link href={{
            pathname: `/waqfs/${waqf.waqfId}/updates`,
          }} style={{ textDecoration: "none" }} prefetch>Update(s)</Link>
        </Button>
        <Button size="small" className={styles.cardbutton} startIcon={<CommentIcon />}>
          <Link href={{
            pathname: `/waqfs/${waqf.waqfId}/comments`,
          }} style={{ textDecoration: "none" }} prefetch>Comments</Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default SearchCard;
