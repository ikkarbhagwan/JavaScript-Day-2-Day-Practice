// react challanges 
// 1

function App() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [total, setTotal] = useState(0);


    function calculateTotal() {

        setTotal(number1 + number2);

    }



    return (
        <div>
            <h2 onclick={calculateTotal}>Adding two numbers</h2>
            <input onChange={(e) => setNumber1(+e.target.value)} value={number1} type="Number" placeholder="first Number" />
            <input onChange={(e) => setNumber2(+e.target.value)} value={number2} type="Number" placeholder="second Number" />
            <p>Total : {total || ''}</p>
        </div>
    );
    
}