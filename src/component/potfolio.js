import React, { useState ,useEffect } from 'react';
import wait from '../assents/comingsoon.png';
import AOS from "aos";
import "aos/dist/aos.css";

export const Portfolio = () => {
    const portf = [
        { name: 'Project 1', link: wait, desc: "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing." },
        { name: 'Project 2', link: wait, desc: "Description of Project 2." },
        { name: 'Project 3', link: wait, desc: "Description of Project 3." },
        { name: 'Project 4', link: wait, desc: "Description of Project 4." },
        { name: 'Project 5', link: wait, desc: "Description of Project 5." },
        { name: 'Project 6', link: wait, desc: "Description of Project 6." },
        { name: 'Project 7', link: wait, desc: "Description of Project 7." },
        { name: 'Project 8', link: wait, desc: "Description of Project 8." },
    ];

    const [visibleItems, setVisibleItems] = useState(6);
    useEffect(() => {
        AOS.init({
          duration: 2000,
        });
      }, []);

    const showMoreItems = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 4);
    };

    return (
        <div className="porf" id='project'>
            <div className="container text-center my-5">
                <h1 className="mb-4 prof-tete" data-aos="fade-up">My Recent Work</h1>
                <div className="row">
                    {portf.slice(0, visibleItems).map((props, index) => (
                        <div key={index} className="col-sm-6 col-md-4 col-lg-4 mb-4 container_prof">
                            <div className="cards_prof" data-aos="fade-right" >
                                <img src={props.link} alt={props.name} />
                                <div className="info " >
                                    <h1>{props.name}</h1>
                                    <p>{props.desc}</p>
                                    <div className='bnt-linkk'><a href="#" className="bnt-link">Read more</a></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {visibleItems < portf.length && (
                    <div >
                    <button className="bnt-porf pt-50" onClick={showMoreItems}data-aos="fade-down" >Show More</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Portfolio;
