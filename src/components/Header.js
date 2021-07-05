import Buttons from "./Buttons";
import { useLocation } from 'react-router-dom'

function Header ({title , onAdd , ShowAddTask}){
    const location = useLocation();
    return (
        <header className='header'>
            <h1 >{title}</h1>
            {location.pathname === '/' &&<Buttons onClick={onAdd} text={ShowAddTask ? 'Close' : 'Add'} color={ShowAddTask ? 'red' : 'green'}/>}

        </header>
    )
}

export default Header;