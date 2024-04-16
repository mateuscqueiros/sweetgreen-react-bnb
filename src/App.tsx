import './App.css';
import { Header, HomeBanner } from './components/Layout';

function App() {
  return (
    <div>
      <Header />
      <main className="max-w-[var(--content-width)] mx-auto">
        <HomeBanner />
      </main>
    </div>
  );
}

export default App;
