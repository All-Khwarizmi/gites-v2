// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  /* If trying out the experimental appDir, comment the i18n config out
   * @see https://github.com/vercel/next.js/issues/41980 */
  /*  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  }, */
  images: {
    // Required for `next export` (static site) — disables the on-demand
    // optimization server. Assets are pre-optimized at build/commit time.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
        pathname: "/montresor/**",
      },
    ],
  },

};


export default config;
