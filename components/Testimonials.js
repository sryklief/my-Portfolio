import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class About extends Component {
    render() {
        return(
            <div className='test-body'>
                    
                <h2 style={{paddingLeft: '11em'}}>Testimonials</h2>
                <Grid className='test-grid'>
                    <hr style={{borderTop: '3px solid #833fb2', width: '100%', alignItems: 'center'}}/>
                            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em', fontFamily: 'Bebas Neue', fontSize:'24px' }}>
                            Saadiq is a well-organized and self-motivated student. He has maintained generally good results in his work throughout. Godwin Dzvapatsva (Head of Curriculum and Learning)</p>
                </Grid>
            </div>
        )
    }
}

export default About;