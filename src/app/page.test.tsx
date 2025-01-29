import '@testing-library/jest-dom' // Para usar matchers como toBeInTheDocument
import { render, screen } from '@testing-library/react' // Utilitários para testar React
import Home from './page' // Importa o componente Home

describe('Home Component', () => {
  it('renders the heading "Home"', () => {
    // Renderiza o componente Home
    render(<Home />)

    // Procura por um elemento <h1> com o texto "Home"
    const heading = screen.getByRole('heading', { name: /home/i })

    // Verifica se o elemento está no documento
    expect(heading).toBeInTheDocument()
  })
})
