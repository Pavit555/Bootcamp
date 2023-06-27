import React from 'react';
import './App.css';

import Card from './Card'

class MyMessage extends React.Component {
  render() {
    return <div><h1>I am a {this.props.name}</h1></div>;
  }
}
function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

function Profile({ person, imageSize = 70 }) {

  const imageSrc = getImageUrl(person)

  return (
    <Card>
    <section className="profile">
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={imageSrc}
        alt={person.name}
        width={imageSize}
        height={imageSize}
      />
        <p>
          <b>Profession:</b> {person.profession}
        </p>
        <p>
          <b>Awards: {person.awards.length} </b>
          ({person.awards.join(', ')})
        </p>
        <p>
          <b>Discovered: </b>
          {person.discovery}
        </p>
    </section>
    </Card>
  )
}
 

function Gallery() {
  return (
    <div>
      <Profile person={{
        imageId: 'szV5sdG',
        name: 'Maria Skłodowska-Curie',
        profession: 'physicist and chemist',
        discovery: 'polonium (chemical element)',
        awards: [
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ],
      }} />
      <Profile person={{
        imageId: 'YfeOqp2',
        name: 'Katsuko Saruhashi',
        profession: 'geochemist',
        discovery: 'a method for measuring carbon dioxide in seawater',
        awards: [
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ],
      }} />
      <Profile person={{
        imageId: 'mYlwkvK',
        name: 'Stephen Hawking',
        profession: 'physicist',
        discovery: 'black holes emit radiation',
        awards: [
          'Albert Einstein Award',
          'Order of the British Empire',
          'Franklin Medal'
        ],
      }} />
    </div>
  );
}
function App() {
    return (
      <div>
        <h1> Nobel People </h1>
        <p> who couldn't react to react </p>
        {/* using our Gallery component here */}
        <div class="cards">
          <Gallery/>
        </div>
      </div>
    );
}
export default App;
