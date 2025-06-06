# 🎬 Movie Search & Favorites App

A modern, responsive movie discovery application built with React that allows users to search for movies and maintain a personal favorites collection.

## 🌐 Live Demo

**[🚀 Try the App Live](https://movie-list-1-g1b7.onrender.com/)** - Experience the full functionality right now!

![Movie App Preview](https://github.com/user-attachments/assets/45831313-e29d-4870-b67b-01f045c70093)

## ✨ Features

- **🔍 Movie Search**: Search through thousands of movies using The Movie Database (TMDB) API
- **❤️ Favorites Management**: Add and remove movies from your personal favorites list
- **📱 Responsive Design**: Fully responsive UI that works on desktop, tablet, and mobile
- **⚡ Performance Optimized**: Smooth loading states and efficient API calls
- **🎨 Modern UI**: Clean, intuitive interface with smooth animations
- **🚀 Error Handling**: Robust error handling for network issues and missing data

## 🛠️ Tech Stack

- **Frontend**: React.js with Hooks
- **Styling**: CSS3 with modern features
- **API**: The Movie Database (TMDB) API
- **Build Tool**: Vite
- **Language**: JavaScript (ES6+)

## 📸 Screenshots

<details>
<summary>View Screenshots</summary>

### Home Page
![Home Page](https://github.com/user-attachments/assets/45831313-e29d-4870-b67b-01f045c70093)

### Search Results
![Search Results](https://github.com/user-attachments/assets/8e225ef5-7457-4397-8cf9-4e5b8fd782de)

### Favorites Page
![Favorites Page](https://github.com/user-attachments/assets/416f2a75-ad0f-443d-8002-d1f48b80fccf)

</details>

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- TMDB API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gouthamnandula/Movie-List.git
   cd Movie-List
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get your TMDB API key**
   - Visit [The Movie Database](https://www.themoviedb.org/)
   - Create an account and navigate to your account settings
   - Go to the API section and request an API key
   - Copy your API key

4. **Set up environment variables**
   ```bash
   # Create a .env file in the root directory
   touch .env
   ```
   
   Add your API key to the `.env` file:
   ```env
   VITE_TMDB_API_KEY=your_api_key_here
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to `http://localhost:5173` to see the app in action!

## 📁 Project Structure

```
movie-app/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable React components
│   │   └── MovieCard.jsx   # Individual movie card component
│   ├── css/               # Styling files
│   │   └── Home.css       # Main stylesheet
│   ├── pages/             # Page components
│   │   └── Home.jsx       # Main application page
│   ├── services/          # API and external services
│   │   └── api.js         # TMDB API integration
│   └── App.js             # Root component
├── .env                   # Environment variables
├── .gitignore            # Git ignore rules
├── package.json          # Project dependencies
├── README.md             # Project documentation
└── vite.config.js        # Vite configuration
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 API Integration

This app uses [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api) to fetch movie data. The API provides:

- Popular movies
- Movie search functionality
- High-quality movie posters and metadata
- Detailed movie information

## 🎯 Usage

1. **Browse Popular Movies**: The home page displays trending and popular movies
2. **Search Movies**: Use the search bar to find specific movies by title
3. **Add to Favorites**: Click the heart icon on any movie card to add it to favorites
4. **View Favorites**: Access your saved movies in the favorites section
5. **Remove from Favorites**: Click the heart icon again to remove from favorites

## 🚧 Known Issues & Improvements

- Some movie results may show "undefined" for missing TMDB data
- Consider adding movie details modal/page
- Implement pagination for search results
- Add loading skeletons for better UX
- Consider adding movie trailers integration

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow React best practices
- Use meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[The Movie Database (TMDB)](https://www.themoviedb.org/)** - For providing the comprehensive movie database API
- **React Team** - For the amazing React framework
- **Vite Team** - For the fast build tool

## 📞 Contact

**Goutham Nandula** - [@gouthamnandula](https://github.com/gouthamnandula)

Project Link: [https://github.com/gouthamnandula/Movie-List](https://github.com/gouthamnandula/Movie-List)

---

<div align="center">
  <p>⭐ Star this repo if you found it helpful!</p>
  <p>Made with ❤️ by <a href="https://github.com/gouthamnandula">Goutham Nandula</a></p>
</div>