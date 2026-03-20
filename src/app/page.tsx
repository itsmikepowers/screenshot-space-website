"use client";

import { buttonVariants } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HiOutlineDownload } from "react-icons/hi";
import { cn } from "@/lib/utils";
import { config } from "@/lib/config";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbfbfd]">
      <Header />

      {/* Hero Section */}
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

      {/* Features Section */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
              Finally, screenshots that make sense
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              No more random files on your desktop. No more ⌘⇧3 then hunting for the file. 
              One shortcut, auto-copied to clipboard, organized in one place.
            </p>
          </div>
          
          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Auto Clipboard */}
            <div className="group relative bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-3xl p-8 border border-gray-200/60 hover:border-gray-300/80 transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/25">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Auto-Copied to Clipboard</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Every screenshot instantly lands in your clipboard. ⌘V anywhere.
                  </p>
                </div>
              </div>
            </div>

            {/* Organized Gallery */}
            <div className="group relative bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-3xl p-8 border border-gray-200/60 hover:border-gray-300/80 transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="7" height="7" rx="1" strokeWidth="2"/>
                    <rect x="14" y="3" width="7" height="7" rx="1" strokeWidth="2"/>
                    <rect x="3" y="14" width="7" height="7" rx="1" strokeWidth="2"/>
                    <rect x="14" y="14" width="7" height="7" rx="1" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Organized Dashboard</h3>
                  <p className="text-gray-500 leading-relaxed">
                    All your screenshots in one clean gallery. No more cluttered desktop.
                  </p>
                </div>
              </div>
            </div>

            {/* OCR Search */}
            <div className="group relative bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-3xl p-8 border border-gray-200/60 hover:border-gray-300/80 transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" strokeWidth="2"/>
                    <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">OCR Search</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Search by text inside your screenshots. Powered by Apple Vision, on-device.
                  </p>
                </div>
              </div>
            </div>

            {/* One Shortcut */}
            <div className="group relative bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-3xl p-8 border border-gray-200/60 hover:border-gray-300/80 transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/25">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">One Shortcut</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Tap <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-xs font-medium">⌥</kbd> for full screen, hold to drag select. That's it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-32 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
              How it works
            </h2>
            <p className="text-xl text-gray-500">
              Three shortcuts. That's all you need.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { key: "⌥ Option", action: "tap", title: "Full Screen", desc: "Capture your entire screen instantly" },
              { key: "⌥ Option", action: "hold", title: "Drag Selection", desc: "Hold ~0.25s then drag to select any area" },
              { key: "🌐 Fn", action: "tap", title: "Region Recapture", desc: "Re-capture a previously defined region" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 min-w-[180px]">
                  <kbd className="px-4 py-2.5 bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-300 rounded-xl text-base font-medium shadow-sm">
                    {item.key}
                  </kbd>
                  <span className="text-sm font-medium text-gray-400 uppercase tracking-wide">{item.action}</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{item.title}</div>
                  <div className="text-gray-500">{item.desc}</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 mt-8">
            All shortcuts are fully customizable in settings.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl shadow-2xl shadow-gray-900/30">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" strokeWidth="2"/>
              <circle cx="12" cy="13" r="4" strokeWidth="2"/>
            </svg>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
            Ready to try it?
          </h2>
          <p className="text-xl text-gray-500 mb-10 max-w-lg mx-auto">
            Download Screenshot Space and start capturing better screenshots today. Free and open source.
          </p>
          
          <a 
            href={config.downloadUrl}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-14 px-10 text-lg font-medium rounded-full shadow-lg shadow-gray-900/10 hover:shadow-xl hover:shadow-gray-900/20 transition-all duration-300"
            )}
          >
            <HiOutlineDownload className="w-5 h-5 mr-2" />
            Download for Mac
          </a>
          
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-400">
            <span>Version {config.appVersion}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>macOS 13+</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <a href={config.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">
              GitHub →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
