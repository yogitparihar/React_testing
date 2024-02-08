import { render, screen } from "@testing-library/react"
import { TodoList } from "."
import { Provider } from "../Provider"

test("testing todo list component",()=>{
    render(<TodoList/>,{wrapper:Provider})
    const textElement = screen.getByText('Add')
    expect(textElement).toBeInTheDocument()
})