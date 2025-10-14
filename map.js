let map, service, infowindow;

// Initialize Map
function initMap() {
  const defaultLocation = { lat: 28.6139, lng: 77.2090 }; // New Delhi as default

  // Create the map
  map = new google.maps.Map(document.getElementById("map"), {
    center: defaultLocation,
    zoom: 12,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#0b0b0b" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#ffffff" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#000000" }] }
    ]
  });

  // Info window for showing place details
  infowindow = new google.maps.InfoWindow();

  // Event listeners for buttons
  const detectBtn = document.getElementById("detectBtn");
  const searchBtn = document.getElementById("searchBtn");

  if (detectBtn) detectBtn.addEventListener("click", detectLocation);
  if (searchBtn) searchBtn.addEventListener("click", manualSearch);
}

// Detect location automatically
function detectLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLoc = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        map.setCenter(userLoc);
        findNearbyAcademies(userLoc);
      },
      () => alert("Unable to fetch your location!")
    );
  } else {
    alert("Geolocation is not supported by your browser!");
  }
}

// Manual location search
function manualSearch() {
  const locationInput = document.getElementById("manualLocation").value.trim();
  if (!locationInput) {
    alert("Please enter a location.");
    return;
  }

  const geocoder = new google.maps.Geocoder();

  geocoder.geocode({ address: locationInput }, (results, status) => {
    if (status === "OK" && results[0]) {
      const loc = results[0].geometry.location;
      const location = { lat: loc.lat(), lng: loc.lng() };
      map.setCenter(location);
      findNearbyAcademies(location);
    } else {
      alert("Location not found! Please try again.");
    }
  });
}

// Find nearby sports academies
function findNearbyAcademies(location) {
  const request = {
    location: location,
    radius: 5000, // 5 km
    keyword: "sports academy"
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, (results, status) => {
    const container = document.getElementById("academies");
    container.innerHTML = ""; // Clear previous results

    if (status === google.maps.places.PlacesServiceStatus.OK && results.length > 0) {
      results.forEach((place) => {
        // Add marker on map
        const marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location,
          title: place.name,
        });

        marker.addListener("click", () => {
          infowindow.setContent(`
            <div>
              <strong>${place.name}</strong><br>
              ${place.vicinity || "No address available"}<br>
              <small>Rating: ${place.rating || "N/A"}</small>
            </div>
          `);
          infowindow.open(map, marker);
        });

        // Add to HTML list
        container.innerHTML += `
          <div class="academy-card">
            <h3>${place.name}</h3>
            <p>${place.vicinity || "Address not available"}</p>
            <small>Rating: ${place.rating || "N/A"}</small>
          </div>
        `;
      });
    } else {
      container.innerHTML = "<p>No nearby academies found.</p>";
    }
  });
}
