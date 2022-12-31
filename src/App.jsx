import { useRef, useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('')
  const [display, setDisplay] = useState('0')

  const operatorRegExp = /[\/\*\-\+]$/
  const operatorSecondRegExp = /[\/\*\-\+]\-$/
  const minusRegExp = /\-\-$/
  const decimalRegExp = /[\d]*\.[\d]*$|\.$/

  const enterNum = (num) => {
    setInput(prevInput => prevInput + num)

    if (display === '0') {
      setDisplay(prevDisplay => prevDisplay = num)
    } else {
      setDisplay(prevDisplay => prevDisplay + num)
    }
  }

  const enterOperator = (operator) => {
    if (input === '' || input === '-') {
      
    } else if (input !== '' && !operatorSecondRegExp.test(input) ) {
      if (operatorRegExp.test(input)) {
        setInput(prevInput => {
          let arr = prevInput.split('')
          arr.pop()
          return arr.join('') + operator
        })
      } else {
        setInput(prevInput => prevInput + operator)
        setDisplay(prevDisplay => prevDisplay = '')
      }
    } else {
      setInput(prevInput => {
        let arr = prevInput.split('')
        arr.pop()
        arr.pop()
        return arr.join('') + operator
      })
    }
  }

  const enterMinusOperator = () => {
    if (input === '-' || operatorSecondRegExp.test(input)) {

    } else if (!minusRegExp.test(input)) {
      setInput(prevInput => prevInput + '-')
      setDisplay(prevDisplay => prevDisplay = '')
    }
  }

  const enterZero = () => {
    if (input !== '' && !operatorRegExp.test(input)) {
      setInput(prevInput => prevInput + '0')
      setDisplay(prevDisplay => prevDisplay + '0')
    } else {
      
    }
  }


  const enterDecimal = () => {
    if (input === '') {
      setInput(prevInput => '0.')
      setDisplay(prevDisplay => '0.')
    } else if (decimalRegExp.test(input)) {

    } else {
      if (operatorRegExp.test(input)) {
        setInput(prevInput => prevInput + '0.')
        setDisplay(prevDisplay => prevDisplay + '0.')
      } else {
        setInput(prevInput => prevInput + '.')
        setDisplay(prevDisplay => prevDisplay + '.')
      }
    }
  }

  const clear = () => {
    setInput(prevInput => prevInput = '')
    setDisplay(prevDisplay => prevDisplay = '0')
  }

  const calculate = () => {
    if (input === '') {

    } else if (operatorRegExp.test(input)||operatorSecondRegExp.test(input)) {
      if (operatorRegExp.test(input)) {
        setInput(prevInput => {
          let arr = prevInput.split('')
          arr.pop()
          return arr.join('')
        })
      } else if (operatorSecondRegExp.test(input)) {
        setInput(prevInput => {
          let arr = prevInput.split('')
          arr.pop()
          arr.pop()
          return arr.join('')
        })
      }
    } else {
      setInput(prevInput => eval(input))
      setDisplay(prevDisplay => eval(input))
    }
  }

  return (
    <div className='calculator'>
      <div className='display-column'>
        <div id="input">{input}</div>
        <div id="display">{display}</div>
      </div>

      <div className='buttons-row'>
        <div id="clear" onClick={clear}>AC</div>
        <div id="brand">@CL84Dev</div>
      </div>

      <div className='buttons-row'>
        <div className='buttons' id="seven" onClick={() => enterNum('7')}>7</div>
        <div className='buttons' id="eight" onClick={() => enterNum('8')}>8</div>
        <div className='buttons' id="nine" onClick={() => enterNum('9')}>9</div>
        <div className='buttons' id="divide" onClick={() => enterOperator('/')}>/</div>
      </div>

      <div className='buttons-row'>
        <div className='buttons' id="four" onClick={() => enterNum('4')}>4</div>
        <div className='buttons' id="five" onClick={() => enterNum('5')}>5</div>
        <div className='buttons' id="six" onClick={() => enterNum('6')}>6</div>
        <div className='buttons' id="multiply" onClick={() => enterOperator('*')}>X</div>
      </div>

      <div className='buttons-row'>
        <div className='buttons' id="one" onClick={() => enterNum('1')}>1</div>
        <div className='buttons' id="two" onClick={() => enterNum('2')}>2</div>
        <div className='buttons' id="three" onClick={() => enterNum('3')}>3</div>
        <div className='buttons' id="subtract" onClick={enterMinusOperator}>-</div>
      </div>

      <div className='buttons-row bottom'>
        <div className='buttons' id="decimal" onClick={enterDecimal}>.</div>
        <div className='buttons' id="zero" onClick={enterZero}>0</div>
        <div className='buttons' id="equals" onClick={calculate}>=</div>
        <div className='buttons' id="add" onClick={() => enterOperator('+')}>+</div>
      </div>

    </div>
  )
}

export default App;
