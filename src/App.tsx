import { Suspense } from 'react';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <Suspense fallback="loading">
      <div className="dark:bg-[#070f17] dark:text-[#fefae0] min-h-screen">
        <div className="mx-auto max-w-[900px] mt-36 font-dosis">
          <AboutMe />
          <Projects />
        </div>
      </div>
    </Suspense>
  );
}

export default App;
