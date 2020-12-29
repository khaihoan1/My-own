import { Component } from 'react';
import classNames from 'classnames';
import tick from '../img/tick.svg'

class TodoHeader extends Component {

    render(){
        return(
            <div className={classNames("header")}>
                <img src={tick} alt={"hihi"} width={32} height={32}
                onClick={this.props.selectAll}
                />
                <input
                onChange={this.props.onChange}
                value={this.props.inputValue}
                onKeyUp={this.props.onKeyUp} 
                placeholder={"Add new item"}/>
            </div>
        )
        
    }
}

export default TodoHeader;