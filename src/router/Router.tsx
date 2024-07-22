import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from './Layout';
import ProjectsDetails from '../pages/ProjectsDetails';
import ContactMe from '../components/ContactMe';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<ProjectsDetails />} />
        <Route path="contactme" element={<ContactMe />} />
      </Route>
    </Routes>
  );
}
