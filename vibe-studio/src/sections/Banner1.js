import React from 'react'
import styled from 'styled-components'



const Section = styled.section`
	min-height: 100vh;
	width: 80vw;
	margin: 0 auto;

	display: flex;
	justify-content: center;
	align-items: center;

	position: relative;
`;

const Container = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
`;

const Banner1 = () => {
  return (
    <Section>
        <Container>
            <Banner>
                <span>
                    
                </span>
            </Banner>
        </Container>
    </Section>
  )
}

export default Banner1