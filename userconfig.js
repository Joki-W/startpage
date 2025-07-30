// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = macchiato;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Vienna",
    scale: "C",
  },
  clock: {
    format: "H:i p",
    icon_color: palette.maroon,
  },
  additionalClocks: [
    /*{
      label: "UA",
      timezone: "Europe/Kyiv",
      format: "h:i",
      icon_color: palette.peach,
    },*/
  ],
  search: {
    engines: {
      p: ["https://www.perplexity.ai/search/?q=", "PerplexityAI"],
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
    default: "d",
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: true,
  localFonts: true,
  fastlink: "https://www.perplexity.ai",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "usual",
      background_url: "src/img/banners/banner_08.gif",
      categories: [
        {
          name: "video",
          links: [
            {
              name: "youtube",
              url: "https://youtube.com/",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "twitch",
              url: "http://twitch.tv/",
              icon: "device-gamepad",
              icon_color: palette.mauve,
            },
            {
              name: "Miruro",
              url: "https://www.miruro.tv/",
              icon: "brand-funimation",
              icon_color: palette.yellow,
            },
            {
              name: "Cineby",
              url: "https://www.cineby.app/",
              icon: "code-minus",
              icon_color: palette.red,
            },
            {
              name: "Disney+",
              url: "https://www.disneyplus.com/en-gb/home",
              icon: "code-plus",
              icon_color: palette.blue,
            },
            /*{
              name: "Netflix",
              url: "https://www.netflix.com",
              icon: "brand-netflix",
              icon_color: palette.red,
            },*/
          ],
        },
        {
          name: "social media",
          links: [
            {
              name: "bluesky",
              url: "https://bsky.app/",
              icon: "badge-filled",
              icon_color: palette.blue,
            },
            {
              name: "Reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
            {
              name: "Twitter",
              url: "https://twitter.com/home",
              icon: "circle-triangle",
              icon_color: palette.red,
            },
            {
              name: "Instagram",
              url: "https://www.instagram.com/",
              icon: "brand-google-drive",
              icon_color: palette.pink,
            },
          ],
        },
        {
          name: "misc",
          links: [
            {
              name: "TCB Scans",
              url: "https://tcbonepiecechapters.com/",
              icon: "news",
              icon_color: palette.blue,
            },
            {
              name: "FMHY",
              url: "https://fmhy.net/beginners-guide",
              icon: "badge-filled",
              icon_color: palette.peach,
            },
            {
              name: "Amazon",
              url: "https://smile.amazon.de/",
              icon: "border-radius",
              icon_color: palette.peach,
            },
            {
              name: "Gmail",
              url: "https://mail.google.com",
              icon: "eye-bolt",
              icon_color: palette.red,
            },
            {
              name: "Translate",
              url: "https://translate.google.com/",
              icon: "eye-bolt",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "uni",
      background_url: "src/img/banners/banner_07.gif",
      categories: [
        {
          name: "TU",
          links: [
            {
              name: "TUWEL",
              url: "https://tuwel.tuwien.ac.at/my/courses.php",
              icon: "circle-triangle",
              icon_color: palette.blue,
            },
            {
              name: "TISS",
              url: "https://tiss.tuwien.ac.at/",
              icon: "circle-triangle",
              icon_color: palette.peach,
            },
            {
              name: "VoWi",
              url: "https://vowi.fsinf.at/wiki/Curriculum:E033535",
              icon: "brand-stackoverflow",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "coding",
          links: [
            {
              name: "Github",
              url: "https://github.com/Joki-W",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "AI",
          links: [
            {
              name: "ChatGPT",
              url: "https://chat.openai.com/chat",
              icon: "brand-prisma",
              icon_color: palette.green,
            },
            {
              name: "Google Gemini",
              url: "https://gemini.google.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
            {
              name: "Google AI Studio",
              url: "https://aistudio.google.com/prompts/new_chat",
              icon: "brand-uber",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "other",
      background_url: "src/img/banners/banner_11.gif",
      categories: [
        {
          name: "daylies",
          links: [
            {
              name: "wordle",
              url: "https://www.nytimes.com/games/wordle/index.html",
              icon: "brand-telegram",
              icon_color: palette.green,
            },
            {
              name: "wordgrid",
              url: "https://wordgrid.clevergoat.com/",
              icon: "brand-facebook",
              icon_color: palette.peach,
            },
            {
              name: "balatrodle",
              url: "https://www.balatrodle.com/",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
            {
              name: "scrandle",
              url: "https://scrandle.com/",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
            {
              name: "marveldle",
              url: "https://marveldle.com",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "free",
          links: [
            {
              name: "FMHY",
              url: "http://fmhy.net",
              icon: "device-gamepad",
              icon_color: palette.green,
            },
            {
              name: "temp mail",
              url: "https://smailpro.com/temporary-email",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
            {
              name: "awesome links",
              url: "http://awesome.re/",
              icon: "brand-fortnite",
              icon_color: palette.red,
            },
            {
              name: "TeraBox",
              url: "https://www.terabox.com/main?category=all",
              icon: "device-nintendo",
              icon_color: palette.blue,
            },
            {
              name: "Annas Archive",
              url: "https://www.terabox.com/main?category=all",
              icon: "device-nintendo",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
