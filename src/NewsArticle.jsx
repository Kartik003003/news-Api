import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
        marginBottom: theme.spacing(2),
        transition: 'transform 0.3s ease-out',
        '&:hover': {
            transform: 'scale(1.05)',
        },
    },
    media: {
        height: 200,
    },
}));

const NewsArticle = ({ article }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} id={`card-${article.title}`}>
            <CardMedia
                className={classes.media}
                image={article.urlToImage || 'Image not available'} 
                title={article.title}
                url={article.url}
            />
            <CardContent>
                <Typography variant="h5" component="h2" href={article.url}>
                    {article.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {article.description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default NewsArticle;
