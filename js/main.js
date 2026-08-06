/* ============================================================
   AP WANDERLUST — main.js
   Renders all data-driven sections and wires up interaction:
   nav, theme toggle, map + drawer, tabs, reveal-on-scroll.
   ============================================================ */
(() => {
  "use strict";

  /* ---------------- Theme ---------------- */
  const root = document.body;
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("ap-theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  root.setAttribute("data-theme", savedTheme);
  themeToggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("ap-theme", next);
  });

  /* ---------------- Nav scroll + mobile menu ---------------- */
  const nav = document.getElementById("nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive: true });

  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => navLinks.classList.remove("open"))
  );

  /* ---------------- Helpers ---------------- */
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  };
  const zoneColor = (z) => ({ UA: "var(--leaf)", KA: "var(--indigo)", RS: "var(--rust)" }[z]);

  /* ---------------- Zones grid ---------------- */
  const zoneGrid = document.getElementById("zoneGrid");
  const zoneDescs = {
    UA: "Forested Eastern Ghats, tribal hill country and the state's northern coast — coffee, waterfalls, and cool valleys.",
    KA: "The Godavari–Krishna delta — India's rice bowl, backwaters, Kalamkari craft towns and busy ports.",
    RS: "Dry granite plateau to the south-west — temple towns, gorges, and Andhra's spiciest cooking."
  };
  Object.entries(ZONES).forEach(([key, z], i) => {
    const count = DISTRICTS.filter(d => d.zone === key).length;
    const card = el("div", "zone-card reveal", `
      <div class="swatch" style="background:${z.color}"></div>
      <div class="num">0${i + 1}</div>
      <h3>${z.label}</h3>
      <p>${zoneDescs[key]}</p>
      <div class="count"><b>${count}</b><span>Districts</span></div>
    `);
    zoneGrid.appendChild(card);
  });

  /* ---------------- Map: legend, nodes, list ---------------- */
  const mapLegend = document.getElementById("mapLegend");
  Object.values(ZONES).forEach(z => {
    mapLegend.appendChild(el("div", "legend-item", `<span class="legend-dot" style="background:${z.color}"></span>${z.label}`));
  });

  const mapNodes = document.getElementById("mapNodes");
  const mapList = document.getElementById("mapList");

  DISTRICTS.forEach(d => {
    const cx = (d.x / 100) * 380;
    const cy = (d.y / 100) * 760;
    const color = zoneColor(d.zone);

    // SVG node
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", "district-node");
    g.setAttribute("data-id", d.id);
    g.innerHTML = `
      <circle class="dot" cx="${cx}" cy="${cy}" r="4.5" fill="${color}" stroke="var(--surface)" stroke-width="1.2"></circle>
      <text x="${cx + (cx > 190 ? 9 : -9)}" y="${cy + 2.5}" text-anchor="${cx > 190 ? "start" : "end"}">${d.name}</text>
    `;
    g.addEventListener("click", () => selectDistrict(d.id));
    mapNodes.appendChild(g);

    // List row
    const row = el("button", "district-row", `
      <span class="zdot" style="background:${color}"></span>
      <span class="names"><b>${d.name}</b><small>${d.telugu}</small></span>
      <span class="hq">${d.hq}</span>
    `);
    row.dataset.id = d.id;
    row.addEventListener("click", () => selectDistrict(d.id));
    mapList.appendChild(row);
  });

  /* ---------------- Drawer ---------------- */
  const drawer = document.getElementById("drawer");
  const backdrop = document.getElementById("drawerBackdrop");

  function placeIcon(type) {
    const icons = {
      Temple: "M12 2 7 9h10L12 2Zm-6 8v10h12V10H6Z",
      Beach: "M2 20h20M4 16c2-4 6-4 8 0s6 4 8 0",
      Waterfall: "M6 2v14a4 4 0 0 0 8 0V2M6 2h8",
      Wildlife: "M5 12c0-4 3-8 7-8s7 4 7 8-3 8-7 8-7-4-7-8Z",
      Caves: "M2 20c4-10 16-10 20 0",
      Heritage: "M4 21V9l8-6 8 6v12M4 21h16M9 21v-6h6v6",
    };
    return icons[type] || "M4 4h16v16H4z";
  }

  function selectDistrict(id) {
    const d = DISTRICTS.find(x => x.id === id);
    if (!d) return;
    document.querySelectorAll(".district-node").forEach(n => n.classList.toggle("active", n.dataset.id === id));
    document.querySelectorAll(".district-row").forEach(n => n.classList.toggle("active", n.dataset.id === id));

    const zoneLabel = ZONES[d.zone].label;
    const color = zoneColor(d.zone);

    drawer.innerHTML = `
      <button class="drawer-close" id="drawerClose" aria-label="Close">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 2l12 12M14 2 2 14"/></svg>
      </button>
      <span class="drawer-zone" style="background:color-mix(in srgb, ${color} 16%, transparent); color:${color}">${zoneLabel}</span>
      <h3>${d.name}<span class="tel">${d.telugu}</span></h3>
      <p class="tagline">${d.tagline}</p>
      <div class="hq-line"><span>Headquarters&nbsp;<b>${d.hq}</b></span></div>

      <div class="drawer-section"><h4>Geography</h4><p>${d.geography}</p></div>
      <div class="drawer-section"><h4>History</h4><p>${d.history}</p></div>
      <div class="drawer-section"><h4>Festivals</h4><p>${d.festivals}</p></div>
      <div class="drawer-section"><h4>Cuisine</h4><p>${d.cuisine}</p></div>
      <div class="drawer-section"><h4>Famous Personalities</h4><p>${d.personalities}</p></div>
      <div class="drawer-section"><h4>Industries</h4><p>${d.industries}</p></div>

      <div class="drawer-section">
        <h4>Places to see</h4>
        ${d.places.map(p => `
          <div class="place-chip">
            <span class="ptype">${p.type}</span>
            <b>${p.name}</b>
            <p>${p.desc}</p>
          </div>`).join("")}
      </div>

      <div class="drawer-section"><h4>Getting there</h4><p>${d.transport}</p></div>
    `;
    document.getElementById("drawerClose").addEventListener("click", closeDrawer);
    drawer.classList.add("open");
    backdrop.classList.add("open");
  }
  function closeDrawer() {
    drawer.classList.remove("open");
    backdrop.classList.remove("open");
    document.querySelectorAll(".district-node.active, .district-row.active").forEach(n => n.classList.remove("active"));
  }
  backdrop.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeDrawer(); });

  /* ---------------- History / Geography ---------------- */
  document.getElementById("historySummary").textContent = STATE.history.summary;
  document.getElementById("historyPoints").innerHTML = STATE.history.points.map(p => `<li><span class="dot"></span><p>${p}</p></li>`).join("");
  document.getElementById("geoSummary").textContent = STATE.geography.summary;
  document.getElementById("geoPoints").innerHTML = STATE.geography.points.map(p => `<li><span class="dot"></span><p>${p}</p></li>`).join("");

  /* ---------------- Festivals / Cuisine / People / Industries ---------------- */
  const festivalIcon = `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2v6M8 5l4 3 4-3M4 21h16M6 21V11h12v10"/></svg>`;
  document.getElementById("festivalGrid").innerHTML = STATE.festivals.map(f => `
    <div class="info-card reveal">${festivalIcon}<h4>${f.name}</h4><p>${f.desc}</p></div>
  `).join("");

  const cuisineIcon = `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 3v7a3 3 0 0 0 3 3v8M7 3v7M10 3v7M17 3c-2 1-3 3-3 6s1 4 3 4v8"/></svg>`;
  document.getElementById("cuisineGrid").innerHTML = STATE.cuisine.map(c => `
    <div class="info-card reveal">${cuisineIcon}<h4>${c.name}</h4><p>${c.desc}</p></div>
  `).join("");

  const peopleIcon = `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg>`;
  document.getElementById("peopleGrid").innerHTML = STATE.personalities.map(p => `
    <div class="info-card reveal">${peopleIcon}<h4>${p.name}</h4><span class="field">${p.field}</span><p>${p.desc}</p></div>
  `).join("");

  const industryIcon = `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 21V10l6-4 6 4v11M15 21v-7l6-3v10"/></svg>`;
  document.getElementById("industryGrid").innerHTML = STATE.industries.map(i => `
    <div class="info-card reveal">${industryIcon}<h4>${i.name}</h4><p>${i.desc}</p></div>
  `).join("");

  /* ---------------- Highlights tabs ---------------- */
  const tabbar = document.getElementById("tabbar");
  const tabPanels = document.getElementById("tabPanels");
  const highlightTypes = [
    { key: "temples", label: "Temples", data: STATE.temples },
    { key: "beaches", label: "Beaches", data: STATE.beaches },
    { key: "waterfalls", label: "Waterfalls", data: STATE.waterfalls },
    { key: "wildlife", label: "Wildlife", data: STATE.wildlife }
  ];
  highlightTypes.forEach((t, i) => {
    const btn = el("button", "tab-btn" + (i === 0 ? " active" : ""), t.label);
    btn.addEventListener("click", () => {
      tabbar.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      tabPanels.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      document.getElementById("panel-" + t.key).classList.add("active");
    });
    tabbar.appendChild(btn);

    const panel = el("div", "tab-panel" + (i === 0 ? " active" : ""));
    panel.id = "panel-" + t.key;
    const iconTypeByKey = { temples: "Temple", beaches: "Beach", waterfalls: "Waterfall", wildlife: "Wildlife" };
    panel.innerHTML = t.data.map(item => {
      const district = DISTRICTS.find(d => d.id === item.district);
      return `
        <div class="highlight-card">
          <svg class="hi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="${placeIcon(iconTypeByKey[t.key])}"/></svg>
          <div>
            <b>${item.name}</b>
            <p>${item.desc}</p>
            ${district ? `<span class="loc" data-goto="${district.id}">${district.name} →</span>` : ""}
          </div>
        </div>`;
    }).join("");
    tabPanels.appendChild(panel);
  });
  tabPanels.addEventListener("click", e => {
    const loc = e.target.closest("[data-goto]");
    if (loc) {
      document.getElementById("map").scrollIntoView({ behavior: "smooth" });
      setTimeout(() => selectDistrict(loc.dataset.goto), 500);
    }
  });

  /* ---------------- Gallery (original inline SVG illustrations) ---------------- */
  const galleryItems = [
    { title: "Temple gopuram at dawn", tag: "Tirumala region", bg: ["#0B3D5C", "#124F73"], art: `<path d="M100 40 60 100h80L100 40Z" fill="#E7C264"/><rect x="55" y="100" width="90" height="16" fill="#E7C264"/><rect x="45" y="116" width="110" height="70" fill="#B5482D"/><circle cx="100" cy="30" r="16" fill="#F3C567" opacity=".8"/>` },
    { title: "Eastern Ghats coffee hills", tag: "Araku Valley", bg: ["#1F4A34", "#3C6E52"], art: `<path d="M0 140 40 100 80 135 120 90 160 130 200 100 200 200 0 200Z" fill="#79BB96"/><circle cx="150" cy="60" r="26" fill="#E7C264" opacity=".7"/>` },
    { title: "Delta backwaters", tag: "Konaseema", bg: ["#0B3D5C", "#3C6E52"], art: `<path d="M0 150c40-20 60 20 100 0s60 20 100 0v50H0Z" fill="#3C6E52"/><path d="M0 165c40-15 60 15 100 0s60 15 100 0" stroke="#79BB96" stroke-width="3" fill="none"/>` },
    { title: "Kalamkari motif", tag: "Machilipatnam craft", bg: ["#9C3B23", "#B5482D"], art: `<circle cx="100" cy="100" r="46" fill="none" stroke="#E7C264" stroke-width="3"/><circle cx="100" cy="100" r="26" fill="none" stroke="#E7C264" stroke-width="2"/><path d="M100 54v-14M100 146v14M54 100H40M160 100h14" stroke="#E7C264" stroke-width="3"/>` },
    { title: "Coastal fishing boats", tag: "Visakhapatnam coast", bg: ["#124F73", "#0B3D5C"], art: `<path d="M20 150h120l-16 30H36l-16-30Z" fill="#E7C264"/><path d="M80 150V90l40 40" stroke="#E7C264" stroke-width="3" fill="none"/>` },
    { title: "Nallamala forest tiger reserve", tag: "Nandyal", bg: ["#26301F", "#3C6E52"], art: `<ellipse cx="100" cy="120" rx="60" ry="26" fill="#E7C264"/><path d="M60 108l-8-12M140 108l8-12" stroke="#26301F" stroke-width="4"/>` },
    { title: "Godavari river cruise", tag: "Papikondalu", bg: ["#0B3D5C", "#1F4A34"], art: `<path d="M0 130 60 90 130 130 200 95v90H0Z" fill="#0A2A3D"/><path d="M0 145c40-14 60 14 100 0s60 14 100 0" stroke="#79BB96" stroke-width="3" fill="none"/>` },
    { title: "Sankranti kites", tag: "Statewide festival", bg: ["#B5482D", "#C0922A"], art: `<path d="M100 40 60 90l40 70 40-70Z" fill="#F6EFE2"/><path d="M100 40v120M60 90h80" stroke="#0B3D5C" stroke-width="2"/>` }
  ];
  const galleryGrid = document.getElementById("galleryGrid");
  galleryItems.forEach(g => {
    const card = el("div", "gallery-card reveal", `
      <svg viewBox="0 0 200 200">
        <defs><linearGradient id="g-${g.title.replace(/\s/g,'')}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${g.bg[0]}"/><stop offset="100%" stop-color="${g.bg[1]}"/>
        </linearGradient></defs>
        <rect width="200" height="200" fill="url(#g-${g.title.replace(/\s/g,'')})"/>
        <g transform="translate(0,10)">${g.art}</g>
      </svg>
      <div class="gallery-cap"><b>${g.title}</b><br><span>${g.tag}</span></div>
    `);
    galleryGrid.appendChild(card);
  });

  /* ---------------- Scroll reveal ---------------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(elm => io.observe(elm));
})();
