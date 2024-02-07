const App = () => {

    const [value, setValue] = useState('');


    return (
        <div>
            <h2>Disabled Button Challange</h2>
            <input type="text" onChange={ (e) => setValue(e.target.value)}></input>
            <button disabled ={value.length < 1 }>Click Me</button>
        </div>
    )
}

export default App;


const findGame = () =>{

    const [value, setValue] = useState('');



    return (


        <>
        <h2>Disabled Button </h2>
        <input type="text" onChange={(e) => setValue(e.target.value)}></input>
        <buttton disabled={value.length<1}>Click me</buttton>    

        </>
    )
};

export default findGame;
