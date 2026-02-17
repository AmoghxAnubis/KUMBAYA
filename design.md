Project: Lusion.co Clone (Immersive WebGL Portfolio)
Target Framework: React Ecosystem (Next.js 14+)
3D Engine: React Three Fiber (R3F) / Three.js
Styling: TailwindCSS
Animation: GSAP (DOM), Maath/Spring (3D), Lenis (Smooth Scroll)
State Management: Zustand

1. High-Level Architecture
Concept: A seamless single-page-application (SPA) feel where a 3D scene (<Canvas>) sits permanently in the background (z-index: 0), and HTML content (<main>) floats on top (z-index: 10).

Core Directory Structure
(instruct Antigravity to set this up first)

Plaintext
/src
  /components
    /canvas        # All 3D R3F components
    /dom           # Standard HTML/UI components
    /layout        # Page wrappers
  /hooks           # Custom hooks (useScroll, useMouse)
  /shaders         # GLSL shader files (.glsl)
  /store           # Zustand state (useStore.js)
2. Component-Wise Design Specifications
A. Core Infrastructure (The "Rig")
1. SceneWrapper (Canvas Entry)
Type: R3F Canvas

Role: The root definition of the 3D world.

Props: shadows, camera={{ position: [0, 0, 5], fov: 45 }}, dpr={[1, 2]}.

Children:

<PerformanceMonitor> (To downgrade quality on low-end devices).

<ScrollControls> (From drei to sync HTML scroll with 3D).

<LusionPostProcessing> (Custom bloom/noise pipeline).

2. GlobalScrollManager
Dependency: @studio-freight/lenis

Behavior: Lusion uses "Scroll Jacking" (smooth, heavy inertial scrolling).

Logic:

Initialize Lenis on mount.

Sync Lenis scroll value to a Zustand store (state.scroll.progress).

Crucial: Pass this scroll value to the 3D scene to rotate/move objects based on page position.

B. The 3D Components (The "Magic")
3. HeroFigure (The Walking Man/Floating Entity)
Inspiration: The Lusion "Energy Man" or "Floating Hands".

Implementation:

Geometry: Use a Low-Poly Humanoid rigged model (Mixamo compatible).

Material: ShaderMaterial. Do NOT use a standard texture.

Shader Logic (Vertex): Displace vertices based on sin(time + position.y) to create a "liquid" or "energy" ripple effect.

Shader Logic (Fragment): Use a Fresnel (Rim Light) effect. Color should shift from Dark Blue to Bright Cyan based on view angle.

Instancing: If doing the "Particle Man" (dots instead of skin), use <InstancedMesh> with 10,000 instances mapped to the vertex positions of the animated mesh.

4. FloatingParticles (Background Ambience)
Component: <Points>

Behavior:

Generate 500 random points in a sphere around the center.

Animation: Slowly rotate the entire group.

Interaction: When mouse hovers near a particle, push it away slightly (Repulsion force).

5. ClothBanner (Project Transition)
Inspiration: The Lusion project previews that ripple like flags.

Tech: R3F compatible physics (Rapier) or Vertex Shader Wave.

Logic:

Plane Geometry with high segmentation (e.g., args={[5, 3, 32, 32]}).

Map the project screenshot as a texture.

Apply a "Wind" force in the shader: pos.z += sin(uv.x * 10.0 + time) * 0.1.

C. UI / DOM Components (The Interface)
6. NavigationDock
Position: Fixed, Bottom-Left or Top-Right (Corner anchoring).

Visuals: Minimalist text. "Home", "Work", "About".

Interaction:

Hover: Text scrambles (e.g., "Work" -> "W#rK" -> "Work") using a useScramble hook.

Active State: A small glowing dot appears next to the active item.

7. Preloader (The "Ignition")
Role: Hides the heavy asset loading.

Visual: A centered percentage counter (0% -> 100%).

Transition:

When 100% is reached:

Fade out DOM overlay.

Trigger CameraZoomIn event in the 3D scene (Camera moves from z: 50 to z: 5 quickly).

8. ProjectList (The Scroll Feed)
Structure: HTML list items.

Behavior:

As the user scrolls the HTML list, the 3D Scene changes.

Index Sync: Calculate which project is in the viewport (0, 1, 2...).

Signal: Send activeIndex to the 3D SceneWrapper to swap the texture on the ClothBanner.

D. Shader & VFX Dictionary
(Provide these specific instructions to Antigravity's coding agent)

VFX 1: The "Chromatic Aberration" Post-Process
Goal: Give the site a cinematic, lens-like feel.

Code Snippet Context: Use @react-three/postprocessing.

Settings:

ChromaticAberration: offset [0.002, 0.002].

Bloom: luminanceThreshold 1, intensity 0.5 (Subtle glow on highlights).

Noise: opacity 0.05 (Film grain).

VFX 2: The "Hologram" Material
Uniforms: uTime, uColor, uMouse.

Fragment Shader logic:

OpenGL Shading Language
float fresnel = dot(viewDirection, normal);
fresnel = pow(fresnel, 3.0);
gl_FragColor = vec4(uColor * fresnel, 1.0);
3. Implementation Plan for Antigravity
Copy and paste these phases into Antigravity to guide the agents:

Phase 1: The Skeleton
"Create a Next.js 14 project. Install three, @react-three/fiber, @react-three/drei, gsap, zustand, and @studio-freight/lenis. Configure a basic R3F Canvas that fills the screen and sits behind a transparent HTML overlay."

Phase 2: The Asset Pipeline
"Create a AssetLoader component using useGLTF. I need you to find or generate a dummy 'Humanoid' .glb file. Set up a Zustand store to track 'loading' status and 'currentScroll' progress."

Phase 3: The Hero Scene
"Build the HeroFigure component. Load the humanoid mesh. Apply a custom ShaderMaterial to it. The shader should make the mesh look like it is made of glowing blue energy wireframe. Animate the vertices slightly using a sine wave based on time."

Phase 4: Scroll Integration
"Implement Lenis for smooth scrolling on the HTML layer. Bind the scroll position to the 3D Camera's Y-position. As I scroll down the HTML page, the 3D camera should smoothly pan down to reveal different parts of the 3D scene."

Phase 5: The 'Lusion' Polish
"Add Post-Processing. Implement a 'Bloom' effect so the hero figure glows. Add a 'Grain' effect for texture. Create a custom mouse cursor that is a small ring that scales up when hovering over clickable elements."

4. Key "Gotchas" to Watch For
Mobile Performance: Lusion is heavy. Instruct Antigravity to: "Use dpr={[1, 1.5]} to cap pixel ratio on high-res screens."

Z-Index Fighting: Ensure the Canvas has pointer-events: none unless you are specifically interacting with a 3D object. Use a "Raycaster Manager" to toggle events.

Font Loading: Use a distinct, large sans-serif font (like 'Monument Extended' or 'Unbounded') to match Lusion's brutalist typography. Ensure it is preloaded before the curtain lifts.