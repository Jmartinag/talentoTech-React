import { decreaseNumber, increaseNumber } from "../features/numberSlice";
import { useSelector, useDispatch } from 'react-redux';

function Profile({user}) {  

    return (
      <>
        <h1>{user.name}</h1>
        <br/>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize,
            backgroundColor: 'black'
          }}
        />  
        <br/>    
      </>
    );
}

function ButtonExample(){

  /** El setState se usa para cambiar estados de variables */
  // const [count, setCount] = useState(0);

  /** Obtiene el valor del estado de la variable */
  const number = useSelector(state => state.number.value);
  /** Cambiar el valor del estado de la variable */
  const dispatch = useDispatch();


  return (
    <>
      <button className="bg-blue-500 hover:bg-blue-700 rounded
                         text-blue-50 font-bold py-2 px-4" 
              onClick={() => dispatch(increaseNumber())}>Add</button>
      <button className="bg-red-500 hover:bg-red-700 rounded
                         text-red-50 font-bold py-2 px-4" 
              onClick={() => dispatch(decreaseNumber())}>Subtract</button>
      <p> The counter is at: {number}</p>
    </>
  );
}

export default function Example() {

    const saludar = () => {
      alert("Hello...!")
    }
  
    const mostrarTexto = (e) => {
      console.log(e.target.value)
    }
  
    const keyUp = () => {
      console.log("Solo una tecla")
    }
  
    /** Cambiando el estado de las variables */
  
    const users = [{
      name: 'Erling Haaland',
      imageUrl: 'https://cdn.socy.cloud/PRAS/v1/_20/p/202303/upload/PRAS/uf_16788785694KoOHBrCq7rr63TdyzAQnHGMzP.jpg',
      imageSize: 90,
    }, 
    {
      name: 'Phil Foden',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOEOGoNl3kg1xNa5eKvNqHEqkyBwHu1zwXYQ&usqp=CAU',
      imageSize: 90,
    }, 
    {
      name: 'Kevin De Bruyne',
      imageUrl: 'https://s.hs-data.com/bilder/spieler/gross/142263.jpg',
      imageSize: 90,
    },
    {
      name: 'Julián Alvaréz',
      imageUrl: 'https://strikers.futbol/__export/1675032399776/sites/strikers/img/2023/01/19/julian_portada.jpg_849608265.jpg',
      imageSize: 90,
    }];
  
    return (
      <div>
        {users.map(user => (
          <Profile key={user.name} user={user}/>
        ))}
        <br/>
        <button className="bg-gray-600 hover:bg-gray-400 rounded text-blue-50 font-bold py-2 px-4" 
                onClick={() => saludar()}>Send</button>    
        <input type="text" onChange={mostrarTexto} onKeyUp={keyUp} />  
        <br/>
        <br/>
        <ButtonExample/>
        <ButtonExample/>
        <ButtonExample/>
      </div>
    )
  }