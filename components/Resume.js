import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import picme from './picme.jpg';


class Resume extends Component {
  render() {
    return(
      <div className="resume-page">
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <div style={{textAlign: 'center'}}>
                <img 
                    src={picme} 
                    alt="pic"
                    className="pic-of-me"
                    style={{height: '200px'}}
                />
            </div>

            <h2 style={{paddingTop: '2em'}}>M.Saadiq Ryklief</h2>
            <h4 style={{color: 'rgb(46, 46, 46)'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am a commited and dedicated individual who is aspiring to become a Junior Web Developer. I enjoy creating and designing eye catching web pages. My passion is Front-End development but i am trying to better my skill in Back-end development to one day become a Full Stack Developer</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Grassy Park, 7941</p>
            <h5>Phone</h5>
            <p>081 503 3058</p>
            <h5>Email</h5>
            <p>saadiqcode@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2011}
              endYear={2016}
              schoolName="South Peninsula High School"
              />

               <Education
                 startYear={2017}
                 endYear={2018}
                 schoolName="False Bay TVET College"
                 schoolDescription="Studied Fitting and Turning till N2"
               
                />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              endYear={2019}
              jobName="Semi Skilled Pipe Fitter"
              jobDescription="My responsibilities were cutting and prepping material for installation."
              />

              <Experience
                endYear={2019}
                jobName="Events"
                jobDescription="Working for Gelileo, my job was setting up and taking down equipment aswell assisting with the running of the event."
                />
                <Experience
                endYear={2019}
                jobName="Events"
                jobDescription="Working for Take Note SA, my job was setting up and taking down aswell assisting with the running of the event."
                />
                <Experience
                endYear={2019}
                jobName="Promotional"
                jobDescription="Promoting brands for isiLumko."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={35}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={70}
                  />
                  <Skills
                    skill="Python"
                    progress={45}
                    />
                    <Skills
                      skill="React"
                      progress={40}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
