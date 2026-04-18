// ===== CONFIGURATION =====
const CONFIG = {
    staffPicks: [
        {
            title: "F1 25",
            image: "https://image.api.playstation.com/vulcan/ap/rnd/202406/0409/5c9ed6ee11e49ff8280defe05fd88f82cfe7e9c0eb933ce3.png",
            description: "Experience the pinnacle of racing simulation with the most realistic F1 game ever created.",
            reason: "Perfect for our sim racing setup - feel every turn!"
        },
        {
            title: "Cyberpunk 2077",
            image: "https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/cKZ4tKNFj9C00giTzYtH8PF1.png",
            description: "Dive into Night City's neon-lit dystopia with stunning visuals and immersive storytelling.",
            reason: "Showcase piece for our high-end graphics capabilities"
        },
        {
            title: "Spider-Man 2",
            image: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b367bb03.png",
            description: "Swing through New York City as both Peter Parker and Miles Morales in this action-packed adventure.",
            reason: "Staff favorite - the web-swinging never gets old!"
        },
        {
            title: "Valorant",
            image: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt1b83933d2bf2a8bb/6214b6d96d6cd00f2f23d1de/ValorantAgentsYr2_Raze_v1.jpg",
            description: "Master tactical FPS gameplay with unique agents and competitive action.",
            reason: "Perfect for team play and competitive sessions"
        }
    ],
    games: [
        // Featured Games
        { title: "F1 25", category: "racing", image: "https://image.api.playstation.com/vulcan/ap/rnd/202406/0409/5c9ed6ee11e49ff8280defe05fd88f82cfe7e9c0eb933ce3.png" },
        { title: "Minecraft", category: "adventure", image: "https://image.api.playstation.com/vulcan/ap/rnd/202407/2300/fa7fc8b36e8e18f7fc31a9e736c976a7b8868e1a10a0615b.png" },
        { title: "Valorant", category: "shooter", image: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt1b83933d2bf2a8bb/6214b6d96d6cd00f2f23d1de/ValorantAgentsYr2_Raze_v1.jpg" },
        { title: "Spider-Man 2", category: "action", image: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b367bb03.png" },
        { title: "Cyberpunk 2077", category: "rpg", image: "https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/cKZ4tKNFj9C00giTzYtH8PF1.png" },
        { title: "Silksong", category: "action", image: "https://cdn.akamai.steamstatic.com/steam/apps/1030300/header.jpg" },
        
        // PS Plus & Game Pass titles (sample - you can add more)
        { title: "God of War Ragnarök", category: "action", image: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png" },
        { title: "Horizon Forbidden West", category: "adventure", image: "https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/HO8vkO9pfXhwbHi5WHECQJdN.png" },
        { title: "Gran Turismo 7", category: "racing", image: "https://image.api.playstation.com/vulcan/ap/rnd/202110/2618/Y61cMRi4zW0d9MhFznqNNtV4.png" },
        { title: "The Last of Us Part II", category: "action", image: "https://image.api.playstation.com/vulcan/ap/rnd/202311/1717/3pNzKqPZrqq33CXLQ8ufJGe0.jpg" },
        { title: "Ghost of Tsushima", category: "action", image: "https://image.api.playstation.com/vulcan/ap/rnd/202010/0222/niCdRmQLq4rZ2Fk7rF4yFKqB.png" },
        { title: "Demon's Souls", category: "rpg", image: "https://image.api.playstation.com/vulcan/ap/rnd/202009/2323/jw6TFI2g86DvmZ3ggvvmGCQE.png" },
        { title: "Returnal", category: "action", image: "https://image.api.playstation.com/vulcan/ap/rnd/202011/1621/cQGBjJcf6eoH8YZCmC8WbaKn.png" },
        { title: "Ratchet & Clank", category: "adventure", image: "https://image.api.playstation.com/vulcan/ap/rnd/202101/2921/4M6m6VeF9P2jLmkuN8rGJzIm.png" },
        { title: "Call of Duty: Modern Warfare III", category: "shooter", image: "https://image.api.playstation.com/vulcan/ap/rnd/202310/2414/5367a6e639edbb7862d5be5f56cc6e78b15c40f618ba4fa5.png" },
        { title: "Fortnite", category: "shooter", image: "https://cdn2.unrealengine.com/22br-c4s3-egs-launcher-blade-2560x1440-2560x1440-de7b1ec7bc47.jpg" },
        { title: "Apex Legends", category: "shooter", image: "https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/season-20/apex-section4-meta.jpg.adapt.crop191x100.1200w.jpg" },
        { title: "Rocket League", category: "racing", image: "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Forca%2FHome%2FEGS_RocketLeague_PsyonixLLC_S2-2560x1440-ed8c9f9cad8fbf5eafe7f23e3ce03faa7ed1f88d.jpg" },
        { title: "Elden Ring", category: "rpg", image: "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/phvVT0qZfcRms5qDAk0SI3CM.png" },
        { title: "Hogwarts Legacy", category: "rpg", image: "https://image.api.playstation.com/vulcan/ap/rnd/202208/0921/dR9KJAKDW2izPbptHQr6zkf1.png" },
        { title: "Resident Evil 4", category: "action", image: "https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZGNbglck1wKILdWI6q3B.png" },
        { title: "Street Fighter 6", category: "action", image: "https://image.api.playstation.com/vulcan/ap/rnd/202212/0906/dR25ET8346AvRI6MEXf4HyPF.png" },
        { title: "Tekken 8", category: "action", image: "https://image.api.playstation.com/vulcan/ap/rnd/202308/0314/e74f9ca41693b9b2e5ee06bda5d53c245daf4d26a0f4e08a.png" },
        { title: "Final Fantasy XVI", category: "rpg", image: "https://image.api.playstation.com/vulcan/ap/rnd/202212/0511/2oWLmR7wOyHLJaWBSeOT7L8H.png" },
        { title: "Assassin's Creed Valhalla", category: "action", image: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5dBQ0IuwQrPyWJqkD4KWVZ/4f62ba3ecfce81e78ff67b417bcdda25/ACV_post_launch_Year_2.jpg" },
        { title: "Red Dead Redemption 2", category: "action", image: "https://media.rockstargames.com/rockstargames-newsite/img/global/games/fob/640/reddeadredemption2.jpg" },
        { title: "GTA V", category: "action", image: "https://media.rockstargames.com/rockstargames-newsite/img/global/games/fob/640/V.jpg" },
        { title: "Mortal Kombat 1", category: "action", image: "https://image.api.playstation.com/vulcan/ap/rnd/202305/0919/27ba73cc1c03d3e0bc8f2f89d0b7d6cf2d0e9b12f8e08bd7.png" },
        { title: "Starfield", category: "rpg", image: "https://cdn.akamai.steamstatic.com/steam/apps/1716740/header.jpg" },
        { title: "Halo Infinite", category: "shooter", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1240440/header.jpg" },
        { title: "Forza Horizon 5", category: "racing", image: "https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg" },
        { title: "Sea of Thieves", category: "adventure", image: "https://cdn.akamai.steamstatic.com/steam/apps/1172620/header.jpg" }
    ]
};

// ===== LOADING SCREEN =====
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('hidden');
    }, 2500);
});

// ===== CUSTOM CURSOR =====
const cursor = document.querySelector('.custom-cursor');
const cursorDot = document.querySelector('.custom-cursor-dot');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
});

