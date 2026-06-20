const SCALE = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#", "A", "Bb", "B"];

const NOTE_INDEX = {
  C: 0,
  "C#": 1,
  DB: 1,
  D: 2,
  "D#": 3,
  EB: 3,
  E: 4,
  FB: 4,
  F: 5,
  "E#": 5,
  "F#": 6,
  GB: 6,
  G: 7,
  "G#": 8,
  AB: 8,
  A: 9,
  "A#": 10,
  BB: 10,
  B: 11,
  CB: 11,
};

export function transposeChord(chord, steps) {
  if (chord === "%" || chord === "") return chord;
  if (steps % 12 === 0) return chord;

  const match = chord.match(/^([A-G][#b]?)(.*)$/);
  if (!match) return chord;

  const root = match[1];
  let suffix = match[2];
  const rootIndex = NOTE_INDEX[root.toUpperCase()];
  if (rootIndex === undefined) return chord;

  let noteIndex = (rootIndex + steps) % 12;
  if (noteIndex < 0) noteIndex += 12;

  const slashMatch = suffix.match(/\/([A-G][#b]?)(.*)$/);
  let slash = "";
  if (slashMatch) {
    const bassIndex = NOTE_INDEX[slashMatch[1].toUpperCase()];
    if (bassIndex !== undefined) {
      let nextBass = (bassIndex + steps) % 12;
      if (nextBass < 0) nextBass += 12;
      slash = `/${SCALE[nextBass]}${slashMatch[2] || ""}`;
      suffix = suffix.slice(0, suffix.indexOf("/"));
    }
  }

  return `${SCALE[noteIndex]}${suffix}${slash}`;
}

export function transposeKey(key, steps) {
  if (!key) return key;
  const minor = key.endsWith("m") && !key.endsWith("dim");
  const base = minor ? key.slice(0, -1) : key;
  return `${transposeChord(base, steps)}${minor ? "m" : ""}`;
}

export function prettyChord(chord) {
  if (chord === "%") return "<span>&#37;</span>";

  let bass = "";
  let rootChord = chord;
  const slashIndex = chord.indexOf("/");
  if (slashIndex >= 0) {
    bass = `/${chord.slice(slashIndex + 1)}`;
    rootChord = chord.slice(0, slashIndex);
  }

  const formatted = rootChord.replace(
    /^([A-G][#b]?)(m?)(.*)$/,
    (_all, root, minor, rest) => root + minor + (rest ? `<sup>${rest}</sup>` : ""),
  );

  return formatted + bass;
}
