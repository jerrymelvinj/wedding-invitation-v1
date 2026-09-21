"use client";

import InviteView from "@/components/InviteView";
import { mockInviteData } from "@/data/mockData";

export default function Home() {
  return <InviteView data={mockInviteData} />;
}
