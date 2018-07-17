import React from 'react'

const Services = ({ services }) => (
    <section className="services">
        <div className="container">
            {services.map(item => (
                <div className="col-md-12 clearfix" key={item.image}>
                    <img src={item.image} alt={item.title} />
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Services
