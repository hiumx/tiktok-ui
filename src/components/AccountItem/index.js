import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/36870f270da0adf99ef5c5cb72dee1ff~c5_100x100.jpeg?x-expires=1666317600&x-signature=lqp25kpymIr7FDdboL0xl9ASuTA%3D"
                alt="Mai Xuan Hieu"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Mai Xuan Hieu
                    <span className={cx('check')}>
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                </h4>
                <p className={cx('username')}>maixuanhieu</p>
            </div>
        </div>
    );
}

export default AccountItem;
