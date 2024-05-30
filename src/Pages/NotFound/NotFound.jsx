import imgNotFound from "../../assets/notFound1.webp"
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='NotFoundPage'>
            <img src={imgNotFound} alt="imgNotFound"  className='imgNotFound'/>
        </div>
    );
};

export default NotFound;