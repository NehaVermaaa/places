const destinations = [
    {
        name: "Paris, France",
        activities: ["Eiffel Tower Tour", "Louvre Museum Visit", "Seine River Cruise"],
        costEstimate: "$1,500",
        duration: "5 days",
        image: "https://media.istockphoto.com/id/1345426734/photo/eiffel-tower-paris-river-seine-sunset-twilight-france.jpg?s=612x612&w=0&k=20&c=I5rAH5d_-Yyag8F0CKzk9vzMr_1rgkAASGTE11YMh9A=",
        travelTime: {
            mode: "Flight",
            departure: "10:00 AM",
            arrival: "1:00 PM",
            duration: "8 hours"
        }
    },
    {
        name: "Kyoto, Japan",
        activities: ["Fushimi Inari Shrine Visit", "Tea Ceremony", "Bamboo Forest Walk"],
        costEstimate: "$1,200",
        duration: "4 days",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a3lvdG98ZW58MHx8MHx8fDA%3D",
        travelTime: {
            mode: "Flight",
            departure: "8:00 AM",
            arrival: "12:00 PM",
            duration: "12 hours"
        }
    },
    {
        name: "New York, USA",
        activities: ["Statue of Liberty Tour", "Central Park Walk", "Broadway Show"],
        costEstimate: "$1,800",
        duration: "3 days",
        image: "newyork.jpeg",
        travelTime: {
            mode: "Flight",
            departure: "6:00 AM",
            arrival: "9:00 AM",
            duration: "3 hours"
        }
    },
    {
        name: "Sydney, Australia",
        activities: ["Sydney Opera House Tour", "Bondi Beach Relaxation", "Blue Mountains Hiking"],
        costEstimate: "$1,700",
        duration: "5 days",
        image: "sydney.jpeg",
        travelTime: {
            mode: "Flight",
            departure: "9:00 PM",
            arrival: "5:00 AM (next day)",
            duration: "14 hours"
        }
    },
    {
        name: "Rome, Italy",
        activities: ["Colosseum Visit", "Vatican City Tour", "Pasta Cooking Class"],
        costEstimate: "$1,600",
        duration: "6 days",
        image: "rome.jpeg",
        travelTime: {
            mode: "Flight",
            departure: "11:00 AM",
            arrival: "2:00 PM",
            duration: "10 hours"
        }
    },
    {
        name: "Barcelona, Spain",
        activities: ["Sagrada Familia Tour", "Park Güell Visit", "Tapas Tasting"],
        costEstimate: "$1,400",
        duration: "5 days",
        image: "barcelona.jpeg",
        travelTime: {
            mode: "Flight",
            departure: "1:00 PM",
            arrival: "4:00 PM",
            duration: "9 hours"
        }
    },
    {
        name: "Istanbul, Turkey",
        activities: ["Hagia Sophia Visit", "Bosphorus Cruise", "Grand Bazaar Shopping"],
        costEstimate: "$1,250",
        duration: "4 days",
        image: "instanbul.jpeg",
        travelTime: {
            mode: "Flight",
            departure: "7:00 AM",
            arrival: "10:00 AM",
            duration: "13 hours"
        }
    },
    {
        name: "Cape Town, South Africa",
        activities: ["Table Mountain Hike", "Robben Island Tour", "Wine Tasting"],
        costEstimate: "$1,900",
        duration: "7 days",
        image: "cape town.jpeg",
        travelTime: {
            mode: "Flight",
            departure: "5:00 PM",
            arrival: "6:00 AM (next day)",
            duration: "15 hours"
        }
    },
    {
        name: "Rio de Janeiro, Brazil",
        activities: ["Christ the Redeemer Visit", "Sugarloaf Mountain Hike", "Copacabana Beach Relaxation"],
        costEstimate: "$1,800",
        duration: "5 days",
        image: "https://via.placeholder.com/300?text=Rio",
        travelTime: {
            mode: "Flight",
            departure: "9:00 AM",
            arrival: "5:00 PM",
            duration: "12 hours"
        }
    },
    {
        name: "Moscow, Russia",
        activities: ["Red Square Visit", "Kremlin Tour", "Bolshoi Theatre Show"],
        costEstimate: "$1,600",
        duration: "6 days",
        image: "https://via.placeholder.com/300?text=Moscow",
        travelTime: {
            mode: "Flight",
            departure: "4:00 PM",
            arrival: "6:00 AM (next day)",
            duration: "15 hours"
        }
    },
    {
        name: "Dubai, UAE",
        activities: ["Burj Khalifa Visit", "Desert Safari", "Shopping at the Dubai Mall"],
        costEstimate: "$2,000",
        duration: "5 days",
        image: "https://via.placeholder.com/300?text=Dubai",
        travelTime: {
            mode: "Flight",
            departure: "8:00 AM",
            arrival: "12:00 PM",
            duration: "12 hours"
        }
    },
    {
        name: "Bangkok, Thailand",
        activities: ["Grand Palace Visit", "Floating Market Tour", "Thai Cooking Class"],
        costEstimate: "$1,200",
        duration: "5 days",
        image: "https://via.placeholder.com/300?text=Bangkok",
        travelTime: {
            mode: "Flight",
            departure: "7:00 AM",
            arrival: "10:00 AM",
            duration: "15 hours"
        }
    },
    {
        name: "Toronto, Canada",
        activities: ["CN Tower Visit", "Niagara Falls Day Trip", "Royal Ontario Museum"],
        costEstimate: "$1,500",
        duration: "4 days",
        image: "toronot.jpg",
        travelTime: {
            mode: "Flight",
            departure: "10:00 AM",
            arrival: "12:00 PM",
            duration: "2 hours"
        }
    },
    {
        name: "Lisbon, Portugal",
        activities: ["Belem Tower Visit", "Fado Music Night", "Sintra Day Trip"],
        costEstimate: "$1,300",
        duration: "5 days",
        image: "lisbon.jpeg",
        travelTime: {
            mode: "Flight",
            departure: "11:00 AM",
            arrival: "1:00 PM",
            duration: "9 hours"
        }
    },
    {
        name: "Hanoi, Vietnam",
        activities: ["Halong Bay Cruise", "Old Quarter Walking Tour", "Street Food Tasting"],
        costEstimate: "$1,100",
        duration: "5 days",
        image: "hanoi.jpeg",
        travelTime: {
            mode: "Flight",
            departure: "5:00 PM",
            arrival: "9:00 PM",
            duration: "14 hours"
        }
    },
    {
        name: "Amsterdam, Netherlands",
        activities: ["Canal Cruise", "Van Gogh Museum Visit", "Anne Frank House Tour"],
        costEstimate: "$1,500",
        duration: "4 days",
        image: "amstredam.jpeg",
        travelTime: {
            mode: "Flight",
            departure: "6:00 AM",
            arrival: "9:00 AM",
            duration: "3 hours"
        }
    },
    {
        name: "Singapore",
        activities: ["Gardens by the Bay", "Marina Bay Sands SkyPark", "Sentosa Island"],
        costEstimate: "$1,800",
        duration: "5 days",
        image: "https://via.placeholder.com/300?text=Singapore",
        travelTime: {
            mode: "Flight",
            departure: "9:00 AM",
            arrival: "6:00 PM",
            duration: "13 hours"
        }
    },
    {
        name: "Cairo, Egypt",
        activities: ["Pyramids of Giza", "Egyptian Museum", "Nile River Cruise"],
        costEstimate: "$1,400",
        duration: "5 days",
        image: "https://via.placeholder.com/300?text=Cairo",
        travelTime: {
            mode: "Flight",
            departure: "11:00 AM",
            arrival: "2:00 PM",
            duration: "10 hours"
        }
    },
    {
        name: "Mexico City, Mexico",
        activities: ["Teotihuacan Pyramids", "Frida Kahlo Museum", "Zocalo Square"],
        costEstimate: "$1,300",
        duration: "5 days",
        image: "https://via.placeholder.com/300?text=Mexico+City",
        travelTime: {
            mode: "Flight",
            departure: "1:00 PM",
            arrival: "6:00 PM",
            duration: "8 hours"
        }
    }

// Add other destinations similarly...
];

