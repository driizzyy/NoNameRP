// NoName RP Website Configuration
// Single source of truth for all website settings

const CONFIG = {
    // Server Information
    server: {
        name: 'NoName RP',
        ip: 'YOUR_SERVER_IP:30120',
        region: 'US West',
        maxPlayers: 64,
        framework: 'QBCore'
    },

    // Social Media & Links
    links: {
        discord: 'https://discord.gg/HCdThGFfqN',
        twitter: '#',
        youtube: '#',
        steam: 'https://store.steampowered.com/app/271590/',
        fivem: 'https://fivem.net'
    },

    // Navigation Structure
    navigation: {
        home: {
            title: 'Home',
            url: '../index.html',
            icon: 'fas fa-home'
        },
        server: {
            title: 'Server',
            icon: 'fas fa-chevron-down',
            dropdown: [
                { title: 'Rules', url: 'rules.html', icon: 'fas fa-gavel' },
                { title: 'Staff Team', url: 'staff.html', icon: 'fas fa-user-shield' },
                { title: 'Economy', url: 'economy.html', icon: 'fas fa-coins' },
                { title: 'Gangs', url: 'gangs.html', icon: 'fas fa-skull' }
            ]
        },
        alphaAccess: {
            title: 'Alpha Access',
            url: 'alpha-whitelist.html',
            icon: 'fas fa-star'
        },
        connect: {
            title: 'Connect',
            url: 'connect.html',
            icon: 'fas fa-play'
        },
        discord: {
            title: 'Discord',
            url: 'https://discord.gg/HCdThGFfqN',
            icon: 'fab fa-discord',
            target: '_blank',
            class: 'nav-discord'
        }
    },

    // Asset Paths
    assets: {
        favicon: '../img/favicon.png',
        logo: '../img/favicon.png',
        serverBanner: '../img/server-banner.gif',
        serverPfp: '../img/server-pfp.gif',
        css: {
            main: '../src/css/style.css',
            fonts: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600;700&display=swap',
            fontAwesome: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
        },
        js: {
            particles: 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js',
            main: '../src/js/script.js'
        }
    },

    // FiveM Connection
    fivem: {
        directConnect: 'fivem://connect/YOUR_SERVER_IP:30120',
        serverIP: 'YOUR_SERVER_IP:30120'
    },

    // Footer Information
    footer: {
        description: 'Experience the ultimate FiveM roleplay on QBCore framework. Join our growing community today!',
        copyright: ' 2024 NoName RP. All rights reserved. Developed by DriizzyyB',
        quickLinks: [
            { title: 'Home', url: '../index.html', icon: 'fas fa-home' },
            { title: 'Rules', url: 'rules.html', icon: 'fas fa-gavel' },
            { title: 'Staff', url: 'staff.html', icon: 'fas fa-user-shield' },
            { title: 'Alpha Access', url: 'alpha-whitelist.html', icon: 'fas fa-star' }
        ]
    },

    // Developer Information
    developer: {
        name: 'DriizzyyB',
        role: 'Owner & Developer',
        bio: 'Founder of NoName RP. Responsible for server development, management, and overall direction. Available 24/7 for community support.',
        stats: {
            experience: '5+ Years',
            projects: '20+',
            uptime: '99.9%'
        }
    },

    // Server Statistics (Can be updated dynamically)
    stats: {
        activePlayers: 0,
        totalMembers: '500+',
        uptime: '99.9%',
        avgPlayers: '45+'
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
