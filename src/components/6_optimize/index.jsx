import React, { Component, PureComponent } from 'react'

export default class Parent extends PureComponent {
  state = {
    carName: 'Mazda'
  }
  changeCar = () => {
    this.setState({carName: 'BMW'})
    // this.setState({})
  }
  // shouldComponentUpdate(nextProps,nextState) {
  //   console.log(this.props, this.state)   // 目前的props和state 
  //   console.log(nextProps, nextState)   //  接下来要变化的目标props，目标state
  //   return this.state.carName !== nextState.carName
  // }
  render() {
    console.log('render - Parent');
    const {carName} = this.state
    return (
      <div className="parant">
        <h4>我是Parent组件</h4>
        <h5>车的名字是：{carName}</h5>
        <button onClick={this.changeCar}>点我换车</button>
        <Child carName={carName}/>
      </div>
    )
  }
}

class Child extends PureComponent{
  render() {
    console.log('render - Child');
    return(
      <div className="child">
        <h4>我是Child组件</h4>
        {/* <h5>我接收到车的名字是：{this.props.carName}</h5> */}
      </div>
    )
  }
}
