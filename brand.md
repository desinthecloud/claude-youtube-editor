# Brand — Des in the Cloud

> Style contract for every video this repo produces. Every step-2+ skill (TSX overlays,
> full-screen animations, diagrams, SFX) reads this file so all videos feel like one channel.
> Set by `/brand-setup`. Keep `remotion/src/brand.ts` and `remotion/src/fonts.ts` in sync.
> A warm, confident look: berry and plum on cream. Honest, direct, funny. Never hype.

## 1. Identity & voice

- **Positioning:** the blunt, funny friend who already survived the bootcamp, the certs and the layoff.
  The real path into tech and AI product, out loud. Audience: Black women in tech and women over 40
  pivoting careers. Warm, personal, with receipts.
- **Voice:** blunt, practical, sarcastic without bashing, warm, real. Short lines. Contrast hooks.
  First person. Name the hard part, then give the plan. On-screen text avoids em-dashes.
  Never use hype words: game-changing, lightning fast, dominating, level up, pure efficiency.
- **Energy for video:** warm and confident. Quick, punchy cuts with a soft landing. Not MrBeast-loud,
  not corporate-flat. Motion stays tasteful: no cartoon bounce, no hard offset shadows.

## 2. Logo / wordmark

- **Wordmark:** **Des in the Cloud**, three parts: `Des` / `in the` / `Cloud`. The middle "in the"
  renders in the berry accent, in Poppins, tight. In `brand.ts` the spaces sit inside the values (`'Des '`, `'in the'`, `' Cloud'`) because the parts render with no gap. Sign-off line: "Keep going. See you in the next one."
  Handles: YouTube @Desinthecloud, TikTok @des_in_the_cloud, Instagram and Threads desinthecloud.
- No standalone logo mark is required (a favicon is enough). Use the wordmark as the lockup.
- Drop any portrait / brand-bumper assets you want to reuse under `media/library/` (e.g. a `logos/`
  or `faces/` entry) and reference them from shots via `staticFile('library/...')`.

## 3. Color palette (exact hex)

| Role | Name | Hex | Use in video |
|---|---|---|---|
| **Primary accent** | berry | `#C2185B` | key words, highlights, active state, CTAs, the "in the" in the wordmark |
| Secondary accent | plum-violet | `#7B3FA0` | pairs with berry in gradients, secondary emphasis |
| Success / positive | teal | `#1F8A7D` | "free", confirms, checkmarks, positive callouts |
| Success alt | teal light | `#2BB3A3` | teal companion for gradients and success |
| Warn / attention | amber | `#F2B84B` | highlight sweeps, "watch this", attention pops |
| Danger / contrast | red | `#D64545` | errors, "the hard or expensive way", negative contrast |
| Ink (text/dark) | deep plum | `#2B1B3D` | primary text on light; base dark bg |
| Muted text | muted plum | `#6B5A78` | secondary text, captions |
| Surface (paper) | warm cream | `#FFF9F3` | light full-screen bg, cards |
| Surface 2 (cream) | cream | `#F8EFE6` | alt light band |
| Line | sand | `#EADFD3` | 1px borders on light |

Contrast on paper: ink 15.15:1, muted 5.98:1, accent 5.62:1. Paper on accent 5.62:1, so small text
on a berry chip is safe.

**Dark UI / terminal scale** (GitHub-ink — for Claude Code terminal & code mockups):
`#0d1117` (bg) · `#161b22` (panel) · `#30363d` (border) · `#8b949e` (dim text) · `#c9d1d9` (text).

**Signature gradient:** berry → plum → teal (`#C2185B → #7B3FA0 → #1F8A7D`). Used for dividers and
full-screen animated backgrounds.

## 4. Typography (3-font system)

| Role | Font | Weights | Use |
|---|---|---|---|
| **Display / headlines** | **Poppins** | 500 / 600 / 700 / 800 | titles, big statements, section cards, the wordmark |
| **Body / UI** | **Inter** | 400 / 500 / 600 | subtitles, labels, body text, lower-third detail |
| **Code / mono** | **JetBrains Mono** | 400 / 500 / 700 | terminal mockups, code, prompts, file paths, tech labels |
| **Claude wordmark serif** | **Source Serif 4** (`FONT_EDITORIAL`) | 600 | "Claude …" wordmark clones (Claude Editor, Claude Code) — the Copernicus stand-in |

All load from `@remotion/google-fonts` (see `remotion/src/fonts.ts`) — nothing to install.
Headlines tight tracking; body normal; mono for anything literally code/terminal/paths.
**Wordmark rule (video-5 creator feedback):** Claude wordmarks use Source Serif 4 at 600 — Spectral
(`FONT_SERIF`) reads too thin/bookish next to the real Copernicus and is retired for wordmarks.

## 5. Shape & depth

