import '../App.css'

export default function Home() {
  return (
    <div>
      <header>
        <h1>Demo dostępności — typowe problemy</h1>
        <p>
          Ta aplikacja demo pokazuje sześć typowych problemów dostępności (a11y), które możesz
          napotkać w projektach webowych. Każda strona celowo pokazuje jeden problem, abyś mógł
          testować narzędzia, lintery i ręczne sprawdzenia.
        </p>
      </header>

      <section className="card">
        <p>
          Użyj nawigacji powyżej, aby otworzyć dowolny przykład. Każda strona zawiera
          krótką wskazówkę opisującą, jak naprawić problem.
        </p>
      </section>
    </div>
  )
}
