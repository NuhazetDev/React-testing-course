import { defineConfig } from 'vitest/config'

export default defineConfig({

  test: {
    globals: true, //Usar globals como describe/it sin import
    environment: 'jsdom', //Para comprobar componentes de UI
    setupFiles: './test/setup' //Indicamos el fichero de "preparación" del test (se ejecuta antes de cada test)
  }
})