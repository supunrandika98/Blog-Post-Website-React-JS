import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

export const BlogList = ({blogs, title}) => {

    
    return (
        <div className="blog-list-container" >
            <h1 style={{fontFamily: 'roboto', marginBottom: '4%'}}>{title}</h1>
            <div className="blog-grid">
            {blogs.map((blog)=>{
                return(
                    <div className="blogPreview " key={ blog.id } >
                        <Card sx={{ minWidth: 375, margin: '0 auto 3% auto' }}>
                            <CardActionArea>
                                <CardMedia 
                                style={{minWidth: '100%'}}
                                component="img"
                                height="240"
                                image={blog.imageURL}
                                alt="Image Not Found"/>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    { blog.title }
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Written by { blog.author }
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="large" color="primary">
                                    <Link to={`/blogs/${blog.id}`}>
                                        Read More
                                    </Link>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                )
            })}
            </div>
        </div>
    )
}
 