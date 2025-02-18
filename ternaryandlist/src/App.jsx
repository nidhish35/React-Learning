import './App.css'

function App() {
// const age = 10;
// const green = true;

const users = [
  {name: "Nidhish" ,age: 21},
  {name: "Ritika" ,age: 22},
  {name: "Atharva" ,age: 24},

] 
  return (
    <>
    {/* <div>
      {age <=13 ? <h1>overage</h1> : <h1>Underage</h1>}
      <h1 style={{color : green ? "green" : "red"}}>This is wow </h1>

      {green && <button className='cursor-pointer bg-black text-white'>Greet</button>}
      </div>  */}

      
      <div>
        {users.map((user,key) =>{
          return(
            <User key = {key} name={user.name} age={user.age}/>
          );
        })}
      </div>
    </>
  )
}

const User = (props) => {
  return(
    <div>
      
    {props.name}, {props.age}
            
    </div>
  );
}

export default App
