(function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("mobile-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const isExpanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isExpanded));
      toggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
      nav.hidden = isExpanded;
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation");
      });
    });
  }

  // Bilingual i18n handler
  const metaDescriptions = {
    vi: "Digital Quality Solution phát triển các công cụ đảm bảo chất lượng phần mềm ứng dụng AI: sinh test case, review kiểm thử và quy trình QA tái sử dụng.",
    en: "Digital Quality Solution is developing AI-powered software quality assurance tools for test generation, test case review, and reusable QA workflows."
  };

  const pageTitles = {
    vi: "Digital Quality Solution — Đảm bảo Chất lượng Phần mềm ứng dụng AI",
    en: "Digital Quality Solution — AI-powered Software QA"
  };

  function setLanguage(lang) {
    const targetLang = (lang === "en" || lang === "vi") ? lang : "vi";
    document.documentElement.lang = targetLang;
    try {
      localStorage.setItem("dqs_lang", targetLang);
    } catch (e) {
      /* ignore storage quota/security errors */
    }

    // Update document title & metadata
    document.title = pageTitles[targetLang] || pageTitles.vi;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && metaDescriptions[targetLang]) {
      metaDesc.setAttribute("content", metaDescriptions[targetLang]);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", pageTitles[targetLang] || pageTitles.vi);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", targetLang === "vi" 
        ? "Xây dựng các công cụ AI thực tiễn hỗ trợ đội ngũ kiểm thử phần mềm."
        : "Building practical AI tools to support software testing teams.");
    }

    // Update active class on all switcher buttons
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      const btnLang = btn.getAttribute("data-lang-target");
      if (btnLang === targetLang) {
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");
      } else {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      }
    });
  }

  // Bind click events on all language switcher buttons
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const targetLang = this.getAttribute("data-lang-target");
      setLanguage(targetLang);
    });
  });

  // Determine initial language: URL query ?lang=vi|en -> localStorage -> default 'vi'
  let initialLang = "vi";
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const paramLang = urlParams.get("lang");
    const storedLang = localStorage.getItem("dqs_lang");
    if (paramLang === "en" || paramLang === "vi") {
      initialLang = paramLang;
    } else if (storedLang === "en" || storedLang === "vi") {
      initialLang = storedLang;
    }
  } catch (e) {
    initialLang = "vi";
  }

  setLanguage(initialLang);
})();
