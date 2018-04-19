export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return and action,
  // an object with property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}