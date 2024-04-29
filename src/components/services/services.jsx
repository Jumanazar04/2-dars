import services_1 from '../../assets/services_1.png';
import services_2 from '../../assets/services_2.png';
import services_3 from '../../assets/services_3.png';

import styles from './services.module.css';

export function Services(){
    return <section className={styles.container}>
        <span>
            Services
        </span>
        <h3>
            Building Dreams, Crafting Realities
        </h3>
        <div className={styles.servicesCards}>   
            <div className={styles.card}>
                <img src={services_1} alt="img" />
                <div>
                    <h5>
                        Consultation Services
                    </h5>
                    <ul>
                        <li>Design & Build</li>
                        <li>Cost analysis</li>
                        <li>Permits & Processes</li>
                        <li>Scheduling</li>
                        <li>Phasing</li>
                        <li>Resource management</li>
                    </ul>
                </div>
            </div>
            <div className={styles.card}>
                <img src={services_2} alt="img" />
                <div>
                    <h5>
                         General Construction
                    </h5>
                    <ul>
                        <li>New Construction</li>
                        <li>Building Addition</li>
                        <li>Renovation</li>
                        <li>Restoration</li>
                        <li>Rebuilding from Drainage</li>
                        <li>Drainage</li>
                    </ul>
                </div>
            </div>
            <div className={styles.card}>
                <img src={services_3} alt="img" />
                <div>
                    <h5>
                        Maintenance Services
                    </h5>
                    <ul>
                        <li>Design & Build</li>
                        <li>Cost analysis</li>
                        <li>Permits & Processes</li>
                        <li>Scheduling</li>
                        <li>Phasing</li>
                        <li>Resource management</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
}
