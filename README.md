# NOX Entertainment System - Website

🎮 **Premium Gaming Experience Platform**

A fully-featured, animated gaming center website with custom cursor, particle effects, theme switching, leaderboards, game library, and more!

## 🚀 Features Implemented

### ✨ Visual Effects & Animations
- ✅ **Animated gradient backgrounds** with smooth color transitions
- ✅ **Particle system** with 80+ purple particles floating and connecting
- ✅ **Custom loading screen** with NOX logo pulse animation
- ✅ **Custom cursor** with gaming-themed crosshair design
- ✅ **Parallax scrolling** on all major elements
- ✅ **Lightning bolt effects** on Ultimate plan (hover to see!)
- ✅ **Fire/glow effects** on Immersive plans (hover to see!)
- ✅ **Smooth color transitions** throughout the site
- ✅ **Animated scroll indicator** that bounces
- ✅ **Hover animations** with glow effects on all interactive elements

### 🎨 Theme System
- ✅ **3 Themes Available:**
  - **NOX (Purple)** - Default gaming aesthetic
  - **Dark** - Pure black minimalist
  - **Light** - Clean white theme
- ✅ Theme preference saved in localStorage
- ✅ Floating theme toggle widget (top-right)

### 🎯 Interactive Features
- ✅ **Animated pricing numbers** - Count up from 0 when scrolled into view
- ✅ **Back to top button** - Appears after scrolling
- ✅ **Progress bar** for Terms & Conditions scroll depth
- ✅ **FAQ accordion** - Expandable Q&A sections
- ✅ **Staff picks carousel** - Auto-rotating game recommendations
- ✅ **Smooth page transitions** with fade effects

### 🎮 Gaming Features
- ✅ **Game Library** with 30+ games including:
  - All featured games (F1 25, Minecraft, Valorant, Spider-Man 2, Cyberpunk 2077, Silksong)
  - Sample PS Plus titles
  - Sample Xbox Game Pass titles
  - Automatic cover art from web
- ✅ **Filter system** - Filter by Racing, Action, Adventure, Shooter, RPG
- ✅ **Gallery page** - Auto-detects photos from `/photos/` folder
- ✅ **F1 25 Leaderboard** with:
  - All 24 official F1 tracks
  - Track selector dropdown
  - Rank display (Gold/Silver/Bronze for top 3)
  - Editable via `leaderboard.txt`

### ⚙️ Configuration
- ✅ **config.json** - Edit staff picks, settings, social media links, promotions
- ✅ **leaderboard.txt** - Manage F1 25 lap times per track

---

## 📁 File Structure

```
nox-website/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and animations
├── script.js           # All JavaScript functionality
├── config.json         # Editable configuration
├── leaderboard.txt     # F1 25 leaderboard data
├── logo.png            # Your NOX logo (REQUIRED)
├── photos/             # Gallery images folder
│   ├── 1.png
│   ├── 2.png
│   └── ... (up to 20)
└── README.md           # This file
```

---

## 🛠️ Setup Instructions

### Step 1: Get Your Files Ready
1. Download all the files I created
2. Put them all in the same folder
3. **Add your logo:**
   - Name it `logo.png`
   - Place it in the same folder as `index.html`

### Step 2: Add Gallery Photos (Optional)
1. Create a folder called `photos` in your website folder
2. Add photos named: `1.png`, `2.png`, `3.png`, etc.
3. Supports up to 20 photos
4. If no photos exist, it shows "PHOTOS COMING SOON"

### Step 3: Open the Website
- Simply double-click `index.html` to open in your browser!
- Or right-click → "Open with" → Choose your browser

### Step 4: Upload to GitHub
```bash
git init
git add .
git commit -m "Initial NOX website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/nox-website.git
git push -u origin main
```

### Step 5: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **main** branch
4. Click **Save**
5. Your site will be live at: `https://YOUR-USERNAME.github.io/nox-website/`

---

## ✏️ How to Edit Content

### Editing Staff Picks (Home Page Carousel)

**Method 1: Using config.json (RECOMMENDED)**
1. Open `config.json`
2. Edit the `staffPicks` array:
```json
{
  "staffPicks": [
    {
      "title": "Your Game Title",
      "image": "URL to cover art",
      "description": "Game description",
      "reason": "Why you recommend it"
    }
  ]
}
```
3. Save the file
4. The website will automatically update!

**Method 2: Direct JavaScript Edit**
1. Open `script.js`
2. Find the `CONFIG` object at the top
3. Edit the `staffPicks` array
4. Save and refresh

### Editing F1 25 Leaderboard

1. Open `leaderboard.txt`
2. Find the track section (e.g., `[Monaco]`)
3. Add entries in this format:
```
[Monaco]
Yuvaan Sood | 1:14.567
Aarav Dandona | 1:15.234
Zorawar Singh | 1:16.123
```
4. Save the file
5. Refresh the leaderboard page!

**Important Notes:**
- Time format: `M:SS.mmm` or `MM:SS.mmm`
- Use ` | ` (space-pipe-space) to separate name and time
- Leave track sections blank if no records yet
- Only you can edit this file (via GitHub)

### Editing Other Settings

Open `config.json` and modify:

