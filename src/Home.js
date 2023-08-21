import React from 'react';
import { BlogList } from './BlogList';
import { useFetch } from './useFetch'; 
 

export const Home = () => {

    const { data:blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    
    return (
        <div className="home" style={{backgroundColor: "darkorange"}}>

            {error ? <div><h3>{ error }</h3></div> :
             blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            {isPending && <div><h3>Loading.....</h3></div>}
            
            


        </div>
    )
}
