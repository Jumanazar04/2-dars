import React from "react"
import "./footer.css"
import inst from '../../assets/inst.jpg';
import facebook from '../../assets/facebook.webp';
import twitter from '../../assets/twit.webp';

export class Footer extends React.Component{
    
    render(){
    return(
        <footer className="mainFooter">
            <div className="container footer">
                <div className="logo">HIDEVA GROUP </div>
                <ul>
                    <li>Services</li>
                    <li>New Builds</li>
                    <li>Renovations</li>
                    <li>Conversions</li>
                    <li>Fit Out</li>
                </ul>
                <ul>
                    <li>Information</li>
                    <li>Events</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                    <li>Terms of services</li>
                </ul>
                <ul>
                    <li>Address</li>
                    <li>Nyeri Town - Nyeri</li>
                    <li>Mumbi</li>
                    <li>Call us</li>
                    <li>Email us</li>
                </ul>
                <div className="links">
                    <img src={inst} alt="img" />
                    <img src={facebook} alt="img" />
                    <img src={twitter} alt="img" />
                </div>
            </div>
            
        </footer>
    )}
}