// ===== PARTICLE BACKGROUND =====
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const particleCount = 80;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }
    
    draw() {
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--particle-color');
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    
    // Draw connections
    particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--particle-color');
                ctx.globalAlpha = (1 - distance / 100) * 0.3;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
                ctx.globalAlpha = 1;
            }
        });
    });
    
    requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});

initParticles();
animateParticles();

// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const themeOptions = themeToggle.querySelectorAll('.theme-option');

// Load saved theme
const savedTheme = localStorage.getItem('nox-theme') || 'nox';
document.documentElement.setAttribute('data-theme', savedTheme);
themeOptions.forEach(option => {
    if (option.dataset.theme === savedTheme) {
        option.classList.add('active');
    }
});

themeOptions.forEach(option => {
    option.addEventListener('click', () => {
        const theme = option.dataset.theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('nox-theme', theme);
        
        themeOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
    });
});

// ===== NAVIGATION =====
function navTo(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    
    document.querySelectorAll('.nav-links li').forEach(link => {
        link.classList.remove('active-link');
    });
    
    const activeNav = Array.from(document.querySelectorAll('.nav-links li')).find(
        el => el.getAttribute('onclick') === `navTo('${pageId}')`
    );
    if (activeNav) activeNav.classList.add('active-link');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Hide scroll indicator on any navigation
    document.getElementById('scrollIndicator').classList.add('hidden');
    
    // Load page-specific content
    if (pageId === 'games') loadGames();
    if (pageId === 'gallery') loadGallery();
    if (pageId === 'leaderboard') loadLeaderboard();
}

