"use client"

import SignIn from "@/app/auth/signin/sign-in";
import { useAuth } from "@/hooks/use-auth";

const ProtectedRoute = ({ children }: { children: any }) => {
    const { user: { userId } } = useAuth();
    return userId !== null ? children : <SignIn />;
}

export default ProtectedRoute

