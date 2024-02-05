import { render, screen } from "@testing-library/react"
import { GetByDisplayValue } from "./GetByDisplayValue"

test('GetByDisplay',()=>{
    render(<GetByDisplayValue/>);
    const getDisplayValue = screen.getByDisplayValue('Yogit')
    expect(getDisplayValue).toBeInTheDocument()
})