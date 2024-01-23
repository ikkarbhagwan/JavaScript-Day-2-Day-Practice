const App = () => {

    const [value, setValue] = useState('');


    return (
        <div>
            <h2>Disabled Button Challange</h2>
            <input type="text" onChange={ (e) => setfirst(e.target.value)}></input>
            <button disabled ={value.length < 1 }>Click Me</button>
        </div>
    )
}

export default App;
