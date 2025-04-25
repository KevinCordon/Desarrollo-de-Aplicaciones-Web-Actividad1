import './App.scss';
import Item from './Components/Item/Item'
import Menu from './Components/Navbar/Navbar'
import GoalForm from './Components/GoalForm/GoalForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Container fluid>
      <Row>
        <Col>
        <GoalForm></GoalForm>
        </Col>
        <Col>
        <Item></Item>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
