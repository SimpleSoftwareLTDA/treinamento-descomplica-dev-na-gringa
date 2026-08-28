# Specification: Asset Optimization and Build Refinement

## Goal
Improve the performance and maintainability of the landing page by optimizing assets and ensuring a consistent build environment.

## Requirements
- **Build Consistency:** Ensure Tailwind CSS build configuration is unified via `package.json` scripts and executed with Bun.
- **Asset Optimization:** Ensure all images are optimized (WebP) and the `optimize_images.ts` script is integrated/verified.
- **Accessibility:** Refine mobile menu interactivity for ARIA compliance.
- **Cleanup:** Address uncommitted files (`optimize_check.ts`, `optimize_images.ts`) by either integrating or properly managing them.

## Technical Details
- Configure `package.json` build scripts with Bun.
- Verify image compression levels in `img/` directory.
- Update `js/main.js` with basic ARIA attributes for the toggle menu.

