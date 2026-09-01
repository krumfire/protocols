# Krum EMS Protocols 2026 — Mobile App

A self-contained, installable, **offline** field reference for the Krum Fire Department
EMS Treatment Protocols (effective Jan 1, 2026). Runs on iPhone and Android as an
installable web app (PWA). Every page is shown as a faithful image of the official
PDF, so drug doses and the two-column Adult / Pediatric layout are never re-typed
or rearranged.

## What's in the folder
- `index.html` — the app
- `data.js` — protocol index + search text
- `images/` — 186 page images (the actual protocols)
- `icons/`, `manifest.webmanifest`, `sw.js` — app icon + offline support

## How to put it on your phone (GitHub Pages)
1. Create a new GitHub repo (or use an existing Pages repo) and upload the entire
   contents of this folder to it.
2. In the repo: **Settings → Pages →** set Source to your main branch / root, Save.
3. Wait a minute, then open the published URL on your phone.
4. **Add to Home Screen:**
   - **iPhone (Safari):** Share button → *Add to Home Screen*.
   - **Android (Chrome):** ⋮ menu → *Install app* / *Add to Home Screen*.
5. Open it from the new home-screen icon. It now runs full-screen like a native app.

## Make it work with no signal
On the home screen, tap **"Save for offline."** It downloads all 186 pages into the
app (about 28 MB). After that the whole protocol set works with **zero cell service** —
ideal on a run or in a dead zone.

## Using it
- **Search** — type a drug, rhythm, or complaint (e.g. *fentanyl*, *bradycardia*,
  *chest pain*). Searches titles **and** the full text of every page, jumps you
  straight to the right page.
- **Sections** — color-coded tiles match the binder's tab colors (Cardiac, Drug
  References, Trauma, etc.). Tap a tile, then a protocol.
- **Reader** — pinch to zoom, swipe left/right or use Prev/Next to flip pages, tap
  the page counter to jump to any page number.
- **Bookmark** — tap the star on any page to save it; bookmarks live on the home
  screen for fast access. Recently viewed pages are remembered too.

## Note
This app is a convenience reference. The **official printed/approved protocols
govern** in all cases. Verify against the current signed document and your medical
director's direction.
