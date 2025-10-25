// assets/js/main.js
document.addEventListener('DOMContentLoaded', ()=> {
    // set year
    document.getElementById('year').textContent = new Date().getFullYear();

    // simple i18n dictionary
    const translations = {
        fr: {
            "nav.home":"Accueil",
            "nav.about":"À propos",
            "nav.skills":"Compétences",
            "nav.projects":"Projets",
            "nav.contact":"Contact",
            "hero.title":"Développeur Web & Enthousiaste en Cyber sécurité",
            "hero.subtitle":"Je conçois des applications web performantes et sécurisées — je combine code propre et bonnes pratiques sécurité."
            "hero.cta_projects":"Voir mes projets",
            "hero.cta_contact":"Me contacter",
            "hero.note":"Disponible pour missions freelance & CDI. Basé à Liège/Ans.",
            "feat.secure":"Sécurité & Audit",
            "feat.web":"Développement Web",
            "feat.consult":"Conseil & Formation",
            "cta.hire":"Prêt·e à travailler ensemble ?",
            "cta.sub":"Envie d’un audit ou d’un projet web sécurisé — discutons-en.",
            "cta.button":"Contact"
        },
        en: {
            "nav.home":"Home",
            "nav.about":"About",
            "nav.skills":"Skills",
            "nav.projects":"Projects",
            "nav.contact":"Contact",
            "hero.title":"Web Developer & Cybersecurity Enthusiast",
            "hero.subtitle":"I build performant, secure web applications — clean code paired with security best practices.",
            "hero.cta_projects":"See my projects",
            "hero.cta_contact":"Get in touch",
            "hero.note":"Available for freelance & full-time roles. Based in [City].",
            "feat.secure":"Security & Audit",
            "feat.web":"Web Development",
            "feat.consult":"Consulting & Training",
            "cta.hire":"Ready to collaborate?",
            "cta.sub":"Need an audit or a secure web project — let’s talk.",
            "cta.button":"Contact"
        }
    };

    function applyLang(lang){
        document.querySelectorAll('[data-i18n]').forEach(el=>{
            const key = el.getAttribute('data-i18n');
            if(translations[lang] && translations[lang][key]){
                el.textContent = translations[lang][key];
            }
        });
        document.body.setAttribute('data-lang', lang);
        // active button
        document.querySelectorAll('.lang-btn').forEach(b=> b.classList.toggle('active', b.dataset.lang===lang));
    }

    // init buttons
    document.querySelectorAll('.lang-btn').forEach(btn=>{
        btn.addEventListener('click', ()=> applyLang(btn.dataset.lang));
    });

    // set default based on browser or body attr
    const defaultLang = document.body.getAttribute('data-lang') || navigator.language.startsWith('en') ? 'en' : 'fr';
    applyLang(defaultLang);
});