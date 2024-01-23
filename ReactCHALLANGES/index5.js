
const controlTheButtons = () => {
    
    const [turn, setTurn] = useState(true);


    return (
        <div>

        <button onclick={ () => setTurn(!turn)}>{show ?"hide below" : "show below"}</button>
        <div>Toggle Challenge</div>

        </div>
    )
}