// docs/.vitepress/config.js
import { defineConfig } from 'vitepress'

function getMainSidebar() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      collapsed: false,
      items: [
        { text: 'Home Page', link: '/' },
        { text: 'Socials', link: '/socials' },
        
      ],
    },
    {
      text: 'Blogs',
      collapsible: true,
      collapsed: false,
      items: [
       
        {
          text: '1st Sem',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'SIH Internals 2024', link: '/blogs/1st-semester/subject1' },
            { text: 'SMF 2024', link: '/blogs/1st-semester/subject2' },
            { text: 'Craft n Code Hackathon', link: '/blogs/1st-semester/subject3' },
            { text: 'DevFest 2024', link: '/blogs/1st-semester/subject4' },
          ],
        },
        {
          text: '2nd Sem',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'B-Plan ', link: '/blogs/2nd-sem/subject1' },
            { text: 'Kshitij 2025', link: '/blogs/2nd-sem/subject2' },
            { text: 'IDE Bootcamp Ranchi', link: '/blogs/2nd-sem/subject3' },
            { text: 'ROS Workshop', link: '/blogs/2nd-sem/subject4' },
            { text: 'SSO Olympiad', link: '/blogs/2nd-sem/subject5' },
            { text: 'DDC 2025', link: '/blogs/2nd-sem/subject6' },
            { text: 'IEM Comicverse', link: '/blogs/2nd-sem/subject7' },
          ],
        },
        {
          text: '3rd Sem',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Gen AI by Hand Workshop', link: '/blogs/3rd-sem/subject1' },
            { text: 'ICYIM 2025', link: '/blogs/3rd-sem/subject2' },
            { text: 'Hexafalls 2025', link: '/blogs/3rd-sem/subject3' },
            { text: 'HackSynthesis 2.0', link: '/blogs/3rd-sem/subject4' },
            { text: 'IEEE Kolkata Student Congress', link: '/blogs/3rd-sem/subject5' },
            { text: 'Smart Make-A-Thon 2025', link: '/blogs/3rd-sem/subject6' },
            { text: 'Avalanche Team1 Hackathon 2025', link: '/blogs/3rd-sem/subject7' },
            { text: 'Algorand Hackathon 2025', link: '/blogs/3rd-sem/subject8' },
            { text: 'SSO Olympiad Phase 2', link: '/blogs/3rd-sem/subject9' },
            { text: 'Build on celo Hackathon', link: '/blogs/3rd-sem/subject10' },
          ],
        },
        {
          text: 'Activities',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Intersection Football Competition', link: '/blogs/3rd-sem/IST' },
            { text: 'IEM Freedom Cup', link: '/blogs/3rd-sem/IFC' },
            { text: 'Ekal marathon run', link: '/blogs/3rd-sem/em' },
          ],
        },
      ],
    },
    {
      text: 'Projects',
      collapsible: true,
      collapsed: false,
      items: [
        { text: 'Mindpal', link: '/project/m' },
        { text: 'Xencruit', link: '/project/xc' },
        { text: 'AlgotimeLock', link: '/project/atl' },
        { text: 'Eventsync', link: '/project/es' },
        { text: 'IEM Comicverse', link: '/project/cmc' },
        { text: 'IEM SmartMakeathon', link: '/project/smt' },
        { text: 'SSO Smart Olympiad', link: '/project/sso' },
        { text: 'Drone Development Challenge 2024', link: '/project/ddc' },
        { text: 'Loitering Munition Drone', link: '/project/lmd' },
      ],
    },
  ];
}

