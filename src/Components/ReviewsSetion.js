import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ReviewItem from '../Components/ReviewItem';
import sedisa from '../img/sedisa.png';
import medisochow from '../img/medisochow.png';

function ReviewsSetion() {
    return (
        <ReviewsStyled>
            <Title title={'Reviews From Customers'} span={'Reviews From Customers'} />
            <InnerLayout>
                <div className="reviews">
                    <ReviewItem 
                        image={sedisa}
                        text={'"He Provides Excelent Service, Always Updating Us On Any Changes To Our WebPage And Adapting To Our Needs. We Will Be Looking Forward To Work With Him Again"'} 
                    />
                    <ReviewItem
                        image={medisochow} 
                        text={'"We Needed A Good E-Commerce WebPage To Present Our Merchandise, But We Had A Small Budget. He Proposed Really Interesting Aproaches To Minimise Expenses And Deliver A WebPage That We Are Now Proud To Show To Our Customers "'} 
                    />
                    
                </div>
            </InnerLayout>
        </ReviewsStyled>
    )
}

const ReviewsStyled = styled.section`
    .reviews{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default ReviewsSetion;
