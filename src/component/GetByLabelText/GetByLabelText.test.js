import { render, screen } from "@testing-library/react"
import { GetByLabelText } from "./GetByLabelText"

test("getByLabelText InputBox",()=>{
    render(<GetByLabelText/>)
    const input = screen.getByLabelText("User name")
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue("")
})

test("getByLabelText checkBox",()=>{
    render(<GetByLabelText/>)
    const checkBox = screen.getByLabelText("CheckBox");
    expect(checkBox).toBeInTheDocument()
    expect(checkBox).toBeChecked()
})