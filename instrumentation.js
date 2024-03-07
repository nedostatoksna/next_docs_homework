import { registerOTel } from '@vercel/otel'

// Instrumentation — это процесс использования кода 
// для интеграции инструментов мониторинга и журналирования(logging) в приложение. 
// чтобы отслеживать производительность и поведение, устранять проблемы в рабочей среде.
export function register() {
  registerOTel('next-app')
}
// This feature is experimental. 
// To use it, you must explicitly opt in by defining experimental.instrumentationHook = true; 
// in your next.config.js.