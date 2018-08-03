function test1() {
  alert('testアラート');
};
function getWH() {
  var obj = document.getElementById("tb1");
  var w = obj.clientWidth;  //getAttribute("width");
  var h = obj.clientHeight;  //getAttribute("height");
  alert("width:" + w + " height:" + h);
};

function insertCanvas() {

  var cvcontainer_elm = document.getElementById("cvcontainer"); //getElementById("cvcontainer");
  if ( ! cvcontainer_elm ) {
    alert("container elm がありません。");
    return null;
  };

  var obj = document.getElementById("tb1");
  var w = obj.clientWidth + "px"; //"mm" ;  //ここは、mmとしてもpxとしても、結果は同じだった。
  var h = obj.clientHeight + "px"; //"mm" ;

  var rect = obj.getBoundingClientRect();

  // alert("r.top=" + rect.top + "  r.bottom=" + rect.bottom); //どうも、デフォルトで、pxの単位で取得してるようだ。

  var cvelm1 = document.createElement("canvas");
  cvcontainer_elm.appendChild(cvelm1);
  cvelm1.id = "cv1"
  cvelm1.setAttribute("width",w);
  cvelm1.setAttribute("height",h);
  cvelm1.style.position = "absolute";
  cvelm1.style.zindex = "100";
  cvelm1.style.top  = rect.top + "px"; //+ "mm"; //"0.0mm";
  cvelm1.style.left = rect.left + "px" ; // + "mm"; //"0.0mm";

  //透明度
  cvelm1.globalAlpha = 0.0; 

  if ( cvelm1 ) {
    return cvelm1;
  } else {
    alert("cvelm1がnullのため返せません。");
    return null;
  };



};
function go_draw() {
  insertCanvas();
  do_draw();
};

function do_canvas() {
  var elm = insertCanvas();
  if ( elm ) {
    var ctx = elm.getContext('2d');
  } else {
    alert("canvas element がとれません。");
    return false;
  }
  //var ctx = insertCanvas().getContext('2d');
  // 描画
  if ( ctx ) {
    //ctx.fillStyle = 'rgba(192,80,77)' ; //赤
    //ctx.fillRect(0,0,100,100);
    var rect = elm.getBoundingClientRect();
    //alert("rect width=" + rect.width + "  rect height=" + rect.height);
    var offset = 1;
    if ( rect ) {
      // canvasの相対座標で描画
      ctx.beginPath();
      ctx.moveTo(0 + offset, 0 + offset);
      ctx.lineTo(rect.width - offset, 0 + offset);
      ctx.lineTo(rect.width - offset, rect.height - offset);
      ctx.lineTo(0 + offset, rect.height - offset);
      ctx.closePath();
      ctx.stroke();
    } else {
      alert("no canvas rect get");
    };

    /*
    alert("canvas要素のcontextがとれました。");
    ctx.beginPath();
    ctx.moveTo(20,20);
    ctx.lineTo(120,20);
    ctx.lineTo(120,120);
    ctx.lineTo(20, 120);
    ctx.closePath();
    ctx.stroke();
    */
  } else {
    alert("canvas要素のcontextがとれません");
    return false;
  };

};

function testcanvas() {

  var cvelm = document.getElementById('canvassample');

  if ( ! cvelm ||  ! cvelm.getContext ) {
    return false //alert("canvas get element error");
  };
  /*
  else {
    alert("canvas elm get OK.");
  }
  */
  var ctx = cvelm.getContext('2d');

  //alert("get context..");
  ctx.beginPath();
  ctx.moveTo(20,20);
  ctx.lineTo(120,20);
  ctx.lineto(120,120);
  ctx.lineTo(20, 120);
  ctx.closePath();
  ctx.stroke();

};
function draw() {
  /* canvas�v�f�̃m�[�h�I�u�W�F�N�g */
  var canvas = document.getElementById('canvassample');
  /* canvas�v�f�̑��݃`�F�b�N��Canvas���Ή��u���E�U�̑Ώ� */
  if ( ! canvas || ! canvas.getContext ) {
    return false;
  };
  /* 2D�R���e�L�X�g */
  var ctx = canvas.getContext('2d');
  /* �l�p���`�� */
  ctx.beginPath();
  ctx.moveTo(20, 20);
  ctx.lineTo(120, 20);
  ctx.lineTo(120, 120);
  ctx.lineTo(20, 120);
  ctx.closePath();
  ctx.stroke();
};
/*
onload = function() {
  testcanvas();
}
*/
