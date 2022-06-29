import React from 'react'
import styled from 'styled-components';

function ResumeItem({year, title, subTitle, text, text1, text2, text3,text4}) {
    return (
        <ResumeItemStyled>
            <div className="left-content">
                <p>{year}</p>
            </div>
            <div className="right-content">
                <h5>{title}</h5>
                <h6>{subTitle}</h6>
                <ul>
                 <li>{text}</li>
                 <br></br>
                 <li>{text1}</li>
                 <br></br>
                 <li>{text2}</li>
                 <br></br>
                 <li>{text3}</li>
                 <br></br>
                 <li>{text4}</li>
                 <br></br>
                 </ul>

            </div>
        </ResumeItemStyled>
    )
}

const ResumeItemStyled = styled.div`
    display: flex;
    @media screen and (max-width: 421px){
        p, h5, h6{
            font-size: 80%;
        }
    }
  
    .left-content{
        width: 30%;
        padding-left: 30px;
        position: relative;
        
        p{
            display: inline-block;
        }
    }
    .right-content{
        
        
        position: relative;
        justify-content: left;
        align-items: left;
        display:flex;
        flex-direction: column;
        
       
        h5{
            color: var(--primary-color);
            font-size: 2rem;
            padding-bottom: .4rem;
        }
        h6{
            padding-bottom: .6rem;
            font-size: 1.5rem;
        }

        @media screen and (max-width: 375)
        li{
            
            font-size: 10px;
        }
    }
`;
export default ResumeItem;
