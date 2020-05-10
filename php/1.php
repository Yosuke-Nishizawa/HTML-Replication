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