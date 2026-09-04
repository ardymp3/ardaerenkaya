(function () {
  const data = window.ARDA_SITE || { works: [], socials: [] };
  const root = document.documentElement;
  const base = root.dataset.base || ".";

  const joinBase = (path) => {
    if (!path || path === "#") return path || "";
    if (/^(https?:|mailto:)/.test(path)) return path;
    return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
  };

  const qs = (selector, scope = document) => scope.querySelector(selector);
  const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  function currentTheme() {
    const saved = window.localStorage.getItem("arda-theme");
    if (saved === "dark" || saved === "light") return saved;
    return "light";
  }

  function applyTheme(theme) {
    document.body.classList.toggle("theme-dark", theme === "dark");
    root.dataset.theme = theme;
    qsa("[data-theme-toggle]").forEach((button) => {
      const isDark = theme === "dark";
      button.setAttribute("aria-pressed", String(isDark));
      button.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    });
  }

  function bindThemeToggle() {
    qsa(".nav-links").forEach((nav) => {
      if (qs("[data-theme-toggle]", nav)) return;
      nav.insertAdjacentHTML(
        "beforeend",
        '<button class="theme-toggle" type="button" data-theme-toggle aria-label="Switch theme"><span></span></button>'
      );
    });

    qsa("[data-theme-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        const next = root.dataset.theme === "dark" ? "light" : "dark";
        window.localStorage.setItem("arda-theme", next);
        applyTheme(next);
      });
    });

    applyTheme(currentTheme());
  }

  function renderSocials() {
    qsa("[data-socials]").forEach((container) => {
      container.innerHTML = data.socials
        .map((item) => {
          const pending = item.url === "#";
          const externalAttrs = item.url.startsWith("mailto:") ? "" : 'target="_blank" rel="noreferrer"';
          return `<a class="social-link${pending ? " is-pending" : ""}" href="${item.url}" ${
            pending ? 'aria-label="' + item.label + ' link pending"' : externalAttrs
          }>${item.label}</a>`;
        })
        .join("");
    });
  }

  function workImage(work) {
    if (work.image) {
      return `<img src="${joinBase(work.image)}" alt="${work.title}" loading="eager" decoding="sync">`;
    }
    return "";
  }

  function videoPlaceholder(work) {
    return `<div class="video-placeholder" role="img" aria-label="${work.title} video placeholder">
      <span></span>
      <small>Video will be added later</small>
    </div>`;
  }

  function videoEmbed(work) {
    if (!work.videoUrl) return "";
    return `<div class="video-embed"><iframe src="${work.videoUrl}" title="${work.title}" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`;
  }

  function workMedia(work) {
    const image = workImage(work);
    if (image) return image;
    if (work.mediaType === "video") return videoPlaceholder(work);
    return "";
  }

  function workCard(work) {
    const media = workMedia(work);
    return `<article class="work-card${media ? "" : " is-text-only"}" data-type="${work.type}" data-slug="${work.slug}">
      <a href="${joinBase(work.url)}">
        ${media ? `<div class="work-media">${media}</div>` : ""}
        <div class="work-copy">
          <h3>${work.title}</h3>
          <p>${work.summary}</p>
          <span>${work.eyebrow}${work.year ? " / " + work.year : ""}</span>
        </div>
      </a>
    </article>`;
  }

  function listedWorks() {
    return data.works.filter((work) => work.hiddenFromWorks !== true);
  }

  function renderFeaturedWorks() {
    qsa("[data-featured-works]").forEach((container) => {
      container.innerHTML = listedWorks().slice(0, 4).map(workCard).join("");
    });
  }

  function renderAllWorks() {
    qsa("[data-all-works]").forEach((container) => {
      container.innerHTML = listedWorks().map(workCard).join("");
    });
  }

  function projectLinks(work) {
    if (Array.isArray(work.links) && work.links.length) return work.links;
    if (work.externalUrl) return [{ label: "Visit project", url: work.externalUrl }];
    return [];
  }

  function renderProjectLinks(work) {
    return projectLinks(work)
      .map((link) => `<a class="button-link" href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`)
      .join("");
  }

  function renderList(items) {
    return `<ul>${(items || []).map((item) => `<li>${item}</li>`).join("")}</ul>`;
  }

  function renderDownloadLinks(work) {
    return (work.downloads || [])
      .map((item) => {
        const disabled = !item.url || item.url === "#";
        const attrs = disabled
          ? 'href="#" aria-disabled="true" onclick="return false"'
          : `href="${joinBase(item.url)}" download`;
        return `<a class="plugin-button${disabled ? " is-disabled" : ""}" ${attrs}>
          <span>${item.label}</span>
          ${item.note ? `<small>${item.note}</small>` : ""}
        </a>`;
      })
      .join("");
  }

  function renderPluginWave() {
    const bars = [14, 24, 38, 18, 30, 12, 22, 34, 17, 28, 44, 20, 31, 16, 40, 26, 13, 29, 36, 19, 33, 15, 27, 21];
    return `<div class="plugin-wave" aria-hidden="true">${bars
      .map((height, index) => `<span style="--h:${height}px; --i:${index}"></span>`)
      .join("")}</div>`;
  }

  function renderPluginDetail(target, work) {
    const downloads = renderDownloadLinks(work);
    target.innerHTML = `<section class="plugin-hero">
      <div class="plugin-copy">
        <h1><span>real-time dialogue</span><span>noise reduction plugin</span></h1>
        <p>Tek düğmeli, gerçek zamanlı ve ücretsiz noise reduction plug-in.</p>
        <div class="plugin-actions">${downloads}</div>
      </div>
      <div class="plugin-control" aria-label="De-Noizen interface preview">
        <div class="plugin-arc"></div>
        <div class="plugin-knob">
          <span class="plugin-knob-face"></span>
          <span class="plugin-indicator"></span>
        </div>
        <div class="plugin-label">
          <strong>DE-NOIZEN</strong>
        </div>
      </div>
      ${renderPluginWave()}
    </section>
    <section class="plugin-info">
      <div>
        <p class="plugin-kicker">Plug-in</p>
        <h2>De-Noizen</h2>
      </div>
      <div>
        <div class="plugin-docs">
          <p>${work.detail}</p>
          <h3>Şu alanlarda kullanılabilir:</h3>
          ${renderList(work.useCases)}
          ${(work.workflow || []).map((item) => `<p>${item}</p>`).join("")}
          <h3>Önerilen başlangıç seviyeleri:</h3>
          ${renderList(work.reductionLevels)}
          <p>${work.recommendation}</p>
          <h3>Kurulum</h3>
          <h4>Windows</h4>
          ${(work.installation.windows || [])
            .map((item) => (item.includes("\\") ? `<code>${item}</code>` : `<p>${item}</p>`))
            .join("")}
          <h4>macOS</h4>
          ${(work.installation.macos || [])
            .map((item) => (item.startsWith("/") ? `<code>${item}</code>` : `<p>${item}</p>`))
            .join("")}
          <h4>Manuel Kurulum</h4>
          ${(work.installation.manual || [])
            .map((item) => (item.includes("\\") ? `<code>${item}</code>` : `<p>${item}</p>`))
            .join("")}
          <h4>Güvenlik</h4>
          <p>${work.installation.security} <a href="${work.installation.virusTotalUrl}" target="_blank" rel="noreferrer">VirusTotal</a></p>
        </div>
        <dl>
          <div><dt>Platform</dt><dd>Windows / macOS</dd></div>
          <div><dt>Status</dt><dd>${work.status}</dd></div>
          <div><dt>Role</dt><dd>${work.role}</dd></div>
        </dl>
      </div>
    </section>`;
  }

  function renderDetail() {
    const target = qs("[data-work-detail]");
    if (!target) return;

    const slug = target.dataset.workDetail;
    const work = data.works.find((item) => item.slug === slug);

    if (!work) {
      document.body.classList.remove("plugin-body");
      target.innerHTML = `<section class="detail-shell"><p class="eyebrow">Work not found</p><h1>Bu is henuz eklenmedi.</h1><a class="text-link" href="${joinBase("works/")}">Works'a don</a></section>`;
      document.title = "Work not found | Arda Eren Kaya";
      return;
    }

    const isPlugin = work.isPluginLanding === true;
    document.body.classList.toggle("plugin-body", isPlugin);
    target.classList.toggle("plugin-page", isPlugin);
    if (isPlugin) qsa("[data-theme-toggle]").forEach((button) => button.remove());
    document.title = `${work.title} | Arda Eren Kaya`;
    const metaDescription = qs('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute("content", work.summary);

    if (isPlugin) {
      renderPluginDetail(target, work);
      return;
    }

    const image = workImage(work);
    const embed = work.mediaType === "video" ? videoEmbed(work) : "";
    const media = embed
      ? `<figure class="detail-media">${embed}</figure>`
      : work.mediaType === "video"
        ? `<figure class="detail-media">${videoPlaceholder(work)}</figure>`
        : image
          ? `<figure class="detail-media">${image}</figure>`
          : "";
    const links = renderProjectLinks(work);
    const detail = work.detailHtml || work.detail;
    const eyebrow = [work.eyebrow, work.status].filter(Boolean).join(" / ");
    const contactLink =
      work.showContact === true
        ? `<a class="button-link${links ? " secondary" : ""}" href="${joinBase("contact/")}">Contact</a>`
        : "";
    const actions = `${links}${contactLink}`;
    target.innerHTML = `<section class="detail-hero">
      <div class="detail-copy">
        <a class="back-link" href="${joinBase("works/")}">Works</a>
        ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ""}
        <h1>${work.title}</h1>
        <p class="lead">${detail}</p>
        ${actions ? `<div class="detail-actions">${actions}</div>` : ""}
        <div class="detail-meta">
          <span>${work.role}</span>
          ${work.year ? `<span>${work.year}</span>` : ""}
        </div>
      </div>
      ${media}
    </section>`;
  }

  function bindFilters() {
    const filterBar = qs("[data-work-filters]");
    const list = qs("[data-all-works]");
    if (!filterBar || !list) return;

    const types = ["All", ...new Set(listedWorks().map((work) => work.type))];
    filterBar.innerHTML = types
      .map((type, index) => `<button class="${index === 0 ? "is-active" : ""}" type="button" data-filter="${type}">${type}</button>`)
      .join("");

    filterBar.addEventListener("click", (event) => {
      const button = event.target.closest("button");
      if (!button) return;
      qsa("button", filterBar).forEach((item) => item.classList.toggle("is-active", item === button));
      const filter = button.dataset.filter;
      qsa(".work-card", list).forEach((card) => {
        card.hidden = filter !== "All" && card.dataset.type !== filter;
      });
    });
  }

  function updateYear() {
    qsa("[data-year]").forEach((item) => {
      item.textContent = new Date().getFullYear();
    });
  }

  function bindContactForm() {
    const form = qs("[data-contact-form]");
    if (!form) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const message = String(formData.get("message") || "").trim();
      const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");
      const subject = encodeURIComponent("Website contact");
      window.location.href = `mailto:ardaerenkayaa@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
    });
  }

  bindThemeToggle();
  renderSocials();
  renderFeaturedWorks();
  renderAllWorks();
  renderDetail();
  bindFilters();
  bindContactForm();
  updateYear();
})();
