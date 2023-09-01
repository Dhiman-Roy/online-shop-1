import style from './Header.module.css';
import { uiActions } from '../../store/ui-slice';
import { useDispatch } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch();
    const cartToggleHandler = () => {
        dispatch(uiActions.toggle());
    }
    return (
        <div className={style.headerContainer}>
            <div>Homepage</div>
            <div onClick={cartToggleHandler} className={style.buttonContainer}>
                <div className={style.cartContainer}>
                    <div>Cart</div>
                    <div>0</div>
                </div>
                <div className={style.adminButtonContainer}>
                    Admin
                </div>
            </div>
        </div>
    )
}
export default Header;