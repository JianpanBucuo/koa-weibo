// ajax
function ajaxEvent(method,url, data, callback) {
  $.ajax({
    type: method,
    url: url,
    data: data,
    dataType:'json',
    async: false,
    success: function(res){
      callback && callback(res)
    },
    error: function(e){
      console.log(e)
    }
  })
}
