import type { Metadata } from "next";
import "./globals.css";
import './styles/navbar.css'
import './globals.css'
import './styles/hero_component.css'
import "./styles/five_lost_principles.css"
import "./styles/my_objective.css"
import "./styles/three_best_path.css"
import "./styles/exclusive_bonus.css"
import "./styles/whats_inside.css"
import "./styles/footer.css"


export const metadata: Metadata = {
  title: "Digital Launchpad",
  description: "Digital Launchpad, where startups are promoted",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" as="style" />
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet" />

      </head>
      <body>
        
        {children}
      </body>
    </html>
  );
}
