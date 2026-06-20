import { FLOWS, SONGS } from "../data/songs.js?v=20260620-que-order";
import { transposeChord, transposeKey, prettyChord } from "./chords.js";
import { ICONS } from "./icons.js";

const SPEEDS = [0.5, 1, 1.5, 2, 3];

const state = {
  current: 0,
  expanded: false,
  fontStep: 0,
  lastTouchX: 0,
  lastTouchY: 0,
  offset: 0,
  rafId: null,
  scrollAccum: 0,
  scrollLastTs: 0,
  scrolling: false,
  showLyrics: false,
  speedIndex: 1,
};

const $ = (selector) => document.querySelector(selector);

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function repeatCount(rep) {
  if (!rep) return 1;
  const match = rep.match(/(?:x|×)\s*(\d+)|(\d+)\s*(?:x|×)/i);
  return match ? parseInt(match[1] || match[2], 10) : 1;
}

function updateIcons() {
  $("#lyricsBtn").innerHTML = state.showLyrics ? ICONS.acordes : ICONS.letra;
  $("#lyricsBtn").title = state.showLyrics ? "Ver acordes" : "Ver letra";
  $("#expandBtn").innerHTML = state.expanded ? ICONS.compact : ICONS.expand;
  $("#expandBtn").title = state.expanded ? "Compactar secciones" : "Expandir secciones";
}

function buildMenu() {
  const list = $("#songList");
  list.innerHTML = "";

  SONGS.forEach((song, index) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = `song-link${song.todo ? " todo" : ""}`;
    item.dataset.songIndex = index;
    item.innerHTML = `<span class="num">${index + 1}</span>
      <span class="nm">${escapeHtml(song.title)}</span>
      <span class="kb">${song.key ? transposeKey(song.key, song.defaultOffset || 0) : "?"}</span>`;
    list.appendChild(item);
  });
}

function closeMenu() {
  if (window.innerWidth <= 820) document.body.classList.add("nav-hidden");
}

function selectSong(index) {
  stopScroll();
  state.current = index;
  state.offset = SONGS[index].defaultOffset || 0;
  render();

  document.querySelectorAll(".song-link").forEach((item) => {
    item.classList.toggle("active", Number(item.dataset.songIndex) === index);
  });

  $("#content").scrollTop = 0;
}

function buildExpandedSequence(song) {
  const flow = FLOWS[song.id];
  if (state.expanded && flow) {
    return flow
      .map((sectionName) => song.sections.find((section) => section.name === sectionName))
      .filter(Boolean);
  }

  if (state.expanded) {
    return song.sections.flatMap((section) => Array.from({ length: repeatCount(section.rep) }, () => section));
  }

  return song.sections.slice();
}

function buildPlayCount(song) {
  return (FLOWS[song.id] || []).reduce((counts, sectionName) => {
    counts[sectionName] = (counts[sectionName] || 0) + 1;
    return counts;
  }, {});
}

function renderBar(bar, context) {
  if (bar === "%") {
    return `<div class="bar rep" title="repetir compás (${context.previousReal || ""})">&#37;</div>`;
  }

  const transposed = transposeChord(bar, state.offset);
  context.previousReal = transposed;
  return `<div class="bar">${prettyChord(transposed)}</div>`;
}

function renderBars(bars, repeat = 1) {
  const context = { previousReal: null };

  if (repeat > 1) {
    const groupBarsHtml = bars.map((bar) => renderBar(bar, context)).join("");
    return `<div class="bar-phrase">
      <div class="bar-phrase-bars">${groupBarsHtml}</div>
      <span class="bar-phrase-repeat">×${repeat}</span>
    </div>`;
  }

  return bars.map((bar) => renderBar(bar, context)).join("");
}

function renderSongHeader(song) {
  $("#songTitleTop .t").textContent = `${state.current + 1}. ${song.title}`;
  $("#songTitleTop .a").textContent = song.artist || "";

  const head = $("#songHead");

  if (song.todo) {
    $("#keyBadge").textContent = song.key || "?";
    head.innerHTML = `<div class="h1">${escapeHtml(song.title)}</div>
      <div class="meta">${song.artist ? `<b>${escapeHtml(song.artist)}</b>` : ""} ${
        song.key ? `· Tono: ${escapeHtml(song.key)}` : ""
      }</div>`;
    return;
  }

  const displayKey = transposeKey(song.key, state.offset);
  $("#keyBadge").textContent = displayKey;

  const metaParts = [`<span><b>Tono:</b> ${displayKey}</span>`];
  if (song.capo) metaParts.push(`<span class="capo">Cejilla ${transposeCapoNote(song)}</span>`);

  const relativeOffset = state.offset - (song.defaultOffset || 0);
  if (relativeOffset !== 0) metaParts.push(`<span>(${relativeOffset > 0 ? "+" : ""}${relativeOffset} ½ tono)</span>`);
  if (song.origin) metaParts.push(`<span>${escapeHtml(song.origin)}</span>`);

  head.innerHTML = `<div class="h1">${escapeHtml(song.title)}</div>
    <div class="meta"><b>${escapeHtml(song.artist || "")}</b> ${metaParts.join(" ")}</div>`;
}

