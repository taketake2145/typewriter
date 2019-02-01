cmn = {};
cmn.typewriter = function(_tgt) {
  var _tgt = _tgt,
      _tgt_words = _tgt.data("words"),
      t = 0;
  
  /**
   * 文字をセットする
   */
  function set_word(word, i) {
    
    // 間隔調整する
    t = t + Math.floor(Math.random()*350) + 100;
    
    setTimeout(function(){
      _tgt.append(word);
      
      // 最後の文字の場合、文末のバーを削除する
      if (i == _tgt_words.length - 1) {
        setTimeout(function(){
          _tgt.removeClass("typewriter");          
        }, 1500);
      }      
    }, t);
  }
  
  // 文末のバーを追加する
  _tgt.addClass("typewriter");
  
  // 1秒後に、一文字ずつに分ける
  setTimeout(function(){    
    for (var i in _tgt_words) {
      set_word(_tgt_words[i], i);
    }    
  }, 1500); 
}
