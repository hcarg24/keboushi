<?php
/* Template Name: アーカイブページ用 */
get_header(); ?>
    
    <main class="archive">
      <h1><?php the_title(); ?></h1>
  
      <section class="box a-arrow">
        <ul class="year-link">
          <li><a href="#2017">2017年度</a></li>
          <li><a href="#2018">2018年度</a></li>
          <li><a href="#2019">2019年度</a></li>
          <li><a href="#2020">2020年度</a></li>
        </ul>
      </section>
  
      <section class="box effect-fade">
        <ul class="year-item">
          <?php
            $paged = get_query_var('paged')? get_query_var('paged') : 1;
            $wp_query = new WP_Query();
            $my_posts = array(
              'post_type' => 'archive',
              'paged' => $paged,
              'post_status' => 'publish',
              'posts_per_page'=> '10',
            );
            $wp_query->query( $my_posts );
            if( $wp_query->have_posts() ): while( $wp_query->have_posts() ) : $wp_query->the_post();
          ?>
          
            <li>
              <article <?php post_class(); ?>>
              <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
              </article>
            </li>
          
          <?php endwhile; // 投稿ループ終了 ?>
        </ul>
      </section>

      <section class="box">
        <!-- ページネーション開始 -->
        <?php if(function_exists('wp_pagenavi')) { wp_pagenavi(array('query' => $wp_query)); } ?>
        <!-- ページネーション終了 -->
      </section>

      <?php else: // もし、表示すべき投稿がなかったら ?>
      <p>あてはまる情報はまだありません。</p>
      <?php endif; wp_reset_postdata(); // 条件分岐終了 ?>
    </main>
  
  
    <?php get_footer(); ?>