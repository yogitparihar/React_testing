import { fireEvent, render, screen } from "@testing-library/react"
import { InputField } from "./InputField"

//Test cases for input field onChange event
test("on change event testing",()=>{
    render(<InputField/>);
    let input = screen.getByRole('textbox')
    fireEvent.change(input,{target:{value:''}})
    expect(input.value).toBe("")
    expect(input).toBeDisabled()
})