import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';
import iconreact from '../img/iconreact.svg';
import iconcss from '../img/iconcss.svg';
import iconhtml from '../img/iconhtml.svg';
import nodejs from '../img/nodejs.svg';
import photoshop from '../img/photoshop.svg';
import teamwork from '../img/teamwork.svg';
import sound from '../img/sound.svg';


function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">

                        <div className='animation'>
                        <ProgressBar 
                            title={'REACT'}
                            image={iconreact} 
                            
                            
                        />
                        </div>
                        <div className='animation'>
                        <ProgressBar 
                            title={'CSS'}
                            image={iconcss} 
                        />
                        </div>
                        <div className='animation'>
                        <ProgressBar 
                            title={'HTML'}
                            image={iconhtml} 
                          
                        />
                        </div>
                        <div className='animation'>
                        <ProgressBar 
                            title={'NODE'}
                            image={nodejs} 
                        />
                        </div>
                        <div className='animation'>
                        <ProgressBar 
                            title={'PHOTOSHOP'}
                            image={photoshop} 
                           
                        />
                        </div>
                        <div className='animation'>
                        <ProgressBar 
                            title={'TEAMWORK SKILLS'}
                            image={teamwork} 
                          
                        />
                        </div>
                        <div className='animation'>
                        <ProgressBar 
                            title={'AUDIO ENGINEERING'}
                            image={sound} 
                            
                        />
                        </div>
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        text-align: center;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);

            
        }

       
    

    
    }
`;

export default Skills;
