document.getElementById("portfolioForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value.trim();
  const profession = form.profession.value.trim();
  const bio = form.bio.value.trim();
  const skills = form.skills.value.split(",").map(s => s.trim());
  const projects = form.projects.value.split(",").map(p => p.trim());
  const education = form.education.value.trim();
  const experience = form.experience.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const linkedin = form.linkedin.value.trim();

  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>${name}'s Portfolio</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
    <style>
      body {
        font-family: 'Poppins', sans-serif;
        background: linear-gradient(to right, #fce4ec, #f3e5f5);
        color: #333;
        padding-bottom: 60px;
      }
      header {
        background: linear-gradient(to right, #7b1fa2, #9c27b0);
        color: white;
        padding: 30px 0;
        text-align: center;
      }
      .section {
        margin: 30px auto;
        padding: 20px 30px;
        max-width: 900px;
        background: white;
        border-radius: 15px;
        box-shadow: 0 4px 20px rgba(156, 39, 176, 0.15);
      }
      .section h4 {
        color: #7b1fa2;
        margin-bottom: 8px;
      }
      .divider {
        height: 1px;
        background: rgba(0, 0, 0, 0.08);
        margin-bottom: 15px;
      }
      ul {
        padding-left: 20px;
      }
      footer {
        text-align: center;
        margin-top: 50px;
        font-size: 0.9rem;
        color: #777;
      }
      .export {
        text-align: center;
        margin-top: 40px;
      }
      .export button {
        background-color: #7b1fa2;
        color: white;
        border: none;
        border-radius: 8px;
        padding: 10px 20px;
        font-weight: 500;
        cursor: pointer;
      }
      .export button:hover {
        background-color: #512da8;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>${name}</h1>
      <h3>${profession}</h3>
    </header>

    <div class="section">
      <h4>About Me</h4>
      <div class="divider"></div>
      <p>${bio}</p>
    </div>

    <div class="section">
      <h4>Skills</h4>
      <div class="divider"></div>
      <ul>${skills.map(skill => `<li>${skill}</li>`).join("")}</ul>
    </div>

    <div class="section">
      <h4>Projects</h4>
      <div class="divider"></div>
      <ul>${projects.map(project => `<li>${project}</li>`).join("")}</ul>
    </div>

    <div class="section">
      <h4>Education</h4>
      <div class="divider"></div>
      <p>${education}</p>
    </div>

    <div class="section">
      <h4>Experience</h4>
      <div class="divider"></div>
      <p>${experience}</p>
    </div>

    <div class="section">
      <h4>Contact</h4>
      <div class="divider"></div>
      <p>Email: ${email}<br>Phone: ${phone}<br>LinkedIn: ${linkedin}</p>
    </div>

    <div class="section export">
      <button id="downloadBtn">📄 Download Portfolio as PDF</button>
    </div>

    <footer>
      <p>Created using Portfolio Generator 🚀</p>
    </footer>

    <script>
      // Wait for page styles to fully apply
      window.addEventListener("load", function () {
        document.getElementById("downloadBtn").addEventListener("click", function () {
          const content = document.body;
          html2pdf().set({
            margin: 0.5,
            filename: '${name.toLowerCase().replace(/\s+/g, "-")}-portfolio.pdf',
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
          }).from(content).save();
        });
      });
    </script>
  </body>
  </html>
  `;

  const newWindow = window.open("", "_blank");
  newWindow.document.write(htmlContent);
  newWindow.document.close();
});
