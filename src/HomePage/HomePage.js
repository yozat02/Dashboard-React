import React from 'react';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import {HomePageBar} from './HomePageBar';
import {Summary} from './Summary' ;
import {ProductBuzz} from './ProductBuzz'
class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user } = this.props;
        const { history } = this.props;
        return (
            <div >
                <HomePageBar user={user} />
                <Summary />
                <ProductBuzz history={history}/>
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };