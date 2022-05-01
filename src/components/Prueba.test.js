import { render, screen } from '@testing-library/react'
import Prueba from './Prueba.js'

describe('Componente de Prueba', () => {
  it('find a word: personaje', () => {
    render(<Prueba/>)
    const findPersobaje = screen.queryByText(/personaje/)
    expect(findPersobaje).toBeInTheDocument()
  })

  it('find a word: hola', () => {
    render(<Prueba/>)
    const findHola = screen.queryByText(/hola/)
    expect(findHola).toBeInTheDocument()
  })
})
