const URL = ' https://jsonplaceholder.typicode.com/users';

function App(){

    const [userData, setuserData] = useState(0);

    const getUserData = async () =>{
        const response = await fetch(URL);
        const jsonData = await response.json();
        setuserData(jsonData);
        
    };

    useEffect( () => {
        getUserData();

    }, []);


    return (
        <>
        
        <p><strong>Name :{userData.name} </strong></p>
        <p><strong>Website :{userData.website} </strong></p>
        <p><strong>Email :{userData.email} </strong></p>
        <p><strong>Phone :{userData.phone} </strong></p>
        
        </>


    )
}