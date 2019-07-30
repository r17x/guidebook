import React from 'react';
import './App.css';


function FormProperty({onSubmit}){
    const [data, setData] = React.useState({
        name: '',
        address: '',
        aminities: [],
    })

    const handleChange = (key) => e => setData({
        ...data,
        [key]: e.currentTarget.value
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit && onSubmit(data) 
    }
    
    return (
            <form onSubmit={handleSubmit}>
                <input value={data.name} onChange={handleChange('name')} type="text" data-testid="name" />
                <input value={data.address} onChange={handleChange("address")}type="text" data-testid="address"/>
                <input type="submit" data-testid="submitProperty" />
            </form>
    )
}

function App() {
  const [data, setData] = React.useState([])

  const createNewProperty = (newProperty) => {
        setData([
            ...data,
            newProperty,
        ])

  }

  return (
    <div className="App">
        <header className="App-header">
            <FormProperty onSubmit={createNewProperty}/>
            <ul data-testid="listProperty">
                {data.map((item,index) => (
                    <li key={index}>{item.name}-{item.address}</li> 
                ))}
            </ul>
        </header>
    </div>
  );
}

export default App;
