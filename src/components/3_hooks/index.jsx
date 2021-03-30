import React from 'react'
import ReactDom from 'react-dom'

/* class Demo extends React.Component {
  state = {
    count: 0
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({count: this.state.count+1})
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  increment = () => {
    this.setState(state => ({count: state.count+1}))
  }
  unMount = () => {
    ReactDom.unmountComponentAtNode(document.getElementById('root'))
  }
  render() {
    return (
      <div>
        <h3>当前求和为{this.state.count}</h3>
        <button onClick={this.increment}>点我+1</button>
        <button onClick={this.unMount}>卸载组件</button>
      </div>
    )
  }
} */

function Demo() {

  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    let timer = setInterval(() =>{
      setCount(count => count+1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  function increment(){
    // setCount(count+1)
    setCount(count => count+1)
  }

  function unMount() {
    ReactDom.unmountComponentAtNode(document.getElementById('root'))
  }

  return (
    <div>
      <h3>当前求和为：{count}</h3>
      <button onClick={increment}>点我+1</button>
      <button onClick={unMount}>卸载组件</button>
    </div>
  )
}

export default Demo
