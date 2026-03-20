"use client";

import { buttonVariants } from "@/components/ui/button";
import { HiOutlineDownload } from "react-icons/hi";
import { cn } from "@/lib/utils";
import { config } from "@/lib/config";
import { AppDemo } from "./app-demo";

export function Hero() {
  return (
    <main className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-gray-100/30" />
      
      <div className="relative flex flex-col items-center justify-center px-6 pt-20 pb-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-sm font-medium text-gray-700 bg-white/80 backdrop-blur border border-gray-200/60 rounded-full shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          Open source & free forever
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-gray-900 max-w-4xl leading-[1.1]">
          Screenshots
          <br />
          <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">made simple</span>
        </h1>
        
        <p className="mt-6 text-xl text-gray-500 max-w-xl leading-relaxed">
          No more cluttered desktop. No more digging through folders.
          Every screenshot organized and instantly on your clipboard.
        </p>
        
        <div className="flex flex-col items-center gap-4 mt-10">
          <a
            href={config.downloadUrl}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 px-8 text-base font-medium rounded-full shadow-lg shadow-gray-900/10 hover:shadow-xl hover:shadow-gray-900/20 transition-all duration-300"
            )}
          >
            <HiOutlineDownload className="w-5 h-5 mr-2" />
            Download for Mac
          </a>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-gray-400">
            <span className="whitespace-nowrap">Version {config.appVersion}</span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-300 self-center" />
            <span className="whitespace-nowrap">macOS 13+</span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-300 self-center" />
            <a href={config.githubUrl} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap hover:text-gray-600 transition-colors">
              View source →
            </a>
          </div>
        </div>
      </div>

      {/* Hero App Window - hidden on mobile */}
      <div className="hidden md:block relative px-6 pb-24 pt-12">
        <div className="max-w-5xl mx-auto">
          <AppDemo />

          {/* Floating elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl" />
        </div>
      </div>
    </main>
  );
}
