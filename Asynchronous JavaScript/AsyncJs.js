
// Asynchronous JavaScript: 

function featchData(callback){
    setTimeout (() =>
    {
        callback("Data Featched!!! ");
    },2000);
}
featchData(result => {
    console.log(result);
});

// PRomises 
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data fetched!");
      }, 2000);
    });
  }
  
  fetchData()
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    });
  