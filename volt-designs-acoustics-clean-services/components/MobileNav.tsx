"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      {/* Hamburger button (visible on mobile) */}
      <button
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/15 p-2 text-white/80 hover:bg-white/10"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Slide-over drawer */}
      {open && (
        <div className="fixed inset-0 z-[60]">
          {/* Backdrop */}
          <button
            aria-label="Close menu"
            onClick={close}
            className="absolute inset-0 bg-black/50"
          />

          {/* Panel */}
          <nav className="absolute right-0 top-0 h-full w-72 bg-[#0f0f0f] border-l border-white/10 shadow-2xl p-4">
            <div className="flex items-center justify-between">
              <span className="font-bold">Menu</span>
              <button
                onClick={close}
                aria-label="Close"
                className="rounded-lg border border-white/15 p-2 hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/products" onClick={close} className="block rounded-lg px-3 py-2 hover:bg-white/10">Products</Link></li>
              <li><Link href="/services" onClick={close} className="block rounded-lg px-3 py-2 hover:bg-white/10">Services</Link></li>
              <li><Link href="/portfolio" onClick={close} className="block rounded-lg px-3 py-2 hover:bg-white/10">Portfolio</Link></li>
              <li><Link href="/about-us" onClick={close} className="block rounded-lg px-3 py-2 hover:bg-white/10">About</Link></li>
              <li><Link href="/blog" onClick={close} className="block rounded-lg px-3 py-2 hover:bg-white/10">Blog</Link></li>
              <li><Link href="/contact" onClick={close} className="block rounded-lg px-3 py-2 hover:bg-white/10">Contact</Link></li>
              <li className="pt-2">
                <Link
                  href="/get-a-quote"
                  onClick={close}
                  className="btn btn-gold w-full text-center"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}