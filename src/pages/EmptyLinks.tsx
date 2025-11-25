import Tip from '../components/Tip'

export default function EmptyLinks() {
  return (
    <div>
      <h2>Puste linki</h2>
      <p>Poniższe przykłady pokazują linki bez tekstu lub tylko z ikoną.</p>
      <p>
        <a href="#"><img src="/vite.svg" /></a>
      </p>
      <Tip>
        Linki powinny zawierać opisowy tekst dla użytkowników czytników ekranu.
      </Tip>
    </div>
  )
}
