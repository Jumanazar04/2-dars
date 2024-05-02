import React from 'react';
import blog_1 from '../../assets/blog_1.png';
import blog_2 from '../../assets/blog_2.png';
import blog_3 from '../../assets/blog_3.png';

import './blog.css'

export class Blog extends React.Component{
    render(){
    return (
        <section className='container'>
            <span className='blogSpan1'>Blog</span>
            <h4 className='blogH4'>Insightful blogs about the construction industry.</h4>
            <div className="blogCards">
                <div className="blogCard">
                    <img src={blog_1} alt="img" />
                    <div className="blogTitle">
                        <blockquote>
                        24 October 2022
                        </blockquote>
                        <span>
                        What are the processes involved in putting up a building?
                        </span>
                        <p>
                        The process of putting up a building is usually done in phases and understanding this phases is important to a client in terms...
                        </p>
                        <button className='btn'>Read more</button>
                    </div>
                </div>
                <div className="blogCard">
                    <img src={blog_2} alt="img" />
                    <div className="blogTitle">
                        <blockquote>
                        24 October 2022
                        </blockquote>
                        <span>
                        What are the processes involved in putting up a building?
                        </span>
                        <p>
                        The process of putting up a building is usually done in phases and understanding this phases is important to a client in terms...
                        </p>
                        <button className='btn'>Read more</button>
                    </div>
                </div>
                <div className="blogCard">
                    <img src={blog_3} alt="img" />
                    <div className="blogTitle">
                        <blockquote>
                        24 October 2022
                        </blockquote>
                        <span>
                        What are the processes involved in putting up a building?
                        </span>
                        <p>
                        The process of putting up a building is usually done in phases and understanding this phases is important to a client in terms...
                        </p>
                        <button className='btn'>Read more</button>
                    </div>
                </div>
            </div>
        </section>
    )}
}