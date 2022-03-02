import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import CreateStudent from './components/create-student.component';
import EditStudent from './components/edit-student.component';
import StudentList from './components/student-list.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
				<header className="App-header">
					<Navbar bg="dark" variant="dark">
						<Container>
							<Navbar.Brand>
								<Link to={'/createStudent'} className="nav-link">
									CRUD App
								</Link>
							</Navbar.Brand>
							<Nav className="justify-content-end">
								<Nav>
									<Link to={'/createStudent'} className="nav-link">
										Create Student
									</Link>
								</Nav>
								<Nav>
									<Link to={'/studentList'} className="nav-link">
										Student List
									</Link>
								</Nav>
							</Nav>
						</Container>
					</Navbar>
				</header>
				<Container>
					<Row>
						<Col md={12}>
							<div className="wrapper">
								<Switch>
									<Route
										exact
										path="/"
										component={(props) => <CreateStudent {...props} />}
									/>
									<Route
										exact
										path="/createStudent"
										component={(props) => <CreateStudent {...props} />}
									/>
									<Route
										exact
										path="/editStudent/:id"
										component={(props) => <EditStudent {...props} />}
									/>
									<Route
										exact
										path="/studentList"
										component={(props) => <StudentList {...props} />}
									/>
								</Switch>
							</div>
						</Col>
					</Row>
				</Container>
			</Router>
    </div>
  );
}

export default App;
