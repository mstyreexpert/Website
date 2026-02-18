const translations = {
    nl: {
        hero_locaties: "locaties.",
        hero_standaard: "1 standaard: Perfectie.",
        scroll_discover: "Ontdek onze vestigingen",
        title_locations: "Onze Vestigingen",
        btn_call: "Bel Nu",
        btn_route: "Route",
        status_open: "Nu Open",
        status_closed: "Gesloten",
        status_loading: "Laden...",
        price_title: "Prijslijst",
        tab_new: "Nieuw",
        tab_used: "2dehands",
        th_size: "Maat",
        th_budget: "Budget",
        th_premium: "Premium",
        price_note: "* Prijzen incl. montage & balanceren."
    },
    fr: {
        hero_locaties: "emplacements.",
        hero_standaard: "1 standard : La Perfection.",
        scroll_discover: "Découvrez nos succursales",
        title_locations: "Nos Succursales",
        btn_call: "Appeler",
        btn_route: "Itinéraire",
        status_open: "Ouvert",
        status_closed: "Fermé",
        status_loading: "Chargement...",
        price_title: "Liste de Prix",
        tab_new: "Nouveaux",
        tab_used: "Occasion",
        th_size: "Taille",
        th_budget: "Budget",
        th_premium: "Premium",
        price_note: "* Prix incl. montage & équilibrage."
    },
    en: {
        hero_locaties: "locations.",
        hero_standaard: "1 standard: Perfection.",
        scroll_discover: "Discover our locations",
        title_locations: "Our Locations",
        btn_call: "Call Now",
        btn_route: "Route",
        status_open: "Open Now",
        status_closed: "Closed",
        status_loading: "Loading...",
        price_title: "Price List",
        tab_new: "New",
        tab_used: "Used",
        th_size: "Size",
        th_budget: "Budget",
        th_premium: "Premium",
        price_note: "* Prices incl. mounting & balancing."
    }
};

let currentLang = 'nl';

function changeLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerText = translations[lang][key];
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.innerText.toLowerCase() === lang);
    });

    localStorage.setItem('preferredLang', lang);
    updateStatusTags();
}

function updateStatusTags() {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();
    const tags = document.querySelectorAll('.status-tag');

    tags.forEach(tag => {
        const isClosed = (hour >= 18 || hour < 8 || day === 0);
        tag.innerText = isClosed ? translations[currentLang].status_closed : translations[currentLang].status_open;
        tag.style.background = isClosed ? "#e74c3c" : "#4caf50";
    });
}

function openTab(evt, tabName) {
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(tb => tb.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'nl';
    changeLanguage(savedLang);
    setInterval(updateStatusTags, 60000); // Check elke minuut
});