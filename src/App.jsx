import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CharterPage from './pages/CharterPage';
import DirectoryPage from './pages/DirectoryPage';
import ArtistsDirectoryPage from './pages/ArtistsDirectoryPage';
import ArtistProfile from './pages/ArtistProfile';
import TherapistProfile from './pages/TherapistProfile';
import RegisterTherapistPage from './pages/RegisterTherapistPage';
import RegisterArtistPage from './pages/RegisterArtistPage';
import QuizPage from './pages/QuizPage';
import QuizResultPage from './pages/QuizResultPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import JourneyPage from './pages/JourneyPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/charter" element={<CharterPage />} />
        <Route path="/directory" element={<DirectoryPage />} />
        <Route path="/artists-directory" element={<ArtistsDirectoryPage />} />
        <Route path="/therapist/:id" element={<TherapistProfile />} />
        <Route path="/artist/:id" element={<ArtistProfile />} />
        <Route path="/register-therapist" element={<RegisterTherapistPage />} />
        <Route path="/register-artist" element={<RegisterArtistPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quiz-result" element={<QuizResultPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/journey" element={<JourneyPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;