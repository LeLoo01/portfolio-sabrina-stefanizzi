import  {CardType}  from "./types";



import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextTitle,
  CardTextBody,
  CardStatWrapper,
  CardStats,
  LinkText, 
  
} from "./cardStyles";

import Tilt from "react-parallax-tilt";

const Card = ({ title, imgUrl, txtBody, linkWeb, linkGit }) => {
  return (

    <div>
    <Tilt>
      <CardWrapper>
        <CardImage background={imgUrl} />
        <CardTextWrapper>
          <CardTextTitle>{title}</CardTextTitle>
          <CardTextBody>{txtBody} </CardTextBody>
          
        </CardTextWrapper>
        <CardStatWrapper>
        {/* TODOFaire en sorte que sur les 2 dernière cards il n'y ai qu'un seul bouton qui renvoi sur la page correspondante */}
          <CardStats>
            <LinkText href= {linkWeb} target='_blank'>WebSite</LinkText>
          </CardStats>
          <CardStats>
            <LinkText href={linkGit} target='_blank'>Github</LinkText>
          </CardStats>
        </CardStatWrapper>
      </CardWrapper>
     
    </Tilt>
    </div>
    
  );
  
};




export default Card;