import classNames from 'classnames';
import { Component } from "react";
import './TodoItems.css';
import checkImg from '../img/check.svg';
import checkImgComplete from '../img/check-complete.svg';
import cancelIcon from '../img/close.svg';


class TodoItems extends Component {
    constructor(props){
        super(props);
        this.state = {
            isHovered: false
        };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onMouseEnter(){
        this.setState({
            isHovered: true
        });
    }
    onMouseLeave(){
        this.setState({
            isHovered: false
        });
    }

    render() {
        const { item, viewMode } = this.props;
        let url = checkImg;
        if (item.is_Complete){
            url = checkImgComplete;
        }
        if (viewMode === "all"){

        } else if (viewMode === "active"){

        } else {
            
        }
        return(
            <div className={classNames(
                "todoItems",
                {"todoItems-complete": item.is_Complete})}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                <img onClick={this.props.onClick} src={url} alt={'hihi'} width={32} height={32} />
                <p>{item.title}</p>
                {
                    this.state.isHovered && <img src={cancelIcon} alt={'remove'} width={12} height={12}
                    onClick={this.props.removeItem}       
                />
                }
            </div>
        )
    }
}

export default TodoItems;