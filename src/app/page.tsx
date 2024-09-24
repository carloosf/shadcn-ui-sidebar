import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="container h-14 flex items-center">
          <Link
            href="/"
            className="flex justify-start items-center hover:opacity-85 transition-opacity duration-300"
          >
            <Image
              src="/logo_cispe.png"
              alt="Logo"
              width={150}
              height={50}
              priority
            />
          </Link>
          <nav className="ml-auto flex items-center gap-2">
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="min-h-[calc(100vh-57px-97px)] flex-1">
        <div className="container relative pb-10">
          <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-6">
            <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-6">
              <form action="" className="border p-5 rounded gap-4">
                <Input placeholder="teste" />
                <Button variant="default" asChild>
                  <Link href="/dashboard">
                    Entrar
                    <ArrowRightIcon className="ml-2" />
                  </Link>
                </Button>
              </form>
            </div>
          </section>
        </div>
      </main>
      <footer className="py-6 md:py-0 border-t border-border/40">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row"></div>
      </footer>
    </div>
  );
}
