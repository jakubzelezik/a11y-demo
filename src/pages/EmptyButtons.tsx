import Tip from '../components/Tip'

export default function EmptyButtons() {
  return (
    <div>
      <h2>Puste przyciski</h2>
      <p>Poniższe przyciski pozbawione są dostępnych nazw.</p>
      <button aria-hidden="true"><img src="/vite.svg" /></button>
      <button><img src="/vite.svg" /></button>
      <Tip>
        Upewnij się, że każdy przycisk ma opisowy tekst lub dostępną nazwę (np. {`aria-label`}).
      </Tip>
    </div>
  )
}
