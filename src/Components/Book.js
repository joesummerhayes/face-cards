import React from 'react';
import './app.css';
import Button from './Button';

class Book extends React.Component {

    state = {
        count: 0,
        showInfo: false
    }

    addCount = () => {
        this.setState({ count: this.state.count + 1 })
    }
    lowerCount = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 })
        }

    }

    resetCount = () => {
        this.setState({ count: 0 })
    }

    toggleInfo = () => {
        this.setState({ showInfo: !this.state.showInfo })
    }




    render() {

        const checkInfo = (info) => {
            if (info === true) {
                return (
                    <p>{description}</p>
                )
            } else {
                return null
            }
        }

        const { handleDelete, id, title, author, image, description } = this.props;
        return (
            <article className="book">
                <img src={image} alt="book" width="150" />
                <div>
                    <h2>{title}</h2>
                    <h5>{author}</h5>
                    <button onClick={this.addCount}>add count</button>
                    <button onClick={this.resetCount}>reset count</button>
                    <button onClick={this.lowerCount}>lower count</button>
                    <div>{this.state.count}</div>
                    <button onClick={() => handleDelete(id)}>delete</button>
                    <button onClick={this.toggleInfo} >Show more info</button>
                    {checkInfo(this.state.showInfo)}


                </div>

            </article >
        )
    }
}

export default Book;