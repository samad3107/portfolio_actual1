document.getElementById("portfolioForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value.trim();
  const profession = form.profession.value.trim();
  const bio = form.bio.value.trim();
  const skills = form.skills.value.split(",").map((s) => s.trim());
  const projects = form.projects.value.split(",").map((p) => p.trim());
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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">
    <style>
      body {
        font-family: 'Poppins', sans-serif;
        background: linear-gradient(to right, #fce4ec, #f3e5f5);
        color: #333;
        padding: 40px 0 60px;
      }
      header {
        background: linear-gradient(to right, #7b1fa2, #9c27b0);
        color: white;
        padding: 30px 0;
        text-align: center;
        border-radius: 12px;
        margin-bottom: 30px;
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
        font-weight: 600;
      }
      .divider {
        height: 1px;
        background: rgba(0, 0, 0, 0.08);
        margin-bottom: 15px;
      }
      ul {
        padding-left: 20px;
      }
      a {
        color: #7b1fa2;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
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
        transition: background-color 0.3s ease, transform 0.2s ease;
      }
      .export button:hover {
        background-color: #512da8;
        transform: scale(1.05);
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
      <p>
        Email: <a href="mailto:${email}">${email}</a><br>
        Phone: ${phone}<br>
        LinkedIn: <a href="${linkedin}" target="_blank">${linkedin}</a>
      </p>
    </div>

    <div class="section export">
      <button onclick="downloadPortfolio()">⬇️ Download Portfolio</button>
    </div>

    <footer>
      <p>Created using Portfolio Generator 🚀</p>
    </footer>

    <script>
      function downloadPortfolio() {
        const blob = new Blob([document.documentElement.outerHTML], { type: 'text/html' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = '${name.toLowerCase().replace(/\s+/g, "-")}-portfolio.html';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    </script>
  </body>
  </html>
  `;

  const newWindow = window.open("", "_blank");
  newWindow.document.write(htmlContent);
  newWindow.document.close();
});
