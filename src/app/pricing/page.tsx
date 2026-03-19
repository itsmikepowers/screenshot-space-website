"use client";

import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { config } from "@/lib/config";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/icon.png" alt="screenshot.space" width={24} height={24} />
          <span className="font-semibold text-lg">screenshot.space</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/pricing" className={cn(buttonVariants({ variant: "ghost" }))}>
            Pricing
          </Link>
          <a 
            href={config.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            GitHub
          </a>
        </nav>
      </header>

      {/* Pricing Section */}
      <main className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-black">
          Free & Open Source
        </h1>
        
        <p className="mt-6 text-lg text-gray-600 max-w-md">
          screenshot.space is completely free and open source. 
          No pricing tiers, no hidden fees, no limits.
        </p>

        <div className="mt-12 p-8 rounded-2xl border border-gray-200 max-w-sm w-full">
          <div className="text-5xl font-bold text-black mb-2">$0</div>
          <div className="text-gray-500 mb-6">Forever free</div>
          
          <ul className="text-left space-y-3 mb-8">
            <li className="flex items-center gap-2 text-gray-700">
              <span className="text-black">✓</span> Unlimited screenshots
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="text-black">✓</span> All editing features
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="text-black">✓</span> Cloud sharing
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="text-black">✓</span> No watermarks
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="text-black">✓</span> Community support
            </li>
          </ul>

          <a 
            href={config.downloadUrl}
            className={cn(buttonVariants({ size: "lg" }), "w-full")}
          >
            Download Now
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          View the source on{" "}
          <a href={config.githubUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-black">
            GitHub
          </a>
        </p>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-100 mt-auto">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center gap-2">
            <Image src="/icon.png" alt="screenshot.space" width={20} height={20} className="opacity-40" />
            <span className="text-gray-400 text-sm">screenshot.space</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2026 screenshot.space. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
