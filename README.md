# Mal Aparcao Setlist

Static setlist app for phones and tablets. It is deployable as plain files on Netlify.

## Edit Songs

All setlist data lives in [src/data/songs.js](./src/data/songs.js).

Add songs to `SONGS` in the order you want them to appear. A typical song looks like this:

```js
{
  id: "song-id",
  title: "Song title",
  artist: "Artist",
  key: "Am",
  origin: "Any rehearsal note about the tone.",
  sections: [
    { name: "Intro", bars: ["Am", "G", "F", "E"] },
    { name: "Coro", rep: "bucle 2x", bars: ["C", "G", "Am", "F"] },
  ],
}
```

Use `"%"` inside `bars` to repeat the previous bar. Use `parts` for split sections such as guitar/sax solo halves.

Add an entry to `FLOWS` only when the live expanded order needs repeats or a different order from `sections`:

```js
export const FLOWS = {
  "song-id": ["Intro", "Coro", "Coro"],
};
```

Lyrics are optional. Add a `lyrics` field to a song object when you want the lyrics button to show text.

## Local Preview

Because the app uses JavaScript modules, preview it through a tiny local server:

```sh
python3 -m http.server 4173
```

Then open `http://localhost:4173`.