function renderLyrics(song) {
  const sections = $("#sections");
  const lyrics = (song.lyrics || "").trim();

  sections.innerHTML = lyrics
    ? `<div class="lyrics">${escapeHtml(lyrics)}</div>`
    : `<div class="todo-box"><b>Letra no añadida.</b><br>Pega la letra de esta canción en su campo <code>lyrics</code> dentro de <code>src/data/songs.js</code> y aparecerá aquí.</div>`;
  sections.appendChild(buildSongNav());
}

function renderSections(song) {
  const sections = $("#sections");
  const sequence = buildExpandedSequence(song);
  const playCount = buildPlayCount(song);
  sections.innerHTML = "";

  sequence.forEach((section, index) => {
    const wrap = document.createElement("div");
    wrap.className = "section";

    const order = state.expanded ? `<span class="ord">${index + 1}</span>` : "";
    const count = playCount[section.name];
    const countTag = count > 1 ? `<span class="rep count">suena ${count}×</span>` : "";
    const sectionRepeat = repeatCount(section.rep);
    const repTag = section.rep && sectionRepeat === 1 ? `<span class="rep">${escapeHtml(section.rep)}</span>` : "";

    let inner = `<div class="sname">${order}${escapeHtml(section.name)} ${countTag}${repTag}</div>`;
    if (section.note) inner += `<div class="snote">${escapeHtml(section.note)}</div>`;

    if (section.parts) {
      section.parts.forEach((part) => {
        const partRepeat = repeatCount(part.rep);
        inner += `<div class="part">
            <div class="plabel">${escapeHtml(part.label)}</div>
            <div class="bars">${renderBars(part.bars, partRepeat)}</div>
          </div>`;
      });
    } else {
      inner += `<div class="bars">${renderBars(section.bars, sectionRepeat)}</div>`;
    }

    wrap.innerHTML = inner;
    sections.appendChild(wrap);
  });

  sections.appendChild(buildSongNav());
}

function render() {
  const song = SONGS[state.current];
  renderSongHeader(song);

  if (song.todo) {
    $("#sections").innerHTML = `<div class="todo-box">
      <b>Tab pendiente.</b><br>
      Envíame el tab (foto o PDF) de esta canción y la añado al setlist con su estructura, acordes y compases${
        song.key ? ` en ${escapeHtml(song.key)}` : ""
      }.
    </div>`;
    return;
  }

  if (state.showLyrics) {
    renderLyrics(song);
    return;
  }

  renderSections(song);
}

function buildSongNav() {
  const nav = document.createElement("div");
  nav.className = "songnav";

  const previous = SONGS[state.current - 1];
  const next = SONGS[state.current + 1];
  const previousButton = previous
    ? `<button class="prev" data-song-index="${state.current - 1}"><span class="lbl">◀ Anterior</span><span class="ttl">${escapeHtml(previous.title)}</span></button>`
    : `<button class="prev" disabled><span class="lbl">◀ Anterior</span><span class="ttl">—</span></button>`;
  const nextButton = next
    ? `<button class="next" data-song-index="${state.current + 1}"><span class="lbl">Siguiente ▶</span><span class="ttl">${escapeHtml(next.title)}</span></button>`
    : `<button class="next" disabled><span class="lbl">Siguiente ▶</span><span class="ttl">—</span></button>`;

  nav.innerHTML = previousButton + nextButton;
  return nav;
}

function transposeCapoNote(song) {
  const capo = parseInt(song.capo, 10) - state.offset;
  return Math.max(capo, 0);
}

function applyFont() {
  const base = 1.55 + state.fontStep * 0.16;
  document.documentElement.style.setProperty("--fs", `${base}rem`);
}

