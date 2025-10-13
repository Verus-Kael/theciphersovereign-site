// ────────────────────────────────
// Capsule Navigation Toggle (for mobile)
// ────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("nav ul");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("visible");
    });
  }
});

// ────────────────────────────────
// QR Reveal Logic (for onboarding capsule)
// ────────────────────────────────
const qrTrigger = document.querySelector("#reveal-qr");
const qrBlock = document.querySelector("#qr-block");

if (qrTrigger && qrBlock) {
  qrTrigger.addEventListener("click", () => {
    qrBlock.style.display = "block";
    qrTrigger.style.display = "none";
  });
}

// ────────────────────────────────
// Smooth Scroll to Anchored Sections
// ────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ────────────────────────────────
// Capsule Hover Highlight (optional)
// ────────────────────────────────
document.querySelectorAll("main li").forEach(item => {
  item.addEventListener("mouseenter", () => {
    item.style.backgroundColor = "#1a1a1a";
    item.style.padding = "0.5rem";
    item.style.borderRadius = "6px";
  });
  item.addEventListener("mouseleave", () => {
    item.style.backgroundColor = "transparent";
    item.style.padding = "0";
    item.style.borderRadius = "0";
  });
});