import React, { Fragment } from 'react'
import Restaurants from '../Menu/Restaurants'
import ResponsiveDrawer from './ResponsiveDrawer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EvBanner from '../Menu/EvBanner';
import Hotel from '../Menu/Hotel';
import Memgrade from '../Menu/MemGrade';
import Minfo from '../Menu/MInfo';
import Perinfo from '../Menu/PerInfo';
import Shopping from '../Menu/Shopping';
import Statistics from '../Menu/Statistics';
import Travel from '../Menu/Travel';
import Deepinfo from '../Menu/Info/Deepinfo';
import DataClean from '../Menu/Info/Dataclean';

const Content = ({ history }) => {
    return (
        <Fragment>
            <ResponsiveDrawer />
            <div style={{ paddingLeft: "25%" }}>
                <Switch>
                    <Route exact path='/home/restaurants' component={DataClean} />
                    <Route exact path='/home/restaurants/:id' component={Deepinfo} />
                    <Route exact path='/home/hotel' component={Hotel} />
                    <Route exact path='/home/memgrade' component={Memgrade} />
                    <Route exact path='/home/evbanner' component={EvBanner} />
                    <Route exact path='/home/minfo' component={Minfo} />
                    <Route exact path='/home/perinfo' component={Perinfo} />
                    <Route exact path='/home/shopping' component={Shopping} />
                    <Route exact path='/home/statistics' component={Statistics} />
                    <Route exact path='/home/travel' component={Travel} />

                </Switch>
            </div>
        </Fragment>
    )
}

export default Content;