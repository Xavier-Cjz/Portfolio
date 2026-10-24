import { Background } from "./Background.jsx";

function App() {
  return (
    <div className="app-container">
      <div className="shader-frame">
        <Background />
      </div>

      <main className="content-layer">
        <div className="text-3xl font-sans">Xavier Chong</div>
        <div className="text-lg font-sans">
          Software Engineer II at Lean Techniques
        </div>
        <div className="text-sm font-sans">Based in Des Moines, IA</div>
      </main>
    </div>
  );
}

export default App;
