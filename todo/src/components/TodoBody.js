import React, { Component } from 'react';

import TodoItems from './TodoItems';

function TodoBody(props, todoItems){
    if (props.viewMode === "all"){
        todoItems.map((item, index)=>{
            return (
                <TodoItems/>

            )
        })
    }
}