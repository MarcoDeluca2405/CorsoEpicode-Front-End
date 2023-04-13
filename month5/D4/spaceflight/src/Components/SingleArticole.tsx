import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import { ArticleSpaceType } from '../Interfaces/ArticleSpaceType';
import { useNavigate } from 'react-router-dom';

interface article{
  article:ArticleSpaceType
}

const SingleArticle = (props:article)=>{

const navigate = useNavigate()

return(
    <Container fluid>
<Card style={{ width: '80rem', height:'25rem' }} className='my-3'>
      <Card.Img variant="top" src={props.article.imageUrl} style={{width:"100%", height:"60%"}}/>
      <Card.Body>
        <Card.Title>{props.article.title}</Card.Title>
        <Card.Text>
          {props.article.summary}
          <p>publicato il : {props.article.publishedAt}</p>
        </Card.Text>
        <Button variant="primary" onClick={()=>{navigate(`/article/${props.article.id}`)}}>Vai nei dettagli</Button>
      </Card.Body>
    </Card>
    </Container>
    
)


}

export default SingleArticle