"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import DualNavbar from "@/components/DualNavbar";

const MainLayout = () => {
  const pathname = usePathname();

  return <>{pathname === "/home" ? <DualNavbar /> : <Navbar />}</>;
};

export default MainLayout;
