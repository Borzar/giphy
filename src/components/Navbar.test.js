import { render, screen } from "@testing-library/react"
import App from "../App"

describe("<Navbar />", () => {
  it("should no find the role `whatever` in the Navbar component", () => {
    render(<App />)
    expect(screen.queryByRole("whatever")).toBeNull()
  })

  it('Navbar component have Styles',() => {
    render(<App />)
    expect(screen.getByTestId('navbar')).toHaveClass('navbar')
  })
})
