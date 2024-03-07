import { Inter, Roboto_Mono } from "next/font/google"; // импорт шрифта
import "./global.css";
import StyledComponentsRegistry from "./registry";
import Script from 'next/script'
 

// ШРИФТ
// next/font убирает необходимость запросов к внешним сетям. это более безопасно, повышает производительность.
// файлы шрифта загружаются во время сборки приложения, потом хостятся с другими статическими ресурсами
// добавить subset, weight, если используете не variable font
export const inter = Inter({ 
  subsets: ["latin"],
  style: ['normal'],
  variable: '--font-inter',
  weight: ["400", "600"] });
// можно использовать несколько шрифтов и создать переменные, чтобы их применить в css файлах
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
})
// с tailwind шрифты нужно использовать через переменные
// и добавлять их в config так:

  // /** @type {import('tailwindcss').Config} */
  // module.exports = {
  //   content: [
  //     './pages/**/*.{js,ts,jsx,tsx}',
  //     './components/**/*.{js,ts,jsx,tsx}',
  //     './app/**/*.{js,ts,jsx,tsx}',
  //   ],
  //   theme: {
  //     extend: {
  //       fontFamily: {
  //         sans: ['var(--font-inter)'],
  //         mono: ['var(--font-roboto-mono)'],
  //       },
  //     },
  //   },
  //   plugins: [],
  // }

// МЕТАДАННЫЕ
// можно экспрортировать статичный объект метаданных или функцию, генерирующую метаданные в layout.js или page.js file.
// next будет создавать <head> для страниц авоматически

export const metadata = {
  title: "Styling and Optimazing for Next App",
  description: "Exsample of ways of styling and optimazing in next app",
};

// или 
// дабавлять специальные файлы в разные сегменты роутинга:
  // favicon.ico, apple-icon.jpg, and icon.jpg
  // opengraph-image.jpg, twitter-image.jpg
  // robots.txt
  // sitemap.xml
// next будет создавать <head> для страниц авоматически

// Динамические метаданные
// можно использовать функцию generateMetadata для метаданных с динамическими значениями, но только для серверных компонентов

// если метаданные не определены, то автоматически добавляются charset и viewport.
// метаданные прочитываются начиная с root сегмента 
// и одинаковые поля переписываются на более поздние значения этих полей.
// а так же поля наследуются



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}> 
    {/* применение одного шрифта */}
      {/* <body className={inter.className}>  */}
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        {/* Чтобы загрузить сторонний скрипт для всех роутов, 
        нужно импортировать next/script и включить скрипт в layout component: */}
        <Script src="https://example.com/script.js" />
        {/* но рекомендуется все же загружать скрипты для опр страниц.
        С помощью свойства strategy можно управлять поведением при загрузке
          beforeInteractive: загрузится до взаимодействия со страницей и до ее загрузки
          afterInteractive: (default) загрузится после некоторой гидрации страницы
          lazyOnload: загрузится в свободный периуд браузера
          worker: (experimental) загрузится через веб-воркер */}

          {/* можно использовать и встроенные скрипты с помощью dangerouslySetInnerHTML */}
          {/* <Script
            id="show-banner"
            dangerouslySetInnerHTML={{
              __html: `document.getElementById('banner').classList.remove('hidden')`,
            }}
          /> */}
          {/* можно использовать ивент хендлеры, но только в клиентских компонентах
            onLoad: код выполнится после загрузки скрипта
            onReady: после загрузки и при каждом маунтинге
            onError: код выполнится, если не получится загрузить скрипт */}
      </body>
    </html>
  );
}
