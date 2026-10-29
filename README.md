# Kumbaya

An independent, scroll-driven tribute to Frank Ocean, following four releases from 2011 to 2016. The experience combines editorial chapters with a lightweight React Three Fiber background.

## Run locally

Install dependencies with `npm install`, then run `npm run dev` and open http://localhost:3000. Use `npm run lint` and `npm run build` to check the project.

## Structure

- `src/app/page.tsx`: chapter content and page structure.
- `src/components/layout/Experience.tsx`: motion preference and active chapter tracking.
- `src/components/canvas/SceneWrapper.tsx`: decorative 3D scene.
- `src/app/globals.css`: responsive visual design.

The site is a fan tribute and is not affiliated with Frank Ocean. It hosts no audio or album artwork; the listening archive includes a third-party Spotify embed and external links. The Memory Box stores selected fragment IDs on the device when local storage is available, with a memory-only fallback. Secure appropriate rights before adding third-party audio, images, or other protected material.
