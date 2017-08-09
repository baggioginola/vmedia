<?php
/**
 * Created by PhpStorm.
 * User: mario
 * Date: 25/ene/2017
 * Time: 20:30
 */

require_once __CONTROLLER__ . 'CBaseController.class.inc.php';

class Contact extends BaseController
{
    public static $object = null;

    private $parameters = array();
    private $send_to = 'info@vmedia.mx';
    private $subject = 'Contacto de Pagina Web VMedia';
    private $header = 'From:  Sitio Web <info@vmedia.mx>';
    private $message = '';

    private $validParameters = array(
        'e_mail' => TYPE_ALPHA,
        'message' => TYPE_ALPHA,
        'name' => TYPE_ALPHA
    );

    public static function singleton()
    {
        if (is_null(self::$object)) {
            self::$object = new self();
        }
        return self::$object;
    }

    public function sendMessage()
    {
        if (!$this->_setParameters()) {
            return json_encode($this->getResponse(STATUS_FAILURE_INTERNAL, MESSAGE_ERROR));
        }

        $this->setMessage();
        if(!$this->emailRequest()){
            return json_encode($this->getResponse(STATUS_FAILURE_INTERNAL, MESSAGE_ERROR));
        }

        return json_encode($this->getResponse(STATUS_SUCCESS, MESSAGE_SUCCESS));
    }

    private function emailRequest()
    {
        if(!$this->parameters){
            return false;
        }

        #$this->header .= $this->parameters['e_mail'];
        #return true;
        return mail($this->send_to, $this->subject, $this->message, $this->header);
    }

    private function setMessage()
    {
        $this->message .= 'Nombre: ' . $this->parameters['name'] . "\n";
        $this->message .= 'E-mail: ' . $this->parameters['e_mail'] . "\n";
        $this->message .= 'Mensaje: ' . $this->parameters['message'] . "\n";
    }
    /**
     * @return bool
     */
    private function _setParameters()
    {
        if (!isset($_POST) || empty($_POST)) {
            return false;
        }

        if (!$this->validateParameters($_POST, $this->validParameters)) {
            return false;
        }

        foreach ($_POST as $key => $value) {
            $this->parameters[$key] = $value;
        }

        return true;
    }
}