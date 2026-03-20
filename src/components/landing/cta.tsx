"use client";

import { buttonVariants } from "@/components/ui/button";
import { HiOutlineDownload } from "react-icons/hi";
import { cn } from "@/lib/utils";
import { config } from "@/lib/config";

export function CTA() {
  return (
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
  );
}
