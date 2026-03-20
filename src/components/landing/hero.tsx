"use client";

import { buttonVariants } from "@/components/ui/button";
import { HiOutlineDownload } from "react-icons/hi";
import { cn } from "@/lib/utils";
import { config } from "@/lib/config";

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
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>Version {config.appVersion}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>macOS 13+</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <a href={config.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">
              View source →
            </a>
          </div>
        </div>
      </div>

      {/* Hero App Window */}
      <div className="relative px-6 pb-24 pt-12">
        <div className="max-w-5xl mx-auto">
          {/* Main app window */}
          <div className="relative bg-white rounded-2xl shadow-2xl shadow-gray-900/10 border border-gray-200/60 overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gradient-to-b from-gray-100 to-gray-50 border-b border-gray-200/80">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-inner" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e] shadow-inner" />
                <div className="w-3 h-3 rounded-full bg-[#28c840] shadow-inner" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-sm font-medium text-gray-500">Screenshot Space</span>
              </div>
              <div className="w-14" />
            </div>

            {/* App content */}
            <div className="flex min-h-[420px]">
              {/* Sidebar */}
              <div className="w-48 bg-[#f5f5f7] border-r border-gray-200/80 p-3 flex flex-col">
                <div className="space-y-1">
                  <div className="flex items-center gap-3 px-3 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="7" height="7" rx="1" strokeWidth="2"/>
                      <rect x="14" y="3" width="7" height="7" rx="1" strokeWidth="2"/>
                      <rect x="3" y="14" width="7" height="7" rx="1" strokeWidth="2"/>
                      <rect x="14" y="14" width="7" height="7" rx="1" strokeWidth="2"/>
                    </svg>
                    Screenshots
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-200/60 rounded-lg text-sm transition-colors cursor-pointer">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="8" strokeWidth="2"/>
                      <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Search
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-200/60 rounded-lg text-sm transition-colors cursor-pointer">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" strokeWidth="2"/>
                    </svg>
                    Shortcuts
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-200/60 rounded-lg text-sm transition-colors cursor-pointer">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="3" strokeWidth="2"/>
                      <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Settings
                  </div>
                </div>
                
                <div className="mt-auto pt-4 border-t border-gray-200/80">
                  <div className="text-xs text-gray-400 px-3">12 screenshots</div>
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 p-5 bg-white">
                {/* Toolbar */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">Copy</button>
                    <button className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">Reveal</button>
                    <button className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">Delete</button>
                  </div>
                  <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-lg">
                    <button className="p-1.5 bg-white rounded shadow-sm">
                      <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="3" width="7" height="7" rx="1" strokeWidth="2"/>
                        <rect x="14" y="3" width="7" height="7" rx="1" strokeWidth="2"/>
                        <rect x="3" y="14" width="7" height="7" rx="1" strokeWidth="2"/>
                        <rect x="14" y="14" width="7" height="7" rx="1" strokeWidth="2"/>
                      </svg>
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Screenshot grid */}
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { gradient: "from-violet-500 to-purple-600", label: "Code Editor" },
                    { gradient: "from-cyan-400 to-blue-500", label: "Terminal" },
                    { gradient: "from-emerald-400 to-teal-500", label: "Browser" },
                    { gradient: "from-amber-400 to-orange-500", label: "Figma" },
                    { gradient: "from-pink-400 to-rose-500", label: "Notes" },
                    { gradient: "from-indigo-400 to-violet-500", label: "Slack" },
                    { gradient: "from-lime-400 to-green-500", label: "Finder" },
                    { gradient: "from-fuchsia-400 to-pink-500", label: "Preview" },
                  ].map((item, i) => (
                    <div key={i} className={`group relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer ${i === 0 ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}>
                      <div className={`aspect-[16/10] bg-gradient-to-br ${item.gradient}`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-0 left-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="text-xs font-medium text-white truncate">{item.label}</div>
                        <div className="text-[10px] text-white/70">Just now</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl" />
        </div>
      </div>
    </main>
  );
}