// ===== SCROLL INDICATOR =====
const scrollIndicator = document.getElementById('scrollIndicator');
let scrolled = false;

window.addEventListener('scroll', () => {
    if (window.scrollY > 100 && !scrolled) {
        scrolled = true;
        scrollIndicator.classList.add('hidden');
    }
});

// ===== BACK TO TOP BUTTON =====
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== PARALLAX SCROLLING =====
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(window.scrollY * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// ===== ANIMATED PRICING NUMBERS =====
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = `₹${value} `;
        element.innerHTML += element.querySelector('span').outerHTML;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Observe pricing cards for animation
const priceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const priceElement = entry.target;
            const targetValue = parseInt(priceElement.dataset.value);
            const span = priceElement.querySelector('span');
            animateValue(priceElement, 0, targetValue, 1500);
            priceObserver.unobserve(priceElement);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.price-amount[data-value]').forEach(el => {
    priceObserver.observe(el);
});

// ===== STAFF PICKS CAROUSEL =====
let currentSlide = 0;
const staffPicksCarousel = document.getElementById('staffPicksCarousel');
const carouselDots = document.getElementById('carouselDots');

function createStaffPicks() {
    staffPicksCarousel.innerHTML = '';
    carouselDots.innerHTML = '';
    
    CONFIG.staffPicks.forEach((pick, index) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.innerHTML = `
            <img src="${pick.image}" alt="${pick.title}" class="carousel-game-image">
            <div class="carousel-game-info">
                <h3 class="carousel-game-title">${pick.title}</h3>
                <p class="carousel-game-desc">${pick.description}</p>
                <p class="carousel-game-reason">"${pick.reason}"</p>
            </div>
        `;
        staffPicksCarousel.appendChild(slide);
        
        const dot = document.createElement('div');
        dot.className = 'carousel-dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        carouselDots.appendChild(dot);
    });
}

function goToSlide(index) {
    currentSlide = index;
    const slides = staffPicksCarousel.querySelectorAll('.carousel-slide');
    const dots = carouselDots.querySelectorAll('.carousel-dot');
    
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % CONFIG.staffPicks.length;
    goToSlide(currentSlide);
}

createStaffPicks();
setInterval(nextSlide, 5000); // Auto-advance every 5 seconds

// ===== GAMES LIBRARY =====
let currentFilter = 'all';

function loadGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    if (gamesGrid.children.length > 0) return; // Already loaded
    
    CONFIG.games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.dataset.category = game.category;
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.title}" class="game-card-image">
            <div class="game-card-title">${game.title}</div>
        `;
        gamesGrid.appendChild(gameCard);
    });
}

// Game filters
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        currentFilter = filter;
        
        document.querySelectorAll('.game-card').forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ===== GALLERY =====
function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (galleryGrid.children.length > 0) return; // Already loaded
    
    // Try to load images from photos folder
    const imageCount = 20; // Check for up to 20 images
    let foundImages = 0;
    
    for (let i = 1; i <= imageCount; i++) {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const img = new Image();
        img.src = `photos/${i}.png`;
        
        img.onload = () => {
            galleryItem.innerHTML = `<img src="photos/${i}.png" alt="Gallery Image ${i}">`;
            foundImages++;
        };
        
        img.onerror = () => {
            galleryItem.innerHTML = '<div class="gallery-placeholder">PHOTOS COMING SOON</div>';
        };
        
        galleryGrid.appendChild(galleryItem);
    }
    
    // If no images found after checking, show placeholder
    if (foundImages === 0) {
        setTimeout(() => {
            if (galleryGrid.querySelectorAll('img').length === 0) {
                galleryGrid.innerHTML = '';
                for (let i = 0; i < 6; i++) {
                    const placeholder = document.createElement('div');
                    placeholder.className = 'gallery-item';
                    placeholder.innerHTML = '<div class="gallery-placeholder">PHOTOS COMING SOON</div>';
                    galleryGrid.appendChild(placeholder);
                }
            }
        }, 1000);
    }
}

// ===== LEADERBOARD =====
const F1_TRACKS = [
    "Bahrain", "Saudi Arabia", "Australia", "Japan", "China", "Miami", 
    "Imola", "Monaco", "Canada", "Spain", "Austria", "Great Britain",
    "Hungary", "Belgium", "Netherlands", "Monza", "Azerbaijan", 
    "Singapore", "USA", "Mexico", "Brazil", "Las Vegas", "Qatar", "Abu Dhabi"
];

async function loadLeaderboard() {
    const trackSelect = document.getElementById('trackSelect');
    
    // Populate tracks if not already done
    if (trackSelect.children.length === 0) {
        F1_TRACKS.forEach(track => {
            const option = document.createElement('option');
            option.value = track;
            option.textContent = track;
            trackSelect.appendChild(option);
        });
    }
    
    // Load leaderboard data
    loadLeaderboardData(trackSelect.value);
    
    // Track change listener
    trackSelect.addEventListener('change', (e) => {
        loadLeaderboardData(e.target.value);
    });
}

async function loadLeaderboardData(track) {
    const leaderboardBody = document.getElementById('leaderboardBody');
    
    try {
        // Try to fetch from leaderboard.txt
        const response = await fetch('leaderboard.txt');
        
        if (response.ok) {
            const text = await response.text();
            const data = parseLeaderboardData(text, track);
            displayLeaderboard(data);
        } else {
            throw new Error('File not found');
        }
    } catch (error) {
        // Create default leaderboard
        createDefaultLeaderboard();
        displayPlaceholder();
    }
}

function parseLeaderboardData(text, track) {
    const lines = text.split('\n');
    const trackData = [];
    let inTrackSection = false;
    
    lines.forEach(line => {
        line = line.trim();
        if (line.startsWith(`[${track}]`)) {
            inTrackSection = true;
        } else if (line.startsWith('[') && inTrackSection) {
            inTrackSection = false;
        } else if (inTrackSection && line) {
            const parts = line.split('|');
            if (parts.length === 2) {
                trackData.push({
                    name: parts[0].trim(),
                    time: parts[1].trim()
                });
            }
        }
    });
    
    return trackData;
}

function displayLeaderboard(data) {
    const leaderboardBody = document.getElementById('leaderboardBody');
    leaderboardBody.innerHTML = '';
    
    if (data.length === 0) {
        leaderboardBody.innerHTML = `
            <tr>
                <td colspan="3" style="text-align: center; padding: 40px; color: var(--secondary-accent);">
                    No records yet for this track. Be the first!
                </td>
            </tr>
        `;
        return;
    }
    
    data.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${entry.name}</td>
            <td>${entry.time}</td>
        `;
        leaderboardBody.appendChild(row);
    });
}

function displayPlaceholder() {
    const leaderboardBody = document.getElementById('leaderboardBody');
    leaderboardBody.innerHTML = `
        <tr>
            <td>1</td>
            <td>---</td>
            <td>--:--.---</td>
        </tr>
        <tr>
            <td>2</td>
            <td>---</td>
            <td>--:--.---</td>
        </tr>
        <tr>
            <td>3</td>
            <td>---</td>
            <td>--:--.---</td>
        </tr>
        <tr>
            <td colspan="3" style="text-align: center; padding: 20px; color: var(--secondary-accent);">
                Leaderboard data will be added soon!
            </td>
        </tr>
    `;
}

function createDefaultLeaderboard() {
    // Create a default leaderboard.txt file structure (this won't actually save to disk in browser)
    // You'll need to create this file manually in your project
    console.log('Creating default leaderboard structure...');
    console.log('Please create leaderboard.txt with this format:');
    console.log('[Bahrain]');
    console.log('Player Name | 1:32.456');
    console.log('Another Player | 1:33.123');
    console.log('');
    console.log('[Monaco]');
    console.log('Player Name | 1:14.789');
}

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const wasActive = item.classList.contains('active');
        
        // Close all other FAQs
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            otherItem.classList.remove('active');
        });
        
        // Toggle current FAQ
        if (!wasActive) {
            item.classList.add('active');
        }
    });
});

// ===== TERMS & CONDITIONS PROGRESS BAR =====
const termsContainer = document.getElementById('termsContainer');
const termsProgress = document.getElementById('termsProgress');

if (termsContainer && termsProgress) {
    termsContainer.addEventListener('scroll', () => {
        const scrollPercentage = (termsContainer.scrollTop / (termsContainer.scrollHeight - termsContainer.clientHeight)) * 100;
        termsProgress.style.width = scrollPercentage + '%';
    });
}

// ===== INITIALIZE ON LOAD =====
document.addEventListener('DOMContentLoaded', () => {
    // Any additional initialization
    console.log('NOX Entertainment System loaded successfully!');
});
