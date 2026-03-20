"use client";

import { buttonVariants } from "@/components/ui/button";
import { HiOutlineDownload } from "react-icons/hi";
import { cn } from "@/lib/utils";
import { config } from "@/lib/config";

export function PricingHero() {
  return (
    <section className="px-6 py-24 text-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-gray-900 mb-6">
          Pricing?
        </h1>
        
        <p className="text-2xl text-gray-500 mb-4">
          Come on. It's free.
        </p>
        
        <p className="text-lg text-gray-400 max-w-md mx-auto mb-12">
          No trials. No "pro" tier. No credit card. No catch.
          Just download it and use it forever.
        </p>

        <div className="inline-flex flex-col items-center gap-2 p-8 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-3xl border border-gray-200/60">
          <div className="text-6xl font-bold text-gray-900">$0</div>
          <div className="text-gray-500 mb-4">forever</div>
          
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
        </div>
      </div>
    </section>
  );
}
