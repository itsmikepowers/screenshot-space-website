"use client";

import { buttonVariants } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HiOutlineDownload, HiOutlineCode, HiOutlineCamera, HiOutlineSearch, HiOutlineViewGrid, HiOutlineLightningBolt } from "react-icons/hi";
import { cn } from "@/lib/utils";
import { config } from "@/lib/config";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm text-gray-600 bg-gray-100 rounded-full">
          <HiOutlineCode className="w-4 h-4" />
          Open source & free forever
        </div>
        
        <h1 className="text-6xl font-bold tracking-tight text-black max-w-3xl leading-tight">
          Screenshot shortcut for Mac
        </h1>
        
        <p className="mt-6 text-xl text-gray-500 max-w-lg">
          Tap Option for full screen. Hold to drag and select.
          No account required. No limits.
        </p>
        
        <div className="flex flex-col items-center gap-3 mt-10">
          <div className="flex gap-4">
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
          <p className="text-sm text-gray-400">
            ScreenshotSpace {config.appVersion} · macOS (.dmg)
          </p>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="text-center">
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-5 rounded-2xl bg-gray-100">
                <HiOutlineLightningBolt className="w-7 h-7 text-black" />
              </div>
              <h3 className="font-semibold text-black text-lg mb-2">Instant Capture</h3>
              <p className="text-gray-500">
                Tap Option for full screen. Hold Option and drag to select a region.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-5 rounded-2xl bg-gray-100">
                <HiOutlineViewGrid className="w-7 h-7 text-black" />
              </div>
              <h3 className="font-semibold text-black text-lg mb-2">Screenshot Gallery</h3>
              <p className="text-gray-500">
                Browse, rename, and organize all your screenshots in one place.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-5 rounded-2xl bg-gray-100">
                <HiOutlineSearch className="w-7 h-7 text-black" />
              </div>
              <h3 className="font-semibold text-black text-lg mb-2">OCR Search</h3>
              <p className="text-gray-500">
                Search by text inside your screenshots. On-device, no cloud.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-5 rounded-2xl bg-gray-100">
                <HiOutlineCamera className="w-7 h-7 text-black" />
              </div>
              <h3 className="font-semibold text-black text-lg mb-2">Region Recapture</h3>
              <p className="text-gray-500">
                Define a region once, recapture it anytime with a single key.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="px-6 py-24 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-black mb-4">
            How it works
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-md mx-auto">
            Simple keyboard shortcuts. No menus, no clicks.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Shortcut Demo */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="font-semibold text-black text-lg mb-6">Keyboard Shortcuts</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-black">Full Screen</div>
                    <div className="text-sm text-gray-500">Capture entire screen</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-sm font-medium">⌥ Option</span>
                    <span className="text-xs text-gray-400">tap</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-black">Drag Selection</div>
                    <div className="text-sm text-gray-500">Select any region</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-sm font-medium">⌥ Option</span>
                    <span className="text-xs text-gray-400">hold</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-black">Region Recapture</div>
                    <div className="text-sm text-gray-500">Re-capture saved region</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-sm font-medium">🌐 Fn</span>
                    <span className="text-xs text-gray-400">tap</span>
                  </div>
                </div>
              </div>
              
              <p className="mt-6 text-sm text-gray-400">
                All shortcuts are customizable in settings.
              </p>
            </div>
            
            {/* App Preview */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="flex-1 text-center text-sm text-gray-500">Screenshot Space</span>
              </div>
              
              <div className="flex">
                <div className="w-36 bg-gray-50 border-r border-gray-200 p-3 space-y-1">
                  <div className="px-3 py-2 bg-black text-white rounded-lg text-sm">Screenshots</div>
                  <div className="px-3 py-2 text-gray-600 text-sm">Search</div>
                  <div className="px-3 py-2 text-gray-600 text-sm">Shortcuts</div>
                  <div className="px-3 py-2 text-gray-600 text-sm">Settings</div>
                </div>
                
                <div className="flex-1 p-4">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg"></div>
                    <div className="aspect-video bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg"></div>
                    <div className="aspect-video bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg"></div>
                    <div className="aspect-video bg-gradient-to-br from-orange-400 to-yellow-400 rounded-lg"></div>
                    <div className="aspect-video bg-gradient-to-br from-rose-400 to-red-400 rounded-lg"></div>
                    <div className="aspect-video bg-gradient-to-br from-indigo-400 to-purple-400 rounded-lg"></div>
                  </div>
                </div>
              </div>
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
          <p className="mt-3 text-sm text-gray-400">
            ScreenshotSpace {config.appVersion} for macOS
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
