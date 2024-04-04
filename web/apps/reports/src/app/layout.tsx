import "@risc0/ui/styles/globals.css";
import "~/styles/styles.css";

import { Analytics } from "@vercel/analytics/react";
import { Next13NProgress } from "nextjs13-progress";
import type { PropsWithChildren } from "react";
import { Providers } from "~/client/providers";

export const metadata = {
  title: {
    template: "%s | RISC Zero Reports",
    default: "RISC Zero Reports",
  },
  description: "Get to market fast with dramatically lower development costs on the first general purpose zkVM.",
  icons: [
    {
      rel: "icon",
      url: "/favicon.png",
    },
  ],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-full flex-col font-sans">
        <Providers>{children}</Providers>
        <Next13NProgress color="#fdff9d" height={1} showOnShallow={false} />
        <Analytics />
      </body>
    </html>
  );
}
