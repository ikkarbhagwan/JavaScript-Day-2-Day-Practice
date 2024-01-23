
const Child = () => {

    return (
        <div>
            <h2>child</h2>
            <button>change parent value</button>
        </div>

    )
}

const parent = () => {

    const [value, setValue] = useState("I need to be updated from my child");


    return (
        <div>
            <h3>Update Parent State Challenge (Using Callback)</h3>
            <div className="callme">{value}</div>
            <div className="wrapper">
                <Child />
            </div>
        </div>
    )
}