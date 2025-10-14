particlesJS("particles-js", {
    "particles": {
        "number": { "value": 40, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ffffff" },
        "shape": {
            "type": "image",
            "image": [
                { "src": "icons/football.png", "width": 20, "height": 20 },
                { "src": "icons/basketball.png", "width": 20, "height": 20 },
                { "src": "icons/cricket.png", "width": 20, "height": 20 }
            ]
        },
        "opacity": { "value": 0.9, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.2, "sync": false } },
        "size": { "value": 20, "random": true, "anim": { "enable": true, "speed": 4, "size_min": 10, "sync": false } },
        "move": { "enable": true, "speed": 2, "direction": "bottom", "random": true, "straight": false, "out_mode": "out", "bounce": false }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
        "modes": { "repulse": { "distance": 120, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } }
    },
    "retina_detect": true
});
