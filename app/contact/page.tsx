export default function Home() {
  return (
    <main>
      <nav
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
          borderBottom: "1px solid #ddd",
        }}
      >
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Are You Ready to Whirl?</a>
      </nav>

      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <h1>Whirl & Co</h1>

        <h2>See Every Angle. Solve The Whole Problem.</h2>

        <p>
          Strategic consulting, project support, and creative solutions.
        </p>

        <a
          href="/contact"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 24px",
            backgroundColor: "#000",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "4px",
          }}
        >
          Are You Ready to Whirl?
        </a>
      </section>
    </main>
  );
}