
const myComponent = () => {

    const [value, setvalue] = useState("");


    return (
        <div>
            <input onChange={(e) => setvalue(e.target.value)} value={value} type="text" placeholder="Enter Text" />
            <p>{value}</p>
        </div>
    )
}
export default myComponent;


/// data binding 

const myComponent = () => {

    const [value, setvalue] = useState("");


    return (
        <>
            <input onChange={(e) => setvalue(e.target.value)} value={value} type="text" placeholder="Enter Text" />
            <p>{value}</p>

        </>
    )
}


// / data binding 

const MyColl = () => {

    const [value1, setvalue1] = useState(" ");

}

return(
    <>
    <input onChange={ (e) => setvalue1(E.value1.target)} value1={value1} type="text" placeholder="Enter Text" />

    </>
);

export default MyColl;
