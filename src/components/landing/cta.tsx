"use client";

import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { HiOutlineDownload } from "react-icons/hi";
import { cn } from "@/lib/utils";
import { config } from "@/lib/config";

export function CTA() {
  return (
    <section className="px-6 py-32 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <Image
          src="/icon.png"
          alt="Screenshot Space"
          width={80}
          height={80}
          className="mx-auto mb-8"
        />
        
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
