import { fireEvent, render,screen } from "@testing-library/react"
import { FunDemo } from "./FunDemo"

test("testing functional component",()=>{
    render(<FunDemo/>);
    const btn = screen.getByTestId('btn1')
    fireEvent.click(btn)
    expect(screen.getByText('hello')).toBeInTheDocument();
})

//Get by role query for single elements
test("testing using getByRole",()=>{
    render(<FunDemo/>);
    //custom role
    const div = screen.getByRole('form');
    const btn1 = screen.getByRole('button',{name:"Click 1"});
    const btn2 = screen.getByRole('button',{name:"Click 2"});
    const input1 = screen.getByRole('textbox',{name:"UserName"});
    const input2 = screen.getByRole('textbox',{name:"Age"});
    expect(div).toBeInTheDocument();
    expect(input2).toBeInTheDocument();
    expect(input1).toBeInTheDocument();
    expect(btn1).toBeInTheDocument();
    expect(btn2).toBeInTheDocument();
})

//getByAll role for multiple elements
test("testing getByAllRole" ,()=>{
    render(<FunDemo/>);
    const btn = screen.getAllByRole('button');
    for(let i=0;i<btn.length;i++){
        expect(btn[i]).toBeInTheDocument()
    }
    //testing of select
    const opt = screen.getAllByRole('option');
    for(let i=0;i<opt.length;i++){
        expect(opt[i]).toBeInTheDocument()
    }
})

