import { fireEvent, render, screen } from "@testing-library/react"
import { ButtonComponent } from "./ButtonComponent"

test("Testing of onClick event",()=>{
    render(<ButtonComponent/>);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(btn).toBeDisabled()
})