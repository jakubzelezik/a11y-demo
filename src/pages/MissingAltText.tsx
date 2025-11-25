import Tip from '../components/Tip'

export default function MissingAltText() {
  return (
    <div>
      <h2>Brakujący tekst alternatywny dla obrazu</h2>
      <p>Poniższy obraz celowo brakuje atrybutu alt, aby zademonstrować problem.</p>
      <img src="/vite.svg" />
      <Tip>
        Podaj sensowny tekst {`alt`} dla obrazów.
      </Tip>
    </div>
  )
}
