"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { config } from "@/lib/config";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-2 border-b border-gray-200/60 bg-white/40 backdrop-blur-lg px-3 py-4 sm:gap-3 sm:px-6 sm:py-5">
      <Link
        href="/"
        className="flex min-w-0 max-w-[calc(100%-3rem)] items-center gap-2 sm:max-w-none"
      >
        <Image
          src="/icon.png"
          alt=""
          width={32}
          height={32}
          className="size-8 shrink-0"
        />
        <span className="truncate text-base font-semibold text-black sm:text-lg">
          screenshot.space
        </span>
      </Link>

      <nav className="hidden shrink-0 items-center gap-1 md:flex md:gap-2">
        <Link
          href="/pricing"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          Pricing
        </Link>
        <a
          href={config.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          GitHub
        </a>
      </nav>

      <div className="shrink-0 md:hidden">
        <Sheet>
          <SheetTrigger
            nativeButton={false}
            render={
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Open menu"
              />
            }
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(100vw,20rem)] sm:max-w-sm">
            <SheetHeader className="border-b border-border">
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 p-4">
              <SheetClose
                nativeButton={false}
                render={
                  <Link
                    href="/pricing"
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "h-10 w-full justify-start"
                    )}
                  />
                }
              >
                Pricing
              </SheetClose>
              <SheetClose
                nativeButton={false}
                render={
                  <a
                    href={config.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "h-10 w-full justify-start"
                    )}
                  />
                }
              >
                GitHub
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
