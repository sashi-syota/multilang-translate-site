function func1() {
  var inputText = encodeURIComponent(document.getElementById("input_message").value);
  var sourceLang = document.getElementById("source_lang").value;
  var targetLang = document.getElementById("target_lang").value;
  var apiurl = 'https://g01jt85502.execute-api.ap-northeast-1.amazonaws.com/api?input_text=' + inputText +
               '&source_lang=' + sourceLang + '&target_lang=' + targetLang;

  var request = new XMLHttpRequest();
  request.open('GET', apiurl, true);
  request.responseType = 'text';
  request.onload = function () {
    var data = this.response;
    document.getElementById("output_message").value = data;
  };
  request.send();
}

function func2() {
  document.getElementById("input_message").value = '';
  document.getElementById("output_message").value = '';
}
