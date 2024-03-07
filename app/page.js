'use client'
import ResponsiveImage from "./components/ResponsiveImage";
import VideoPage from "./components/VideoPage";
import styled from "styled-components";
import style from "./styles/Main.module.css";
import LazyLoadingDemo from "./components/LazyLoadingDemo";

export default function Home() {
  return (
    <main>
      <div>
        <h1 className={style.header}>Styling</h1>
        <h2 className="text-3xl font-bold underline">Tailwind CSS</h2>
        <StyledHeader>styled-components</StyledHeader>

        {/* Для стилизации Next.js приложения можно использовать:
        1. global.css (можно импортировать в любой файл в директории app)
        2. css модули (можно импортировать в любой файл в директории app)
        3. Tailwind CSS - библиотека css.
          - установить:
            npm install -D tailwindcss postcss autoprefixer
            npx tailwindcss init -p
          - добавить в tailwind.config.js пути к файлам, которые будут использовать классы tailwind
          - добавить директивы tailwind в global.css
          - импортировать global.css в root layout, чтобы применять стили ко всему приложению

        4. Sass
        5. CSS-in-JS (например, styled-components, но только в клиентских компонентах ('use client')) 
          - установить
          - в next.config.mjs добавить 
              module.exports = {
                compiler: {
                  styledComponents: true,
                },
              }
          - добавить файл registry.js в app (посмотреть в api styled-components)
          - обернуть children в root layout в <StyledComponentsRegistry>

        Для серверных компонентов рекомендуется css модули или tailwind.
        Можно комбинировать разные способы стилизации*/}
      </div>
      <div>
        <h4 className={style.header}>Optimazing</h4>
        {/* <Image> встроенный компонент автоматически настраивает размер картинки предотвращает сдвиги макета, загружается быстрее */}
        <ResponsiveImage />
        {/* Шрифт, Мета данные в layout.js */}
        {/* <VideoPage /> */}
        <LazyLoadingDemo />
      </div>
    </main>
  );
}

const StyledHeader = styled.h3`
  color: #a73a2e;
  font-weight: 700;
  font-family: var(--font-roboto-mono);
`;

// Аналитика

// @next/bundle-analyzer  это плагин  для Next.js, 
// который помогает управлять размером модулей JavaScript.
// Он генерирует отчет о размере каждого модуля и их зависимостях. 

// установка
    // npm i @next/bundle-analyzer
    // # or
    // yarn add @next/bundle-analyzer
    // # or
    // pnpm add @next/bundle-analyzer
// изменения config
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true',
//   })
   
//   /** @type {import('next').NextConfig} */
//   const nextConfig = {}
   
//   module.exports = withBundleAnalyzer(nextConfig)

// запуск

// ANALYZE=true npm run build
// # or
// ANALYZE=true yarn build
// # or
// ANALYZE=true pnpm build

// ХУК useReportWebVitals встроенная функция для отчета по показателям web vitals