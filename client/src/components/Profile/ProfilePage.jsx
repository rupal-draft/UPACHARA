"use client";

import { useEffect, useState } from "react";
import DoctorProfile from "./DoctorProfilePage";
import PatientProfile from "./PatientProfilePage";
import { useUser } from "@/context/UserContext";

const ProfilePage = () => {
  const { role } = useUser();

  if (!role) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl font-semibold text-gray-600">
        Loading profile...
      </div>
    );
  }

  return (
    <div>{role === "doctor" ? <DoctorProfile /> : <PatientProfile />}</div>
  );
};

export default ProfilePage;
