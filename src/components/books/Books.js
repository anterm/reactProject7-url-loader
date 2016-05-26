import React, { Component } from 'react'

import styles from './books.css'

export default class Books extends Component {
  state = {
    books: ["PHP", "Javascript", "Ruby", "Python"]
  };
  
  render() {
    const books = this.state.books.map((book, i) => {
      return <li key={i}>{book}</li>
    })
    
    return <div className={styles.block}>
      <span className={styles.title}>Список книг: </span>
      <ul className={styles.book_list}>{books}</ul>
    </div>
  }
}