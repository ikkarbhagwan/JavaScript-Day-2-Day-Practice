
const myComponent = () => {

    const [value, setvalue] = useState("");

    
    return (
        <div>
            <input onChange={ (e) => setvalue(e.target.value)} value ={value} type="text" placeholder ="Enter Text" />
            <p>{value}</p>
        </div>
    )
}
export default myComponent;