import { fireEvent, render,screen } from "@testing-library/react"
import { GetByRole } from "./GetByRole";

test("testing functional component",()=>{
    render(<GetByRole/>);
    const btn = screen.getByTestId('btn1')
    fireEvent.click(btn)
    expect(screen.getByText('hello')).toBeInTheDocument();
})


//Get by role query for single elements
test("testing using getByRole",()=>{
    render(<GetByRole/>);
    //custom role
    const div = screen.getByRole('form');
    const btn1 = screen.getByRole('button',{name:"Click 1"});
    const btn2 = screen.getByRole('button',{name:"Click 2"});
    const input1 = screen.getByRole('textbox',{name:"UserName"});
    const input2 = screen.getByRole('textbox',{name:"Age"});
    const section1 = screen.getByRole('heading',{
        level:1
    })
    const section2 = screen.getByRole('heading',{
        level:2
    })
    expect(section2).toBeInTheDocument();
    expect(section1).toBeInTheDocument();
    expect(div).toBeInTheDocument();
    expect(input2).toBeInTheDocument();
    expect(input1).toBeInTheDocument();
    expect(btn1).toBeInTheDocument();
    expect(btn2).toBeInTheDocument();
})

//getByAll role for multiple elements
// test("testing getByAllRole" ,()=>{
//     render(<GetByRole/>);
//     const btn = screen.getAllByRole('button');
//     for(let i=0;i<btn.length;i++){
//         expect(btn[i]).toBeInTheDocument()
//     }
//     //testing of select drop down
//     const opt = screen.getAllByRole('option');
//     for(let i=0;i<opt.length;i++){
//         expect(opt[i]).toBeInTheDocument()
//     }
// })

