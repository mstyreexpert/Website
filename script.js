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
        price_title: "Merken & Prijzen",
        tab_new: "Nieuwe Banden",
        tab_used: "Jonge Occassie",
        th_size: "Maat",
        th_price: "Vanaf",
        camion_new: "Ook voor Camionetten: €75",
        cam_used: "Ook voor Camionetten: €45",
        price_note: "* Alle prijzen incl. BTW, montage, balanceren en Recytyre milieubijdrage. Herstelling vanaf €5.",
        service_repair_bar: "Bandenreparatie & Vervanging vanaf €5.",
        service_include_bar: "Alle prijzen incl. montage & balanceren.",
        about_us: "M+S Tyre Expert is uw vertrouwde partner in Limburg voor alles wat met banden te maken heeft. Met 4 vestigingen en een passie voor perfectie garanderen wij u de veiligste wegkilometers tegen de beste prijs.",
        privacy_link: "Privacybeleid",
        terms_link: "Algemene Voorwaarden",
        complaints_link: "Consumentenombudsdienst",
        privacy_title: "Privacybeleid",
        privacy_text: "TYRE EXPERT SRL respecteert uw privacy. Wij verzamelen enkel persoonsgegevens die u vrijwillig verstrekt (via e-mail of telefoon). Deze worden uitsluitend gebruikt voor onze dienstverlening en het beheren van uw afspraken. Onze website maakt gebruik van Google Maps; door deze kaart te gebruiken kan Google cookies plaatsen conform hun eigen privacybeleid. Uw gegevens worden niet gedeeld met derden. U heeft recht op inzage en verwijdering.",        terms_title: "Algemene Voorwaarden",
        terms_text: "1. Toepassing: Deze voorwaarden gelden voor alle diensten. 2. Prijzen: Inclusief BTW en Recytyre. 3. Garantie: Wettelijke garantie op nieuw, 7 dagen op occasie. 4. Aansprakelijkheid: Geen dekking bij onjuist gebruik na montage. 5. Betaling: Direct na uitvoering."
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
        price_title: "Marques & Prix",
        tab_new: "Pneus Neufs",
        tab_used: "Occasion Récente",
        th_size: "Taille",
        th_price: "À partir de",
        camion_new: "Aussi pour Camionnettes : €75",
        cam_used: "Aussi pour Camionnettes : €45",
        price_note: "* Tous les prix incl. TVA, montage, équilibrage et contribution environnementale Recytyre. Réparation à partir de €5.",
        privacy_text: "TYRE EXPERT SRL respecte votre vie privée. Nous collectons uniquement les données personnelles que vous fournissez volontairement (par e-mail ou téléphone). Celles-ci sont utilisées exclusivement pour nos services et la gestion de vos rendez-vous. Notre site utilise Google Maps ; en utilisant deze carte, Google peut placer des cookies conformément à sa propre politique de confidentialité. Vos données ne sont pas partagées avec des tiers. Vous avez un droit d'accès et de suppression.",
        service_repair_bar: "Réparation & Remplacement de pneus à partir de €5.",
        service_include_bar: "Tous les prix incluent le montage & l'équilibrage.",
        about_us: "M+S Tyre Expert est votre partenaire de confiance dans le Limbourg pour tout ce qui concerne les pneus. Avec 4 succursales et une passion pour la perfection, nous vous garantissons les kilomètres les plus sûrs au meilleur prix.",
        privacy_link: "Politique de confidentialité",
        terms_link: "Conditions Générales",
        complaints_link: "Service de Médiation pour le Consommateur",
        privacy_title: "Politique de confidentialité",
        terms_title: "Conditions Générales",
        terms_text: "1. Application: Ces conditions s'appliquent à tous les services. 2. Prix: TVA et Recytyre inclus. 3. Garantie: Garantie légale sur le neuf, 7 jours sur l'occasion. 4. Responsabilité: Pas de couverture en cas de mauvaise utilisation après montage. 5. Paiement: Immédiat après exécution."
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
        price_title: "Brands & Prices",
        tab_new: "New Tires",
        tab_used: "Premium Used",
        th_size: "Size",
        th_price: "From",
        camion_new: "Also for Vans: €75",
        cam_used: "Also for Vans: €45",
        price_note: "* All prices incl. VAT, mounting, balancing, and Recytyre environmental contribution. Repair from €5.",
        privacy_text: "TYRE EXPERT SRL respects your privacy. We only collect personal data that you voluntarily provide (via email or phone). This is used exclusively for our services and managing your appointments. Our website uses Google Maps; by using this map, Google may place cookies in accordance with their own privacy policy. Your data is not shared with third parties. You have the right to access and deletion.",
        service_repair_bar: "Tire Repair & Replacement from €5.",
        service_include_bar: "All prices incl. mounting & balancing.",
        about_us: "M+S Tyre Expert is your trusted partner in Limburg for everything related to tires. With 4 locations and a passion for perfection, we guarantee you the safest road miles at the best price.",
        privacy_link: "Privacy Policy",
        terms_link: "Terms & Conditions",
        complaints_link: "Consumer Mediation Service",
        privacy_title: "Privacy Policy",
        terms_title: "Terms & Conditions",
        terms_text: "1. Application: These terms apply to all services. 2. Prices: VAT and Recytyre included. 3. Warranty: Legal warranty on new tires, 7 days on used. 4. Liability: No coverage for misuse after installation. 5. Payment: Due immediately upon completion."
    }
};

