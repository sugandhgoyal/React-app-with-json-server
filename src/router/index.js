import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Header from '../containers/header/header.container';
import Feed from '../containers/feed/feed.container';
import Newarticle from '../containers/article/addNewArticle.container';
import Listing from '../containers/listing/listing.container';
import Mapp from '../containers/listing/mapp';
import Article from '../containers/article/article.container';

export default (
    <Router>
        <div>
            <Route exact path="*" component={Header} />
            <Route path="/articlehome" component={Article} />
            <Route path="/feed" component={Feed} />
            <Route path="/addarticle" component={Newarticle} />
            <Route path="/aa" component={Listing} />
            <Route path="/bb" component={Mapp} />
        </div>

    </Router>
)