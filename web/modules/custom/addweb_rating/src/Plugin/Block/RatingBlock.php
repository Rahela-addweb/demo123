<?php
namespace Drupal\addweb_rating\Plugin\Block;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\Cache\Cache;

/**
 * Provides a 'rating' block.
 *
 * @Block(
 *   id = "rating_block",
 *   admin_label = @Translation("Rating block"),
 *   category = @Translation("Custom rating block example")
 * )
 */

class RatingBlock extends BlockBase {
  /**
   * {@inheritdoc}
   */
  public function build() {
    $cache = \Drupal::service('page_cache_kill_switch')->trigger();
    return [
      '#theme' => 'addweb_rating',
       '#cache' => [
            'max-age' => 0,
         ]
    ];
  }
  
  //for set cache max-age 0.
   // public function getCacheMaxAge() {
   //   return 0;
   // }

}