export default function ContactPage() {
  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "40px" }}>
      <h1>Are You Ready to Whirl?</h1>

      <p>
        Tell us about your project and let's explore solutions together.
      </p>

      <iframe
        src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=A1D-dbup6kCkQW-StZNoLr4rA_W6elxAndurrhWTrsFUQzNSME4yWFJZVVpYSzZLUkhFWE1YU1A1Mi4u&embed=true"
        width="100%"
        height="900"
        style={{
          border: "none",
          maxWidth: "100%",
        }}
      />
    </main>
  );
}