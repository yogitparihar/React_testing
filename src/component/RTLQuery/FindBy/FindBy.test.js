import { render, screen } from "@testing-library/react"
import { FindBy } from "./FindBy"

//findBy query - return promise, if element exist return success and not it is rejected
test('testing async logic', async()=>{
    render(<FindBy/>)
    const checkButton = await screen.findByRole('button',{name:"Start Login"},{timeout:2000})
    expect(checkButton).toBeInTheDocument()
})