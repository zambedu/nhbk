/**
 * Clase de Constantes
 *
 * Las constantes puestas en esta clase son manejadas
 * por diversos procesos en la aplicación.
 *
 * @author Ricardo Gonzales (jgonzabi@everis.com)
 */

'use strict';

var app_constants = angular.module('core.constants', []);

    var URL_SERVER  = hbkProperties.HBK_URL_SERVER,
        URL_PORT    = hbkProperties.HBK_URL_PORT,
        URL_APP     = hbkProperties.HBK_URL_APP,
        APP_MOCK    = hbkProperties.HBK_APP_MOCK,

        REQUEST_METHOD,

        URL_CAPTCHA,
        URL_KEYPAD,
        URL_TRANSLATE_LANG,
        URL_CAROUSEL,

        URL_LOGIN,
        URL_FRECUENT_QUESTION,


        URL_CHALLENGE_REQUEST,
        URL_CHALLENGE_SUBMIT,
        URL_TRANSACTION_CHALLENGE_REQUEST,
        URL_TRANSACTION_CHALLENGE_SUBMIT,

        URL_MENU,

        URL_ACCOUNTS,
        URL_ACCOUNT_D_DETAILS,
        URL_ACCOUNT_D_TRANSACTIONS,
        URL_ACCOUNT_C_DETAILS,
        URL_ACCOUNT_C_TRANSACTIONS,

        URL_CREDITS,
        URL_CREDITS_DETAILS,
        URL_MOV_CREDITS,


        URL_LOGOUT,
        URL_CLOSE_SESSION,
        URL_DATA_PRODUCT,
        URL_LIMIT_VALIDATE,
        URL_CHANGE_TYPE,
        URL_RSA_VALIDATION_TRANSFERS_OTHERS_BCP,
        URL_RSA_VALIDATION_TRANSFERS_SAME_ACCOUNTS,
        URL_TOKEN_AUTHENTICATE,
        URL_TRANSAC_TRANSFER_OTHERS_BCP,
        URL_TRANSAC_TRANSFER_OWN_ACCOUNTS,
        URL_FAVORITE_CREATE,
        URL_FAVORITE_UPDATE,

        URL_SERVICE_CATEGORY_COMPANIES,
        URL_SERVICE_COMPANIES_SER,
        URL_SERVICE_LIST_DOCUMENT_PAY,

        URL_SEND_MAIL;

    // Validación
    if (APP_MOCK) {

        URL_PORT                = URL_PORT;

        REQUEST_METHOD          = "GET";

        URL_CAPTCHA             = "/core/json/captcha.json";
        URL_KEYPAD              = "/core/json/keypad.json";
        URL_TRANSLATE_LANG      = "/core/json/i18n/locale-home-en_PE.json";
        URL_CAROUSEL            = "/core/json/carousel-list-new.json";

        URL_LOGIN               = "/core/json/login.json";
        URL_FRECUENT_QUESTION   = "/core/json/frecuent-question-datails.json";

        URL_CHALLENGE_REQUEST   = "/core/json/challenge-request.json";
        URL_CHALLENGE_SUBMIT    = "/core/json/challenge-submit.json";

        //TRANSACTION CHALLENGE
        URL_TRANSACTION_CHALLENGE_REQUEST = "/core/json/challenge-transaction-request.json";
        URL_TRANSACTION_CHALLENGE_SUBMIT  = "/core/json/challenge-transaction-submit.json";

        URL_MENU                    = "/core/json/menu.json";

        URL_ACCOUNTS                = "/core/json/accounts.json";
         URL_CREDITS                = "/core/json/credits.json";
        URL_ACCOUNT_D_DETAILS       = "/core/json/accounts-deposit-details.json";
        URL_ACCOUNT_D_TRANSACTIONS  = "/core/json/accounts-deposit-transactions.json";
        URL_ACCOUNT_C_DETAILS       = "/core/json/accounts-card-details.json";
        URL_ACCOUNT_C_TRANSACTIONS  = "/core/json/accounts-credit-transactions.json";
        URL_CREDITS_DETAILS         = "/core/json/credit-details.json";
        URL_MOV_CREDITS             = "/core/json/credit-move-transactions.json";

        URL_LOGOUT              = "/core/json/logout.json";
        URL_CLOSE_SESSION       = "/core/json/close-session.json";

        URL_DATA_PRODUCT                                = "/core/json/data-product.json";
        URL_LIMIT_VALIDATE                              = "/core/json/limit-validate.json";
        URL_CHANGE_TYPE                                 = "/core/json/change-type.json"
        URL_RSA_VALIDATION_TRANSFERS_OTHERS_BCP         = "/core/json/rsa-validate-transferencia.json"
        URL_RSA_VALIDATION_TRANSFERS_SAME_ACCOUNTS      = "/core/json/rsa-validate-transferencia.json";
        URL_TOKEN_AUTHENTICATE                          = "/core/json/token-authenticate.json";
        URL_TRANSAC_TRANSFER_OTHERS_BCP                 = "/core/json/transaction-transfer.json";
        URL_TRANSAC_TRANSFER_OWN_ACCOUNTS               = "/core/json/transaction-transfer.json";
        URL_FAVORITE_CREATE                             = "/core/json/favorite-create.json";
        URL_FAVORITE_UPDATE                             = "/core/json/favorite-update.json";
        URL_SEND_MAIL                                   = "/core/json/mail.json";

        URL_SERVICE_CATEGORY_COMPANIES = "/core/json/service-payments-category-companies.json";
        URL_SERVICE_COMPANIES_SER      = "/core/json/service-payments-companyService.json";
        URL_SERVICE_LIST_DOCUMENT_PAY  = "/core/json/service-list-document-pay.json";

    } else {

        URL_PORT                = URL_PORT;

        REQUEST_METHOD          = "POST";

        URL_CAPTCHA             = URL_APP+"/app/login/captcha";
        URL_KEYPAD              = URL_APP+"/app/login/keyboard";
        URL_TRANSLATE_LANG      = URL_APP+"/app/lang";
        URL_CAROUSEL            = URL_APP+"/app/favorite/list";

        URL_LOGIN               = URL_APP+"/security/api/login";

        URL_CHALLENGE_REQUEST   = URL_APP+"/app/question/challenge";
        URL_CHALLENGE_SUBMIT    = URL_APP+"/app/answer/authenticate";

        //TRANSACTION CHALLENGE
        URL_TRANSACTION_CHALLENGE_REQUEST = URL_APP+"/app/question/challenge";
        URL_TRANSACTION_CHALLENGE_SUBMIT  = URL_APP+"/app/answer/transaction/authenticate";

        URL_MENU                    = URL_APP+"/app/menu/perfil";

        URL_ACCOUNTS                = URL_APP+"/app/accounts";
        URL_CREDITS                 = URL_APP+"/app/credits";
        URL_ACCOUNT_D_DETAILS       = URL_APP+"/app/account/deposit/details";
        URL_ACCOUNT_D_TRANSACTIONS  = URL_APP+"/app/account/deposit/transactions";
        URL_ACCOUNT_C_DETAILS       = URL_APP+"/app/account/credit/details";
        URL_ACCOUNT_C_TRANSACTIONS  = URL_APP+"/app/account/credit/transactions";
        URL_CREDITS_DETAILS         = URL_APP+"/app/credit/consult/details";
        URL_MOV_CREDITS             = URL_APP+"/app/credit/transactions/details";

        URL_FRECUENT_QUESTION                       = URL_APP+"/app/login/card";

        URL_LOGOUT                                  = URL_APP+"/app/session/logout";
        URL_CLOSE_SESSION                           = URL_APP+"/app/session/opened/close";

        URL_DATA_PRODUCT                            = URL_APP+"/app/account/deposit/dataproduct";
        URL_LIMIT_VALIDATE                          = URL_APP+"/app/limit/validation";
        URL_CHANGE_TYPE                             = URL_APP+"/app/currencyexchange";
        URL_RSA_VALIDATION_TRANSFERS_OTHERS_BCP     = URL_APP+"/app/validate/data/operation/transfer/account/third";
        URL_RSA_VALIDATION_TRANSFERS_SAME_ACCOUNTS  = URL_APP+"/app/validate/data/operation/transfer/account/own";
        URL_TOKEN_AUTHENTICATE                      = URL_APP+"/app/token/validation";
        URL_TRANSAC_TRANSFER_OTHERS_BCP             = URL_APP+"/app/transaction/account/transfer/thrid";
        URL_TRANSAC_TRANSFER_OWN_ACCOUNTS           = URL_APP+"/app/transaction/account/transfer/own";
        URL_FAVORITE_CREATE                         = URL_APP+"/app/favorite/create";
        URL_FAVORITE_UPDATE                         = URL_APP+"/app/favorite/update";
        URL_SEND_MAIL                               = URL_APP+"/app/mail/send";

        URL_SERVICE_CATEGORY_COMPANIES = URL_APP+"/app/servicepayment/categorycompany";
        URL_SERVICE_COMPANIES_SER = URL_APP+"/app/servicepayment/services";
        URL_SERVICE_LIST_DOCUMENT_PAY  = URL_APP+"/app/servicepayment/paymentdocuments";
    }

    // Agregar ':' si existe el puerto
    URL_PORT = URL_PORT !== "" ? ":"+URL_PORT : "";


    app_constants.constant("constantsValues", {

        // Perfiles.
        "THEME"                 : "T-STANDARD-000G1",

        //Request method
        "REQUEST_METHOD"        : REQUEST_METHOD,

        "URL_CAPTCHA"           : URL_SERVER+URL_PORT+URL_CAPTCHA,
        "URL_KEYPAD"            : URL_SERVER+URL_PORT+URL_KEYPAD,
        "URL_TRANSLATE_LANG"    : URL_SERVER+URL_PORT+URL_TRANSLATE_LANG,
        "URL_LANGUAGES"         : "core/json/languages.json",
        "URL_CAROUSEL"          : URL_SERVER+URL_PORT+URL_CAROUSEL,

        "URL_LOGIN"             : URL_SERVER+URL_PORT+URL_LOGIN,
        "URL_FRECUENT_QUESTION" : URL_SERVER+URL_PORT+URL_FRECUENT_QUESTION,

        "URL_CHALLENGE_REQUEST"             : URL_SERVER+URL_PORT+URL_CHALLENGE_REQUEST,
        "URL_CHALLENGE_SUBMIT"              : URL_SERVER+URL_PORT+URL_CHALLENGE_SUBMIT,
        "URL_TRANSACTION_CHALLENGE_REQUEST" : URL_SERVER+URL_PORT+URL_TRANSACTION_CHALLENGE_REQUEST,
        "URL_TRANSACTION_CHALLENGE_SUBMIT"  : URL_SERVER+URL_PORT+URL_TRANSACTION_CHALLENGE_SUBMIT,

        "URL_MENU"              : URL_SERVER+URL_PORT+URL_MENU,
        "URL_ACCOUNTS"          : URL_SERVER+URL_PORT+URL_ACCOUNTS,

        "URL_CREDITS"           : URL_SERVER+URL_PORT+URL_CREDITS,

        "URL_LOGOUT"            : URL_SERVER+URL_PORT+URL_LOGOUT,
        "URL_CLOSE_SESSION"     : URL_SERVER+URL_PORT+URL_CLOSE_SESSION,
        "URL_LITERALS"          : URL_SERVER+URL_PORT+URL_APP+"/app/literal/group/operation/type/lang",

        "URL_SERVICE"           : URL_SERVER+URL_PORT+URL_APP+"/service/request/uuid",

        "URL_ACCOUNT_D_DETAILS"                 : URL_SERVER+URL_PORT+URL_ACCOUNT_D_DETAILS,
        "URL_ACCOUNT_D_TRANSACTIONS"            : URL_SERVER+URL_PORT+URL_ACCOUNT_D_TRANSACTIONS,
        "URL_ACCOUNT_D_TRANSACTIONS_DETAILS"    : URL_SERVER+URL_PORT+URL_APP+"/app/account/deposit/transaction/details",

        "URL_ACCOUNT_C_DETAILS"                 : URL_SERVER+URL_PORT+URL_ACCOUNT_C_DETAILS,
        "URL_ACCOUNT_C_TRANSACTIONS"            : URL_SERVER+URL_PORT+URL_ACCOUNT_C_TRANSACTIONS,
        "URL_ACCOUNT_C_TRANSACTIONS_DETAILS"    : URL_SERVER+URL_PORT+URL_APP+"/app/account/credit/transaction/details",

        "URL_CREDITS_DETAILS":  URL_SERVER+URL_PORT+ URL_CREDITS_DETAILS,

        "URL_DATA_PRODUCT"                          : URL_SERVER+URL_PORT+URL_DATA_PRODUCT,
        "URL_LIMIT_VALIDATE"                        : URL_SERVER+URL_PORT+URL_LIMIT_VALIDATE,
        "URL_CHANGE_TYPE"                           : URL_SERVER+URL_PORT+URL_CHANGE_TYPE,
        "URL_RSA_VALIDATION_TRANSFERS_OTHERS_BCP"   : URL_SERVER+URL_PORT+URL_RSA_VALIDATION_TRANSFERS_OTHERS_BCP,
        "URL_RSA_VALIDATION_TRANSFERS_SAME_ACCOUNTS": URL_SERVER+URL_PORT+URL_RSA_VALIDATION_TRANSFERS_SAME_ACCOUNTS,
        "URL_TOKEN_AUTHENTICATE"                    : URL_SERVER+URL_PORT+URL_TOKEN_AUTHENTICATE,
        "URL_TRANSAC_TRANSFER_OTHERS_BCP"           : URL_SERVER+URL_PORT+URL_TRANSAC_TRANSFER_OTHERS_BCP,
        "URL_TRANSAC_TRANSFER_OWN_ACCOUNTS"         : URL_SERVER+URL_PORT+URL_TRANSAC_TRANSFER_OWN_ACCOUNTS,
        "URL_FAVORITE_CREATE"                       : URL_SERVER+URL_PORT+URL_FAVORITE_CREATE,
        "URL_FAVORITE_UPDATE"                       : URL_SERVER+URL_PORT+URL_FAVORITE_UPDATE,
        "URL_SEND_MAIL"                             : URL_SERVER+URL_PORT+URL_SEND_MAIL,

        "URL_SERVICE_CATEGORY_COMPANIES":  URL_SERVER+URL_PORT+ URL_SERVICE_CATEGORY_COMPANIES,
        "URL_SERVICE_COMPANIES_SER":  URL_SERVER+URL_PORT+ URL_SERVICE_COMPANIES_SER,
        "URL_SERVICE_LIST_DOCUMENT_PAY":  URL_SERVER+URL_PORT+ URL_SERVICE_LIST_DOCUMENT_PAY,


        // Variables proceso de Carga de Lang
        "LANG_MENU"         : "menu",
        "LANG_LOGIN"        : "login",
        "LANG_GENERAL"      : "general",
        "LANG_HOME"         : "home",
        "LANG_APPLICATION"  : "application",
        "LANG_TRANSFERS"    : "inner_transfer",
        "LANG_CARDPAYMENTS" : "cardpayments",
	    "LANG_FAVORITES"    : "favorite",
        "LANG_PAYSERVICES"  : "payservices",


        // URL's para logger y trazas de error
        "URL_LOG"           : URL_SERVER+URL_PORT+URL_APP+"/app/logger/info",
        "URL_ERROR"         : URL_SERVER+URL_PORT+URL_APP+"/app/logger/error",
        "URL_BEHAVIOR"      : URL_SERVER+URL_PORT+URL_APP+"/app/monitor/behavior",

        // Valores para los tipos de logs del projecto
        "LEVEL_DEBUG" : "INFO",
        "LEVEL_ERROR" : "ERROR",

        // Constantes para tiempos de usuario en la web
        "TIME_EXPIRED"              : 0.1,   //0.1
        "TIME_WARNING"              : 120,   //45
        "TIME_PING_ALIVE"           : 360000,  //250 -190

        "TIME_EXPIRED_CHALLENGE"    : 0.1,   //0.1
        "TIME_WARNING_CHALLENGE"    : 360000,  //300
        "TIME_EXPIRED_HOME"         : 0.1,   //0.1
        "TIME_WARNING_HOME"         : 300000,  //300

        // Tiempo de expiración para csrf-token en minutos
        "EXPIRE_CSRF"   : 5,

        // Número por el cual se paginaran los movimientos de los productos.
        "MOVE_NUM"   : 20, //CHECK


        /**
         * Descomentar estas lineas y comentar las anteriores
         * para ejecutar pruebas e2e.
         *//*
        "TIME_EXPIRED"          : 0.1,  //0.1
        "TIME_WARNING"              : 10,   //45
        "TIME_PING_ALIVE"           : 10,  //250
        "TIME_EXPIRED_LOGIN"        : 10,  //250
        "TIME_EXPIRED_CHALLENGE"    : 10,  //250*/

        //Constantes para los valores que se mandan como parametro en accounts-controller
        "COSTANT_SVC_SELECTOR_CUENTAS" : 30,
        "COSTANT_SVC_SELECTOR_CREDITOS" : "SL",

        "GENERIC_ERROR_CODE"            : "HK0024",
        "GENERIC_ERROR_CINT"            : "MB9999",

        // Códigos des respuesta y error en login
        "ERROR_PASSWORD"                        : "MB000K",
        "ERROR_CARDNUMBER"                      : "MB000C",
        "WARNING_AUTHENTICATE"                  : "AR0002",
        "CAPTCHA_ERROR_AUTHENTICATE"            : "AR0003",
        "ERROR_AUTHENTICATION"                  : "MB3029", // No estan en el codigo porque no reciben un comportamiento especial fuera de enviar al login y mostrar el error.
        "LOGIN_VALIDATION_WARNING_NICKNAME"     : "AR0016", // No estan en el codigo porque no reciben un comportamiento especial fuera de enviar al login y mostrar el error.
        "TOKEN_WITHOUT_ERROR"                   : "CA0000",
         "VALIDATION_ERROR_SESSION"             : "AR0005",

        // Códigos de respuesta y error en preguntas reto.
        // Nota: Se esta cambiando los siguientes codigos para las preguntas reto: AD0009 y AD0008.
        // Version : 1.1
        "AUTHENTICATE_RESPONSE_INCOMPLETE"  : "AD0006",
        "AUTHENTICATE_RESULT_EMPTY"         : "AD0007",

        "AUTHENTICATE_RESULT_KO"            : "HK0008", // Respuesta de reto errada
        "AUTHENTICATE_CARD_LOCK"            : "HK0009", // Tarjeta bloqueada //retornado por authe de reto
        "AUTHENTICATE_DENY"                 : "MB3028", // Rechazo por reto no resuelto, no bloquea tarjeta, solo te bota de sesión
        "AUTHENTICATE_FINAL_QUESTION"       : "HK0025", // Redireccion a reto por ultima vez.
        "AUTHENTICTE_PROBLEM_WEBSERVICES"   : "IB9908", //Problemas en el webservices
        "CODE_LOGIN_VALIDATION_ERROR_NOT_ROLE_USER": "AR00017", //Usuario no enrolado o no esta asignado a una tarjeta.

        "USER_CHALLENGE"                    : "MB2301", // Usuario retado
        "USER_DENY"                         : "MB3027", // Usuario denegado
        "USER_OK"                           : "AD0000", // Usuario ok
        "SIN_ERROR"                         : "MB0000",

        "TRAN_OK_FAV_ERROR_CREATE"          : "MB9002", // Transaccion ok, favorito no se creo
        "TRAN_OK_FAV_ERROR_UPDATE"          : "MB9003", // Transaccion ok, favorito no se actualizo
        "TRANS_TOKEN_WRONG_PASS"            : "MB0037", // Token wrong in transfers
        "TRANS_INCOMPLETE_OPERATION"        : "MB0038",
        "TRANS_INACTIVE_CARD"               : "MB0039",
        "TRANS_EXCEED_DAILY_OPERATION"      : "MB0040",
        "TRANS_BLOCKED_CARD_ACCOUNT"        : "MB0041",
        "TRANS_DAILY_APPROVED"              : "MB0042",/*
        ""      : "MB4904",*/

        //getDataProduct
        "WITHOUT_ERROR"                     : "HK0000",
        "ACCOUNT_NOT_EXIST_1"               : "MB0704",
        "ACCOUNT_NOT_EXIST_2"               : "MB0604",
        "ACCOUNT_NOT_EXIST_3"               : "MB0405",
        "ACCOUNT_CTS"                       : "HK0032",
        "NO_ACTIVE_OR_BLOCKED"              : "HK0033",
        "ERROR_VALIDATION_LIMIT"            : "HK0035",

        "LOCK_A"                            : "MB3027",
        "LOCK_B"                            : "MB3032",

        "LOCKED_CARD_DAY"                   : "MB000F",

        /*constantes para codigo de operacion en transfers */

        "OPERATION_CODE_OWN_TRANSFERS"      : 700,
        "OPERATION_CODE_OTHERS_TRANSFERS"   : 701,

        // Soporte
        "CONTACT_SUPPORT"                   : "pilotobancainternet@bcp.com.pe",
        "MAIN_PHONE_SUPPORT"                : "311-9898",

        // i18n
        "CODE_SPANISH"      :   "es_PE",
        "CODE_ENGLISH"      :   "en_US",

        // Sección por defecto para mostrar en la home
        // Opciones: accounts, transfers, explore, user
        "DEFAULT_FLOW_HOME" : "accounts",

        //Ir por defecto a flow de creditos.
         "DEFAULT_FLOW_CREDITS" : "credits",

        // Accounts
        "DEFAULT_ACCOUNT_SECTION": "products",

        "COD_TARJETA_CREDITO"   : "003",
        "COD_CUENTA_CORRIENTE"  : "004",
        "COD_CUENTA_AHORRO"     : "005",
        "COD_CUENTA_MAESTRA"    : "007",
        "COD_CUENTA_CTS"        : "009",

        //Accounts state
        "ACCOUNT_ACTIVA"        : "00",
        "ACCOUNT_BLOQUEADA"     : "07",


        "SOL_CODE"              : "0001",
        "SOL_DESC"              : "PEN",
        "DOLLAR_CODE"           : "1001",
        "DOLLAR_DESC"           : "USD",
        "CARDNUMBER_SEPARATOR"  : "-",
        "CARDNUMBER_MASK_CHAR"  : "*",
        "WELCOME_WAIT"          : 3000, // milisegundos
        // Valores maximos en cajas de texto
        "PASSWORD_MAX_LENGTH"   : 6,

        // Preguntas Frecuentes
        OPTION_FRECUENT_OPTION_CLEAN_INPUT: "Tus Tarjetas frecuentes",
        TYPE_TARJET_CREDIMAS : "Credimás",
        TYPE_TARJET_TYPE_NEGOCIO: "Credimás Negocio",


        // Nuevos codigos de error login
        "ERROR_LOCKED_CARD"             : "MB000E",
        "ERROR_EXPIRED_CARD"            : "MB000D",
        "ERROR_CARD_OR_KEY_NO_EXITS"    : "MB000K",
        "ERROR_KEY_NOT_ACTIVE"          : "MB000J",
        "ERROR_INVALID_BIN"             : "HK0027",

        // Habilitación / Desabilitación de componentes para manejo de pruebas
        "TEST_MODE"         : false,
        "BEHAVIOR_MODE"     : false,
        "APP_MOCK"          : APP_MOCK,

        "FORCE_RETO"        : false,

        /**
         * El valor de esta constante solo afecta si
         * la constante FORCE_RETO està en true
         * 1: SIN_ERROR
         * 2: WARNING_AUTHENTICATE
         */
        "FORCE_RETO_FLOW" : 2,

        // ***************************** CARD PAYMENTS ********************************//
        //DROPDOWN LITERAL
        "SELECTION_CREDIT_CARD" : "COD_CREDIT_CARD_LITERAL",
        "SELECTION_PAY"         : "COD_PAY_LITERAL",

        //PROGRESS BAR
        "STEP_1_SELECTION" : "STEP_PROGRESS_SELECTION",
        "STEP_2_AMOUNT"    : "STEP_PROGRESS_AMOUNT",
        "STEP_3_PAYMENT"   : "STEP_PROGRESS_PAYMENT",
        "STEP_4_REVIEW"    : "STEP_PROGRESS_REVIEW",

                //CREDIT CARD PAYMENT'S FLOW TITLES
        "STEP1_MESSAGE_TITLE"         : "TRANSFER_PAYMENTS_STEP1_MESSAGE_TITLE",
        "STEP2_MESSAGE_TITLE"         : "TRANSFER_PAYMENTS_STEP2_MESSAGE_TITLE",
        "STEP2_MESSAGE_SUBTITLE"      : "TRANSFER_PAYMENTS_STEP2_MESSAGE_SUBTITLE",
        "STEP3_MESSAGE_TITLE"         : "TRANSFER_PAYMENTS_STEP3_MESSAGE_TITLE",
        "STEP4_MESSAGE_TITLE"         : "TRANSFER_PAYMENTS_STEP4_MESSAGE_TITLE",
        "STEP2_MESSAGE_OTHER_SUBTITLE": "TRANSFER_PAYMENTS_STEP2_OTHER_MESSAGE_SUBTITLE",

        //TABLE OPTIONS STEP 2
        "CREDIT_LINE_S"   : "CREDIT_LINE_SOLES",
        "CREDIT_LINE_D"   : "CREDIT_LINE_DOLARS",
        "TOTAL_PAY"       : "TOTAL_PAYMENT",
        "MINIMUM_PAYMENT" : "MINIMUM_PAYMENT_OPTION",
        "USED_LINE_"      : "USED_LINE_OPTION",
        "ANOTHER_PAYMENT" : "ANOTHER_PAYMENT_OPTION",
        // ***************************** CARD PAYMENTS ********************************//


        "CURRENCY_CODE":[
            {
                "monCod":"0001",
                "monDesc":"S/."
            },
            {
                "monCod":"1001",
                "monDesc":"US$"
            }
        ],

        // Saldos y Movimientos
        "MOV_CREDIT_CTDMAX" :  15,

        //Type of transaction for ChangeType
        "TRANSFERS_CHANGE_TYPE" : "T",
        "DEBIT_CHANGE_TYPE"     : "D",
        "CREDIT_CHANGE_TYPE"    : "C",

        //MODALS
        "FLOW_ACCOUNT_AUTOLOGOUT_HEADER" : "FLOW_USER_ACCOUNT_AUTOLOGOUT_HEADER",
        "FLOW_ACCOUNT_AUTOLOGOUT" : "FLOW_USER_ACCOUNT_AUTOLOGOUT",
        "BTN_AUTOLOGOUT_CANCEL" : "BTN_ACCOUNT_AUTOLOGOUT_CANCEL",
        "BTN_AUTOLOGOUT_OK" : "BTN_ACCOUNT_AUTOLOGOUT_OK",


       //Separacion de Listado de Productos
        "TYPE_NEED_LIST_PRODUCT_ACCOUNTS": "0208",
        "TYPE_NEED_LIST_PRODUCT_CREDITS": "0103",
    });
