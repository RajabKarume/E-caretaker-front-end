
export default function Logout({ login, setLogin }){

    function handleClick(){
        fetch('http://127.0.0.1:3000/logout', {method:'DELETE'})
            .then((r)=> {
                if (r.ok){
                setLogin(false)
            }
            })
            
    }
    return(
        <button onClick={handleClick}>Log Out</button>
    )
}