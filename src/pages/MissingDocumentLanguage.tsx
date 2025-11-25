import Tip from '../components/Tip'

export default function MissingDocumentLanguage() {
  return (
    <div>
      <h2>Brakujący język dokumentu</h2>
      <p>Ta strona dokumentuje problem: element HTML najwyższego poziomu powinien zawierać atrybut {`lang`}.</p>
      <pre
        style={{
          background: '#f5f5f5',
          padding: 8,
          color: '#111',
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, monospace',
          borderRadius: 4,
        }}
      >
        &lt;!doctype html&gt;\n&lt;html&gt; &lt;!-- brakuje atrybutu lang --&gt;
      </pre>
      <Tip>
        Dodaj {`<html lang="pl">`} (lub {`lang="en"`} dla angielskiego) do pliku {`index.html`}.
      </Tip>
    </div>
  )
}
