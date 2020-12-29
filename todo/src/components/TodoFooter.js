import React, { Component } from 'react';

class TodoFooter extends Component {
    
    render(){
        const { todoItems, swapMode } = this.props;
        let remainItemsCount = todoItems.reduce((count, item)=> !item.is_Complete ? count+1 : count, 0);
        let completedItemCount = todoItems.length - remainItemsCount;
        return(
            <div className="footer">
                <span className="footer-left">{remainItemsCount} Items left</span>
                <div className="nav">
                    <button onClick={()=>swapMode('All')}>All</button>
                    <button onClick={()=>swapMode('Active')}>Active</button>
                    <button onClick={()=>swapMode('Completed')}>Completed</button>
                </div>
                {
                    completedItemCount ? <button 
                    className="footer-right" 
                    onClick={this.props.clearComplete}>Remove all completed items</button> : ''
                }
            </div>
        )
    }
}
export default TodoFooter;