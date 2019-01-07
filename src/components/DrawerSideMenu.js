import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GetAppIcon from '@material-ui/icons/GetApp';
import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import EmailIcon from '@material-ui/icons/Email';


// 参考
// https://material-ui.com/demos/drawers/

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class DrawerSideMenu extends Component {
    state = {
        left: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    handleToHome = () => {
        this.props.history.push('/')
    }

    handleToProductsPage = () => {
        this.props.history.push('/products')
    }

    handleToBlogPage = () => {
        this.props.history.push('blog')
    }

    handleToContactPage = () => {
        this.props.history.push('contact')
    }

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>
                    <ListItem button key='product' onClick={this.handleToProductsPage}>
                        <ListItemIcon><GetAppIcon /></ListItemIcon>
                        <ListItemText primary='Our Products' />
                    </ListItem>

                    <ListItem button key='blog' onClick={this.handleToBlogPage}>
                        <ListItemIcon><DescriptionIcon /></ListItemIcon>
                        <ListItemText primary='Blog' />
                    </ListItem>

                    <ListItem button key='contact' onClick={this.handleToContactPage}>
                        <ListItemIcon><EmailIcon /></ListItemIcon>
                        <ListItemText primary='Contact Us' />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {['Home'].map((text) => (
                        <ListItem button key={text} onClick={this.handleToHome}>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );

        return (
            <div>
                <MenuIcon onClick={this.toggleDrawer('left', true)} />
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

DrawerSideMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(DrawerSideMenu));