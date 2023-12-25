import * as React from "react";
import NotificationCard from "./notification-card";
import Grid from "@mui/material/Grid";

export default function NotificationList({ notifications }: { notifications: any }) {

    return notifications.map((notification: any, index: any) =>
        <Grid item xs={12} md={6} key={notification.notificationId+index}>
            <NotificationCard notification={notification} />
        </Grid>
    )
}