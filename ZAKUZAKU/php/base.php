<?php 
// News用クラス
class News 
{
  // タグ名
  public $tag;
  // 詳細テキスト
  public $detailTxt;
  public function __construct($tag, $detailTxt) {
    $this->tag = $tag;
    $this->detailTxt = $detailTxt;
  }
}


?>