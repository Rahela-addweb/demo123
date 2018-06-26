<?php
namespace Drupal\addweb_subscribe_data\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\Request;
use Drupal\Component\Utility\Html ;
use Drupal\Core\Database\Database;

class SubscriptionDataController extends ControllerBase {
  /**
   * Returns Search-Keyword List.
   *
   * @return string
   *   Return Table format data.
   */
function subscriptiondataPage() {

    //$conn = Database::getConnection();
    $selectQuery = "SELECT * FROM addweb_subscribe_data JOIN simplenews_subscriber WHERE addweb_subscribe_data.email_id = simplenews_subscriber.mail";
    $result = db_query($selectQuery)->fetchAll();

    foreach ($result as $resultkey => $resultvalue) {
      //$subscribe_mail[] = strtolower($resultvalue->mail);
     // $subscribe_mail = $resultvalue;
      $entity_id = $resultvalue->id;
      $subscribe_ip = $resultvalue->ip;
      $country = $resultvalue->country;
      $subscribe_mail = $resultvalue->mail;
      $status = $resultvalue->subscribe_user_satus;
      $ref_url = $resultvalue->ref_url;
      $date_time = $resultvalue->created;
      
      $datetime = date("d-m-Y H:i:sa",$date_time);
     
      $rows[] = array($entity_id, $subscribe_ip, $country, $subscribe_mail, $status, $ref_url, $datetime);
    }

    $header = array(t('ID'), t('IP'), t('Country'), t('Email'), t('Status'), t('URL'), t('Date'));
    $output = array(
    '#type' => 'table',    // Here you can write #type also instead of #theme.
    '#header' => $header,
    '#rows' => $rows
    );

    return $output;
   }
}