- **Radius:** ~14px (cards/panels), pills fully rounded. Terminal/code windows: ~10px with a title bar.
- **Depth:** **soft shadows** (e.g. `0 8px 32px rgba(43,27,61,.10)`), 1px light borders. Airy.
- **Never:** hard offset shadows (`4px 4px 0 #000`), 3px black borders, sticker/pop look → retired.
- **Window chrome** (browser/terminal mockups): rounded panel, top bar with 3 traffic-light dots
  + a mono label; content on the dark ink scale.

## 6. Motion language  ← *warm & confident*

Translated to video (Remotion, 25fps):

- **Entrances:** fade + rise. `opacity 0→1` and `translateY 24px→0` over ~6 frames (~0.24s), ease-out
  (or spring: damping 200, mass 0.8, stiffness 120). Calm, no overshoot/bounce.
- **Exits:** fade + fall ~4 frames.
- **Emphasis:** berry highlight/underline wipe behind a key word over ~4 frames; scale pop max 1.03.
- **Stagger:** 1–2 frames between list items / lines.
- **Backgrounds:** slow drifting berry/plum/teal gradient blobs + a faint dotted grid, 8–20s loops.
- **Feel:** premium, restrained, "Linear/Anthropic." No spins, no elastic, no hard snaps.

**Hook-beat exception (first ~10s + intro cutaways — video-5 creator feedback).** The opening
sequence runs HOTTER than the body: branded app-UI spectacle (e.g. the Claude Editor shell) with
the creator's REAL footage inside, editing visibly happening ON the footage (auto-captions,
punch-in + flash, color-grade wipe, lower-third, SFX chip, ripple-deletes on a timeline), overshoot
pops allowed, and a climax stamp. The discipline that keeps it premium instead of chaotic:
**one readable editing event at a time**, each synced to its narration word — never two headline
events at once. Escalate: scan → cut → punch-in → grade → fly-in → stamp.

