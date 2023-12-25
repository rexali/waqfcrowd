import * as React from "react";

import UserDashboard from "../users/user-dashboard";
import ProtectedRoute from "@/components/protected-route";

export default function Page() {

    return (
        <ProtectedRoute><UserDashboard /></ProtectedRoute>
    )
}