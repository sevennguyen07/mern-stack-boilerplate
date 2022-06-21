import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import LinesEllipsis from 'react-lines-ellipsis'
import _ from 'lodash';

const useStyles = makeStyles({
    movieStyle: {
      margin: "20px auto",
      padding: "10px",
      border: "2px solid #bdbdbd",
      borderRadius: "9px",
      display: "flex",
      justifyContent: "space-between",
    },
    contentStyle: {
        padding: "0px 0px 10px 10px",
    },
    moreStyle: {
        color: "#8f8f8f",
    },
    titleStyle: {
        color: "#CF2927",
    },
});

const Movie = ({ movie }) => {
    const classes = useStyles();
    return ( 
        <div className={classes.movieStyle}>
            <div>
                <iframe
                    src={_.get(movie, 'iframe_url', '')}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <div className={classes.contentStyle}>
                <LinesEllipsis
                        className={classes.titleStyle}
                        text={_.get(movie, 'title', "")}
                        maxLine='2'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                <Typography variant="body2" className={classes.moreStyle}>
                    Shared by: {_.get(movie, 'shared_by.email', "")}
                </Typography>
                <Typography variant="body2" className={classes.moreStyle}>
                    Description:
                </Typography>
                <LinesEllipsis
                    className={classes.moreStyle}
                    text={_.get(movie, 'description', "")}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                />
            </div>
        </div>
     );
}
 
export default Movie;