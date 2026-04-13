import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLayout from './components/PageLayout';
import Home from './pages/Home';
import Domain from './pages/Domain';

// Placeholder components until we implement the rest
const Placeholder = ({ title }) => (
  <div className="container fade-in text-center" style={{ padding: '100px 20px', minHeight: '60vh' }}>
    <h2 className="section-title">{title}</h2>
    <p>This section is currently under construction. Check back soon for updates!</p>
  </div>
);

function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/domain" element={<Domain />} />
          <Route path="/milestones" element={<Placeholder title="Project Milestones" />} />
          <Route path="/documents" element={<Placeholder title="Project Documents" />} />
          <Route path="/presentations" element={<Placeholder title="Presentations (Slides)" />} />
          <Route path="/about" element={<Placeholder title="About Us" />} />
          <Route path="/contact" element={<Placeholder title="Contact Us" />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