**Step markers & punchlines (video-5 creator feedback).** Every "step N" narration line gets the
full-screen StepTitle card (`remotion/src/lib/step-title.tsx`), label block-wiping on its word. When
a line turns personal or lands a punchline ("the only thing I record is my face", "sorry video
editors"), cut back to the creator FULL SCREEN with a slow punch-in — graphics never cover a
punchline. Face gags match the line's tone: playful joke = mime-bump squash; dry line = dry zoom,
no gag.

## 7. Video delivery specs

- **Canvas:** 3840×2160 (4K), **25 fps** — matches the camera. The `video-1` example shots were
  authored at 60 fps, so any frame-count timing copied from them needs rescaling (about ÷2.4).
  (Design at 1920×1080 ×2 scale is fine; composite at 4K.)
- **Safe margins:** keep text ≥ 5% from edges (title-safe ~7.5%). Lower-thirds in the bottom ~12–18% band,
  left-aligned to the margin.
- **Talking head is CENTER-framed.** Overlays live in the **top and bottom bands**, or become
  **full-screen cutaways** (cut away from the presenter entirely to a full-screen TSX beat). Never cover
  the center-framed presenter.
- **Overlay types:** lower-third (name/term), keyword callout, full-screen statement/section card,
  animated diagram, UI/terminal mockup (TSX-first).
- **Visual editing rules** (honored by `/make-tsx`): concept beats = full-screen cutaways; overlays only
  for small persistent CTAs/badges; visuals sync to narration and never pre-empt it; real UI / real pages
  for config and service facts.
- **Captions:** overlays only (not word-level captions) for long-form.

## 8. Asset & source locations

- Master (example): `videos/video-1/reference/<cut>.mp4` · edited transcript:
  `videos/video-1/work/edited-transcript.json` (word times in the master timeline).
- Reusable brand assets: `media/library/` (typed folders — `logos/ sfx/ music/ faces/` each with an
  index/catalog). Per-video generated assets: `media/projects/<video>/`, referenced from shots as
  `staticFile('projects/<video>/x')`.
- Brand tokens as code: `remotion/src/brand.ts` (keep it in sync with this file).

## 9. Locked decisions & still-open

- **Brand = Des in the Cloud** — berry accent on warm cream, deep plum ink, Poppins/Inter/JetBrains Mono. ✓
- **Motion = warm & confident** — quick fade-and-rise, soft landing, no bounce (§6). ✓
- **Framing = centered** — overlays top/bottom band or full-screen cutaway; never cover center. ✓
- **SFX taste (step 4):** subtle accents under the voice. See §10. Still open: punchier or not.

## 10. Sound design — SFX

Same energy as the motion: **calm/premium, felt-not-heard.** Reference feel is Linear / Anthropic /
Vercel product sound, NOT MrBeast-loud. SFX are seasoning on the edit, never the show.

SFX are on for this channel: tasteful, under the voice, never wall-to-wall.

**Choose every cue by its FUNCTION** (the pro-editor model — 3+1 foundational sounds do the heavy
lifting; thousands of files are a trap). Ask what the beat needs:

| Function | Sound | Its job | Our (calm) sub-types |
|---|---|---|---|
| **Motion** | whoosh | direction/speed; carry one shot into the next | `whoosh-soft` (quick cut), `whoosh-wind` (soft, gliding) |
| **Tension** | riser | "something is coming"; hold on the edge before a reveal | `riser-soft` (gentle; NO cymbal-urgency riser) |
| **Emphasis** | impact / pop | "this moment matters"; lands as the new shot appears | `impact-soft`, `impact-deep-soft` (reveal, long tail), `pop-reveal` (UI reveal) |
| **Snap** | click | small, satisfying, alive; a sequence of related shots each on a click | `ui-click-soft`, `ui-toggle-on`, `ui-send` |

Plus two brand-specific extras: `page-flip` (storybook) and `chime-reward` (the "free"/gift moment).

- **Taste — subtle premium accents.** Quiet, tasteful, always UNDER the voice. Silence is part of
  the mix; never wall-to-wall. Nothing ever pops louder than the voice.
- **Layer for the big moments (build-and-drop).** The magic is in stacking: **riser → impact** on a
  scripted reveal (e.g. "wait a few minutes … *boom*"), **whoosh → pop/impact** so a cut stands out.
  In the plan a layer is just two events at the same/adjacent `at_s` that sum. Reserve layering for the
  2–3 biggest moments; keep everything else single and sparse.
- **Density — propose only what really matters.** Score the signature moment of a beat, not every
  sub-frame. A click-sequence (3–4 related shots each on a click) counts as ONE gesture. **There is no
  optional tier**: video-5 shipped 131 cues with 31 flagged `optional`, and the creator cut the whole
  tier wholesale at first listen. A cue you would flag as deniable is a cue you don't propose.
- **What does NOT earn a cue** (each of these was proposed on video-5 and cut):
  · **clicks on decorative animation** — card cascades, chip runs, hover pops. A click-sequence earns
  its clicks only when the narration ENUMERATES the items and each click lands on the word (the kept
  tile/row runs); a purely visual run gets silence.
  · **whooshes on secondary cutaways** — whoosh the cuts that change the argument (step titles, a
  scene the narration pivots into), never every mid-beat panel, scrub, or B-roll arrival.
  · **ambient texture under speech** — soft typing, pencil scribbles, shimmers, draw-along winds. The
  static/glitch rule generalizes: ALL decorative texture, not just noisy texture.
  · **a second sound inside one gesture** — the extra pop after a whoosh, a riser on a minor reveal.
  Layering stays reserved for the 2–3 hero moments.
- **Sync — to the VISUAL beat, and often the exact word.** A click on the toggle flip; a pop on the
  reveal; a whoosh on the cutaway; the impact on the drop word. Time off the shot's animation frames
  AND `edited-transcript.json` word times.
- **Levels.** Library clips are loudness-normalized to **~−20 LUFS** with a −1.5 dBFS peak ceiling, so a
  plan's per-cue `gain_db` is perceptually meaningful. The voice is ~−17 LUFS, so gain sets how far
  under it a cue sits: **payoffs ~−5/−6 · transitions ~−6/−8 · bed/texture ~−9/−11.** The SFX bus is
  **lightly ducked under the voice** (gentle sidechain, ~4 dB) in the audition mix; final
  polish/ducking/loudness is the final-mix step's job.
- **Signature motif.** Pick a recurring UI sound (the example uses a "Free Image Generator" toggle click
  — intro enable → later callback), the same `ui-toggle-on`, as a small sonic through-line.
- **Meme gags — the sanctioned exception.** A deliberate, self-aware meme effect (fisheye snap +
  `meme-boom`, mime bump, crash zoom — the library is `remotion/src/lib/effects.tsx` + SFX category
  `meme`) is allowed **at most 1–2 times per video**, only on a playful punchline line, never on a dry
  or informational one. Its sound is the one cue allowed to be deliberately LOUD (positive `gain_db`) —
  the loudness IS the joke — and it must land as a hard snap on the punchline word, paired with its
  visual. Grammar: snap, not morph. More than two per video and the premium feel of everything else
  erodes; at that point cut the weakest.
- **What we deliberately do NOT do** (take the pro's *structure*, not the drama): cymbal-urgency risers,
  trailer-slam impacts, a whoosh on every movement, "funny" click+whoosh gags. **No static/glitch
  textures under narration** — glitch reads as NOISE over the voice at any gain; error/delete moments
  during speech get silence or one clean mechanical snap, never sustained static (save glitch textures
  for gaps where the voice is silent).
- **Source.** ElevenLabs **Sound Effects API** is primary (owned, consistent, reusable); curated
  royalty-free is the fallback. Every clip's `source` + `license` is recorded in the catalog.
- **Music.** No music bed in the SFX pass. Music (track selection + auto-ducking) is the final-mix step
  (`tools/gen_music.py` + `tools/mix_music.py`, drawing from `media/library/music/`).
- **Library is the durable asset.** Shared, cross-project at **`media/library/sfx/`** (`catalog.json` +
  `clips/`), seeded from `palette.json`, organized by function. It GROWS every video — reuse before
  generating (library-first). SFX that must live *inside* a Remotion shot go in `media/library/sfx/` via
  `staticFile()`.
