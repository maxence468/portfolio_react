import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AsciiText from './component/ASCIIText'
import SpotlightCard from './component/SpotlightCard'
import TextType from './component/TextType'


createRoot(document.getElementById('hello')).render(
  <StrictMode>
    <TextType 
  text={["Bienvenue sur mon portfolio"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor
  cursorCharacter="|"
  deletingSpeed={50}
  variableSpeedEnabled={true}
  variableSpeedMin={60}
  variableSpeedMax={120}
  cursorBlinkDuration={0.5}
  />
  </StrictMode>,
)


createRoot(document.getElementById('desc')).render(
  <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(215, 108, 88, 0.4)">
  <h3 style={{ color: "#D76C58", marginBottom: "12px" }}>À propos</h3>
  <p style={{ color: "white", lineHeight: "1.7", margin: 0 }}>
    Actuellement étudiant en BTS SIO option SLAM (Solutions Logicielles et 
    Applications Métiers) à l'école ORT LYON. Je vous propose sur ce portfolio 
    un aperçu de mon parcours académique et professionnel. Vous y trouverez un 
    aperçu de mes différents projets que j'ai réalisés au cours de ma formation.
  </p>
</SpotlightCard>
)


