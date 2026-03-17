import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SpotlightCard from './component/SpotlightCard'
import TextType from './component/TextType'


createRoot(document.getElementById('hello')).render(
  <StrictMode>
    <TextType 
  text={["Bienvenue sur mon portfolio", "Maxence Barthelemy"]}
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
  <SpotlightCard spotlightColor="#33ffaa">
  <h2 style={{ marginBottom: "12px" }}>À propos</h2>
  <p style={{ color: "white", lineHeight: "1.7", margin: 0 }}>
    Actuellement étudiant en BTS SIO option SLAM (Solutions Logicielles et 
    Applications Métiers) à l'école ORT LYON. Je vous propose sur ce portfolio 
    un aperçu de mon parcours académique et professionnel. Vous y trouverez un 
    aperçu de mes différents projets que j'ai réalisés au cours de ma formation.
  </p>
</SpotlightCard>
)


