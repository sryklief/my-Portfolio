import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import picme from './picme.jpg';


class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                          src={picme} 
                          alt="pic"
                          className="pic-of-me"
                        />

                        <div className="banner-text">
                            <h1>Web Developer</h1>

                            <hr/>

                            <p>HTML/CSS  |  Boostrap  |  JavaScript  |  Python  |  React  |  NodeJS  |  MongoDB</p>
                            <div className="social-links">

                                <a href="https://www.linkedin.com/feed/?trk=onboarding-landing" rel="noopener noneferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true " />
                                </a>

                                <a href="https://github.com/sryklief" rel="noopener noneferrer" target="_blank">
                                    <i className="fa fa-github-square"  aria-hidden="true " />
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
                <div className='test-body' style={{paddingBottom: "2rem"}}>
                    
                <h2 style={{paddingLeft: '11em', color: 'ivory'}}>Testimonials</h2>
                <Grid className='test-grid' style={{ paddingBottom: "2rem" }}>
                    <hr style={{borderTop: '3px solid #833fb2', width: '100%', alignItems: 'center'}}/>
                            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em', fontFamily: 'Bebas Neue', fontSize:'24px' }}>
                            Saadiq is a well-organized and self-motivated student. He has maintained generally good results in his work throughout. Godwin Dzvapatsva (Head of Curriculum and Learning)</p>
                </Grid>
            </div>
            </div>
        )
    }
}

export default Landing;
