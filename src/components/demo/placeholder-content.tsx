import Link from "next/link";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

interface PlaceholderContentInterface {
  url: string;
}

export default function PlaceholderContent({url}:PlaceholderContentInterface) {
  return (
    <Card className="rounded-lg border-none mt-6">
      <CardContent className="p-6">
        <div className="flex justify-center items-center min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
          <div className="flex flex-col relative">
            {url ? (
              <Link href={url}>
                <a className="text-blue-500 underline">Visit Link</a>
              </Link>
            ) : (
              <Image
                src="/govBgWhite.png"
                alt="Placeholder Image"
                width={500}
                height={500}
                priority
              />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
