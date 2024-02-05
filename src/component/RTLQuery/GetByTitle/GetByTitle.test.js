import { render, screen } from "@testing-library/react"
import { GetByTitle } from "./GetByTitle"

test("testing title",()=>{
    render(<GetByTitle/>)
    const title = screen.getByTitle('close')
    expect(title).toBeInTheDocument()
})