export default defineConfig({
  title: 'Debojyoti De Majumder',
  description: 'A VitePress Blog',

  // Add global CSS + small theme toggle script via head
  head: [
    [
      'style',
      {},
      `
/* ====== Header + Theme tokens & base styles ====== */
:root{
  --bg: #0b0b0b;
  --surface: #0f1720;
  --muted: #9aa0a6;
  --text: #e6eef2;
  --accent: #f1c40f;
  --accent-2: #7bd389;
  --card-radius: 12px;
  --glass-border: rgba(255,255,255,0.04);
  --card-shadow: 0 8px 30px rgba(2,6,23,0.6);
  --glass: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  --max-width: 980px;
  transition: background-color 240ms ease, color 240ms ease;
}

/* Map our variables to VitePress variables so default components respect the colors */
:root{
  --vp-c-bg: var(--bg);
  --vp-c-bg-alt: var(--surface);
  --vp-c-bg-elv: var(--surface);
  --vp-c-bg-soft: rgba(0,0,0,0.04);
  --vp-c-text-1: var(--text);
  --vp-c-text-2: var(--muted);
  --vp-c-divider: var(--glass-border);
  --vp-c-gutter: var(--glass-border);
  --vp-c-brand-1: var(--accent);
}

:/* Also mirror dark colors on the html root when it has the "dark" class.
  Use :root.dark to match the :root.light selector so both themes are
  consistently scoped to the root element. This ensures components that
  inherit variables from :root update correctly when theme changes. */
:root.dark{
  --bg: #0b0b0b;
  --surface: #0f1720;
  --muted: #9aa0a6;
  --text: #e6eef2;
  --accent: #f1c40f;
  --accent-2: #7bd389;
  --card-radius: 12px;
  --glass-border: rgba(255,255,255,0.04);
  --card-shadow: 0 8px 30px rgba(2,6,23,0.6);
  --glass: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  --max-width: 980px;
  /* Mirror VitePress' variables for dark mode */
  --vp-c-bg: var(--bg);
  --vp-c-bg-alt: var(--surface);
  --vp-c-bg-elv: var(--surface);
  --vp-c-bg-soft: rgba(255,255,255,0.02);
  --vp-c-text-1: var(--text);
  --vp-c-text-2: var(--muted);
  --vp-c-divider: var(--glass-border);
  --vp-c-gutter: var(--glass-border);
  --vp-c-brand-1: var(--accent);
}

/* Light theme override */
:root.light{
  --bg: #f7fafc;
  --surface: #ffffff;
  --muted: #6b7280;
  --text: #071018;
  --accent: #2563eb;
  --glass-border: rgba(2,6,23,0.06);
  --card-shadow: 0 10px 30px rgba(15,23,42,0.06);
  --glass: linear-gradient(180deg, rgba(2,6,23,0.02), rgba(2,6,23,0.01));

  /* Mirror VitePress' variables for light mode */
  --vp-c-bg: var(--bg);
  --vp-c-bg-alt: var(--surface);
  --vp-c-bg-elv: var(--surface);
  --vp-c-bg-soft: rgba(0,0,0,0.02);
  --vp-c-text-1: var(--text);
  --vp-c-text-2: var(--muted);
  --vp-c-divider: var(--glass-border);
  --vp-c-gutter: var(--glass-border);
  --vp-c-brand-1: var(--accent);
}

/* Respect system if no explicit user choice */
@media (prefers-color-scheme: light){
  :root:not(.theme-set){
    --bg: #f7fafc;
    --surface: #fff;
    --muted: #6b7280;
    --text: #071018;
  }
}

/* Page base */
html,body{height:100%; margin:0; background:var(--bg); color:var(--text); font-family:Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; -webkit-font-smoothing:antialiased;}
.theme-container{max-width:var(--max-width); margin:28px auto; padding:20px;}

/* Floating theme toggle */
.theme-toggle {
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:36px;
  height:36px;
  border-radius:10px;
  padding:4px;
  background:transparent;
  border:1px solid var(--glass-border);
  color:var(--text);
  cursor:pointer;
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
  backdrop-filter: blur(6px);
}
.theme-toggle:hover{ transform: translateY(-2px); box-shadow: var(--card-shadow); }

/* Hero */
.page-hero{
  /* Use the surface variable for card backgrounds so it follows theme */
  background: var(--surface);
  border-radius: 14px;
  padding:20px;
  margin-bottom:18px;
  border:1px solid var(--glass-border);
  box-shadow: var(--card-shadow);
}
.page-hero h1{ font-size:28px; margin:0 0 6px; letter-spacing:-0.3px; }
.page-hero p{ color:var(--muted); margin:0; }

/* Card style */
.card{
  background:var(--glass);
  border-radius:var(--card-radius);
  padding:16px;
  border:1px solid var(--glass-border);
  box-shadow: var(--card-shadow);
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}
.card:hover{ transform: translateY(-6px); box-shadow: 0 20px 48px rgba(2,6,23,0.6); }

/* Grid & skills */
.lang-grid{ display:flex; flex-wrap:wrap; gap:14px; justify-content:center; margin-top:14px; }
.lang-grid img{ filter: none; opacity:0.98; border-radius:8px; background:transparent; padding:6px; }

/* Links & accents */
a, .accent { color: var(--accent); text-decoration:none; }
.button.accent { background: linear-gradient(90deg,var(--accent),var(--accent-2)); color:#071018; padding:8px 12px; border-radius:10px; }

/* Accessibility / reduced motion */
@media (prefers-reduced-motion: reduce){
  *{ transition:none !important; animation:none !important; }
}
      `
    ],
    [
      'script',
      {},
      `
  // Sync with VitePress theme toggle (do not add a second header toggle).
  (function(){
    const root = document.documentElement;
    const storageKey = 'vueuse-color-scheme'; // default used by VitePress' useColorMode

    function applyFromStorage() {
      try {
        const s = localStorage.getItem(storageKey);
        if (s === 'dark') {
          root.classList.add('dark');
          root.classList.remove('light');
        } else if (s === 'light') {
          root.classList.add('light');
          root.classList.remove('dark');
        } else {
          // auto / not set - follow system preference
          if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            root.classList.add('dark');
            root.classList.remove('light');
          } else {
            root.classList.add('light');
            root.classList.remove('dark');
          }
        }
      } catch (e) {
        // localStorage may not be available in SSR - ignore.
      }
    }

    // apply at startup
    try { applyFromStorage(); } catch (e) {}

    // watch for storage events (theme change in other tabs or by other toggles)
    window.addEventListener('storage', (ev) => {
      if (ev.key === storageKey) applyFromStorage();
    });

    // Also observe class changes on the <html> so we can react to theme toggle
    // even if it's toggled programmatically by the built-in toggle.
    const mo = new MutationObserver(() => {
      const isDark = root.classList.contains('dark');
      root.classList.toggle('light', !isDark);
      // Keep a theme-set marker if it was set by user action in the past
      if (!root.classList.contains('theme-set')) root.classList.add('theme-set');
    });
    mo.observe(root, { attributes: true, attributeFilter: ['class'] });
  })();
      `
    ]
  ],

  themeConfig: {
    // Add your logo here
    logo: '/logo.jpeg', // Path relative to the public directory
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blogs', link: '/blogs/' },
    ],
    
    // Single sidebar configuration for all pages
    sidebar: getMainSidebar(),    
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/debojyoti10CC' },
      { icon: 'instagram', link: 'https://github.com/yourusername' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/debojyoti-de-majumder-48052b30b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
      { icon: 'x', link: 'https://x.com/MajumderDe14126?t=5wRZ-A-QUymRKZixj3C_GQ&s=09' },
      { icon: 'youtube', link: 'https://www.youtube.com/@filmindebo' },
    ],
    
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Return to top'
  }
})