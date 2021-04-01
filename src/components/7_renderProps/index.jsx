import React, { Component } from 'react'
import './index.css'

export default class Parent extends Component {
  state = {
    userName: 'zhangsan'
  }
  render() {
    const {userName} = this.state
    return (
      <div className="parent">
        <h4>我是Parent组件</h4>
        <h5>名字是：{userName}</h5>
        <A render={(age)=><B age={age}/>}/>
      </div>
    )
  }
}

class A extends Component{
  state = {
    age: 25
  }
  render() {
    const {age} = this.state
    return (
      <div className="a">
        <h4>我是A组件</h4>
        {this.props.render(age)}
      </div>
    )
  }
}

class B extends Component{
  render() {
    return (
      <div className="b">
        <h4>我是B组件</h4>
        <h5>我接收到的年龄是：{this.props.age}</h5>
      </div>
    )
  }
}