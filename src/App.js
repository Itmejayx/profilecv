
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Project from './components/project/project';

function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Resume />
        <Project />
        <Contact />
      </main>
    </>
  );
}

export default App;
