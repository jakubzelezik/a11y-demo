import Tip from '../components/Tip'

export default function MissingFormLabels() {
  return (
    <div>
      <h2>Brakujące etykiety pól formularza</h2>
      <p>Poniższy formularz zawiera pola wejściowe bez skojarzonej etykiety.</p>
      <form>
        <input type="text" placeholder="Imię" />
        <input type="email" placeholder="Email" />
        <button type="submit">Wyślij</button>
      </form>
      <Tip>
        Użyj <code>{`<label htmlFor="id">...</label>`}</code> lub opakuj <code>{`<input ... />`}</code> wejściowe za pomocą <code>{`<label>...</label>`}</code> dla prawidłowego skojarzenia.
      </Tip>
    </div>
  )
}
