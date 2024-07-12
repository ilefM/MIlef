import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  return (
    <div className="flex flex-col mx-10 lg:mx-auto max-w-[900px] mt-36 font-raleway">
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
