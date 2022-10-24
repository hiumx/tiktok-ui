import { forwardRef, useState } from 'react';
import classNames from 'classnames';

import styles from './Image.module.scss';
import images from '~/assets/images';

const Image = forwardRef(({ className, src, alt, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(images.personDefault);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            {...props}
            src={fallback || src}
            alt={alt}
            ref={ref}
            onError={handleError}
        />
    );
});

export default Image;
