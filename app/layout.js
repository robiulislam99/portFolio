import "./globals.css";

export const metadata = {
  title: "Md Robiul Islam — Software Engineer",
  description:
    "Portfolio of Md Robiul Islam — Software Engineer building data pipelines, backend systems and web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
