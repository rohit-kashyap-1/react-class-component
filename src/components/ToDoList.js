import React, { Component } from 'react'

export default class ToDoList extends Component {
    constructor(props){
        super(props)
        this.state = {items:[],value:""}
    }

    handleAdd  = () =>{
        let items = this.state.items
        this.setState({items:[...items,this.state.value]})
        console.log(this.state)
        this.setState({value:''})
    }
    handleInput = (e)=>{
        let value = e.target.value
        this.setState({value:value})
        
    }
    handleDelete = (e)=>{
        console.log('deleted')
    }
    render() {
        return (
            <section className='pt-5'>
                <div className='container'>
                    <h2>To do list in class component</h2>
                    <div className='row'> 
                        <div className='col-md-4'>
                            <div className='mb-3'>
                                <input type='text' className='form-control mb-3' placeholder='Enter todo' value={this.state.value} onChange={this.handleInput} />
                                <button className='btn btn-primary' onClick={this.handleAdd}>Add Item</button>
                            </div> 
                            <ul className='list-group' >
                              
                                {this.state.items!=null? this.state.items.map((item,index)=>{
                                    return (
                                        <li className='list-group-item d-flex align-items-center justify-content-between' key={index}>{item} <button className='btn btn-sm btn-danger' onClick={this.handleDelete}>Delete</button></li>
                                    )
                                }):''}
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}
