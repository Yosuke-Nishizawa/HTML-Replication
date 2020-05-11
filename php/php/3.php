<?= 'テストです。'; ?>
<?php
$i = function($v) { return $v; };
foreach (range(3, 1) as $v) {
  echo "{$i(sprintf('%02d', $v))}<br>";
}
unset($v);
?>
<?php foreach(range(3, 1) as $v) { ?>
<?= "$v"; ?>
<?php } ?>
<?php 
class News 
{
  public $tag;
  public $detailTxt;
  public function __construct($tag, $detailTxt) {
    $this->tag = $tag;
    $this->detailTxt = $detailTxt;
  }
}
$news = new News('EVENT', '学生証提示で');
echo $news->tag;
echo $news->detailTxt;

?>