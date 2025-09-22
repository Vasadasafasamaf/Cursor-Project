# Clothing Windows Website

A modular, expandable website featuring clickable clothing windows that link to TikTok videos.

## Features

- **5 Different Clothing Windows**: Each with unique images and TikTok links
- **Modular Design**: Easy to add, remove, or modify windows
- **Responsive Layout**: Works on desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects and click animations
- **TikTok Integration**: Direct links to TikTok videos
- **Expandable Architecture**: Simple API for adding new windows

## File Structure

```
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality and window management
└── README.md           # This documentation
```

## How to Use

1. Open `index.html` in your web browser
2. Click on any clothing window to open the corresponding TikTok video
3. The website is fully responsive and works on all devices

## Adding New Windows

### Method 1: Edit the Data Array

Add new items to the `clothingWindowsData` array in `script.js`:

```javascript
const clothingWindowsData = [
    // ... existing windows ...
    {
        id: 6,
        title: "New Clothing Item",
        imageUrl: "https://example.com/image.jpg",
        tiktokUrl: "https://www.tiktok.com/@username/video/1234567890",
        description: "Description of the item"
    }
];
```

### Method 2: Use the JavaScript API

Add windows dynamically using the built-in API:

```javascript
// Add a new window programmatically
window.ClothingWindows.addNewWindow(
    "Winter Jacket",
    "https://images.unsplash.com/photo-1234567890?w=400&h=300&fit=crop",
    "https://www.tiktok.com/@fashionista/video/1234567890",
    "Perfect for cold weather"
);
```

## Available Methods

- `ClothingWindows.addNewWindow(title, imageUrl, tiktokUrl, description)` - Add a new window
- `ClothingWindows.manager.removeWindow(id)` - Remove a window by ID
- `ClothingWindows.manager.updateWindow(id, newData)` - Update window data
- `ClothingWindows.utils.generateRandomTikTokUrl(username)` - Generate random TikTok URL
- `ClothingWindows.utils.isValidTikTokUrl(url)` - Validate TikTok URL format

## Customization

### Styling
- Modify `styles.css` to change colors, fonts, or layout
- The CSS uses CSS Grid for responsive design
- Hover effects and animations can be customized

### Images
- Replace image URLs in the data array
- Images are loaded from Unsplash (free stock photos)
- Fallback images are provided for failed loads

### TikTok Links
- Update TikTok URLs to point to actual videos
- URLs should follow the format: `https://www.tiktok.com/@username/video/videoId`

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design works on all screen sizes

## Future Enhancements

The modular architecture makes it easy to add:

- **Categories**: Group windows by clothing type
- **Search/Filter**: Find specific items
- **Favorites**: Save preferred items
- **Analytics**: Track click statistics
- **Admin Panel**: Manage windows through a UI
- **Database Integration**: Store data in a backend
- **User Accounts**: Personalized experiences

## Technical Details

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with Grid and Flexbox
- **Vanilla JavaScript**: No external dependencies
- **Responsive Design**: Mobile-first approach
- **Accessibility**: Keyboard navigation support
- **Performance**: Lazy loading images and optimized animations

## License

This project is open source and available under the MIT License.

