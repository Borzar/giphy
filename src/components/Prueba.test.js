import { render, screen } from '@testing-library/react'
import Prueba from './Prueba.js'

describe('Componente de Prueba', () => {
  it('find a word: personaje', () => {
    render(<Prueba/>)
    expect(screen.queryByText(/personaje/)).toBeInTheDocument()
  })

  it('find a word: hola', () => {
    render(<Prueba/>)
    expect(screen.queryByText(/personaje/)).toBeInTheDocument()
  })
})
