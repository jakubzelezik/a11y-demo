# a11y-demo

Demo aplikacja stworzona jako materiał na warsztat o dostępności (a11y).

**Cel:**
- **Opis:** Prosty projekt React + Vite prezentujący 6 typowych problemów dostępności, które uczestnicy warsztatu mogą przeglądać, testować i naprawiać.

**Szybkie uruchomienie:**
- **Zainstaluj zależności:** `npm install` (lub `pnpm install`, `yarn`).
- **Uruchom serwer developerski:** `npm run dev`.

**Struktura i zawartość:**
- **`src/pages/Home.tsx`:** Strona główna z opisem demo i linkami do przykładów.
- **`src/pages/LowContrastText.tsx`:** Przykład tekstu o niskim kontraście.
- **`src/pages/MissingAltText.tsx`:** Obraz bez tekstu alternatywnego (`alt`).
- **`src/pages/MissingFormLabels.tsx`:** Formularz z brakującymi etykietami pól.
- **`src/pages/EmptyLinks.tsx`:** Linki bez opisowego tekstu.
- **`src/pages/EmptyButtons.tsx`:** Przyciski bez dostępnych nazw.
- **`src/pages/MissingDocumentLanguage.tsx`:** Przykład dokumentu bez atrybutu `lang`.

**Jak używać na warsztacie:**
- **Przegląd:** Otwórz stronę główną i przejdź przez każdy przykład, wyjaśniając dlaczego problem jest istotny z punktu widzenia osób korzystających z czytników ekranu, powiększeń, klawiatury itp.
- **Ćwiczenia praktyczne:** Zadania mogą obejmować:
  - Naprawę kontrastu kolorów (narzędzia i wartości WCAG).
  - Dodanie sensownych atrybutów `alt` dla obrazów lub `alt=""` dla dekoracji.
  - Powiązanie `<label htmlFor>` z `id` pól formularza.
  - Zapewnienie tekstu opisowego w linkach i przyciskach, lub dodanie `aria-label` gdy to konieczne.
  - Dodanie atrybutu `lang` w `index.html`.
