"use client";
import { MemberRole } from "@prisma/client";
import React from "react";

interface ServerHeaderProps {
  server: ServerWithMembersWithProfiles;
  role?: MemberRole;
};


const ServerHeader = ({ server , role} : ) => {
  return <div>ServerHeader </div>;
};

export default ServerHeader;
