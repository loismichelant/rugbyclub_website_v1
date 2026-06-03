"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/adn", label: "Notre ADN" },
  { href: "/ecole", label: "École de Rugby" },
  { href: "/inscription", label: "Inscription" },
  { href: "/contact", label: "Contactez-nous" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) setHeaderHeight(header.offsetHeight);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div ref={ref} className="md:hidden">
      <button
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-[#000049]/5 transition-colors duration-200"
      >
        <span
          className={`block h-0.5 w-6 bg-[#000049] rounded-full transition-all duration-300 origin-center ${open ? "translate-y-2 rotate-45" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-[#000049] rounded-full transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-[#000049] rounded-full transition-all duration-300 origin-center ${open ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {open && (
        <div
          className="fixed inset-x-0 bottom-0 z-40 bg-[#f8fafc] flex flex-col px-6 py-8 gap-2 border-t border-[#000049]/10 shadow-xl"
          style={{ top: headerHeight }}
        >
          <nav>
            <ul className="flex flex-col gap-1">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-lg font-semibold text-[#000049]/70 uppercase tracking-wide hover:text-[#f368f1] border-b border-[#000049]/8 transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6">
            <Link
              href="/inscription"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center w-full px-5 py-3.5 rounded-full bg-[#f368f1] text-white font-bold text-sm tracking-wide uppercase shadow-lg hover:bg-[#000049] transition-all duration-300"
            >
              Rejoindre le club
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