const itinerary = JSON.parse(localStorage.getItem('itinerary')) || [];

// Function to display destinations
function displayDestinations(destinations) {
const destinationGrid = document.getElementById('destinations');
destinationGrid.innerHTML = '';

destinations.forEach(destination => {
    const destinationDiv = document.createElement('div');
    destinationDiv.classList.add('destination');
    destinationDiv.innerHTML = `
        <img src="${destination.image}" alt="${destination.name}">
        <h3>${destination.name}</h3>
        <p>Activities: ${destination.activities.join(', ')}</p>
        <p>Cost Estimate: ${destination.costEstimate}</p>
        <p>Duration: ${destination.duration}</p>
        <p>Travel: ${destination.travelTime.mode} (Departs: ${destination.travelTime.departure}, Arrives: ${destination.travelTime.arrival}, Duration: ${destination.travelTime.duration})</p>
        <button onclick="addToItinerary('${destination.name}')">Add to Itinerary</button>
    `;
    destinationGrid.appendChild(destinationDiv);
});
}

// Function to add a destination to the itinerary
function addToItinerary(destinationName) {
const destination = destinations.find(dest => dest.name === destinationName);
if (destination && !itinerary.some(dest => dest.name === destinationName)) {
    itinerary.push(destination);
    updateItinerary();
} else {
    alert("This destination is already in your itinerary.");
}
}

// Function to update and display the itinerary
function updateItinerary() {
const itineraryList = document.getElementById('itineraryList');
itineraryList.innerHTML = '';

itinerary.forEach((item, index) => {
    const li = document.createElement('li');
    li.classList.add('itinerary-item');
    li.innerHTML = `
        ${item.name} - ${item.duration}
        <button onclick="removeFromItinerary(${index})">Remove</button>
    `;
    itineraryList.appendChild(li);
});

// Save itinerary to local storage
localStorage.setItem('itinerary', JSON.stringify(itinerary));
}

// Function to remove a destination from the itinerary
function removeFromItinerary(index) {
itinerary.splice(index, 1);
updateItinerary();
}

// Function to search destinations
function searchDestinations() {
const searchInput = document.getElementById('search').value.toLowerCase();
const filteredDestinations = destinations.filter(dest => dest.name.toLowerCase().includes(searchInput));
displayDestinations(filteredDestinations);
}

// Event listeners for search button
document.getElementById('searchButton').addEventListener('click', searchDestinations);

// Initial display of all destinations
displayDestinations(destinations);

// Update itinerary on load
updateItinerary();

