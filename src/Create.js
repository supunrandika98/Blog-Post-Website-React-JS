import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Form from 'react-bootstrap/Form';

export const Create = () => {

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [author, setAuthor] = useState('supun');
    const [body, setBody] = useState('');

    const [isPending, setIsPending] =  useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = { title, image, author, body };

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        }). then(() => {

            setIsPending(false);
            navigate('/');
        })

    }
 

    return (
        <div style={{backgroundColor: 'darkorange'}}>
            <div className="space" style={{paddingTop: '3%', paddingBottom: '3%'}}>
                         
            <Card sx={{ maxWidth: 650, margin: '0% auto'}}>
            <CardContent>
                <Typography variant="h4" component="div">
                    My Blog Post!
                </Typography>

                <Typography variant="body2">

                <form onSubmit={handleSubmit}>
                    
                    <TextField fullWidth label="Blog Title" id="blogTitle" type="text"          required  value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{margin: '2% 0'}} />

                    <TextField fullWidth label="Blog Image" id="blogImage"type="text"
                    required
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    style={{margin: '2% 0'}} />

                    <TextField fullWidth
                    id="outlined-multiline-static"
                    label="Blog Body"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    style={{margin: '2% 0'}}/>
            
                    <Form.Select aria-label="Blog Author" value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    style={{margin: '2% 0'}}>
                        <option>Open this select menu</option>
                        <option value="mario">mario</option>
                        <option value="supun">supun</option>
                        <option value="randika">randika</option>
                    </Form.Select>
    
                    {!isPending && <Button onClick={handleSubmit} variant="contained" size="large" style={{margin: '3% 0'}}> Submit Blog </Button>}

                    {isPending && <Button onClick={handleSubmit} disabled variant="contained" size="large" style={{margin: '3% 0'}}> Adding Blog </Button>}
                            
                </form>  
                </Typography>          
            </CardContent>
            </Card>
            </div>

        </div>
    )
}
 