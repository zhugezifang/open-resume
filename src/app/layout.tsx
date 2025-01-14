import "globals.css";
import { TopNavBar } from "components/TopNavBar";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Resume Maker - Free Online Resume Maker and Parser",
  description:
    "With Resume Maker, anyone can create a sleek and professional resume in three easy steps. This powerful and free online tool also includes a resume parser, which is perfect for those who want to test the ATS readability of their existing resumes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopNavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
