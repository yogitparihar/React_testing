import { render, screen } from "@testing-library/react"
import { GetByText } from "./GetByText"

// test("testing single button",()=>{
//     render(<GetByText/>)
//     const button = screen.getByText('Login')
//     expect(button).toBeInTheDocument()
// })

// test("test all text",()=>{
//     render(<GetByText/>);
//     const text = screen.getAllByText('GetByText')
//     for(let i = 0 ;i<text.length;i++){
//         expect(text[i]).toBeInTheDocument()
//     }
// })

test("testing className",()=>{
    render(<GetByText/>);
    const text = screen.getByText('Login here')
    expect(text).toHaveClass('header-class')
})