new Promise((resolve, reject) => {
  setTimeout(() => reject('error'), 500);
})
  .catch(error => console.log('caught===', error))


// new Promise(() => { throw new Error('exception!'); })
//   .catch(error => console.log('caught!!!!!!!', error.message))


// new Promise((_, reject) => reject(new Error('woops')))
//   .catch(error => { console.log('caught-----------', err.message); });

process.on('unhandledRejection', error => {
  // Will print "unhandledRejection err is not defined"
  console.log('unhandledRejection', error.message);
});
