import React, {Component} from "react";
import Todoitems from "./TodoItems";
import "./TodoList.css"

class Todolist extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        //Биндим методы которые используем в классе
    }

addItem(e) {
//Метод класса Todolist, который получает value из this._iuputElement.value
let itemArray = this.state.items;

if (this._iuputElement.value !=="") {
    itemArray.unshift({
        text: this._iuputElement.value,
        key: Date.now()
    });
}
// Если в this._iuputElement.value есть какое то значение записываем в массив itemArray и присваиваем key

this.setState({
    items: itemArray
});
// Записиваем новое значение в состояние
this._iuputElement.value = '';
// Обнуляем value
e.preventDefault();
//Откучаем перезагрузку form после срабатывания события onSubmit
}

deleteItem(key) {
// Метод для удаления элементов массива
    let filtredItems = this.state.items.filter((item) => {
        return (item.key !== key)
    })

// Возвращаем в filtredItems те items при условии   
// Если ключ из состояния item.key не равен key который пришел через пропсы из Todoitems
 
    this.setState({
        items: filtredItems
    });
//Записываем новое состояние
}

    render() {
        return (
            <div className = "todoListMain">
                <h1 className="title">Мои Задачи</h1>
                <div className="header">
                    <form onSubmit = {this.addItem}>
                        <input ref = {(a) => this._iuputElement = a}
                        placeholder="Введите задачу"></input>
                        <button type = "submit">ОК</button>
                    </form>
                </div>
                <Todoitems
                entries = {this.state.items}
                delete = {this.deleteItem}
                />
            </div>
        )
    }
}

export default Todolist;
