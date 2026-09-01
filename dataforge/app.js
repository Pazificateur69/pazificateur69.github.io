const $ = (id) => document.getElementById(id);
const storageKey = "dataforge-revision-state-v2";
let state;
try { state = JSON.parse(localStorage.getItem(storageKey) || "{}"); } catch { state = {}; }
state.qcmAnswers ||= {};
state.qcmBest ||= 0;
state.flashMastered ||= {};
state.oralMastered ||= {};

let qcmPool = [...qcm];
let qcmIndex = 0;
let qcmSelected = null;
let qcmAnswered = false;
let qcmSessionScore = 0;
let flashIndex = 0;
let flashOrder = [...Array(flashcards.length).keys()].sort(() => Math.random() - 0.5);
let oralIndex = 0;
let oralRevealed = false;

function save() {
  localStorage.setItem(storageKey, JSON.stringify(state));
  updateStats();
}

function updateStats() {
  const done = Object.keys(state.qcmAnswers).length;
  $("stat-qcm").textContent = qcm.length;
  $("stat-progress").textContent = Math.round(done / qcm.length * 100) + "%";
  $("stat-best").textContent = state.qcmBest ? `${state.qcmBest}/${qcm.length}` : "—";
  $("qcm-best-inline").textContent = `Meilleur complet : ${state.qcmBest ? state.qcmBest + "/" + qcm.length : "—"}`;
  $("oral-mastered-count").textContent = Object.values(state.oralMastered).filter(Boolean).length;
}

function showView(name) {
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === "view-" + name));
  document.querySelectorAll(".nav-link").forEach((button) => button.classList.toggle("active", button.dataset.view === name));
  $("main-nav").classList.remove("open");
  $("menu-toggle").setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-view]").forEach((element) => element.addEventListener("click", () => showView(element.dataset.view)));
$("menu-toggle").addEventListener("click", () => {
  const open = $("main-nav").classList.toggle("open");
  $("menu-toggle").setAttribute("aria-expanded", String(open));
});

function renderSheets(filter = "") {
  const grid = $("sheet-grid");
  const needle = filter.toLowerCase().trim();
  grid.innerHTML = "";
  sheets.filter((sheet) => (sheet.title + " " + sheet.summary + " " + sheet.sections.flat().join(" ")).toLowerCase().includes(needle)).forEach((sheet) => {
    const card = document.createElement("article");
    card.className = "sheet-card";
    card.style.setProperty("--accent", sheet.accent);
    card.innerHTML = `<div class="sheet-top"><span class="sheet-index">FICHE ${sheet.index}</span><span class="sheet-icon">${sheet.icon}</span></div><h2>${sheet.title}</h2><p class="sheet-summary">${sheet.summary}</p><button class="sheet-toggle" aria-expanded="false">Ouvrir la fiche +</button><div class="sheet-detail" hidden>${sheet.sections.map((section) => `<div><h3>${section[0]}</h3><p>${section[1]}</p></div>`).join("")}</div>`;
    const toggle = card.querySelector(".sheet-toggle");
    toggle.addEventListener("click", () => {
      const detail = card.querySelector(".sheet-detail");
      const open = detail.hidden;
      detail.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Réduire la fiche −" : "Ouvrir la fiche +";
    });
    grid.appendChild(card);
  });
  if (!grid.children.length) grid.innerHTML = '<div class="panel empty-state"><strong>Aucune fiche trouvée.</strong><p class="muted">Essaie « identité », « réseau », « SOC », « code » ou « PRA ».</p></div>';
}

$("sheet-search").addEventListener("input", (event) => renderSheets(event.target.value));

function populateQcmFilters() {
  [...new Set(qcm.map((item) => item.category))].sort((a, b) => a.localeCompare(b, "fr")).forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    $("qcm-filter").appendChild(option);
  });
}

function startQcm(pool) {
  if (!pool.length) {
    alert("Aucune question dans cette sélection. Termine d’abord quelques questions pour créer une liste d’erreurs.");
    return;
  }
  qcmPool = [...pool];
  qcmIndex = 0;
  qcmSelected = null;
  qcmAnswered = false;
  qcmSessionScore = 0;
  renderQcm();
}

function renderQcm() {
  const item = qcmPool[qcmIndex];
  $("qcm-number").textContent = `QUESTION ${String(qcmIndex + 1).padStart(2, "0")} / ${qcmPool.length}`;
  $("qcm-difficulty").textContent = `${item.category.toUpperCase()} · ${item.competency}`;
  $("qcm-progress-label").textContent = `${qcmIndex + 1} / ${qcmPool.length}`;
  $("qcm-progress-bar").style.width = `${(qcmIndex + 1) / qcmPool.length * 100}%`;
  $("qcm-question").textContent = item.q;
  const wrap = $("qcm-options");
  wrap.innerHTML = "";
  qcmSelected = null;
  qcmAnswered = false;
  $("qcm-next").disabled = true;
  $("qcm-next").innerHTML = "Valider ma réponse <span>→</span>";
  $("qcm-feedback").hidden = true;
  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option";
    button.innerHTML = `<span class="letter">${String.fromCharCode(65 + index)}</span><span>${option}</span>`;
    button.addEventListener("click", () => selectQcm(index, button));
    wrap.appendChild(button);
  });
  $("qcm-score").textContent = `${qcmSessionScore}/${qcmIndex}`;
}

