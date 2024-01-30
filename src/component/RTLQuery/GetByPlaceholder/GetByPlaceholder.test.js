import { render, screen } from "@testing-library/react"
import { GetByPlaceholder } from "./GetByPlaceholder"

// test("testing input field placeholder",()=>{
//     render(<GetByPlaceholder/>);
//     const input = screen.getByPlaceholderText('enter user name');
//     expect(input).toBeInTheDocument()
// })

test("testing input all placeholder",()=>{
    render(<GetByPlaceholder/>);
    const inputs = screen.getAllByPlaceholderText('enter user name');
    for(let i =0 ;i<inputs.length;i++){
        expect(inputs[i]).toBeInTheDocument()
    }
})