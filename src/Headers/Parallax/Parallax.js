import React from 'react';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import classes from './Parallax.module.css';

const parallax = props => {
    return(
        <ParallaxProvider>
            <ParallaxBanner
                className={classes.Parallax}
                layers={[
                    {
                        image: props.image,
                        amount: 0.1
                    }
                ]}
            />
        </ParallaxProvider>
    )
}

export default parallax;