function selectQcm(index, button) {
  if (qcmAnswered) return;
  qcmSelected = index;
  document.querySelectorAll(".option").forEach((option) => option.classList.remove("selected"));
  button.classList.add("selected");
  $("qcm-next").disabled = false;
}

function answerQcm() {
  if (qcmSelected === null || qcmAnswered) return;
  qcmAnswered = true;
  const item = qcmPool[qcmIndex];
  const correct = qcmSelected === item.answer;
  if (correct) qcmSessionScore += 1;
  state.qcmAnswers[item.id] = correct;
  document.querySelectorAll(".option").forEach((option, index) => {
    if (index === item.answer) option.classList.add("correct");
    if (index === qcmSelected && index !== item.answer) option.classList.add("incorrect");
  });
  const feedback = $("qcm-feedback");
  feedback.hidden = false;
  feedback.className = `feedback ${correct ? "ok" : "no"}`;
  feedback.innerHTML = `<strong>${correct ? "Bonne réponse." : "À retravailler."}</strong> ${item.explanation}<br><small>Référentiel : ${item.competency}</small>`;
  $("qcm-score").textContent = `${qcmSessionScore}/${qcmIndex + 1}`;
  $("qcm-next").innerHTML = qcmIndex === qcmPool.length - 1 ? "Terminer la série <span>→</span>" : "Question suivante <span>→</span>";
  save();
}

$("qcm-next").addEventListener("click", () => {
  if (!qcmAnswered) return answerQcm();
  if (qcmIndex < qcmPool.length - 1) {
    qcmIndex += 1;
    renderQcm();
  } else {
    if (qcmPool.length === qcm.length) state.qcmBest = Math.max(state.qcmBest, qcmSessionScore);
    save();
    alert(`Série terminée : ${qcmSessionScore}/${qcmPool.length}. Utilise « Revoir mes erreurs » pour cibler les points faibles.`);
    startQcm(qcmPool);
  }
});

$("qcm-filter").addEventListener("change", (event) => {
  const value = event.target.value;
  startQcm(value === "all" ? qcm : qcm.filter((item) => item.category === value));
});
$("qcm-errors").addEventListener("click", () => startQcm(qcm.filter((item) => state.qcmAnswers[item.id] === false)));
$("qcm-reset").addEventListener("click", () => {
  if (confirm("Recommencer la série actuelle ? La liste de tes erreurs reste enregistrée.")) startQcm(qcmPool);
});

document.addEventListener("keydown", (event) => {
  if (!$("view-qcm").classList.contains("active")) return;
  if (["1", "2", "3", "4"].includes(event.key)) {
    const button = document.querySelectorAll(".option")[Number(event.key) - 1];
    if (button) button.click();
  }
  if (event.key === "Enter" && !$("qcm-next").disabled) $("qcm-next").click();
});

function renderFlash() {
  const index = flashOrder[flashIndex];
  $("flash-counter").textContent = `${flashIndex + 1} / ${flashcards.length}`;
  $("flash-front").textContent = flashcards[index][0];
  $("flash-back").textContent = flashcards[index][1];
  $("flashcard").classList.remove("flipped");
}
function moveFlash(delta) {
  flashIndex = (flashIndex + delta + flashcards.length) % flashcards.length;
  renderFlash();
}
$("flashcard").addEventListener("click", () => $("flashcard").classList.toggle("flipped"));
$("flash-prev").addEventListener("click", () => moveFlash(-1));
$("flash-next").addEventListener("click", () => moveFlash(1));
$("flash-retry").addEventListener("click", () => { state.flashMastered[flashOrder[flashIndex]] = false; save(); moveFlash(1); });
$("flash-mastered").addEventListener("click", () => { state.flashMastered[flashOrder[flashIndex]] = true; save(); moveFlash(1); });

function renderOral() {
  const item = oralQuestions[oralIndex];
  $("oral-tag").textContent = item[0];
  $("oral-count").textContent = `Question ${oralIndex + 1} / ${oralQuestions.length}`;
  $("oral-question").textContent = item[1];
  $("oral-answer").innerHTML = `<strong>Réponse possible :</strong> ${item[2]}`;
  $("oral-answer").hidden = !oralRevealed;
  $("oral-reveal").innerHTML = oralRevealed ? "Masquer la réponse <span>↑</span>" : "Révéler la réponse attendue <span>↓</span>";
  $("oral-eval").hidden = !oralRevealed;
}
$("oral-reveal").addEventListener("click", () => { oralRevealed = !oralRevealed; renderOral(); });
$("oral-new").addEventListener("click", () => { oralIndex = (oralIndex + 1) % oralQuestions.length; oralRevealed = false; renderOral(); });
document.querySelectorAll("[data-oral-score]").forEach((button) => button.addEventListener("click", () => {
  state.oralMastered[oralIndex] = button.dataset.oralScore === "mastered";
  save();
  oralIndex = (oralIndex + 1) % oralQuestions.length;
  oralRevealed = false;
  renderOral();
}));

populateQcmFilters();
renderSheets();
renderQcm();
renderFlash();
renderOral();
updateStats();
