import React from "react";
import { useSearchParams } from "react-router-dom";
import ViewProfileTabs from "./ViewProfile";

export default function ViewProfileTabsWrapper() {
  const [params] = useSearchParams();
  const profileId = params.get("profileId");
  return <ViewProfileTabs profileId={profileId} />;
}