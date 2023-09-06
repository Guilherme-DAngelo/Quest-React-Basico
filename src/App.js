import './App.css';
import Text from './components/paragraph/paragraph.js'
import Button from './components/button/button.js'


function App() {
  return (
    <>
      <div className='container'>
        <div>
          <Text />
          <Text textColor='blue' />
          <Text textColor='red' text='Random Paragraph' />
        </div>

        <div>
          <Button />
          <Button label='Baixar CV' />
        </div>
      </div>
    </>
  )
}

export default App;