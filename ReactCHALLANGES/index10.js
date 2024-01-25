
// const App(){

//     const [showHide, setShowHide] = useState(true);


//     const handleButton = () =>{
//         setShowHide(!showHide)
//     }


//     return(

//         <>

//         <button onClick={handleButton}>{showHide ? "show" : "Hide"}</button>
//         {showHide && <h1>This is Visible </h1>}
        
//         </>
//     )
// }

const inputFiled = () =>{

    const [showHide , setShowHide] = useState(true);

    const handleButton = () =>{
            setShowHide(!showHide)

    }

    return(

        <>
        <button onClick={handleButton}>{!showHide ? "show" : "hide"}</button>
        {showHide && <li>This is Visible!</li>}
        </>
    )
}