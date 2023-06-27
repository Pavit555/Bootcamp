import React from 'react';
import './App.css';
//import Header from './components/head';
import RegistrationForm from './components/reg-form'

class MyMessage extends React.Component {
  render() {
    return <div><h1>I am a {this.props.name}</h1></div>;
  }
}
function App() {
    return (
      <div>
        <h1> Hello React!! </h1>
        <p> I don't react to react </p>
        {/* using our component here */}
        <MyMessage name="Hooman" />
        <h3>Registration</h3>
        <RegistrationForm/>
      </div>
    );
}
 
export default App;

