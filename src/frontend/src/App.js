import { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/user')
    .then(res => res.json())
    .then(data => {
      setUsers(data);
    }).catch(err => {
      console.log(err)
    });
  }, []);

  return (
    <div>
      {users.map((user, index) =>
        <p key={index}>{ user.name }</p>
      )}
    </div>
  );
}

export default App;