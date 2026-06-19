document.addEventListener('DOMContentLoaded', () => {

    // --- Live System Clock Engine ---
    const liveClock = document.getElementById('liveClock');
    
    function refreshClock() {
        if (!liveClock) return;
        const now = new Date();
        
        const dateConfig = { month: 'short', day: '2-digit', year: 'numeric' };
        const timeConfig = { hour: '2-digit', minute: '2-digit', hour12: true };
        
        const dateStr = now.toLocaleDateString('en-US', dateConfig).toUpperCase();
        const timeStr = now.toLocaleTimeString('en-US', timeConfig);
        
        liveClock.textContent = `${dateStr} — ${timeStr}`;
    }
    
    refreshClock();
    setInterval(refreshClock, 30000); 


    // --- Modular Media Sliders Scroll Engine ---
    function initSliderControl(sliderId, prevBtnId, nextBtnId) {
        const container = document.getElementById(sliderId);
        const prevBtn = document.getElementById(prevBtnId);
        const nextBtn = document.getElementById(nextBtnId);

        if (container && prevBtn && nextBtn) {
            const stepWidth = 310; 

            nextBtn.addEventListener('click', () => {
                container.scrollBy({ left: stepWidth, behavior: 'smooth' });
            });

            prevBtn.addEventListener('click', () => {
                container.scrollBy({ left: -stepWidth, behavior: 'smooth' });
            });
        }
    }

    initSliderControl('showsSlider', 'showsPrev', 'showsNext');
    initSliderControl('musicSlider', 'musicPrev', 'musicNext');
    initSliderControl('gamesSlider', 'gamesPrev', 'gamesNext');


    // --- Clipboard Write & Left Action Toast Module ---
    const emailFab = document.getElementById('emailFab');
    const toastNotification = document.getElementById('toastNotification');
    const targetAddress = "hello@billchien.net";

    if (emailFab && toastNotification) {
        emailFab.addEventListener('click', () => {
            navigator.clipboard.writeText(targetAddress).then(() => {
                toastNotification.classList.add('show');
                
                setTimeout(() => {
                    toastNotification.classList.remove('show');
                }, 2200);
            }).catch(error => {
                console.error('System Clipboard target failed write handling: ', error);
            });
        });
    }


    // --- RECURSIVE INTERSECTION OBSERVER (Continuous Scroll Reveals) ---
    const revealItems = document.querySelectorAll('.reveal-on-scroll');
    
    if ('IntersectionObserver' in window) {
        const structuralObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, {
            threshold: 0.05,        
            rootMargin: "0px 0px -10px 0px"
        });

        revealItems.forEach(item => structuralObserver.observe(item));
    } else {
        revealItems.forEach(item => item.classList.add('active'));
    }
});