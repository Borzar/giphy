import { render, screen } from '@testing-library/react'
import App from '../App'


describe('<Inicio/>', () => {
  it('the ´Inicio´ component is in the document', () => {
    render(<App />)
    expect(screen.getByText('Welcome')).toBeInTheDocument()

  })
   
})
