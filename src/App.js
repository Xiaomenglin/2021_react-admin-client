import React, { Component } from 'react'
import { Button , message} from 'antd';

export default class App extends Component {
  handleClick = ()=>{
    message.success('成功了')
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleClick}>Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <br />
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </div>
      
      
    )
  }
}
