"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import DualNavbar from "@/components/DualNavbar";

const NavbarLayout = () => {
  const pathname = usePathname();

  return <>{pathname === "/" || pathname === "/home" ? <DualNavbar /> : <Navbar />}</>;
};

export default NavbarLayout;
