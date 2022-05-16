import { getByTestId, render, screen } from '@testing-library/react'
import Title from './Title'

describe('<Title />', () => {
  it('the ´Title´ component is in the document', () => {
    render(<Title />)
    expect(screen.getByText('Rick and Morty API')).toBeVisible()
  })
  
  it('the `Title` component have style', () => {
    render(<Title />)
    expect(screen.getByTestId('show-title')).toHaveClass('title')
  })   
}) 
 
