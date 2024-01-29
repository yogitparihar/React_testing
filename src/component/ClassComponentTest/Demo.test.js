import renderer from 'react-test-renderer'
import Demo from './Demo'
test("class component testing",()=>{
    const componentData = renderer.create(<Demo/>).getInstance();
    expect(componentData.getUserList("user list")).toMatch("user list")
})