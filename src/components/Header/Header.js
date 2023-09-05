import style from './Header.module.css';
import { uiActions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
    const quantity = useSelector(state => state.product.totalQuantity)
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
                    <div>{quantity}</div>
                </div>
                <div className={style.adminButtonContainer}>
                    Admin
                </div>
            </div>
        </div>
    )
}
export default Header;