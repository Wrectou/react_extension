import React from 'react'
import './index.css'

// context: 上下文    Provider：供应商    Consumer：消费者

// 创建Context对象
const MyContext = React.createContext()
const {Provider,Consumer} = MyContext
export default class A extends React.Component{
  state = {
    username: 'zhangsan',
    age: 25
  }
  render() {
    const {username,age} = this.state
    return(
      <div className="parent">
        <h3>我是A组件</h3>
        <h4>我的用户名是：{username}</h4>
        <Provider value={{username,age}}>
          <B />
        </Provider>
      </div>
    )
  }
}

class B extends React.Component{
  render() {
    return(
      <div className="child">
        <h3>我是B组件</h3>
        {/* <h4>我从A组件接收到的用户名是：</h4> */}
        <C />
      </div>
    )
  }
}

/* class C extends React.Component{
  // 声明接收context
  static contextType = MyContext
  render() {
    const {username,age} = this.context
    return(
      <div className="grand">
        <h3>我是C组件</h3>
        <h4>我从A组件接收到的用户名是：{username}，年龄是：{age}</h4>
      </div>
    )
  }
} */

class C extends React.Component{
  render() {
    return(
      <div className="grand">
        <h3>我是C组件</h3>
        <h4>
          我从A组件接收到的用户名是：
          <Consumer>
            { value => `${value.username}，年龄是：${value.age}`}
          </Consumer>
        </h4>
      </div>
    )
  }
}

// function C() {
//   return(
//     <div className="grand">
//       <h3>我是C组件</h3>
//       <h4>
//         我从A组件接收到的用户名是：
//         <Consumer>
//           {/* {
//             value => {
//               return <span>{value.username}，年龄是：{value.age}</span>
//             }
//           } */}
//           { value => `${value.username}，年龄是：${value.age}` }
//         </Consumer>
//       </h4>
//     </div>
//   )
// }