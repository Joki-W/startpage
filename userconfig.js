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
              icon: "brand-twitch",
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
              icon: "movie",
              icon_color: palette.red,
            },
            {
              name: "Disney+",
              url: "https://www.disneyplus.com/en-gb/home",
              icon: "brand-disney",
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
              icon: "butterfly",
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
              icon: "brand-twitter",
              icon_color: palette.blue,
            },
            {
              name: "Instagram",
              url: "https://www.instagram.com/",
              icon: "brand-instagram",
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
              icon: "link",
              icon_color: palette.peach,
            },
            {
              name: "Amazon",
              url: "https://smile.amazon.de/",
              icon: "brand-amazon",
              icon_color: palette.yellow,
            },
            {
              name: "Gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.red,
            },
            {
              name: "Translate",
              url: "https://translate.google.com/",
              icon: "language-hiragana",
              icon_color: palette.mauve,
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
              icon: "binary-tree-2",
              icon_color: palette.blue,
            },
            {
              name: "TISS",
              url: "https://tiss.tuwien.ac.at/",
              icon: "info-circle",
              icon_color: palette.peach,
            },
            {
              name: "VoWi",
              url: "https://vowi.fsinf.at/wiki/Curriculum:E033535",
              icon: "brand-wikipedia",
              icon_color: palette.maroon,
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
              icon: "brand-leetcode",
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
              icon: "message",
              icon_color: palette.green,
            },
            {
              name: "Google Gemini",
              url: "https://gemini.google.com",
              icon: "robot",
              icon_color: palette.blue,
            },
            {
              name: "Google AI Studio",
              url: "https://aistudio.google.com/prompts/new_chat",
              icon: "flare",
              icon_color: palette.yellow,
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
              icon: "abc",
              icon_color: palette.green,
            },
            {
              name: "wordgrid",
              url: "https://wordgrid.clevergoat.com/",
              icon: "layout-grid-remove",
              icon_color: palette.peach,
            },
            {
              name: "balatrodle",
              url: "https://www.balatrodle.com/",
              icon: "cards",
              icon_color: palette.red,
            },
            {
              name: "scrandle",
              url: "https://scrandle.com/",
              icon: "chef-hat",
              icon_color: palette.maroon,
            },
            {
              name: "marveldle",
              url: "https://marveldle.com",
              icon: "spider",
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
              icon: "link",
              icon_color: palette.green,
            },
            {
              name: "temp mail",
              url: "https://smailpro.com/temporary-email",
              icon: "mail",
              icon_color: palette.peach,
            },
            {
              name: "awesome links",
              url: "http://awesome.re/",
              icon: "link",
              icon_color: palette.red,
            },
            {
              name: "TeraBox",
              url: "https://www.terabox.com/main?category=all",
              icon: "box",
              icon_color: palette.blue,
            },
            {
              name: "Annas Archive",
              url: "https://www.terabox.com/main?category=all",
              icon: "book",
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
