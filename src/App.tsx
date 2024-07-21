import { Suspense } from 'react';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <Suspense fallback="loading">
      <div className="w-full max-w-[800px] mx-auto px-4">
        <Header />
        <div className="mt-40 flex flex-col text-textColor dark:text-slate-50 font-dosis">
          <AboutMe />
          <Projects />
        </div>
      </div>
    </Suspense>
  );
}

export default App;
