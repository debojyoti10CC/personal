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