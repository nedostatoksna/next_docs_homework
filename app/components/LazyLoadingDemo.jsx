// Lazy loading помогает улучшить начальную производительность
//  загрузки приложения за счет уменьшения объема JavaScript, 
// необходимого для визуализации маршрута.
// Есть два способа реализовать отложенную загрузку в Next.js:

// Использование динамического импорта с next/dynamic
// С использованием React.lazy() с Suspense

//  если динамически импортировать серверный компонент, то
//  диманически импортируются только его дети клиентские компоненты

'use client'
 
import { useState } from 'react'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
 
// Client Components:
// кастомный компонент загрузки
const ComponentA = dynamic(
    () => import('./componentA'),
        {
        loading: () => <p>Loading...</p>,
        }
    ) 

const ComponentB = dynamic(() => import('./componentB'))
const ComponentC = dynamic(() => import('./componentC'), { ssr: false })
 
export default function ClientComponentExample() {
  const [showMore, setShowMore] = useState(false)
 
  return (
    <div>
    Lazy Loading demo
      {/* Load immediately, but in a separate client bundle */}
      <ComponentA />
 
      {/* Load on demand, only when/if the condition is met */}
      {showMore && <ComponentB />}
      <StyledButton onClick={() => setShowMore(!showMore)}>Toggle</StyledButton>
 
      {/* Load only on the client side */}
      <ComponentC />
    </div>
  )
}

const StyledButton = styled.button`
  color: #a73a2e;
  font-weight: 700;
  border: 2px solid #a73a2e;
  padding: 10px;
  font-family: var(--font-roboto-mono);
`;