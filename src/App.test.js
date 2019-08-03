import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@testing-library/jest-dom/extend-expect'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Create new Property',  async () => {
     const { getByTestId, container} = render(<App/>)

     const name = getByTestId('name')
     const address = getByTestId('address')
     const submitButton = getByTestId('submitProperty')
     const listProperty = getByTestId('listProperty') 

     fireEvent.change(name, {target: {value: 'My Property'}})
     fireEvent.change(address, {target: {value: 'Address'}})
     
     expect(name.value).toBe('My Property')
     expect(address.value).toBe('Address')

     fireEvent.click(submitButton)

     expect(container).toContainElement(listProperty)
     await wait(() => {
        expect(listProperty).toHaveTextContent(/My Property/i)
        expect(listProperty).toHaveTextContent(/Address/i)
     }) 

    }
)

// test('Create new aminities', async () => {
//     const { getByTestId } = render(<App/>)
// 
//     const title = getByTestId('title')
//     expect(title).toHaveTextContent('Create New Aminities')
// })