let currentLang = 'nl';

function changeLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Update de actieve status van de taalknoppen
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

    // Open van Maandag (1) t/m Zaterdag (6) van 09:00 tot 19:00
    const isOpen = (day !== 0 && hour >= 9 && hour < 19);

    tags.forEach(tag => {
        tag.innerText = isOpen ? translations[currentLang].status_open : translations[currentLang].status_closed;
        tag.style.background = isOpen ? "#4caf50" : "#e74c3c";
    });
}

function openTab(evt, tabName) {
    // Verberg alle tab-content
    const tabcontents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active");
    }

    // Deactiveer alle tab-knoppen
    const tablinks = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Toon de huidige tab en markeer de knop als actief
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        // Wacht heel even zodat de animatie af kan maken, dan fade-out
        setTimeout(() => {
            preloader.classList.add('loaded');
        }, 1000);
    });
    // Voorwaarden Modal Logica
    const termsModal = document.getElementById("terms-modal");
    const termsBtn = document.querySelector('[data-i18n="terms_link"]');
    const termsSpan = document.getElementsByClassName("close-modal-terms")[0];

    if(termsBtn) {
        termsBtn.onclick = (e) => {
            e.preventDefault();
            termsModal.style.display = "block";
        }
    }

    termsSpan.onclick = () => termsModal.style.display = "none";

// Pas je bestaande window.onclick aan zodat beide modals sluiten bij een klik buiten de box:
    window.onclick = (event) => {
        if (event.target == modal) modal.style.display = "none";
        if (event.target == termsModal) termsModal.style.display = "none";
    }

    const modal = document.getElementById("privacy-modal");
    const btn = document.querySelector('[data-i18n="privacy_link"]');
    const span = document.getElementsByClassName("close-modal")[0];

// Open modal
    if(btn) {
        btn.onclick = (e) => {
            e.preventDefault();
            modal.style.display = "block";
        }
    }

// Sluit modal
    span.onclick = () => modal.style.display = "none";
    window.onclick = (event) => {
        if (event.target == modal) modal.style.display = "none";
    }

    const savedLang = localStorage.getItem('preferredLang') || 'nl';
    changeLanguage(savedLang);

    // Status elke minuut verversen
    setInterval(updateStatusTags, 60000);

    /* ACTIVE DOT SCROLL SPY */
    const sections = document.querySelectorAll('.full-page');
    const dots = document.querySelectorAll('.dot');

    const observerOptions = {
        threshold: 0.5 // Activeer als 50% van de sectie in beeld is
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Vind de index van de zichtbare sectie
                const index = Array.from(sections).indexOf(entry.target);
                // Update dots
                dots.forEach(d => d.classList.remove('active'));
                if(dots[index]) dots[index].classList.add('active');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
