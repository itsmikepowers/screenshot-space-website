export function Features() {
  return (
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
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                  <span className="px-2 py-1 bg-white border border-gray-200 rounded">Screenshot</span>
                  <span>→</span>
                  <span className="px-2 py-1 bg-white border border-gray-200 rounded">⌘V</span>
                  <span>→</span>
                  <span className="text-green-600">Done</span>
                </div>
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
                <div className="mt-4 flex -space-x-2">
                  {['from-pink-400 to-rose-500', 'from-blue-400 to-cyan-500', 'from-green-400 to-emerald-500', 'from-amber-400 to-orange-500'].map((g, i) => (
                    <div key={i} className={`w-8 h-8 rounded-lg bg-gradient-to-br ${g} border-2 border-white shadow-sm`} />
                  ))}
                  <div className="w-8 h-8 rounded-lg bg-gray-200 border-2 border-white shadow-sm flex items-center justify-center text-xs font-medium text-gray-500">+8</div>
                </div>
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
                <div className="mt-4 flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200 w-fit">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" strokeWidth="2"/>
                    <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="text-sm text-gray-400">Search screenshots...</span>
                </div>
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
                  Tap Option for full screen, hold to drag select. That's it.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <kbd className="px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-sm font-medium shadow-sm">⌥</kbd>
                  <span className="text-sm text-gray-400">tap or hold</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
