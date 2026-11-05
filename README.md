# Rancho Santana – local recreation

A static page: one hero video plus six film cards (hover to preview, click to play full-size).

## Run it
1. Open the `rancho-santana` folder in VS Code.
2. Install the **Live Server** extension, right-click `index.html`, choose **Open with Live Server**.
   (Or run `python3 -m http.server` in the folder and visit http://localhost:8000.)

## Add your videos
Put these files in `videos/` (MP4, H.264, muted-friendly):

| File | Used for |
|---|---|
| hero.mp4 | Full-screen hero loop (10–20 s, under ~10 MB works best) |
| surf.mp4, beaches.mp4, stay.mp4, dine.mp4, wellness.mp4, events.mp4 | The six cards |
| hero-poster.jpg, surf-poster.jpg, … | Optional still frames shown before a video loads |

To change a video, edit its `src` in `index.html` (and the matching `data-video` on the button).
Replace the page text and links as you like; footer links to the live site.
