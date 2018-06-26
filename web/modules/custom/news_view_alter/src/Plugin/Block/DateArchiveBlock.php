<?php

namespace Drupal\news_view_alter\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'DateArchive' Block.
 *
 * @Block(
 *   id = "date_archive",
 *   admin_label = @Translation("Date Archive"),
 *   category = @Translation("Date Archive"),
 * )
 */
class DateArchiveBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
   public function build() {

      global $base_url;

      $query = db_query("SELECT COUNT(`entity_id`) as nodes, DATE_FORMAT(`field_news_date_value`, '%M %Y')as date_value, DATE_FORMAT(`field_news_date_value`, '%Y%m')as date_val FROM `node__field_news_date` GROUP BY DATE_FORMAT(`field_news_date_value`, '%M %Y'), DATE_FORMAT(`field_news_date_value`,'%Y%m')")->fetchAll();

      $output = array();
      foreach ($query as $key=>$value) {
        $output[$value->date_val] = $value->date_value . ' ('. $value->nodes .')';
      }

        return array(
            '#theme' => 'news_view_alter',
            '#title' => $test,
            '#data' => $output,
            '#baseurl' => $base_url,

        );
   }
}