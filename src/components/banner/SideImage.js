import style from './SideImage.module.css'
import image1 from '../images/sideImage1.jpg';
import image2 from '../images/sideImage2.jpg';

const SideImage = () => {
    return (
        <div className={style.imageContainer}>
            <img src={image1} alt='image1'></img>
            <img src={image2} alt='image2'></img>
        </div>
    )
}
export default SideImage;