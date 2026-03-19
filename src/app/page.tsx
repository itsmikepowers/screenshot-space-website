"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { HiOutlineDownload, HiOutlineShare, HiOutlinePencil, HiOutlineCode, HiOutlineCamera } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { config } from "@/lib/config";

export default function Home() {
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

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm text-gray-600 bg-gray-100 rounded-full">
          <HiOutlineCode className="w-4 h-4" />
          Open source & free forever
        </div>
        
        <h1 className="text-6xl font-bold tracking-tight text-black max-w-3xl leading-tight">
          Screenshot tool that just works
        </h1>
        
        <p className="mt-6 text-xl text-gray-500 max-w-lg">
          Capture, annotate, and share screenshots instantly. 
          No account required. No limits.
        </p>
        
        <div className="flex gap-4 mt-10">
          <a 
            href={config.downloadUrl}
            className={cn(buttonVariants({ size: "lg" }), "flex items-center")}
          >
            <HiOutlineDownload className="w-5 h-5 mr-2" />
            Download
          </a>
          <a 
            href={config.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            View on GitHub
          </a>
        </div>
      </main>

      {/* Features Section */}
      <section className="px-6 py-24 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-black mb-4">
            Everything you need
          </h2>
          <p className="text-center text-gray-500 mb-16 max-w-md mx-auto">
            Simple, fast, and powerful screenshot tools without the bloat.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-5 rounded-2xl bg-gray-100">
                <HiOutlineCamera className="w-7 h-7 text-black" />
              </div>
              <h3 className="font-semibold text-black text-lg mb-2">Instant Capture</h3>
              <p className="text-gray-500">
                One keyboard shortcut to capture any area of your screen.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-5 rounded-2xl bg-gray-100">
                <HiOutlinePencil className="w-7 h-7 text-black" />
              </div>
              <h3 className="font-semibold text-black text-lg mb-2">Quick Annotations</h3>
              <p className="text-gray-500">
                Add arrows, text, blur sensitive info, and highlight what matters.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-5 rounded-2xl bg-gray-100">
                <HiOutlineShare className="w-7 h-7 text-black" />
              </div>
              <h3 className="font-semibold text-black text-lg mb-2">Easy Sharing</h3>
              <p className="text-gray-500">
                Get a shareable link instantly or save locally. Your choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Ready to try it?
          </h2>
          <p className="text-gray-500 mb-8">
            Download screenshot.space and start capturing better screenshots today.
          </p>
          <a 
            href={config.downloadUrl}
            className={cn(buttonVariants({ size: "lg" }), "flex items-center inline-flex")}
          >
            <HiOutlineDownload className="w-5 h-5 mr-2" />
            Download for Free
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-100">
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          <div className="flex items-center gap-2">
            <Image src="/icon.png" alt="screenshot.space" width={20} height={20} className="opacity-40" />
            <span className="text-gray-400 text-sm">screenshot.space</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/itsmikepowers/screenshot-space" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-black">
              GitHub
            </a>
            <Link href="/pricing" className="text-gray-400 text-sm hover:text-black">
              Pricing
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
