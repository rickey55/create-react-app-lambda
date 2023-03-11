/* eslint-disable */
import React from 'react';
import {
    // Grid,
    Typography,
    Box,
    Paper,
    Container,
    IconButton,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {makeStyles} from '@mui/styles';

import style from "../css/mainPage.module.css";
// import "../css/all.min.css";
import Chart from './Chart';

const useStyles = makeStyles((theme) => ({
    paper: {
     // padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
}));

function AccordianContentChart({onVisiblehandler,value,}) {
    const classes = useStyles();
    return (
        <Accordion expanded={value.isAllContentVisibleChart} defaultExpanded={true} onChange={(e)=>{onVisiblehandler({isAllContentVisibleChart: !value.isAllContentVisibleChart}); }}>
            <AccordionSummary               
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"               
            >
            <Typography variant="h6" style={{color: "#597AFF",fontWeight: "bold"}}>營收統計</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Paper className={`${classes.paper} ${classes.fixedHeight}`}>
                    <Chart/>
                </Paper>
            </AccordionDetails>
        </Accordion>
    );
}

export default AccordianContentChart;