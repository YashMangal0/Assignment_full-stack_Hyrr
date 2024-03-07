import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import PostListPage from './pages/PostListPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/signup" component={SignupPage} />
                <Route path="/posts" component={PostListPage} />
                {/* Other routes */}
            </Switch>
        </Router>
    );
};

export default App;
