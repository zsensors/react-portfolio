import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2016-07 - 2019-03'} 
                        title={'Audio and light Technician'}
                        subTitle={'Room 46'}
                        text={"-Cabling, calibration and maintenance of audio systems and lights"}
                        text1={"-Creating original audio samples and Mashups using DAWs like Ableton Live and Fl Studio 12"}
                        text2={"-Monitoring behavior of diverse systems based on software focused on lights and audio"}
                        text3={"-Determine the most optimal arrange to maximize the area in which the sound spreads"}
                        text4={"-In case of technical failure, fix said problem as quickly and efficiently as possible."}

                    />
                    <ResumeItem 
                        year={'2021-02 - 2022-03'} 
                        title={'Debug Technician '}
                        subTitle={'Flex (Flextronics)'}
                        text={'-Providing feedback to the production line related to the multiple issues that might be presented in the boards.'}
                        text1={'-Using schematics, TestExpert and Allegro to locate the reason behind a certain issue in the boards.'}
                        text2={'-Using X-ray machine (DAGE) to locate imperfections in the soldering of certain components.'}
                        text3={'-Writing FA reports of critical issues in the boards and present them to the engineering team for replacement of highly expensive components or processing units for scrap.'}
                        text4={'-Worked in multiple projects like: Amazon, Ciena, Quantum, WatchFire, Philo,Arista and Cisco.'}
                        
                    />
                    <ResumeItem 
                        year={'2022-03 - Present'} 
                        title={'Freelance Web Developer'}
                        
                        
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2014 - 2020'} 
                        title={'Electronic and Communications Degree'}
                        subTitle={'UDG (University Of Guadalajara) Faculty: CUCEI (University Center Of Exact Ciencies And Engineering) '}
                        text={'Is the division of the University of Guadalajara in Mexico dedicated to higher education related to the fields of engineering, physical sciences, chemistry and mathematics. CUCEI currently serves 14,581 students in 18 undergraduate and 18 postgraduate programs. It also has 216 researchers from the National System of Researchers (SNI) and 380 professors with recognition Program for the Professional Development of Teachers (PRODEP).'} 
                    />
                    
                    <ResumeItem 
                        year={'2011 - 2014'} 
                        title={'High School Graduation'}
                        subTitle={'Institute of Sciences'}
                        text={'The Institute of Sciences conceives quality as the achievement of excellence in the comprehensive education of its students. It seeks to train free people who are sensitive to their reality, who achieve high levels of academic learning, embodied in a reflective spiritual experience of faith and committed to building a more just society. For this, the school aspires to be an educational community consistent with the Ignatian identity, which develops an adequate management of resources, meeting, communication and accompaniment.'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
