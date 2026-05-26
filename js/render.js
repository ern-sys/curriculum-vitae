/**
 * render.js — Render semua section CV dari data.js
 */

document.addEventListener('DOMContentLoaded', () => {
  renderMeta();
  renderHeader();
  renderSkills();
  renderExperience();
  renderProjects();
  renderCertifications();
  renderEducation();
  renderFooter();
});

/* ── META (title tab) ── */
function renderMeta() {
  const { name, role } = CV.identity;
  document.title = `${name} — CV`;
}

/* ── HEADER ── */
function renderHeader() {
  const { name, role, about, avatar, location, email, phone, linkedin, github, website } = CV.identity;

  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  const avatarHTML = avatar
    ? `<img src="${avatar}" alt="${name}" class="avatar-img" />`
    : `<div class="avatar-initials">${initials}</div>`;

  const contacts = [
    { icon: '📍', val: location,  href: null },
    { icon: '📧', val: email,     href: `mailto:${email}` },
    { icon: '📱', val: phone,     href: phone ? `tel:${phone.replace(/\s|-/g,'')}` : null },
    { icon: '💼', val: linkedin,  href: linkedin ? `https://${linkedin}` : null },
    { icon: '🐙', val: github,    href: github ? `https://${github}` : null },
    { icon: '🌐', val: website,   href: website ? `https://${website}` : null },
  ].filter(c => c.val).map(c =>
    `<span class="contact-item">
      <span class="contact-icon">${c.icon}</span>
      ${c.href
        ? `<a href="${c.href}" target="_blank" rel="noopener">${c.val}</a>`
        : `<span>${c.val}</span>`}
    </span>`
  ).join('');

  document.getElementById('cv-header').innerHTML = `
    <div class="header-avatar">${avatarHTML}</div>
    <div class="header-info">
      <h1>${name}</h1>
      <p class="header-role">${role}</p>
      <p class="header-about">${about}</p>
      <div class="contact-row">${contacts}</div>
    </div>
  `;
}

/* ── SKILLS ── */
function renderSkills() {
  const html = CV.skills.map(group => `
    <div class="skill-group">
      <h4>${group.category}</h4>
      <div class="skill-chips">
        ${group.items.map(s => `<span class="chip">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');
  document.getElementById('skills-content').innerHTML = html;
}

/* ── EXPERIENCE ── */
function renderExperience() {
  const html = CV.experience.map((exp, i) => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      ${i < CV.experience.length - 1 ? '<div class="timeline-line"></div>' : ''}
      <div class="timeline-body">
        <div class="timeline-header">
          <div>
            <h3>${exp.role}</h3>
            <p class="timeline-company">${exp.company} · ${exp.location}</p>
          </div>
          <span class="timeline-period">${exp.period}</span>
        </div>
        <ul class="timeline-points">
          ${exp.points.map(p => `<li>${p}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
  document.getElementById('experience-content').innerHTML = html;
}

/* ── PROJECTS ── */
function renderProjects() {
  const html = CV.projects.map(p => `
    <div class="project-item">
      <div class="project-header">
        <div>
          <h3>${p.title} ${p.link ? `<a href="${p.link}" target="_blank" class="project-link">↗</a>` : ''}</h3>
          <span class="project-period">${p.period}</span>
        </div>
      </div>
      <p class="project-desc">${p.desc}</p>
      <div class="project-stack">
        ${p.stack.map(s => `<span class="chip chip-sm">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');
  document.getElementById('projects-content').innerHTML = html;
}

/* ── CERTIFICATIONS ── */
function renderCertifications() {
  const html = CV.certifications.map(c => `
    <div class="cert-item">
      <span class="cert-badge">${c.badge}</span>
      <div class="cert-info">
        <p class="cert-name">${c.name}</p>
        <p class="cert-meta">${c.issuer}${c.year ? ' · ' + c.year : ''}</p>
      </div>
    </div>
  `).join('');
  document.getElementById('certifications-content').innerHTML = html;
}

/* ── EDUCATION ── */
function renderEducation() {
  const html = CV.education.map((e, i) => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      ${i < CV.education.length - 1 ? '<div class="timeline-line"></div>' : ''}
      <div class="timeline-body">
        <div class="timeline-header">
          <div>
            <h3>${e.degree}</h3>
            <p class="timeline-company">${e.school} · ${e.location}</p>
          </div>
          <span class="timeline-period">${e.period}</span>
        </div>
      </div>
    </div>
  `).join('');
  document.getElementById('education-content').innerHTML = html;
}

/* ── FOOTER (print only) ── */
function renderFooter() {
  const { name } = CV.identity;
  document.getElementById('cv-footer').innerHTML = `
    <span>${name} — CV</span>
    <span>Projekan.ID</span>
    <span>Updated ${new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}</span>
  `;
}
