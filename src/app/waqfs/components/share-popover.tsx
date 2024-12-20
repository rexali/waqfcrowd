import * as React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Share from '@mui/icons-material/Share';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon, WhatsappShareButton, WhatsappIcon, EmailShareButton, EmailIcon, TelegramShareButton, TelegramIcon } from 'react-share';
import { Box, } from '@mui/material';
import { shareLink } from '@/utils/shareLink';

export default function SharePopover({ waqfId }: { waqfId: any }) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} sx={{ fontSize: 8 }} size="small" onClick={handleClick} startIcon={<Share />}>Share</Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", }}>
          <FacebookShareButton url={`https://almubarakwaqf.org/waqfs/${waqfId}`} >
            <div style={{ width: 300, margin: 10, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <FacebookIcon size={25} />
              FACEBOOK
            </div>
          </FacebookShareButton>
          <TwitterShareButton url={`https://almubarakwaqf.org/waqfs/${waqfId}`} >
          <div style={{ width: 300, margin: 10, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <TwitterIcon size={25} />
              TWITTER
            </div>
          </TwitterShareButton>
          <LinkedinShareButton url={`https://almubarakwaqf.org/waqfs/${waqfId}`} >
          <div style={{ width: 300, margin: 10, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <LinkedinIcon size={25} />
              LINKEDIN
            </div>
          </LinkedinShareButton>
          <WhatsappShareButton url={`https://almubarakwaqf.org/waqfs/${waqfId}`} >
          <div style={{ width: 300, margin: 10, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <WhatsappIcon size={25} />
              WHATSAPP
            </div>
          </WhatsappShareButton>
          <EmailShareButton url={`https://almubarakwaqf.org/waqfs/${waqfId}`} >
          <div style={{ width: 300, margin: 10, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <EmailIcon size={25} />
              EMAIL
            </div>
          </EmailShareButton>
          <TelegramShareButton url={`https://almubarakwaqf.org/waqfs/${waqfId}`} >
          <div style={{ width: 300, margin: 10, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <TelegramIcon size={25} />
              TELEGRAM
            </div>
          </TelegramShareButton>

          <Button onClick={async () => await shareLink(waqfId)} sx={{ width: 315, display: "flex", flexDirection: "row", justifyContent: "space-between" }} startIcon={<Share />}>
            {"OTHERS"}
          </Button>
        </Box>
      </Popover>
    </div>
  );
}