"use client";

import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@/providers/AuthProvider";
import { FriendProfileView } from "@/components/social/FriendProfileView";

export default function FriendProfilePage() {
  const params = useParams();
  const router = useRouter();
  const { user, isLoading } = useAuth();

  const friendUid = params.friendUid as string;

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-red-500" />
      </div>
    );
  }

  if (!user) {
    router.replace("/login");
    return null;
  }

  return <FriendProfileView friendUid={friendUid} />;
}
