import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useContext } from "react"
import { QueryContext } from "../../context/QueryContext"

export default function MediaCard( { imageLinks, title, bookCategory } ) {
  const { dispatch } = useContext(QueryContext)
  const handleClick = () => {
    dispatch({ type: "ADD_CATEGORY", category: bookCategory })
    dispatch({ type: "ASSIGN_TITLE", clickedTitle: title })
  }
  return (
    <Card sx={{ maxWidth: 140 }}>
      <CardMedia
        component="img"
        height="210"
        image={imageLinks}
        alt={`${title} cover`}
      />
      <CardContent>
        {/* <Typography gutterBottom variant="h5" component="div">
        {title}
        </Typography> */}
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleClick()}>Select</Button>
      </CardActions>
    </Card>
  );
}
