// For the arrow functionality (optional, as CSS scroll-snap handles basic navigation)
document.addEventListener('DOMContentLoaded', () => {
    const athleteCarousel = document.getElementById('athleteCarousel');
    const prevAthleteButton = document.getElementById('prevAthlete');
    const nextAthleteButton = document.getElementById('nextAthlete');

    if (athleteCarousel && prevAthleteButton && nextAthleteButton) {
        const scrollAmount = 250; // Adjust scroll distance as needed

        prevAthleteButton.addEventListener('click', () => {
            athleteCarousel.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        nextAthleteButton.addEventListener('click', () => {
            athleteCarousel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        // Optional: Hide arrows if no scrolling is possible
        const updateArrowVisibility = () => {
            prevAthleteButton.style.display = athleteCarousel.scrollLeft > 0 ? 'flex' : 'none';
            nextAthleteButton.style.display = athleteCarousel.scrollWidth > athleteCarousel.clientWidth + athleteCarousel.scrollLeft ? 'flex' : 'none';
        };

        athleteCarousel.addEventListener('scroll', updateArrowVisibility);
        // Also update on resize or when content loads if it changes the scrollWidth/clientWidth
        window.addEventListener('resize', updateArrowVisibility);
        // A small delay to ensure content is rendered before checking scroll width
        setTimeout(updateArrowVisibility, 100); 
    }
});