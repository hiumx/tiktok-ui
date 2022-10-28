import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1667113200&x-signature=Ma0Zl9kOCblZRAV6XOU190W9lQU%3D"
                    alt=""
                />
                <Button primary className={cx('follow-btn')}>
                    Follow
                </Button>
            </div>
            <div className={cx('description')}>
                <h4 className={cx('nick-name')}>
                    <strong>theanh28entertainment</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <p className={cx('name')}>Theanh28 Entertainment</p>
                <span className={cx('value')}>8.2M </span>
                <span className={cx('label')}>Followers </span>
                <span className={cx('value')}>888.2M </span>
                <span className={cx('label')}>Likes </span>
            </div>
        </div>
    );
}

export default AccountPreview;
