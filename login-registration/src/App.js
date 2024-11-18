import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from './components/Header/Header';
import BlogListCard from './components/BlogListCard/BlogListCard';
import blogs from './blog-data';




function App() {
    let headerinfo = {"email":"a@a.com","phn":"123456"}
    return (
        <div>
            <Header headerinfo={headerinfo} cname="popcorn.inc">
                <h1> Header in App.js</h1>
            </Header>
            <Container>
                <Row>
                    { blogs.map((blog,i)=>{

                        return (
                            <BlogListCard blog={blog} key={i}/>
                        )
                    })}
                </Row>
            </Container>
            
        </div>
    );
}

export default App;
