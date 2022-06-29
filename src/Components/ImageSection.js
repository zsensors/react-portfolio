import React from 'react'
import styled from 'styled-components';
import avatar from '../img/avatar.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {

    
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1500" src={avatar} alt=""/>
            </div>
            <div className="right-content">
                <h4>Electronic Engineer <span>Alonso Ramírez</span></h4>
                <p className="paragraph">
                Throughout Many Years I've Managed To Learn Different Skills Like: Audio Engineering, Language Learning, Electronic Engineering, And Now I Want To Apply Everything I've Learned Into Creating Exciting Frontend Development Proyects.
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Alonso Ramírez De Pablos</p>
                        <p>: 26</p>
                        <p>: Mexican </p>
                        <p>: Spanish, Japanese, English </p>
                        <p>: Jalisco, Mexico</p>
                        <p>: Freelance</p>
                    </div>
                </div>
                
                
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            height: 80%;
            object-fit: cover;
            border-radius: 1rem;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
