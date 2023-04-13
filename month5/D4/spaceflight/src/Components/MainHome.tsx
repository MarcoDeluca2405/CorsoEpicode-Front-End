import { Container,Row,Col } from "react-bootstrap"
import SingleArticle from "./SingleArticole"
import { useEffect, useState } from "react"
import { ArticleSpaceType } from "../Interfaces/ArticleSpaceType"





const MainHome= ()=>{
    const [article, setArticle]= useState<ArticleSpaceType[]>();

const getArticole=async()=>{

try {

    let res= await fetch("https://api.spaceflightnewsapi.net/v3/articles")
    let data= await res.json();
    setArticle(data)

} catch (error) {
    
}

}

useEffect(()=>{getArticole()},[])

return(
    <Container>
        <Row>
       
    {
       
        article?.map((el)=>{

            return (
                <Col xs={12} md={12} lg={12}>
        <SingleArticle key={el.id} article={el}/>
        </Col>
            )

        })

    }

        </Row>

    

    </Container>
)
}

export default MainHome