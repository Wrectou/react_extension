import React, { Component } from 'react'

export default class Demo extends Component {

  state = {
    count: 0
  }

  increment = () => {
    // // 对象式setState
    // // 1、获取原来的count
    // const {count} = this.state
    // // 2、更新状态
    // this.setState({count: count + 1}, () => {
    //   console.log(this.state.count);
    // })

    // 函数式setState
    // this.setState((state, props) => {
    //   console.log(state, props);
    //   return {count: state.count+1}
    // }, () => {
    //   console.log(this.state.count);
    // })
    // this.setState(state => ({count: state.count+1}))

    // 对象式setState是函数式setState的简写方式（语法糖）
    // 使用原则：1、如果新状态不依赖于原装胎 ===> 使用对象方式
    //          2、如果新装依赖于原装胎 ===> 使用函数方式
    //          3、如果需要在setState执行后获取最新的状态数据，要在第二个callback函数中读取
  }

  render() {
    return (
      <div>
        <h3>当前求和为{this.state.count}</h3>
        <button onClick={this.increment}>点我+1</button>
      </div>
    )
  }
}