function scrollStep(timestamp) {
  if (!state.scrolling) return;

  if (!state.scrollLastTs) state.scrollLastTs = timestamp;
  const delta = timestamp - state.scrollLastTs;
  state.scrollLastTs = timestamp;
  state.scrollAccum += SPEEDS[state.speedIndex] * 0.035 * delta;

  if (state.scrollAccum >= 1) {
    const pixels = Math.floor(state.scrollAccum);
    state.scrollAccum -= pixels;
    const content = $("#content");
    const before = content.scrollTop;
    content.scrollTop += pixels;
    if (content.scrollTop === before) {
      stopScroll();
      return;
    }
  }

  state.rafId = requestAnimationFrame(scrollStep);
}

function startScroll() {
  state.scrolling = true;
  state.scrollLastTs = 0;
  state.scrollAccum = 0;
  $("#playBtn").textContent = "⏸";
  state.rafId = requestAnimationFrame(scrollStep);
}

function stopScroll() {
  state.scrolling = false;
  if (state.rafId) cancelAnimationFrame(state.rafId);
  $("#playBtn").textContent = "▶";
}

function bindEvents() {
  $("#songList").addEventListener("click", (event) => {
    const item = event.target.closest(".song-link");
    if (!item) return;
    selectSong(Number(item.dataset.songIndex));
    closeMenu();
  });

  $("#sections").addEventListener("click", (event) => {
    const button = event.target.closest(".songnav button[data-song-index]");
    if (!button) return;
    selectSong(Number(button.dataset.songIndex));
  });

  $("#trUp").addEventListener("click", () => {
    state.offset += 1;
    render();
  });
  $("#trDown").addEventListener("click", () => {
    state.offset -= 1;
    render();
  });
  $("#fsUp").addEventListener("click", () => {
    state.fontStep = Math.min(state.fontStep + 1, 5);
    applyFont();
  });
  $("#fsDown").addEventListener("click", () => {
    state.fontStep = Math.max(state.fontStep - 1, -2);
    applyFont();
  });
  $("#themeBtn").addEventListener("click", () => document.body.classList.toggle("light"));
  $("#printBtn").addEventListener("click", () => {
    stopScroll();
    window.print();
  });
  $("#lyricsBtn").addEventListener("click", () => {
    state.showLyrics = !state.showLyrics;
    updateIcons();
    render();
  });
  $("#expandBtn").addEventListener("click", () => {
    state.expanded = !state.expanded;
    updateIcons();
    render();
  });
  $("#gearBtn").addEventListener("click", (event) => {
    event.stopPropagation();
    document.body.classList.toggle("settings-open");
  });
  document.addEventListener("click", (event) => {
    if (document.body.classList.contains("settings-open") && !event.target.closest("#settings")) {
      document.body.classList.remove("settings-open");
    }
  });
  $("#menuBtn").addEventListener("click", () => document.body.classList.toggle("nav-hidden"));
  $("#overlay").addEventListener("click", closeMenu);
  $("#playBtn").addEventListener("click", () => {
    state.scrolling ? stopScroll() : startScroll();
  });
  $("#spdUp").addEventListener("click", () => {
    state.speedIndex = Math.min(state.speedIndex + 1, SPEEDS.length - 1);
    $("#spdVal").textContent = `${SPEEDS[state.speedIndex]}×`;
  });
  $("#spdDown").addEventListener("click", () => {
    state.speedIndex = Math.max(state.speedIndex - 1, 0);
    $("#spdVal").textContent = `${SPEEDS[state.speedIndex]}×`;
  });

  $("#content").addEventListener(
    "touchstart",
    (event) => {
      state.lastTouchX = event.touches[0].clientX;
      state.lastTouchY = event.touches[0].clientY;
    },
    { passive: true },
  );
  $("#content").addEventListener(
    "touchend",
    (event) => {
      const dx = event.changedTouches[0].clientX - state.lastTouchX;
      const dy = event.changedTouches[0].clientY - state.lastTouchY;
      if (Math.abs(dx) > 80 && Math.abs(dx) > Math.abs(dy) * 1.8) {
        if (dx < 0 && state.current < SONGS.length - 1) selectSong(state.current + 1);
        if (dx > 0 && state.current > 0) selectSong(state.current - 1);
      }
    },
    { passive: true },
  );
}

function init() {
  if (window.innerWidth <= 820) document.body.classList.add("nav-hidden");
  buildMenu();
  bindEvents();
  updateIcons();
  selectSong(0);
  applyFont();
}

init();
