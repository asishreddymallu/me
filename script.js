document.addEventListener('DOMContentLoaded', () => {

    /* =======================================================
       LIVE CLOCK
       Updates the date/time text in the hero footer every second.
       ======================================================= */
    const dateEl = document.getElementById("date");
    const timeEl = document.getElementById("time");

    function refreshClock() {
        const now = new Date();

        const dateConfig = { month: 'short', day: '2-digit', year: 'numeric' };
        const timeConfig = { hour: '2-digit', minute: '2-digit', hour12: true };

        dateEl.textContent = now.toLocaleDateString('en-US', dateConfig).toUpperCase();
        timeEl.textContent = now.toLocaleTimeString('en-US', timeConfig);
    }

    refreshClock();                 // set the time immediately on load
    setInterval(refreshClock, 1000); // then keep it updated every second


    /* =======================================================
       MEDIA SLIDERS (Shows / Music / Games)
       Wires up the prev/next arrow buttons to scroll
       their matching horizontal slider by a fixed step.
       ======================================================= */
    function initSliderControl(sliderId, prevBtnId, nextBtnId) {
        const container = document.getElementById(sliderId);
        const prevBtn = document.getElementById(prevBtnId);
        const nextBtn = document.getElementById(nextBtnId);

        if (!container || !prevBtn || !nextBtn) return;

        const stepWidth = 310; // px scrolled per click (card width + gap)

        nextBtn.addEventListener('click', () => {
            container.scrollBy({ left: stepWidth, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            container.scrollBy({ left: -stepWidth, behavior: 'smooth' });
        });
    }

    initSliderControl('showsSlider', 'showsPrev', 'showsNext');
    initSliderControl('musicSlider', 'musicPrev', 'musicNext');
    initSliderControl('gamesSlider', 'gamesPrev', 'gamesNext');


    /* =======================================================
       SCROLL REVEAL ANIMATIONS
       Adds the "active" class to any .reveal-on-scroll element
       while it's in the viewport (and removes it when it
       leaves, so the animation replays each time you scroll
       past it). Falls back to showing everything immediately
       if IntersectionObserver isn't supported.
       ======================================================= */
   const revealItems = document.querySelectorAll('.reveal-on-scroll');

if ('IntersectionObserver' in window) {

    const revealObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('active');

                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.05,
        rootMargin: "0px 0px -10px 0px"
    });

    revealItems.forEach(item => revealObserver.observe(item));

} else {

    revealItems.forEach(item => {
        item.classList.add('active');
    });

}








    const skillsSlider = document.getElementById("skillsSlider");

const skillsPrev = document.getElementById("skillsPrev");
const skillsNext = document.getElementById("skillsNext");

if (skillsSlider && skillsPrev && skillsNext) {

    const firstCard =
    skillsSlider.querySelector(".media-card");

    const scrollAmount =
    firstCard.offsetWidth + 20;

    skillsNext.addEventListener("click", (e) => {

        e.preventDefault();

        const maxScroll =
            skillsSlider.scrollWidth - skillsSlider.clientWidth;

        if (
            skillsSlider.scrollLeft + scrollAmount >=
            maxScroll - 10
        ) {
            skillsSlider.scrollTo({
                left: 0,
                behavior: "smooth"
            });
        } else {
            skillsSlider.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        }
    });

    skillsPrev.addEventListener("click", (e) => {

        e.preventDefault();

        if (skillsSlider.scrollLeft <= 10) {

            skillsSlider.scrollTo({
                left:
                    skillsSlider.scrollWidth -
                    skillsSlider.clientWidth,
                behavior: "smooth"
            });

        } else {

            skillsSlider.scrollBy({
                left: -scrollAmount,
                behavior: "smooth"
            });

        }
    });
}
});
