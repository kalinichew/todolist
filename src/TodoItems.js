import React, {Component} from "react";

class TodoItems extends Component {
    constructor(props) {
        super(props)

        this.createTask = this.createTask.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }
//Обработчик события которые передает удаляемый key в props
    createTask(item){
        console.log(item);
        return <li onClick = {() => this.delete(item.key)} 
        key = {item.key}>{item.text}</li>
        
    }
// createTask формирует li для отображения в return, так же
// вешается событие onClick на li для удаления элемента

    render() {

        let listItems = this.props.entries.map(this.createTask);
        // Принимаем пропмы и мапим пришедший массив используя метод createTask
        return(
            <ul className = "theList">
                {listItems}
            </ul>
        )
    }

    
}

export default TodoItems;