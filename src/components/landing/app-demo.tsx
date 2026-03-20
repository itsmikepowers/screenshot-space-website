"use client";

import { useState } from "react";

type Tab = "screenshots" | "search" | "shortcuts" | "settings";

const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
  {
    id: "screenshots",
    label: "Screenshots",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1" strokeWidth="2"/>
        <rect x="14" y="3" width="7" height="7" rx="1" strokeWidth="2"/>
        <rect x="3" y="14" width="7" height="7" rx="1" strokeWidth="2"/>
        <rect x="14" y="14" width="7" height="7" rx="1" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    id: "search",
    label: "Search",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" strokeWidth="2"/>
        <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "shortcuts",
    label: "Shortcuts",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    id: "settings",
    label: "Settings",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" strokeWidth="2"/>
        <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

function ScreenshotsTab() {
  const screenshots = [
    { gradient: "from-violet-500 to-purple-600", label: "Code Editor" },
    { gradient: "from-cyan-400 to-blue-500", label: "Terminal" },
    { gradient: "from-emerald-400 to-teal-500", label: "Browser" },
    { gradient: "from-amber-400 to-orange-500", label: "Figma" },
    { gradient: "from-pink-400 to-rose-500", label: "Notes" },
    { gradient: "from-indigo-400 to-violet-500", label: "Slack" },
    { gradient: "from-lime-400 to-green-500", label: "Finder" },
    { gradient: "from-fuchsia-400 to-pink-500", label: "Preview" },
    { gradient: "from-red-400 to-rose-600", label: "Safari" },
    { gradient: "from-sky-400 to-blue-600", label: "Messages" },
    { gradient: "from-yellow-400 to-amber-500", label: "Calendar" },
    { gradient: "from-teal-400 to-cyan-600", label: "Discord" },
  ];

  return (
    <div className="flex-1 p-5 bg-white">
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

      <div className="grid grid-cols-4 gap-4">
        {screenshots.map((item, i) => (
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
  );
}

function SearchTab() {
  const results = [
    { gradient: "from-violet-500 to-purple-600", label: "Code Editor", match: "...const screenshot = await capture()...", words: 156 },
    { gradient: "from-cyan-400 to-blue-500", label: "Terminal", match: "...npm run build screenshot completed...", words: 89 },
    { gradient: "from-emerald-400 to-teal-500", label: "Browser", match: "...Screenshot Space - Downloads...", words: 234 },
    { gradient: "from-amber-400 to-orange-500", label: "Figma", match: "...export screenshot as PNG...", words: 67 },
    { gradient: "from-pink-400 to-rose-500", label: "Notes", match: "...screenshot of the dashboard...", words: 112 },
    { gradient: "from-indigo-400 to-violet-500", label: "Slack", match: "...here's a screenshot of the bug...", words: 45 },
  ];

  return (
    <div className="flex-1 p-5 bg-white overflow-y-auto">
      <div className="flex items-center gap-3 mb-5 px-3 py-2.5 bg-gray-100 rounded-xl">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" strokeWidth="2"/>
          <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <span className="flex-1 text-gray-500">screenshot</span>
        <button className="p-1 hover:bg-gray-200 rounded-full transition-colors">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      <div className="text-sm text-gray-500 mb-4">6 results</div>

      <div className="space-y-3">
        {results.map((item, i) => (
          <div key={i} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer">
            <div className={`w-14 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex-shrink-0`} />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900">{item.label}</div>
              <div className="text-xs text-gray-500 truncate">
                {item.match.split('screenshot').map((part, j, arr) => (
                  <span key={j}>
                    {part}
                    {j < arr.length - 1 && <span className="text-blue-600 font-medium">screenshot</span>}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-xs text-gray-400">{item.words} words</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShortcutsTab() {
  return (
    <div className="flex-1 p-5 bg-white overflow-y-auto">
      <div className="space-y-6">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <span className="font-medium text-gray-900">Enable Screenshot Shortcuts</span>
          <div className="w-11 h-6 bg-blue-500 rounded-full relative cursor-pointer">
            <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Full Screen Screenshot</div>
          <div className="p-4 bg-gray-50 rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Enabled</span>
              <div className="w-11 h-6 bg-blue-500 rounded-full relative cursor-pointer">
                <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Hotkey</span>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-white border border-gray-200 rounded text-sm">⌥ Option</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Trigger</span>
              <div className="flex items-center gap-1 p-1 bg-gray-200 rounded-lg">
                <button className="px-3 py-1 bg-white rounded shadow-sm text-sm font-medium">Tap</button>
                <button className="px-3 py-1 text-sm text-gray-600">Hold</button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Drag Selection</div>
          <div className="p-4 bg-gray-50 rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Enabled</span>
              <div className="w-11 h-6 bg-blue-500 rounded-full relative cursor-pointer">
                <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Hotkey</span>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-white border border-gray-200 rounded text-sm">⌥ Option</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Trigger</span>
              <div className="flex items-center gap-1 p-1 bg-gray-200 rounded-lg">
                <button className="px-3 py-1 text-sm text-gray-600">Tap</button>
                <button className="px-3 py-1 bg-white rounded shadow-sm text-sm font-medium">Hold</button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Hold Threshold</span>
              <span className="text-sm text-gray-500">0.25s</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingsTab() {
  return (
    <div className="flex-1 p-5 bg-white overflow-y-auto">
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Screenshots</div>
          <div className="p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" strokeWidth="2"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-gray-500 truncate">~/Pictures/ScreenshotSpace</div>
              </div>
              <button className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-200 rounded-lg transition-colors">Choose...</button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Appearance</div>
          <div className="p-4 bg-gray-50 rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Show in Menu Bar</span>
              <div className="w-11 h-6 bg-blue-500 rounded-full relative cursor-pointer">
                <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Show in Dock</span>
              <div className="w-11 h-6 bg-gray-300 rounded-full relative cursor-pointer">
                <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">System</div>
          <div className="p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Launch at Login</span>
              <div className="w-11 h-6 bg-blue-500 rounded-full relative cursor-pointer">
                <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Updates</div>
          <div className="p-4 bg-gray-50 rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Current Version</span>
              <span className="text-sm text-gray-500">1.0.12</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Status</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm text-green-600">Up to date</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AppDemo() {
  const [activeTab, setActiveTab] = useState<Tab>("screenshots");

  return (
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
      <div className="flex h-[650px]">
        {/* Sidebar */}
        <div className="w-48 bg-[#f5f5f7] border-r border-gray-200/80 p-3 flex flex-col">
          <div className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:bg-gray-200/60"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
          
          <div className="mt-auto pt-4 border-t border-gray-200/80">
            <div className="text-xs text-gray-400 px-3">12 screenshots</div>
          </div>
        </div>

        {/* Main content */}
        {activeTab === "screenshots" && <ScreenshotsTab />}
        {activeTab === "search" && <SearchTab />}
        {activeTab === "shortcuts" && <ShortcutsTab />}
        {activeTab === "settings" && <SettingsTab />}
      </div>
    </div>
  );
}
