import React from 'react';
import bookData from './bookData.js';
import Book from './Book.js';

class Booklist extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        books: bookData
                }
        }

        handleDelete = (id) => {
                console.log(id)
                console.log(this.state.books)
                const sortedBooks = this.state.books.filter((item) => item.id !== id)
                this.setState({ books: sortedBooks })

        }


        render() {
                return (
                        <section>
                                <h3>This is the booklist</h3>
                                {this.state.books.map((item) => {
                                        return (
                                                <Book
                                                        title={item.title}
                                                        image={item.image}
                                                        author={item.author}
                                                        id={item.id}
                                                        handleDelete={this.handleDelete}
                                                        key={item.id}
                                                        description={item.description}
                                                />
                                        )
                                })}
                        </section>
                )
        }
}

export default Booklist;