import style from './Header.module.css';

const Header = () => {
    return (
        <div className={style.headerContainer}>
            <div>Homepage</div>
            <div className={style.buttonContainer}>
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