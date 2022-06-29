import React from 'react'
import styled from 'styled-components';

function ProgressBar({title, image, text}) {
    return (
        <ProgressBarStyled>
            <h6 className='title'>{title}</h6>
            <div className="progress-bar">
                <p>{text}</p>
                <div className="progress">
                <img src={image} alt="" width="100" height="100"/>
                </div>
            </div>
        </ProgressBarStyled>
    )
}

const ProgressBarStyled = styled.div`
    .title {
        align-items: center;
        text-align: center;
        flex-direction: colummn;
        padding: 1rem;
        
    }
    .progress-bar{
        
        display: flex;
        padding-bottom: 5rem;
        align-items: center;
        border-radius: 1rem;
        
        .progress{
            position: relative;
            width: 100%;
            height: .8rem;
            
        }

    
    
    }


    @media screen and (max-width: 900px){
        .progress-bar img{
           
        }    

            
    }

    .progress-bar:hover{
        transition: all .4s ease-in-out;
        background-color: var(--font-light-color);
    }

   
`;

export default ProgressBar;
