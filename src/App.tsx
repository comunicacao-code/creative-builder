import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CreativeSelector } from '@/components/creative/CreativeSelector'

// Placeholder components - serão criados depois
const GeneratePage = () => <div className="p-8">Generate Page - Em breve</div>
const ReplicatePage = () => <div className="p-8">Replicate Page - Em breve</div>
const EditorPage = () => <div className="p-8">Editor Page - Em breve</div>
const ExportPage = () => <div className="p-8">Export Page - Em breve</div>

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<CreativeSelector />} />
          <Route path="/generate" element={<GeneratePage />} />
          <Route path="/replicate" element={<ReplicatePage />} />
          <Route path="/editor/:id" element={<EditorPage />} />
          <Route path="/export" element={<ExportPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
