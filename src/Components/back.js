import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { goBack } from 'react-router-redux';
import BackIcon from '@material-ui/icons/ArrowBack'

class Back extends Component {
    handleClick = () => {
        this.props.goBack();
    };

    render() {
        return <Button color="inherit" onClick={this.handleClick}>
                    <BackIcon/>
                </Button>;
    }
}

export default connect(null, {
    goBack,
})(Back);