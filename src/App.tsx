import Home from './pages/Home'
import { Routes, Route, Link } from 'react-router-dom'
import LowContrastText from './pages/LowContrastText'
import MissingAltText from './pages/MissingAltText'
import MissingFormLabels from './pages/MissingFormLabels'
import EmptyLinks from './pages/EmptyLinks'
import EmptyButtons from './pages/EmptyButtons'
import MissingDocumentLanguage from './pages/MissingDocumentLanguage'



function App() {
  return (
    <div>
      <nav className="app-nav" style={{padding: 12}}>
        <Link to="/" style={{marginRight: 12}}>Strona główna</Link>
        <Link to="/low-contrast-text" style={{marginRight: 12}}>Tekst o niskim kontraście</Link>
        <Link to="/missing-alt-text" style={{marginRight: 12}}>Brakujący tekst alt</Link>
        <Link to="/missing-form-labels" style={{marginRight: 12}}>Brakujące etykiety</Link>
        <Link to="/empty-links" style={{marginRight: 12}}>Puste linki</Link>
        <Link to="/empty-buttons" style={{marginRight: 12}}>Puste przyciski</Link>
        <Link to="/missing-document-language">Brakujący język</Link>
      </nav>

      <main style={{padding: 12}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/low-contrast-text" element={<LowContrastText />} />
          <Route path="/missing-alt-text" element={<MissingAltText />} />
          <Route path="/missing-form-labels" element={<MissingFormLabels />} />
          <Route path="/empty-links" element={<EmptyLinks />} />
          <Route path="/empty-buttons" element={<EmptyButtons />} />
          <Route path="/missing-document-language" element={<MissingDocumentLanguage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
