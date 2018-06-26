<?php
namespace Drupal\addweb_rating\Controller;
use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\Request;
use Drupal\Core\Database\Database;

class RatingController extends ControllerBase {
 
function ratingPage() {

    $rating = \Drupal::request()->request->get('rating');
    $client = \Drupal::request()->request->get('currentrate');
    $rate_url = \Drupal::request()->request->get('rate_url');
    $selectQuery = "SELECT * FROM addweb_rating";
    $result = db_query($selectQuery)->fetchAll();
    foreach ($result as $key => $value) {
      $ip[] = $value->ip;
      $newclientCount[] = $value->total_client;
      $url_page[] = $value->url;
    }

  $userip = \Drupal::request()->getClientIp();
  $date = date("Y-m-d H:i:s");

$flag_qry = "SELECT COUNT(rateid) FROM addweb_rating WHERE ip='$rateip' AND 'url'='$rate_url'";
$flag_qry_result = db_query($flag_qry)->fetchField();

$client_total_data = "SELECT total_client FROM addweb_rating WHERE url='$rate_url'";
$client_total_count = db_query($client_total_data)->fetchAll();
        foreach ($client_total_count as $key_client_count => $value_client_count) {
          $clientCountfinal[] = $value_client_count->total_client;
        }
$end_count_total =  end($clientCountfinal);

if($flag_qry_result == 0 && in_array($rate_url, $url_page)) {
  $count = $end_count_total;
  $count++;
   \Drupal::database()->insert('addweb_rating')
           ->fields([
             'rating',
             'ip',
             'url',
             'total_client',
             'created',
           ])
           ->values(array(
             $rating,
             $userip,
             $rate_url,
             $count,
             $date
           ))
           ->execute();
}
elseif(!in_array($rate_url, $url_page) && in_array($userip, $ip)) {
  $count = 1231;
  $count++;
  \Drupal::database()->insert('addweb_rating')
           ->fields([
             'rating',
             'ip',
             'url',
             'total_client',
             'created',
           ])
           ->values(array(
             $rating,
             $userip,
             $rate_url,
             $count,
             $date
           ))
           ->execute();

}

elseif(!in_array($rate_url, $url_page) && !in_array($userip, $ip)) {
  $count = 1231;
  $count++;
  
 $data1[] = \Drupal::database()->insert('addweb_rating')
           ->fields([
             'rating',
             'ip',
             'url',
             'total_client',
             'created',
           ])
           ->values(array(
             $rating,
             $userip,
             $rate_url,
             $count,
             $date
           ))
           ->execute();
}


// get average
$query = "SELECT ROUND((rating),1) as averageRating FROM addweb_rating";
$result_query = db_query($query)->fetchAll();

foreach ($result_query as $key => $value) {
      $averageRating = $value->averageRating;
    }
   
$return_arr = array("averageRating"=>$averageRating, "clientCount"=>$count, "ipUser"=>$userip);
echo json_encode($return_arr); exit;

    return $return_arr;
   }
}

?>