```json
{
  "settings": {
    "carouselIntervalSeconds": 5,    // How fast carousel rotates
    "particleCount": 80,              // Number of background particles
    "enableCustomCursor": true,       // Custom cursor on/off
    "defaultTheme": "nox"             // Default theme (nox/dark/light)
  },
  "promotions": {
    "active": true,                   // Enable promo banner
    "bannerText": "Your promo text",
    "bannerColor": "#FFD700"
  },
  "socialMedia": {
    "instagram": "https://...",
    "facebook": "https://...",
    "discord": "https://..."
  }
}
```

---

## 🎨 Customizing Colors

### Changing Theme Colors
Open `styles.css` and edit the `:root` variables:

```css
:root {
    --bg-color: #412C47;           /* Background color */
    --text-main: #ffffff;          /* Main text color */
    --primary-accent: #1e1421;     /* Primary accent */
    --secondary-accent: #b0a3b5;   /* Secondary accent */
    --card-bg: rgba(0, 0, 0, 0.25); /* Card backgrounds */
    --gradient-1: #5a3d66;         /* Gradient color 1 */
    --gradient-2: #2d1b33;         /* Gradient color 2 */
}
```

### Adding Custom Fonts
1. Find a font on [Google Fonts](https://fonts.google.com/)
2. Copy the `<link>` tag
3. Paste it in the `<head>` section of `index.html`
4. Update the CSS to use your font

---

## 🐛 Troubleshooting

### Logo not showing?
- Make sure `logo.png` is in the same folder as `index.html`
- Check that it's spelled exactly: `logo.png` (lowercase)
- Try refreshing with `Ctrl+F5` (hard refresh)

### Gallery showing "PHOTOS COMING SOON"?
- Create a `photos` folder next to `index.html`
- Add images named `1.png`, `2.png`, etc.
- Supported formats: PNG only (for now)

### Leaderboard not loading?
- Make sure `leaderboard.txt` exists
- Check the format matches the example
- Look for typos in track names

### Custom cursor not working?
- The cursor is disabled on mobile devices (intentional)
- Only works on desktop/laptop computers

### Animations not smooth?
- Close other browser tabs
- Try a different browser (Chrome recommended)
- Check if hardware acceleration is enabled in browser settings

---

## 🔥 Advanced Tips

### Adding More Games
1. Open `script.js`
2. Find the `CONFIG.games` array
3. Add new games:
```javascript
{ 
  title: "Game Name", 
  category: "racing", // or action/adventure/shooter/rpg
  image: "https://image-url.com/cover.jpg" 
}
```

### Creating New Pages
1. Add a new section in `index.html`:
```html
<section id="newpage" class="page">
    <h2 class="section-title">New Page Title</h2>
    <div class="content-box">
        Your content here
    </div>
</section>
```
2. Add navigation link:
```html
<li onclick="navTo('newpage')">NEW PAGE</li>
```

### Customizing Particle Effect
In `script.js`, find this line:
```javascript
const particleCount = 80; // Change this number
```
- Lower number = better performance
- Higher number = more particles (max 150 recommended)

---

## 📱 Mobile Optimization

The website is **fully responsive**! It automatically adjusts for:
- ✅ Smartphones (portrait & landscape)
- ✅ Tablets
- ✅ Desktop monitors
- ✅ 4K displays

On mobile:
- Custom cursor is disabled (uses default touch)
- Navigation stacks vertically
- Cards resize to full width
- Carousel becomes swipeable

---

## 🎬 Cool Easter Eggs

Try these:
1. **Hover over the Ultimate plan card** → See lightning bolts!
2. **Hover over Immersive plans** → See fire effects!
3. **Click theme toggle** → Try all 3 themes!
4. **Scroll down and up** → Watch the back-to-top button appear!
5. **Watch the loading screen** → See the logo pulse!
6. **Move your mouse** → Custom cursor follows with glow!

---

## 🚀 Performance Tips

For faster loading:
1. **Optimize images:**
   - Use compressed PNGs
   - Recommended size: 1920x1080 max
   - Use tools like TinyPNG.com

2. **Enable caching:**
   - If hosting on a server, enable browser caching
   - Set cache headers for static files

3. **Minimize particles on mobile:**
   - The script automatically reduces particles on smaller screens

---

## 📊 Browser Support

✅ **Fully Tested:**
- Chrome 90+ (Recommended)
- Firefox 88+
- Safari 14+
- Edge 90+

⚠️ **Partial Support:**
- Internet Explorer 11 (animations may lag)
- Older mobile browsers

---

## 🤝 Contributing

Want to add features? Here's how:

1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b feature/AmazingFeature`
3. **Commit changes:** `git commit -m 'Add AmazingFeature'`
4. **Push to branch:** `git push origin feature/AmazingFeature`
5. **Open a Pull Request**

---

## 📞 Need Help?

If you run into issues:
1. Check the **Troubleshooting** section above
2. Open an issue on GitHub
3. Contact the developers listed on the Contact page

---

## 📜 License

This project is open source and available under the MIT License.

---

## 🎮 Made with ❤️ by NOX Entertainment System

**Visit us in Ludhiana, Punjab!**

Instagram: [@noxentertainmentsystem](https://instagram.com/noxentertainmentsystem)

---

## 🔮 Future Features (Coming Soon)

- [ ] Online booking system
- [ ] User accounts and profiles
- [ ] Multiple leaderboards (not just F1)
- [ ] Photo upload for customers
- [ ] Live occupancy status
- [ ] Newsletter signup
- [ ] Tournament calendar
- [ ] Achievement system
- [ ] Mobile app

---

**Enjoy your ultra-modern gaming website! 🎮⚡**
