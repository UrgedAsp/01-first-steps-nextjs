"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./ActiveLink.module.css";

interface Props {
  path: string;
  label: string;
}

export const ActiveLink = ({ path, label }: Props) => {
  const pathname = usePathname();

  return (
    <Link
      className={`${style.link} ${
        pathname === path ? style["active-link"] : ""
      }`}
      href={path}
    >
      {label}
    </Link>
  );
};
