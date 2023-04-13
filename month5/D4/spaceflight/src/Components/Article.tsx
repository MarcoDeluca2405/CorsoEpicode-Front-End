import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from "react-router-dom";
import { ArticleSpaceType } from "../Interfaces/ArticleSpaceType";
import SingleArticle from "./SingleArticole";



const Article = ()=>{

    const param=useParams();
    const [articles,setArticles]=useState<ArticleSpaceType|undefined>();
    console.log(param.id)
    const  getSingleArticle= async()=>{

        let res = await fetch("https://api.spaceflightnewsapi.net/v3/articles/"+param.id)
        let data= await res.json();
        setArticles(data);
    }

    useEffect(()=>{getSingleArticle()},[param.id])
    const navigate =useNavigate()

    return(

        <Container fluid>
            <Row>


                                <Col>
                               
                                                                     
                    { articles && <SingleArticle article={articles}  /> }
                                   
                                                         
                                </Col>

                <Button onClick={()=>{navigate("/")}} >Home</Button>
          
            </Row>
        

        </Container>


    )

}

export default Article