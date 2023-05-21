import { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';

const fastForwardStyleContainer = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginRight: '20px',
};

const fastForwardStyle = {
  backgroundColor: 'black',
  borderColor: '#0F0',
};

const Home = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [fastForward, setFastForward] = useState(false);
  // this text must start with a space
  const fullText =
    " This application was developed entirely with the help of ChatGPT, OpenAI's language model. Through interactive conversations, the model assisted in providing helpful suggestions and insights, influencing key decision-making processes, and offering reliable solutions to encountered issues.";

  const completeText = () => {
    setFastForward(true);
  };

  useEffect(() => {
    let index = 0;
    setIsTyping(true);
    const timer = setInterval(() => {
      if (fastForward) {
        setText(fullText);
        setIsTyping(false);
        clearInterval(timer);
      } else {
        setText((prevText) => prevText + fullText.charAt(index));
        index++;
        if (index >= fullText.length) {
          setIsTyping(false);
          clearInterval(timer);
        }
      }
    }, 50);
    return () => clearInterval(timer);
  }, [fastForward]);

  return (
    <Container className="p-3">
      <h1 className="header" style={{ color: 'white' }}>
        Welcome to my github pages
      </h1>
      <h5>
        {text}
        {isTyping && <span className="cursor">|</span>}
      </h5>
      <br />
      {isTyping && (
        <div style={fastForwardStyleContainer}>
          <Button
            style={fastForwardStyle}
            onClick={completeText}
          >{`>>`}</Button>
        </div>
      )}
      <br />
    </Container>
  );
};

export default Home;
