<?php
  $i = function($v) { return $v; };
?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <!-- IEの最新バージョン表示-->
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <!-- ブラウザ表示時の拡大縮小を防ぎ、画面いっぱいに表示-->
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>クロッカンシュー ザクザク [CROQUANTCHOU ZAKUZAKU]</title>
  <!-- 検索結果の説明欄-->
  <meta name="description" content="クロッカンシューザクザクは、北海道で生まれたクロッカンシュークリームの焼きたて専門店です。">
  <!-- 電話リンク無効 -->
  <meta name="format-detection" content="telephone=no">
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/base.css">
  <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.4/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.4/Draggable.min.js"></script>
  <script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
  <script src="https://kit.fontawesome.com/76e234632d.js" crossorigin="anonymous"></script>
  <script src="js/animation.js" defer></script>
</head>
<body>
  <section id="top" class="index_section index_top">
    <div class="index_section_bg">
      <div class="index_top_bgs">
        <?php
          foreach(range(3, 1) as $v) {
            $num = sprintf('%02d', $v);
            echo "<div class=\"index_top_bg_{$num}\"></div>";
          }
        ?>
      </div>
      <!-- /.index_top_bgs -->
    </div>
    <div class="index_top_mask"></div>
    <!-- /.index_section_bg -->
    <div class="index_section_content">
      <!-- <svg class="index_top_logo"></svg> -->
      <h1 class="header__logo">クロッカンシューザクザク[ZAKUZAKU]</h1>
    </div>
  </section>
  <!-- /#top-->
  <section id="news" class="index_section index_news">
    <h2 class="ttl_news">NEWS</h2>
    <div class="index_section_bg">
      <div class="index_news_bgs"><!--スライド群-->
        <a class="index_news_bg index_news_bg_01" href="#">
          <div class="index_news_bg_inner">
            <div class="index_news_bg_main">
              <p class="tag_news">EVENT</p>
              <div class="img_wrapper">
                <div class="img_news"></div>
              </div>
            </div>
            <div class="index_news_bg_detail">
              <p class="txt_news txt_desc">学生証提示でお得な「友ザク」キャンペーンをお見逃しなく！</p>
              <p class="txt_news link_details">詳細はこちら<i class="fas fa-chevron-right"></i></p>
            </div>
          </div>
        </a>
        <a class="index_news_bg index_news_bg_02" href="#">
          <div class="index_news_bg_inner">
            <div class="index_news_bg_main">
              <p class="tag_news">FLAVOR</p>
              <div class="img_wrapper">
                <div class="img_news"></div>
              </div>
            </div>
            <div class="index_news_bg_detail">
              <p class="txt_news txt_desc">「ホワイトチョコレートチョコレートザク」が登場！お友だちとのご来店でお得な「友ザク」も実施中！</p>
              <p class="txt_news link_details">詳細はこちら<i class="fas fa-chevron-right"></i></p>
            </div>
          </div>
        </a>
        <a class="index_news_bg index_news_bg_03" href="#">
          <div class="index_news_bg_inner">
            <div class="index_news_bg_main">
              <p class="tag_news">INFO</p>
              <div class="img_wrapper">
                <div class="img_news"></div>
              </div>
            </div>
            <div class="index_news_bg_detail">
              <p class="txt_news txt_desc">ザクザクLINE@での「友だち追加」のご案内</p>
              <p class="txt_news link_details">詳細はこちら<i class="fas fa-chevron-right"></i></p>
            </div>
          </div>
        </a>
      </div>
      <div class="container_news_arrow">
        <div class="arrow_news arrow_left"><i class="fas fa-chevron-left"></i></div>
        <div class="arrow_news arrow_right"><i class="fas fa-chevron-right"></i></div>
      </div>
    </div>
    <div class="list_news">
      <a href="https://zakuzaku.co.jp/news/">NEWS一覧<i class="fas fa-chevron-right"></i></a>
    </div>
  </section>
</body>
</html>