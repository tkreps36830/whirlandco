export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
            borderBottom: "1px solid #ddd",
          }}
        >
          <a
            href="/"
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              textDecoration: "none",
              color: "black",
            }}
          >
            Whirl & Co
          </a>

          <div style={{ display: "flex", gap: "20px" }}>
  <a href="/">Home</a>
  <a href="/contact">Are You Ready to Whirl?</a>
  <a href="/services">Services</a>
  <a href="/we-love">We Love</a>
  <a href="/already-whirling">Already Whirling?</a>
  <a href="/about-us">About Us</a>
</div>
        </nav>

        {children}
      </body>
    </html>
  );
}