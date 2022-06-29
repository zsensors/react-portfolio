import React from 'react';
import styled from 'styled-components';


function ContactItem({title, icon, cont1, cont2}) {
    return (
        <ContactItemStyled>
            <div className="left-content">
                {
                    icon
                }
            </div>
            <div className="right-content">
                <h6>{title}</h6>
                <p>{cont1}</p>
                <p>{cont2}</p>
            </div>
        </ContactItemStyled>
    )
}

const ContactItemStyled = styled.div`
    padding:1.5rem 2rem;
    
    display: flex;
    align-items: center;
    @media screen and (max-width: 978px){
        grid-template-columns: repeat(1, 1fr);
        width: 70%;
        }
    &:not(:last-child){
        margin-bottom: 2.5rem;
    }
    .left-content{
        
        padding: 1.5rem;
        border: 1px solid var(--border-color);
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.5rem;
        svg{
            font-size: 2.3rem;
        }
    }

    .right-content{
        
        h6{
            
            color: var(--white-color);
            font-size: 1.2rem;
            padding-bottom: .6rem;
        }
        @media screen and (max-width: 414px ){
        p{
            font-size: 10px;
            padding: .1rem 0;

            
        }
    }
    }
`;

export default ContactItem;
