import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BlogListCard({blog}) {

    let displayData = (name) =>{

        console.log('Button '+name)
    }

  return (
    <Card className="col-lg-4">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>
          {blog.body}
        </Card.Text>
        <Button variant="primary" onClick={()=>displayData(blog.id)}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BlogListCard;