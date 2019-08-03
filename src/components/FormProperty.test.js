import React from 'react'
import FormProperty from './FormProperty'
afterEach(cleanup);
const handleSubmit = jest.fn() 

test('Create new Property', async () => {
    const { getByTestId, container  } = render(<FormProperty onSubmit={handleSubmit}/>)

    const form = container.querySelector('form') 
    const name = getByTestId('name')
    const address = getByTestId('address')
    const submitButton = getByTestId('submitProperty')

    fireEvent.change(name, {target: {value: 'My Property'}})
    fireEvent.change(address, {target: {value: 'Address'}})
    
    expect(name.value).toBe('My Property')
    expect(address.value).toBe('Address')
    expect(container).toContainElement(form)

    fireEvent.submit(form)

    await wait(() => {
        expect(handleSubmit).toHaveBeenCalledTimes(1)
    })

    fireEvent.click(submitButton)

    await wait(() => {
        expect(handleSubmit).toHaveBeenCalledTimes(2)
    })

})

