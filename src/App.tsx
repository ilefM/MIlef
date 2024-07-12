import { Suspense } from 'react';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <Suspense fallback="loading">
      <Header />
      <div className="flex flex-col mx-10 lg:mx-auto max-w-[900px] mt-36 font-raleway">
        <AboutMe />
        <Projects />
      </div>
    </Suspense>
  );
}

export default App;
