import { screen,render } from "@testing-library/react"
import { GetAllByRole } from "./GetAllByRole"

const data =["data"]
describe("Test list",()=>{
    test("testing of list",()=>{
        render(<GetAllByRole/>)
        const ListElement = screen.getByRole('list')
        expect(ListElement).toBeInTheDocument()
    })
    
    test("testing render list",()=>{
        render(<GetAllByRole/>)
        const ListAllElement = screen.getAllByRole('listitem')
        expect(ListAllElement).toHaveLength(data.length)
    })
})
