import { React, Fragment } from 'react';
import { HomeBody } from '../Components/Home/HomeBody';
import { HomeHeader } from '../Components/Home/HomeHeader';
import { ButtonsMenu } from '../Components/ButtonsMenu';

export const Home = () => {
    return (
        <Fragment>
            <HomeHeader />
            <HomeBody />
        </Fragment>
    )
};
