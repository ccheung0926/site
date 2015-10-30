angular.module('wall.compose', ['pw.canvas-painter'])

.controller('CanvasController', function($scope){
  $scope.publish = function(){
    var canvas = document.getElementById("pwCanvasTmp");
    var dataURL = canvas.toDataURL();
    var dataURLtoBlob = function(dataurl) {
      var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while(n--){
          u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], {type:mime});
    };
    console.log(dataURLtoBlob(dataURL));
  };
})