import { render, screen } from "@testing-library/react"
import { GetByAltText } from "./GetByAltText"

test("testing img alt element",()=>{
    render(<GetByAltText/>)
    const imageText = screen.getByAltText('demo')
    expect(imageText).toBeInTheDocument()
})