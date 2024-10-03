import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/Landing';
import HomePage from './Pages/Home';
import EventsPage from './Pages/Events';
import LoveStoryPage from './Pages/OurStory';
import RegistryPage from './Pages/Registry';
import UploadPage from './Pages/Upload';
// Import other pages as needed

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/story" element={<LoveStoryPage />} />
        <Route path="/registry" element={<RegistryPage />} />
        <Route path="/upload" element={<UploadPage />} />


        {/* Add other routes */}
        {/* <Route path="/story" element={<LoveStoryPage />} />
        <Route path="/registry" element={<RegistryPage />} /> */}
      </Routes>
    </Router>
    
  );
};

export default App;
