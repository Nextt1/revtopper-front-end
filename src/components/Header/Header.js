import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory, useLocation } from 'react-router-dom';

export default function Container(){
    const history = useHistory();
    return( 
        <AppBar>
            <Toolbar>
                <Typography variant="h6" onClick={() => history.push("/")}>
                    RevTopper
                </Typography>
                <span style={{flex: 1}}></span>
            </Toolbar>
        </AppBar>
    )
}