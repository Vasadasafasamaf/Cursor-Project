// Clothing Windows Data - Easily expandable
const clothingWindowsData = [
    {
        id: 1,
        title: "Summer Dress",
        imageUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop",
        tiktokUrl: "https://www.tiktok.com/@fashionista/video/1234567890",
        description: "Perfect for sunny days"
    },
    {
        id: 2,
        title: "Casual Jeans",
        imageUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=300&fit=crop",
        tiktokUrl: "https://www.tiktok.com/@styleblogger/video/2345678901",
        description: "Comfort meets style"
    },
    {
        id: 3,
        title: "Elegant Blazer",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        tiktokUrl: "https://www.tiktok.com/@fashionexpert/video/3456789012",
        description: "Professional and chic"
    },
    {
        id: 4,
        title: "Cozy Sweater",
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        tiktokUrl: "https://www.tiktok.com/@winterfashion/video/4567890123",
        description: "Warm and stylish"
    },
    {
        id: 5,
        title: "Trendy Sneakers",
        imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
        tiktokUrl: "https://www.tiktok.com/@sneakerhead/video/5678901234",
        description: "Comfortable and fashionable"
    }
];

// Clothing Window Component Class
class ClothingWindow {
    constructor(data) {
        this.data = data;
        this.element = this.createElement();
    }

    createElement() {
        const windowElement = document.createElement('div');
        windowElement.className = 'clothing-window';
        windowElement.setAttribute('data-id', this.data.id);
        
        windowElement.innerHTML = `
            <div class="window-header">
                ${this.data.title}
            </div>
            <div class="image-container">
                <img src="${this.data.imageUrl}" alt="${this.data.title}" class="clothing-image" loading="lazy">
                <div class="image-overlay">
                    <div class="click-indicator">
                        Watch on TikTok
                    </div>
                </div>
            </div>
            <div class="window-footer">
                ${this.data.description}
            </div>
        `;

        // Add click event listener
        windowElement.addEventListener('click', () => {
            this.handleClick();
        });

        return windowElement;
    }

    handleClick() {
        // Add click animation
        this.element.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.element.style.transform = '';
        }, 150);

        // Open TikTok link in new tab
        window.open(this.data.tiktokUrl, '_blank', 'noopener,noreferrer');
        
        // Optional: Track click analytics
        this.trackClick();
    }

    trackClick() {
        // Simple analytics tracking (can be expanded)
        console.log(`Clicked on: ${this.data.title}`);
        
        // You can add more sophisticated tracking here
        // Example: Google Analytics, custom analytics, etc.
    }

    render(container) {
        container.appendChild(this.element);
    }
}

// Window Manager Class for easy expansion
class WindowManager {
    constructor() {
        this.windows = [];
        this.container = document.getElementById('windowsContainer');
        this.init();
    }

    init() {
        this.renderWindows();
        this.addEventListeners();
    }

    renderWindows() {
        // Clear existing windows
        this.container.innerHTML = '';
        this.windows = [];

        // Create and render each window
        clothingWindowsData.forEach(data => {
            const window = new ClothingWindow(data);
            this.windows.push(window);
            window.render(this.container);
        });
    }

    addEventListeners() {
        // Add keyboard navigation support
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.target.classList.contains('clothing-window')) {
                e.target.click();
            }
        });
    }

    // Method to add new windows dynamically
    addWindow(data) {
        const newWindow = new ClothingWindow(data);
        this.windows.push(newWindow);
        newWindow.render(this.container);
    }

    // Method to remove windows
    removeWindow(id) {
        const windowIndex = this.windows.findIndex(w => w.data.id === id);
        if (windowIndex !== -1) {
            const windowElement = this.windows[windowIndex].element;
            windowElement.remove();
            this.windows.splice(windowIndex, 1);
        }
    }

    // Method to update window data
    updateWindow(id, newData) {
        const window = this.windows.find(w => w.data.id === id);
        if (window) {
            window.data = { ...window.data, ...newData };
            // Re-render the window
            const newWindow = new ClothingWindow(window.data);
            window.element.replaceWith(newWindow.element);
            const windowIndex = this.windows.findIndex(w => w.data.id === id);
            this.windows[windowIndex] = newWindow;
        }
    }
}

// Utility functions for easy expansion
const WindowUtils = {
    // Generate random TikTok URL (for testing)
    generateRandomTikTokUrl: (username) => {
        const randomId = Math.floor(Math.random() * 10000000000);
        return `https://www.tiktok.com/@${username}/video/${randomId}`;
    },

    // Validate TikTok URL
    isValidTikTokUrl: (url) => {
        const tiktokRegex = /^https:\/\/(www\.)?tiktok\.com\/@[\w.-]+\/video\/\d+$/;
        return tiktokRegex.test(url);
    },

    // Get random clothing image from Unsplash
    getRandomClothingImage: (category = 'clothing') => {
        const width = 400;
        const height = 300;
        return `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000000000)}?w=${width}&h=${height}&fit=crop&q=80`;
    }
};

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create window manager instance
    const windowManager = new WindowManager();

    // Make it globally accessible for easy expansion
    window.ClothingWindows = {
        manager: windowManager,
        utils: WindowUtils,
        data: clothingWindowsData
    };

    // Add some example expansion methods
    window.ClothingWindows.addNewWindow = (title, imageUrl, tiktokUrl, description) => {
        const newId = Math.max(...clothingWindowsData.map(w => w.id)) + 1;
        const newWindowData = {
            id: newId,
            title,
            imageUrl,
            tiktokUrl,
            description
        };
        
        clothingWindowsData.push(newWindowData);
        windowManager.addWindow(newWindowData);
    };

    // Example: Add a new window programmatically
    // window.ClothingWindows.addNewWindow(
    //     "New Item",
    //     "https://images.unsplash.com/photo-1234567890?w=400&h=300&fit=crop",
    //     "https://www.tiktok.com/@newuser/video/1234567890",
    //     "Brand new item"
    // );

    console.log('Clothing Windows App initialized!');
    console.log('Available methods:');
    console.log('- ClothingWindows.addNewWindow(title, imageUrl, tiktokUrl, description)');
    console.log('- ClothingWindows.manager.removeWindow(id)');
    console.log('- ClothingWindows.manager.updateWindow(id, newData)');
});

// Error handling for image loading
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG' && e.target.classList.contains('clothing-image')) {
        // Fallback image if the original fails to load
        e.target.src = 'https://via.placeholder.com/400x300/cccccc/666666?text=Image+Not+Available';
        e.target.alt = 'Image not available';
    }
}, true);

