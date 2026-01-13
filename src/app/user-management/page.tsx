import UserManagementClient from "@/components/pages/user-management-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Management | Finance Club BIT Mesra",
  description: "Manage your profile and settings.",
};

export default function UserManagementPage() {
  return <UserManagementClient />;
}
