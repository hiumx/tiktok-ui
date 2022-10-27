import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faLanguage,
    faQuestion,
    faKeyboard,
    faCoins,
    faHouse,
    faGear,
    faCamera,
    faUser,
    faBusinessTime,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Propper/Menu';
import { UploadIcon, MessagesIcon, InboxIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'Light and dark mode',
    },
];

function Header() {
    const userProfile = true;

    // Handle
    const handleOnchange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@xuanhieu',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faCamera} />,
            title: 'LIVE Studio',
            to: '/livestudio',
        },
        {
            icon: <FontAwesomeIcon icon={faBusinessTime} />,
            title: 'Business Suite',
            to: '/businesssuite',
        },
        {
            icon: <FontAwesomeIcon icon={faHouse} />,
            title: 'LIVE Center',
            to: '/livecenter',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={routesConfig.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="TikTok" />
                    </Link>
                </div>

                <Search />

                <div className={cx('actions')}>
                    {userProfile ? (
                        <>
                            <Tippy offset={[0, 3]} delay={[0, 100]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy offset={[0, 3]} delay={[0, 100]} content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessagesIcon />
                                </button>
                            </Tippy>
                            <Tippy offset={[0, 3]} delay={[0, 100]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>17</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text target="_blank">
                                Upload
                            </Button>
                            <Button primary target="_blank">
                                Log in
                            </Button>
                        </>
                    )}

                    <Menu items={userProfile ? userMenu : MENU_ITEMS} onChange={handleOnchange}>
                        {userProfile ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://img2.thuthuatphanmem.vn/uploads/2018/12/25/nhung-hinh-anh-gai-xinh-cuc-dep_012909400.jpg"
                                alt="Nguyan Van A"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
