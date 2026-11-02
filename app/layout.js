import "./globals.css";
import { profile } from "@/lib/content";
import { siteUrl } from "@/lib/site";

const title = `${profile.name} — ${profile.role}`;
const description =
  "Portfolio of Md Robiul Islam, a Software Engineer in Dhaka building data pipelines, backend systems and web applications with Python, Go, PySpark and Next.js.";

export const metadata = {
  // Next.js adds the base path to generated asset URLs itself, so the metadata
  // base is the bare origin and page URLs below are spelled out in full.
  metadataBase: new URL(new URL(siteUrl).origin),
  title: { default: title, template: `%s · ${profile.name}` },
  description,
  applicationName: `${profile.name} — Portfolio`,
  authors: [{ name: profile.name, url: profile.github.href }],
  creator: profile.name,
  keywords: [
    "Md Robiul Islam",
    "Software Engineer",
    "Data Engineer",
    "Backend Engineer",
    "ETL",
    "PySpark",
    "Apache Iceberg",
    "Python",
    "Go",
    "Next.js",
    "Dhaka",
    "Bangladesh",
    "KUET",
  ],
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    type: "profile",
    url: `${siteUrl}/`,
    siteName: `${profile.name} — Portfolio`,
    title,
    description,
    locale: "en_US",
    firstName: "Robiul",
    lastName: "Islam",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport = {
  themeColor: "#0a0f1a",
  colorScheme: "dark",
};

// Runs before the page renders. Lazy sections (see .section-lazy in globals.css)
// have estimated heights, so in-page jumps would land in the wrong place; switch
// lazy rendering off when arriving on a #hash or before following a #link.
const anchorScript = `(function(){var d=document.documentElement;function off(){d.classList.add("cv-off")}if(location.hash)off();document.addEventListener("click",function(e){var a=e.target&&e.target.closest&&e.target.closest('a[href*="#"]');if(a)off()},true)})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="h-full" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: anchorScript }} />
      </head>
      <body className="min-h-full font-sans antialiased">
        <a
          href="#main"
          className="sr-only rounded-md bg-cyan px-4 py-2 font-mono text-xs font-medium uppercase tracking-wide text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
