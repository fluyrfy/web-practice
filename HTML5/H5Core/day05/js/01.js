
onmessage = function (event) {
  var num = parseInt(event.data);
  var sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  postMessage(sum);
}



// postMessage = function () {

// };
