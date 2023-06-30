import './App.css'
import Home from './sections/Home'
import About from './sections/About'
import Contact from './sections/Contact'
import Projects from './sections/Projects'
import Layout from './layout/Layout'
import { useEffect, useState } from 'react'
import Experience from './sections/Experience'


function App() {
  const [lightMode, setLightMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('mode');
    return savedMode !== null ? JSON.parse(savedMode) : true;
  });

  useEffect(() => {
    localStorage.setItem('mode', JSON.stringify(lightMode));
  }, [lightMode]);

  return (
    <Layout lightMode={lightMode} setLightMode={setLightMode}>
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default App
