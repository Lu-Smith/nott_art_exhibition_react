import React, {useState} from 'react';
import Gallery from './Gallery';
import Description from './Description';
import { Container, Title } from './styles/Main.styled';

const Main = (props) => {

  const [openImage, setOpenImage] = useState(false);

  const handleClick = () => {
    setOpenImage(!openImage);
  }

      if (props.image.id === 1) {
          return (
            <Container id={props.image.id}>
              <div onClick={handleClick}>
                <Title>Search though time</Title>
                <Gallery image={props.image}/>
              </div>
              {!openImage ? <div onClick={handleClick} className="openImage">
                <p> "Nott" is an art collection created by Scottish painter, Luna Smith, that takes the viewer on a mesmerizing journey through the endless loop of wonders. This collection of fifteen oil paintings explores the connection between the past, present, and future through symbolic imagery of the personalization of the Night from Norse mythology, and through the lens of Spirits, Goddesses, and Stones. The limited symphony of colors, with hues reminiscent of the night sky, creates a sense of depth and mystery in our Universe. Each painting is a window into a different world, where various shapes and souls come to life, inviting the viewer to discover their hidden meanings.</p>
                <p>The Spirits are depicted in a way that makes them seem almost ethereal as if they're fleeting apparitions of the night. The Goddesses’ shapes exude grace and power, capturing their divine essence. The Stones are rendered with the power of the brushstrokes and finger-work of the painter, each one imbued with its own unique energy. </p>
                <p>Luna Smith has masterfully woven hidden stars throughout the paintings, adding a sense of magic and wonder. Her use of color and symbolism is nothing short of breathtaking, creating an art collection that will leave the viewer in awe and wonder. The Nott collection is a must-see for anyone interested in Norse mythology, art, time, and the beauty of the night sky.</p>
              </div> : <></>}
            </Container>
          )
        } else if (props.image.id % 2 === 0) {
          return (
            <>
            <Container id={props.image.id}>
               <div onClick={handleClick}>
                 <Description description={props.image.description} />
               </div>
               {openImage ?
               <div onClick={handleClick} className="openImage">
                <Description description={props.image.description} />
               </div> : <></>}
            </Container>
            </>
          )
        } else {
          return (
            <Container id={props.image.id}>
                <div onClick={handleClick}>
                  <Gallery image={props.image}/>
                </div> 
                {openImage ?
                <div onClick={handleClick} className="openImage">
                  <Gallery image={props.image}/>
                </div> : <></>}               
            </Container>
          )
        }  

}

export default Main