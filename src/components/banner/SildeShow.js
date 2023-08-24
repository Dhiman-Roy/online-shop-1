import style from './SlideShow.module.css';
import slideImage1 from '../images/slideShow1.jpg';

const SlideShow = () => {
    return (
        <div className={style.imageContainer}>
            <div className={style.slideImage}>
                 <img className={style.image} src={slideImage1} alt='slideshow'/>
            </div>
            
            <div className={style.iconContainer}>
                <div>
                    <span className="icon1 material-symbols-outlined">
                    arrow_back_ios
                    </span>

                </div>
                <div>
                    <span className="icon1 material-symbols-outlined">
                    arrow_forward_ios
                    </span>

                </div>
            
            </div>
            
        </div>
    )
}

export default SlideShow;