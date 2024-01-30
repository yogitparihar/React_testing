import { render, screen } from "@testing-library/react"
import { GetAllByLabelText } from "./GetAllByLabelText"

test("testing multiple input field",()=>{
    render(<GetAllByLabelText/>)
    const inputs = screen.getAllByLabelText('User name');
    for(let i=0;i<inputs.length;i++){
        expect(inputs[i]).toBeInTheDocument();
        expect(inputs[i]).toHaveValue("yo")
    }
})

test("testing multiple checkbox",()=>{
    render(<GetAllByLabelText/>);
    const checkboxs = screen.getAllByLabelText('Skills');
    for(let i =0; i<checkboxs.length ;i++){
        expect(checkboxs[i]).toBeInTheDocument();
        expect(checkboxs[i]).toBeChecked()
    }
})