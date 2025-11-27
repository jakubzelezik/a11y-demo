export default function DetectAccessibilityMistakes() {
  return (
    <div>

      <h1>Dostępność stron internetowych</h1>

      <p>
        Tworzenie stron internetowych dostępnych dla wszystkich użytkowników jest niezwykle ważne
        w dzisiejszym świecie. Każda osoba powinna móc korzystać z sieci, niezależnie od swoich
        możliwości lub ograniczeń.
      </p>

      <h5>Podstawowe informacje</h5>

      <div>
        <img src="/img/nieistniejace.png" width="400" />
        <p style={{ fontSize: "12px" }}>
          Obrazek przedstawia dostępność cyfrową.
        </p>

        <button
          style={{
            backgroundColor: 'green',
            color: 'green',
            padding: '12px',
            border: 'none'
          }}
        >
          Kliknij aby przejść dalej
        </button>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Dodatkowe materiały</h3>

        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginTop: '15px'
          }}
        >
          <a href="#" style={{ fontSize: '30px', color: 'blue' }}>
            WCAG 2.2
          </a>

          <a style={{ fontSize: '30px', color: 'orange' }}>
            Przewodniki dla twórców stron
          </a>

          <div
            style={{
              padding: '10px',
              backgroundColor: '#ddd',
              cursor: 'pointer'
            }}
          >
            Kliknij tu
          </div>
        </div>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h2>Opinie użytkowników</h2>

        <div>
          <blockquote>
            “Super strona!”
          </blockquote>

          <blockquote>
            “Więcej treści proszę!”
          </blockquote>
        </div>

        <button
          style={{
            fontSize: '10px',
            padding: '5px 8px',
            background: 'yellow'
          }}
        >
          Zobacz więcej
        </button>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h2>Kontakt</h2>
        <form>

          <div>
            <input type="text" placeholder="Imię i nazwisko" />
          </div>

          <div>
            <input type="email" />
          </div>

          <div>
            <label>Email do odpowiedzi</label>
            <input type="text" id="email2" />
          </div>

          <div>
            <textarea placeholder="Wiadomość" />
          </div>

          <button
            style={{
              padding: '5px 20px',
              marginTop: '10px'
            }}
          >
            Wyślij formularz
          </button>

        </form>
      </div>

      <footer style={{ marginTop: '80px', backgroundColor: '#333' }}>
        <p style={{ color: '#333' }}>
          2025 – Wszystkie prawa zastrzeżone
        </p>

        <div>
          <span style={{ cursor: 'pointer' }}>
            Polityka Prywatności
          </span>
          <span style={{ cursor: 'pointer', marginLeft: '15px' }}>
            Kontakt
          </span>
        </div>

      </footer>

    </div>
  )
}
