import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/prisma";
import { ChannelType } from "@prisma/client";
import { redirect } from "next/navigation";
import React from "react";
import ServerHeader from "./server-header";

interface ServerSidebarProps {
  serverId: string;
}

const ServerSidebar = async ({ serverId }: ServerSidebarProps) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/");
  }

  const server = await db.server.findUnique({
    where: {
      id: serverId,
    },
    include: {
      channels: {
        orderBy: {
          createAt: "asc",
        },
      },
      members: {
        include: {
          profile: true,
        },
        orderBy: {
          role: "asc",
        },
      },
    },
  });

  const textChannels = server?.channels.filter(
    (channel: any) => channel.type === ChannelType.TEXT
  );
  const audioChannels = server?.channels.filter(
    (channel: any) => channel.type === ChannelType.AUDIO
  );
  const videoChannels = server?.channels.filter(
    (channel: any) => channel.type === ChannelType.VIDEO
  );
  const members = server?.members.filter(
    (member: any) => member.profileId !== profile.id
  );

  if (!server) {
    return redirect("/");
  }

  const role = server.members.find(
    (member: any) => member.profileId === profile.id
  )?.role;

  return (
    <div className="flex flex-col h-full text-primary w-full dark:bg-[#2B2D31] bg-[#F2F3F5]">
      <ServerHeader server={server} role={role} />
      Server Sidebar Components
    </div>
  );
};

export default ServerSidebar;
