const users = [
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Billy Doe", id: 3 }
  ];
  
  const userItems = users.map((user) => <li key={user.id}>{user.name}</li>);
  
  function App() {
    return (
      <>
        <h3>User names</h3>
        <ul>{userItems}</ul>
      </>
    );
  }


  const userItems = users.map( (user) =><li key={user.id}>{user.name}</li>);

  function App(){

    return(

      <>
      
      <h3>User Names : </h3>
      <ul>{userItems}</ul>
      </>
    )
  }