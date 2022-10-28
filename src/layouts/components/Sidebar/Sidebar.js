import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts/SuggestedAccounts';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} active={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    active={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} active={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAccounts label="Suggested accounts" tittleMore="See all" />
            <SuggestedAccounts label="Following accounts" tittleMore="See more" />
        </aside>
    );
}

export default Sidebar;
