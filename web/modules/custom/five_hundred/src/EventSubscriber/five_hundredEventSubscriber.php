<?php
namespace Drupal\five_hundred\EventSubscriber;

use Drupal\Core\EventSubscriber\HttpExceptionSubscriberBase;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Event\GetResponseForExceptionEvent;
use Symfony\Component\Serializer\SerializerInterface;

class five_hundredEventSubscriber extends HttpExceptionSubscriberBase {

        public function __construct($stack) {
           //$stack_data =\Drupal::requestStack()->getCurrentRequest()->attributes->get('exception')->getCode();
          if(null !== $stack->getCurrentRequest()->attributes->get('exception')->getCode() && $stack->getCurrentRequest()->attributes->get('exception')->getCode() == 0) {
              $response = new Response();
              $errorDocumentHtml = file_get_contents(DRUPAL_ROOT . '/../500-error.html');
              $response->setContent($errorDocumentHtml);
              $response->setStatusCode(500, '500 Internal Server Error');
              $response->send();
              die();
          }
      }

      /**
       * {@inheritdoc}
       */
      protected function getHandledFormats() {
        return array('html','');
      }


    }
?>