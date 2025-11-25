import Tip from '../components/Tip'

export default function LowContrastText() {
  return (
    <div>
      <h2>Tekst o niskim kontraście</h2>
      <p style={{color: '#9a9a9a', background: '#ffffff'}}>Ten akapit demonstruje tekst o niskim kontraście — trudny do przeczytania dla wielu użytkowników.</p>
      <Tip>
        Użyj narzędzia do sprawdzania kontrastu (Lighthouse) i postępuj zgodnie ze wskaźnikami.
      </Tip>
    </div>
  )
}
