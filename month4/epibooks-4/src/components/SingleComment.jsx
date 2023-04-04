import { Button, ListGroup } from 'react-bootstrap'
let key="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYzY2ZjY4MzQzMTAwMTRkZWE3N2UiLCJpYXQiOjE2ODA1MjQ5MTEsImV4cCI6MTY4MTczNDUxMX0.2oZYBhfhQhXaCbaDznH8hSqN7XVcpu9midKv8npjpO4";


const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'DELETE',
          headers: {
            Authorization: key,
          },
        }
      )
      if (response.ok) {
        alert('Comment was deleted successfully!')
      } else {
        alert('Error - comment was NOT deleted!')
      }
    } catch (error) {
      alert('Error - comment was NOT deleted!')
    }
  }

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button
        variant="danger"
        className="ml-2"
        onClick={() => deleteComment(comment._id)}
      >
        Delete
      </Button>
    </ListGroup.Item>
  )
}

export default SingleComment
