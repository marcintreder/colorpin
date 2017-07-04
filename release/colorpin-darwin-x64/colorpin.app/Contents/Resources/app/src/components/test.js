// http://scg.ar-ch.org/

$(function() {

  var prevColor = null;
  var prevPercent = null;

  $(window).load(function() {
    $(".color input").val("dd2222");
    $(".percent input").val("5");
    $(".color input").select();
  	sassColor();
  });

  $('.percent input, .color input').keyup(function() {
    sassColor();
  });

  function sassColor(){

    var color = $(".color input").val();

    // 入力チェック
    if($('.color input').val().length == 6 && !$('.percent input').val() == ""){

      // 2回目以降要素追加されるのをリセット
      $(".colorBox").html("");

      var percent = $(".percent input").val();
      var percent = parseInt(percent);

      var t = tinycolor(color);
      var hsl = t.toHsl();  // { h: 0, s:1, l: 0.5 }

      // hexへの変換に使用、連想配列 toHslStringだと取ってこれない？
      var colorH = hsl["h"];
      var colorS = hsl["s"] * 100;
      var colorL = hsl["l"] * 100;

      $("#lighten").append("<h2>lighten</h2>");
      $("#darken").append("<h2>darken</h2>");
      $("#saturate").append("<h2>saturate</h2>");
      $("#desaturate").append("<h2>desaturate</h2>");

      for (i = 0; i < 100; i = i + percent){

        // lighten計算のため
        var lighten = colorL + i;
        var lightColor = tinycolor("hsl(" + colorH + ", " + colorS + "%, " + lighten + "%)");
        var lightHex = lightColor.toHexString(); // 見本の色とカラーコード表示に

        // darken計算のため
        var darken = colorL - i;
        var darkColor = tinycolor("hsl(" + colorH + ", " + colorS + "%, " + darken + "%)");
        var darkHex = darkColor.toHexString(); // 見本の色とカラーコード表示に

        // saturate計算のため
        var saturate = colorS + i;
        var satColor = tinycolor("hsl(" + colorH + ", " + saturate + "%, " + colorL + "%)");
        var satHex = satColor.toHexString(); // 見本の色とカラーコード表示に

        // desaturate計算のため
        var desaturate = colorS - i;
        var desColor = tinycolor("hsl(" + colorH + ", " + desaturate + "%, " + colorL + "%)");
        var desHex = desColor.toHexString(); // 見本の色とカラーコード表示に

        // HSLのLが100%のとき複数出るのを阻止
        if(lighten <= 100){
          $("#lighten").append("<div class='c" + i + "'><span style='background: " + lightHex + "'></span><p>" + i + "%<br>" + lightHex + "</p></div>").hide().delay(0).fadeIn("fast");
        }

        // HSLのLが0%のとき複数出るのを阻止
        if(darken >= 0){
          $("#darken").append("<div class='c" + i + "'><span style='background: " + darkHex + "'></span><p>" + i + "%<br>" + darkHex + "</p></div>").hide().delay(50).fadeIn("fast");
        }

        // HSLのSが100%のとき複数出るのを阻止
        if(saturate <= 100){
          $("#saturate").append("<div class='c" + i + "'><span style='background: " + satHex + "'></span><p>" + i + "%<br>" + satHex + "</p></div>").hide().delay(100).fadeIn("fast");
        }

        // HSLのSが0%のとき複数出るのを阻止
        if(desaturate >= 0){
          $("#desaturate").append("<div class='c" + i + "'><span style='background: " + desHex + "'></span><p>" + i + "%<br>" + desHex + "</p></div>").hide().delay(150).fadeIn("fast");
        }
      }

      if(prevColor != color){
        // 色履歴
        prevColor = color;
        $("#history").prepend("<span style='background: #" + color + "'></span>").hide().fadeIn("fast");
      }

      // 選択した色を入れる
      $("#history span").click(function() {
        var selectColor = $(this).css("backgroundColor");

        var selectColor = tinycolor(selectColor);
        var hexSelectColor = selectColor.toHexString();
        var hexSelectColor = hexSelectColor.replace(/#/g,'');
        prevPercent = percent;
        $(".color input").val(hexSelectColor);
        $(".percent input").val(percent);
        sassColor();
        return false;
      });

      return false;
    }
  };

  // input focus
  $("input").mousedown(function() {
    if(!$(this).is(":focus")){
      $(this).select().focus();
      return false;
    }
  });



});
