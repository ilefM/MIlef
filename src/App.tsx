import { Suspense } from 'react';
import AboutMe from './components/AboutMe';
import Header from './components/Header';

function App() {
  return (
    <Suspense fallback="loading">
      <Header />
      <div className="border-2 w-full mx-auto px-4 max-w-[900px] mt-20 flex flex-col text-darkGreen dark:text-cream">
        <AboutMe />
      </div>
    </Suspense>
  );
}

export default App;
