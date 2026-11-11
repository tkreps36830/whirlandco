export default function ContactPage() {
  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "40px" }}>
      <h1>Are You Ready to Whirl?</h1>

      <p>
        Tell us about your project and let's explore solutions together.
      </p>

     <form
  action="https://formsubmit.co/TylerKreps@whirlandco.onmicrosoft.com"
  method="POST"
>
  <input
    type="hidden"
    name="_next"
    value="https://whirlandco.com"
  />

  <div style={{ marginBottom: "15px" }}>
    <label>Name</label>
    <br />
    <input
      type="text"
      name="Name"
      required
      style={{ width: "100%", padding: "10px" }}
    />
  </div>

  <div style={{ marginBottom: "15px" }}>
    <label>Email</label>
    <br />
    <input
      type="email"
      name="Email"
      required
      style={{ width: "100%", padding: "10px" }}
    />
  </div>

  <div style={{ marginBottom: "15px" }}>
    <label>Phone Number</label>
    <br />
    <input
      type="tel"
      name="Phone"
      style={{ width: "100%", padding: "10px" }}
    />
  </div>

  <div style={{ marginBottom: "15px" }}>
    <label>Service Needed</label>
    <br />
    <select
      name="Service"
      style={{ width: "100%", padding: "10px" }}
    >
      <option>Interior Design</option>
      <option>Business Design & Strategy</option>
      <option>Structured Decision Making</option>
      <option>Personal Assistant Services</option>
      <option>Other</option>
    </select>
  </div>

  <div style={{ marginBottom: "15px" }}>
    <label>Tell Us About Your Project</label>
    <br />
    <textarea
      name="Project Description"
      rows={6}
      required
      style={{ width: "100%", padding: "10px" }}
    />
  </div>

  <button
    type="submit"
    style={{
      padding: "12px 24px",
      backgroundColor: "#000",
      color: "#fff",
      border: "none",
      cursor: "pointer",
    }}
  >
    Submit
  </button>
</form>
    </main>
  );
}