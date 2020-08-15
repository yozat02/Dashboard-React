import React from 'react';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import {HomePageBar} from '../HomePage/HomePageBar';
import {Product} from '../HomePage/Product'
import { Sentiment } from './Sentiment';
import { Opinions} from './Opinions';
import {Itentions} from './Intentions'
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
        const { name } = this.props.match.params
        const { polarity } = this.props.match.params
        return (
        <div >
            <HomePageBar user={user} />
            <div>
                    <div class=" row" >
                        <div class=" col-lg-4" >
                            <div style={{paddingLeft:0,paddingRight:250,paddingTop:100}}>
                                <Product name={name} polarity={polarity} history={history} />
                            </div>
                            <p style={{fontWeight: "bold",marginTop:40,marginLeft:0}}>Auto generated insight</p>
                            <p style={{marginTop:40,marginLeft:0 ,paddingRight:230}}>
                            Nunc aliquet tempor mattis. Nulla maximus consequat quam, ac maximus metus sodales quis. Sed cursus, augue vitae sollicitudin efficitur, massa purus blandit velit, at tempor est felis eget ex. Nunc pellentesque sem luctus dictum convallis. Praesent vulputate felis aliquam arcu porttitor, nec suscipit nibh bibendum. Proin rhoncus et nulla a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non ante sit amet leo semper pellentesque.
                            </p>
                        </div>
                        <div class=" col-lg-8" >
                            <div style={{marginLeft:700,marginTop:-540}}>
                            <Sentiment />
                            <Opinions />
                            <Itentions />
                            </div>
                        </div>
                </div>
            </div>
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
export { connectedHomePage as DetailPage };