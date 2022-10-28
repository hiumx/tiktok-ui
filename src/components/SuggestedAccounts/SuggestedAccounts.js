import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, tittleMore, preview }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            <AccountItem preview={preview} />
            <AccountItem preview={preview} />
            <AccountItem preview={preview} />
            <AccountItem preview={preview} />
            <AccountItem preview={preview} />

            <p className={cx('more-btn')}>{tittleMore}</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};
export default SuggestedAccounts;
