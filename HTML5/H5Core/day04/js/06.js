var num = 0;
onmessage = function (event) {
  for (let i = 1; i <= event.data; i++) {
    num += i;
  }
  return num;
}

postMessage(onmessage());

// postMessage = function () {

// };
