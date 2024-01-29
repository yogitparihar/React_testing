import { render, screen } from "@testing-library/react";
import App from "./App";

// //Test case for img
// test("testing img title", () => {
//   render(<App />);
//   const title = screen.getByTitle(/demo-img/i);
//   expect(title).toBeInTheDocument();
// });

// //Test case for input
// test("testing input field", () => {
//   render(<App />);
//   let checkInputField = screen.getByRole("textbox");
//   let checkInputPlaceholder = screen.getByPlaceholderText("Email");
//   expect(checkInputField).toBeInTheDocument();
//   expect(checkInputPlaceholder).toBeInTheDocument();
//   expect(checkInputField).toHaveAttribute("name", "email");
//   expect(checkInputField).toHaveAttribute("id", "email_id");
//   // expect(checkInputField).toHaveAttribute("type", "text");
// });

//Group test cases 
// describe("UI test cases",()=>{
//   test("input field testing",()=>{
//     render(<App/>);
//     let checkType = screen.getByRole("textbox");
//     expect(checkType).toHaveAttribute("type","text")
//     })
// })

// Skip Group test case
// describe.skip("UI test cases",()=>{
//   test("input field testing",()=>{
//     render(<App/>);
//     let checkType = screen.getByRole("textbox");
//     expect(checkType).toHaveAttribute("type","text")
//     })
//     describe("inner describe",()=>{
//       test("input field testing",()=>{
//         render(<App/>);
//         let checkType = screen.getByRole("textbox");
//         expect(checkType).toHaveAttribute("type","text")
//         })
//     })
// })


//Creating snapshot
test("snapshot for app component",()=>{
  const container = render(<App/>)
  expect(container).toMatchSnapshot();
})

