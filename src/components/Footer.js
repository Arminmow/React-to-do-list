import { Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Footer (){
    const location = useLocation();
    return (
        <footer>
            {location.pathname === '/' && <p>Router Testing</p>}
            {location.pathname === '/' &&<Link to="/about">Test</Link>}
        </footer>
    )
}
export default Footer;