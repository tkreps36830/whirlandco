export default function AlreadyWhirlingPage() {
  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "40px" }}>
      <h1>Already Whirling?</h1>

      <p>
        Existing clients can provide project updates and submit requests here.
      </p>

      <iframe
        src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=A1D-dbup6kCkQW-StZNoLr4rA_W6elxAndurrhWTrsFUNFJRSURDVjJaWlU1SzVFNERJOVFFWktSVC4u&embed=true"
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