import styled from "styled-components";



export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 400px;
  grid-template-rows: 310px 310px 100px;
  grid-template-areas: "image" "text" "stats";
  background: #00000;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;

  
  
`;

export const CardImage = styled.div`<{ background: string }>
  grid-area: image;
  background-image: url(${({ background }) => background});
 
  background-size: contain;
  background-repeat: no-repeat;
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
  text-align: center ;
  
`;

export const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 2.5rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  margin-bottom: 25px;
  background-color: #fffaf2;
  
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  
`;

export const CardTextBody = styled.span`
  color: grey;
  font-size: 25px;
  font-weight: 300;

`;
//  ###   bas de card => liens + Bg 

export const CardStatWrapper = styled.div`
  grid-area: stats;
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  background: #9612EB
  
`;
export const CardStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: grey;
  padding: 10px;
  
`;

export const LinkText = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bolder;
  font-size: 25px;
  
`;
