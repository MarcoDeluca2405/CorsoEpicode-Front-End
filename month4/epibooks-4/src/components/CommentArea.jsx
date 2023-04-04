import { useEffect, useState } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'
let key="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYzY2ZjY4MzQzMTAwMTRkZWE3N2UiLCJpYXQiOjE2ODA1MjQ5MTEsImV4cCI6MTY4MTczNDUxMX0.2oZYBhfhQhXaCbaDznH8hSqN7XVcpu9midKv8npjpO4";

const CommentArea= (props)=> {


  const [comments,setComments]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const [isError,setIsError]=useState(false);


  // componentDidMount = async () => {
  //   try {
  //     let response = await fetch(
  //       'https://striveschool-api.herokuapp.com/api/comments/' +
  //         this.props.asin,
  //       {
  //         headers: {
  //           Authorization: ' your-auth-token-goes-here',
  //         },
  //       }
  //     )
  //     console.log(response)
  //     if (response.ok) {
  //       let comments = await response.json()
  //       this.setState({ comments: comments, isLoading: false, isError: false })
  //     } else {
  //       console.log('error')
  //       this.setState({ isLoading: false, isError: true })
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     this.setState({ isLoading: false, isError: true })
  //   }
  // }

  const getBooks = async () => {
    
  
      setIsLoading(true)

      try {
        let response = await fetch(
          'https://striveschool-api.herokuapp.com/api/comments/'+props.asin,
          {
            headers: {
              Authorization: key,
            },
          }
        )
        console.log(response)
        if (response.ok) {
          let comments = await response.json()
          setComments(comments)
          setIsLoading(false)
          setIsError(false)
        } else {
          console.log('error')
         
          setIsLoading(false)
          setIsError(true)
        }
      } catch (error) {
        console.log(error)
        setIsLoading(false)
        setIsError(true)
      }
    }
  


  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{getBooks()},[props.asin]);

  
    return (
      <div className="text-center">
        {isLoading && <Loading />}
        {isError && <Error />}
        <AddComment asin={props.asin} />
        <CommentList commentsToShow={comments} />
      </div>
    )
  
}

export default CommentArea
