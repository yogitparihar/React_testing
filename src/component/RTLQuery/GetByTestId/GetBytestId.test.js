import { render, screen } from "@testing-library/react"
import { GetByTestId } from "./GetByTestId"

test("testing with test id",()=>{
    render(<GetByTestId/>)
    const test = screen.getByTestId('div-test-id')
    expect(test).toBeInTheDocument()
})