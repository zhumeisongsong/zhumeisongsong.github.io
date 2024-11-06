import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zhumei Song",
  description: "Software engineer based in Tokyo. 🇯🇵",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "CV", link: "https://zhumeisongsong.github.io/cv" },
      { text: "Blog", link: "https://zhumeisongsong.github.io/blog" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/zhumeisongsong" },
    ],
  },
  head: [
    [
      "meta",
      {
        name: "google-adsense-account",
        content: "ca-pub-1141212403322647",
      },
    ],
    [
      "meta",
      {
        name: "google-site-verification",
        content: "1A3myPAsbW4yU-SCkZlmMSVmyagcPQGxCxU2IfHhx4",
      },
    ],
  ],
});
