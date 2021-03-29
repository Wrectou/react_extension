import React from 'react'

// class Demo extends React.Component {
//   state = {
//     count: 0
//   }
//   increment = () => {
//     this.setState(state => ({count: state.count+1}))
//   }
//   render() {
//     return (
//       <div>
//         <h3>当前求和为{this.state.count}</h3>
//         <button onClick={this.increment}>点我+1</button>
//       </div>
//     )
//   }
// }

function Demo() {

  const [count, setCount] = React.useState(0)
  const [name, setName] = React.useState('tom')

  function increment(){
    // setCount(count+1)
    setCount(count => count+1)
  }

  function changeName(){
    setName('zhangsan')
  }

  return (
    <div>
      <h3>当前求和为：{count}</h3>
      <h3>名字是：{name}</h3>
      <button onClick={increment}>点我+1</button>
      <button onClick={changeName}>更改名称</button>
    </div>
  )
}

export default Demo
