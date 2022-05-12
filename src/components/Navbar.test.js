import { render, screen } from '@testing-library/react'
import App from '../App'

describe('<Navbar />', () => {
  it('Component is rendering', () => {
    render(<App />)
    expect(screen.getByText('List')).toBeInTheDocument()
  })
})
