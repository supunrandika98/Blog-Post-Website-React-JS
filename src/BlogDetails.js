import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from './useFetch'; 
import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const BlogDetails = () => {

    const { id } = useParams(); 
    const { data:blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);

    const navigate = useNavigate();


    const handleDelete = () => {

        fetch('http://localhost:8000/blogs/' + blog.id , {
            method: 'DELETE'
            
        }).then(() =>{

            navigate('/');
        })
    }

    return (
        <div>

            {error && <div><h3>{ error }</h3></div>}
            {isPending && <div><h3>Loading.....</h3></div>}

            {blog && 
               ( 
                <article style={{padding: '3% 8%', fontFamily: 'roboto', backgroundColor: 'darkorange'}}>
                   
                    <h1 style={{textAlign: 'center', margin: '0% 0% 4% 0%', textDecoration: 'underline'}}>{blog.title}</h1>
                    <h4 style={{color: 'darkblue', textAlign: 'center', marginBottom: '2%'}}>Written By {blog.author}</h4>
                    <img src={blog.imageURL} style={{maxWidth: 950, maxHeight: 450}} alt="Image Not Found!!!"/>
                    <p style={{textAlign: 'justify', margin: '4% 0', fontSize: '1.25rem'}}>{blog.body}</p>

                    <Button variant="contained" size="large" onClick={handleDelete} style={{backgroundColor: 'red'}}> Delete Post </Button>

                </article>
               )              
            }
            
        </div>
    )
}
