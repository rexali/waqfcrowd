"use client"

import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import { useMediaQuery } from "react-responsive"
import { handleSubscribeToNewsLetterSubmit } from "./utils/handleSubscribeToNewsLetterSubmit"


export default function SubscribeNewsletter() {
  const isMobile = useMediaQuery({ maxDeviceWidth: 1023 });

    return (
        <center>
            <Box component={"form"} onSubmit={handleSubscribeToNewsLetterSubmit} sx={{ maxWidth: "lg", mt: 5 }} >

                <Grid container columnSpacing={1} rowSpacing={1}>

                    <Grid item xs={12} md={6} sx={{textAlign:isMobile?"":'right'}} >
                        <TextField id="email" type="email" name="email" size="small" label="Subscribe to newsletter" placeholder="email" required />
                    </Grid>

                    <Grid item xs={12} md={6} sx={{textAlign:isMobile?"":'left'}}>
                        <Button type="submit" variant="contained" size="large" color="success">Subscribe</Button>
                    </Grid>

                </Grid>
            </Box>
        </center>
    )
}
