import style from './BannerContainer.module.css';
import SideImage from './SideImage';
import SlideShow from './SildeShow';

const BannerContainer = () => {
    return(
        <div className={style.bannerContainer}>
            <SlideShow/>
            
            <SideImage/>
            
            
        </div>
    )
}
export default BannerContainer;