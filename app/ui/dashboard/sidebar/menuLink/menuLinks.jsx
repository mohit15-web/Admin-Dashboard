"use client";

import Link from "next/link";
import React from "react";
import styles from "./menuLinks.module.css";
import { usePathname } from "next/navigation";
function MenuLinks({ item }) {
  const pathname = usePathname()
  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active }`}>
      {item.icon}
      {item.title}
    </Link>
  );
}

export default MenuLinks;
