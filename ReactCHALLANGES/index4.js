

const users = [
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Billy Doe", id: 3 }
  ];

  function App(){

    const findList = users.map( (user) =><li key={user.id}>{user.name}</li>);
    


    return (
        <div>
            <h3>user Names : </h3>
            <ul>{findList}</ul>
        </div>
    );

  };
