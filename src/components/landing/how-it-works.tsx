export function HowItWorks() {
  const shortcuts = [
    { key: "⌥ Option", action: "tap", title: "Full Screen", desc: "Capture your entire screen instantly" },
    { key: "⌥ Option", action: "hold", title: "Drag Selection", desc: "Hold ~0.25s then drag to select any area" },
    { key: "🌐 Fn", action: "tap", title: "Region Recapture", desc: "Re-capture a previously defined region" },
  ];

  return (
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
          {shortcuts.map((item, i) => (
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
  );
}
