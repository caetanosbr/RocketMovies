import { Container } from "./styles";

import { Tag } from "../Tag";

import { FiStar } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

export function Note({ data, ...rest }){

    const handleRenderStars = () => {
        const filledStars = Math.min(data?.rating || 0, 5);
        const emptyStars = 5 - filledStars;
    
        const stars = [];
    
        for (let i = 0; i < filledStars; i++) {
          stars.push(<AiFillStar key={`filled-${i}`} />);
        }
    
        for (let i = 0; i < emptyStars; i++) {
          stars.push(<FiStar key={`empty-${i}`} />);
        }
    
        return stars;
      };

    return(
        <Container {...rest}>
            <h1>{data.title}</h1>

            <div className="score">
                {handleRenderStars()}
            </div>
            
            <p>{data.description}</p>

            {
                data.tags &&  
                <footer>
                    {
                        data.tags.map( tag => 
                            <Tag key={tag.id} title={tag.name}/>
                        )
                    }
                </footer>
            }
        </Container>
    )
}