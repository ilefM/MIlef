import { Suspense } from 'react';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <Suspense fallback="loading i18n translation">
      <Header />
      <div className="w-full mx-auto px-4 max-w-[900px] mt-20 flex flex-col text-textColor dark:text-slate-50 font-dosis">
        <AboutMe />
        <Projects />
      </div>
    </Suspense>
  );
}

export default App;
