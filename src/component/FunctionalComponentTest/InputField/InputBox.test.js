import { render, screen } from "@testing-library/react"
import { InputBox } from "./InputBox"

test("getByLabelText InputBox",()=>{
    render(<InputBox/>)
    const input = screen.getByLabelText("User name")
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue("")
})

test("getByLabelText checkBox",()=>{
    render(<InputBox/>)
    const checkBox = screen.getByLabelText("CheckBox");
    expect(checkBox).toBeInTheDocument()
    expect(checkBox).toBeChecked()
})