import about from '../../assets/about.png';

import './about.css';

export function About(){
    return (
        <section className='about'>
            <div className="container aboutContent">
                <img src={about} alt="img" />
                <div className="aboutTitle">
                    <span>
                        About us
                    </span>
                    <h4>
                        Efficiency, Building, Budget & Time
                    </h4>
                    <p>
                        Hideva Group is a team of skilled construction professionals with a passion for building and a commitment to excellence. We provide a range of services, from small-scale renovations to large-scale commercial construction. We believe in transparency and communication, and we work closely with our clients to ensure their needs are met.     Thank you for considering us for your construction needs.
                    </p>
                </div>
            </div>
        </section>
    )
}