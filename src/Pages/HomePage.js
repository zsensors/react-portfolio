import React from 'react'
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import Particle from '../Components/Particle';
import "aos/dist/aos.css";


function HomePage() {

 
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography" >
                <h1 data-aos="fade-down" data-aos-delay="100" data-aos-duration="1500">Electronic Engineer<span> Alonso Ramírez</span></h1>
                <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500">
                Electronics And Communications Engineer With A Wide Variety Of Knowledge In Multiple Proyects Of The Electronic Industry.
                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/alonso-ramirez-a680a1229/" className="icon i-likedin">
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/zsensors" className="icon i-github">
                        <GithubIcon />
                    </a>
                    
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
