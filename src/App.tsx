import './App.css'
import Home from './sections/Home'
import About from './sections/About'
import Contact from './sections/Contact'
import Projects from './sections/Projects'
import Layout from './layout/Layout'
import Experience from './sections/Experience'
import { useLocaleStorage } from './hooks/useLocalStorage'

function App() {
  const [lightMode, setLightMode] = useLocaleStorage({ key: "mode", fallback: true });

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
