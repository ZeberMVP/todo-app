import "./globals.css";
import { Merriweather } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const merriweather = Merriweather({
  weight: "700",
  subsets: ["latin"],
});

export const metadata = {
  title: "Todo List",
  description: "Simple list of tasks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="synthwave">
      <body className={merriweather.className}>{children}</body>
    </html>
  );
}
