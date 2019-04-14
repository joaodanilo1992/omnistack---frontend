import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import api from '../../services/api';

import "./style.css";


export default class Main extends Component {

    state = {
        newBox: ''
    };


    handleSubmit = async (event) => {
        event.preventDefault();

        const response = await api.post('boxes', {
            title: this.state.newBox
        });
        
        this.props.history.push(`/box/${response.data._id}`);
    }

    handleImputChange = (event) => {
        this.setState({
            newBox: event.target.value
        });
    }


    render() {
        return (

            <div id="main-container">
                <form onSubmit={this.handleSubmit}>
                    <img src={logo} alt=""/>
                    <input value={this.state.newBox} onChange={this.handleImputChange} type="text" placeholder="Criar box"/>
                    <button type="submit">Criar</button>
                </form>       
            </div>
        );
    }
}