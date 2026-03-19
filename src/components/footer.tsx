import Image from "next/image";
import Link from "next/link";
import { config } from "@/lib/config";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-100 px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/icon.png"
            alt=""
            width={20}
            height={20}
            className="opacity-40"
          />
          <span className="text-sm text-gray-400">screenshot.space</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href={config.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-black"
          >
            GitHub
          </a>
          <Link
            href="/pricing"
            className="text-sm text-gray-400 hover:text-black"
          >
            Pricing
          </Link>
          <span className="text-sm text-gray-400">
            © {new Date().getFullYear()} screenshot.space
          </span>
        </div>
      </div>
    </footer>
  );
}
