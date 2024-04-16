import './App.css';
import { Header, HomeBanner, HomeCarousel } from './components/Layout';

function App() {
  return (
    <div>
      <Header />
      <main className="max-w-[var(--content-width)] mx-auto">
        <HomeBanner />
        <HomeCarousel />
      </main>
    </div>
  );
}

export default App;
