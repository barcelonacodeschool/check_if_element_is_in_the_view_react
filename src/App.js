import './App.css';

// install and import react-hook-match-media and the hook
import {useMatchMedia} from 'react-hook-match-media'
import useIsVisible from './hooks/useIsVisible.js'

// import useRef from react
import {useRef} from 'react'
function App() {

// create a ref for the paragraph which should trigger the background color change 
  const targetParagraph = useRef();
// pass it into our useIsVisible hook
  const targetParagraphVisible = useIsVisible(targetParagraph);

  const styles = {
    fullViewportContainer : {
      height: '100vh',
      width: '100vw',
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    },
    dynamicBackground : {
      // set the condition for the background color based on visibility of the paragraph in the view
      backgroundColor: targetParagraphVisible ? 'pink' : 'yellow'
    }
  }
  return (
    <div className="App">

    <section style={styles.fullViewportContainer}>
    <h1>First section</h1>
    <p>There is more content below the fold which is not currently visible in the viewport, scroll down</p>
    </section>

    <section style={{...styles.fullViewportContainer, ...styles.dynamicBackground}}>
    <h1>Second section</h1>

    {/*assign the ref to the paragraph*/}
    <p ref={targetParagraph}>It is initially yellow but as soon as this paragraph will be visible the background will change pink</p>
    </section>

    </div>
    );
}

export default App;
