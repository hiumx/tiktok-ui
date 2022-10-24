import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './AccountItem.module.scss';
import images from '~/assets/images';
import { useState } from 'react';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const [falllBack, setFallback] = useState('');

    const handleError = () => {
        setFallback(images.personDefault);
    };
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <img className={cx('avatar')} src={falllBack || data.avatar} alt={data.full_name} onError={handleError} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    {data.full_name}
                    <span className={cx('check')}>{data.tick && <FontAwesomeIcon icon={faCheckCircle} />}</span>
                </h4>
                <p className={cx('username')}>{data.nickname}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
