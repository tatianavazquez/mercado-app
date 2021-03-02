import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography}
    from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginTop: 50
    },
    media: {
        height: 300
    },
    weight: {
        fontWeight: 300
    }
});

const ProductCard = ({ thumbnail, title, currency_id, price, condition, available_quantity }) => {
  
    const classes = useStyles();

    return (

          <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={thumbnail}
                    title="Imagen"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography  variant="h6">
                    $ {currency_id} {price}
                    </Typography>
                    <Typography variant="body2" component="p">
                        <ul> 
                        <li> Condición: {condition} </li>
                        <li> Stock: {available_quantity} </li>
                        </ul>
                   </Typography>
                </CardContent>    
            </CardActionArea>
        </Card>)
}



export default ProductCard;