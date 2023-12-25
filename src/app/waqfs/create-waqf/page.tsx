import React from "react";

import CreateWaqf from "./create-waqf";
import ProtectedRoute from "@/components/protected-route";

export default function CreateWaqfPage() {
  
return <ProtectedRoute><CreateWaqf /></ProtectedRoute> 
}