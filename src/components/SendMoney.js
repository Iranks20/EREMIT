import React, { Component } from "react";


class SendMoney extends Component {
    render() {
        return (
            <div>
{/* <div id="preloader">
  <div data-loader="dual-ring"></div>
</div> */}
<div id="main-wrapper"> 
  
<header id="header">
    <div class="container">
      <div class="header-row">
        <div class="header-column justify-content-start"> 
          
          <div class="logo me-3"> <a class="d-flex" href="/#" title="Payyed - HTML Template"><img src="assets/images/logo.png" alt="Payyed" /></a> </div>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header-nav"> <span></span> <span></span> <span></span> </button>
          
          <nav class="primary-menu navbar navbar-expand-lg">
            <div id="header-nav" class="collapse navbar-collapse">
              <ul class="navbar-nav me-auto">
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/transactions">Transactions</a></li>
                <li class="active"><a href="/send-money">Send/Request</a></li>
                <li><a href="/help">Help</a></li>
              </ul>
            </div>
          </nav>
        </div>
        <div class="header-column justify-content-end"> 
          <nav class="login-signup navbar navbar-expand">
          <div class="col-auto d-flex align-items-center ms-auto">
                    <div class="dropdown"> <a class="text-muted btn-link" href="#" role="button" id="statements" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img class="rounded-circle" src="assets/images/profile-thumb-sm.jpg" alt="" /></a>
                      <div class="dropdown-menu dropdown-menu-end" aria-labelledby="statements"> <a class="dropdown-item" href="/my-profile">My Profile</a> <a class="dropdown-item" href="#">Logout</a> </div>
                    </div>
                  </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <div class="bg-primary">
    <div class="container d-flex justify-content-center">
      <ul class="nav nav-pills alternate nav-lg border-bottom-0">
        <li class="nav-item"> <a class="nav-link active" href="../../html/payyed/send-money.html">Send</a></li>
        <li class="nav-item"> <a class="nav-link" href="">Request</a></li>
      </ul>
    </div>
  </div>
  <div id="content" class="py-4">
    <div class="container"> 
      <div class="row mt-4 mb-5">
        <div class="col-lg-11 mx-auto">
          <div class="row widget-steps">
            <div class="col-4 step active">
              <div class="step-name">Details</div>
              <div class="progress">
                <div class="progress-bar"></div>
              </div>
              <a href="#" class="step-dot"></a> </div>
            <div class="col-4 step disabled">
              <div class="step-name">Confirm</div>
              <div class="progress">
                <div class="progress-bar"></div>
              </div>
              <a href="#" class="step-dot"></a> </div>
            <div class="col-4 step disabled">
              <div class="step-name">Success</div>
              <div class="progress">
                <div class="progress-bar"></div>
              </div>
              <a href="#" class="step-dot"></a> </div>
          </div>
        </div>
      </div>
      <h2 class="fw-400 text-center mt-3">Send Money</h2>
      <p class="lead text-center mb-4">Send your money on anytime, anywhere in the world.</p>
      <div class="row">
        <div class="col-md-9 col-lg-7 col-xl-6 mx-auto">
          <div class="bg-white shadow-sm rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
            <h3 class="text-5 fw-400 mb-3 mb-sm-4">Personal Details</h3>
            <hr class="mx-n3 mx-sm-n5 mb-4" />
            <form id="form-send-money" method="post">
              <div class="mb-3">
                <label for="emailID" class="form-label">Recipient</label>
                <input type="text" value="Ntwaliandy90@gmail.com" class="form-control" data-bv-field="emailid" id="emailID" required placeholder="Enter Email Address" />
              </div>
              <div class="mb-3">
                <label for="youSend" class="form-label">You Send</label>
                <div class="input-group">
                  <span class="input-group-text">$</span>
                  <input type="text" class="form-control" data-bv-field="youSend" id="youSend" defaultValue="1,000" placeholder="" />
                  <span class="input-group-text p-0">
                    <select id="youSendCurrency" data-style="form-select bg-transparent border-0" data-container="body" data-live-search="true" class="selectpicker form-control bg-transparent" required="">
                      <optgroup label="Popular Currency">
                      <option data-icon="currency-flag currency-flag-usd me-1" data-subtext="United States dollar" selected="selected" value="">USD</option>
                      <option data-icon="currency-flag currency-flag-aud me-1" data-subtext="Australian dollar" value="">AUD</option>
                      <option data-icon="currency-flag currency-flag-inr me-1" data-subtext="Indian rupee" value="">INR</option>
                      </optgroup>
                      <option value="" data-divider="true">divider</option>
                      <optgroup label="Other Currency">
                      <option data-icon="currency-flag currency-flag-aed me-1" data-subtext="United Arab Emirates dirham" value="">AED</option>
                      <option data-icon="currency-flag currency-flag-ars me-1" data-subtext="Argentine peso" value="">ARS</option>
                      <option data-icon="currency-flag currency-flag-aud me-1" data-subtext="Australian dollar" value="">AUD</option>
                      <option data-icon="currency-flag currency-flag-bdt me-1" data-subtext="Bangladeshi taka" value="">BDT</option>
                      <option data-icon="currency-flag currency-flag-bgn me-1" data-subtext="Bulgarian lev" value="">BGN</option>
                      <option data-icon="currency-flag currency-flag-brl me-1" data-subtext="Brazilian real" value="">BRL</option>
                      <option data-icon="currency-flag currency-flag-cad me-1" data-subtext="Canadian dollar" value="">CAD</option>
                      <option data-icon="currency-flag currency-flag-chf me-1" data-subtext="Swiss franc" value="">CHF</option>
                      <option data-icon="currency-flag currency-flag-clp me-1" data-subtext="Chilean peso" value="">CLP</option>
                      <option data-icon="currency-flag currency-flag-cny me-1" data-subtext="Chinese yuan" value="">CNY</option>
                      <option data-icon="currency-flag currency-flag-czk me-1" data-subtext="Czech koruna" value="">CZK</option>
                      <option data-icon="currency-flag currency-flag-dkk me-1" data-subtext="Danish krone" value="">DKK</option>
                      <option data-icon="currency-flag currency-flag-egp me-1" data-subtext="Egyptian pound" value="">EGP</option>
                      <option data-icon="currency-flag currency-flag-eur me-1" data-subtext="Euro" value="">EUR</option>
                      <option data-icon="currency-flag currency-flag-gbp me-1" data-subtext="British pound" value="">GBP</option>
                      <option data-icon="currency-flag currency-flag-gel me-1" data-subtext="Georgian lari" value="">GEL</option>
                      <option data-icon="currency-flag currency-flag-ghs me-1" data-subtext="Ghanaian cedi" value="">GHS</option>
                      <option data-icon="currency-flag currency-flag-hkd me-1" data-subtext="Hong Kong dollar" value="">HKD</option>
                      <option data-icon="currency-flag currency-flag-hrk me-1" data-subtext="Croatian kuna" value="">HRK</option>
                      <option data-icon="currency-flag currency-flag-huf me-1" data-subtext="Hungarian forint" value="">HUF</option>
                      <option data-icon="currency-flag currency-flag-idr me-1" data-subtext="Indonesian rupiah" value="">IDR</option>
                      <option data-icon="currency-flag currency-flag-ils me-1" data-subtext="Israeli shekel" value="">ILS</option>
                      <option data-icon="currency-flag currency-flag-inr me-1" data-subtext="Indian rupee" value="">INR</option>
                      <option data-icon="currency-flag currency-flag-jpy me-1" data-subtext="Japanese yen" value="">JPY</option>
                      <option data-icon="currency-flag currency-flag-kes me-1" data-subtext="Kenyan shilling" value="">KES</option>
                      <option data-icon="currency-flag currency-flag-krw me-1" data-subtext="South Korean won" value="">KRW</option>
                      <option data-icon="currency-flag currency-flag-lkr me-1" data-subtext="Sri Lankan rupee" value="">LKR</option>
                      <option data-icon="currency-flag currency-flag-mad me-1" data-subtext="Moroccan dirham" value="">MAD</option>
                      <option data-icon="currency-flag currency-flag-mxn me-1" data-subtext="Mexican peso" value="">MXN</option>
                      <option data-icon="currency-flag currency-flag-myr me-1" data-subtext="Malaysian ringgit" value="">MYR</option>
                      <option data-icon="currency-flag currency-flag-ngn me-1" data-subtext="Nigerian naira" value="">NGN</option>
                      <option data-icon="currency-flag currency-flag-nok me-1" data-subtext="Norwegian krone" value="">NOK</option>
                      <option data-icon="currency-flag currency-flag-npr me-1" data-subtext="Nepalese rupee" value="">NPR</option>
                      <option data-icon="currency-flag currency-flag-nzd me-1" data-subtext="New Zealand dollar" value="">NZD</option>
                      <option data-icon="currency-flag currency-flag-pen me-1" data-subtext="Peruvian nuevo sol" value="">PEN</option>
                      <option data-icon="currency-flag currency-flag-php me-1" data-subtext="Philippine peso" value="">PHP</option>
                      <option data-icon="currency-flag currency-flag-pkr me-1" data-subtext="Pakistani rupee" value="">PKR</option>
                      <option data-icon="currency-flag currency-flag-pln me-1" data-subtext="Polish złoty" value="">PLN</option>
                      <option data-icon="currency-flag currency-flag-ron me-1" data-subtext="Romanian leu" value="">RON</option>
                      <option data-icon="currency-flag currency-flag-rub me-1" data-subtext="Russian rouble" value="">RUB</option>
                      <option data-icon="currency-flag currency-flag-sek me-1" data-subtext="Swedish krona" value="">SEK</option>
                      <option data-icon="currency-flag currency-flag-sgd me-1" data-subtext="Singapore dollar" value="">SGD</option>
                      <option data-icon="currency-flag currency-flag-thb me-1" data-subtext="Thai baht" value="">THB</option>
                      <option data-icon="currency-flag currency-flag-try me-1" data-subtext="Turkish lira" value="">TRY</option>
                      <option data-icon="currency-flag currency-flag-uah me-1" data-subtext="Ukrainian hryvnia" value="">UAH</option>
                      <option data-icon="currency-flag currency-flag-ugx me-1" data-subtext="Ugandan shilling" value="">UGX</option>
                      <option data-icon="currency-flag currency-flag-vnd me-1" data-subtext="Vietnamese dong" value="">VND</option>
                      <option data-icon="currency-flag currency-flag-zar me-1" data-subtext="South African rand" value="">ZAR</option>
                      </optgroup>
                    </select>
                    </span>
                </div>
              </div>
              <div class="mb-3">
                <label for="recipientGets" class="form-label">Recipient Gets</label>
                <div class="input-group">
                  <span class="input-group-text">$</span>
                  <input type="text" class="form-control" data-bv-field="recipientGets" id="recipientGets" defaultValue="1,410.06" placeholder="" />
                  <span class="input-group-text p-0">
                    <select id="recipientCurrency" data-style="form-select bg-transparent border-0" data-container="body" data-live-search="true" class="selectpicker form-control bg-transparent" required="">
                      <optgroup label="Popular Currency">
                      <option data-icon="currency-flag currency-flag-usd me-1" data-subtext="United States dollar" value="">USD</option>
                      <option data-icon="currency-flag currency-flag-aud me-1" data-subtext="Australian dollar" selected="selected"  value="">AUD</option>
                      <option data-icon="currency-flag currency-flag-inr me-1" data-subtext="Indian rupee" value="">INR</option>
                      </optgroup>
                      <option value="" data-divider="true">divider</option>
                      <optgroup label="Other Currency">
                      <option data-icon="currency-flag currency-flag-aed me-1" data-subtext="United Arab Emirates dirham" value="">AED</option>
                      <option data-icon="currency-flag currency-flag-ars me-1" data-subtext="Argentine peso" value="">ARS</option>
                      <option data-icon="currency-flag currency-flag-aud me-1" data-subtext="Australian dollar" value="">AUD</option>
                      <option data-icon="currency-flag currency-flag-bdt me-1" data-subtext="Bangladeshi taka" value="">BDT</option>
                      <option data-icon="currency-flag currency-flag-bgn me-1" data-subtext="Bulgarian lev" value="">BGN</option>
                      <option data-icon="currency-flag currency-flag-brl me-1" data-subtext="Brazilian real" value="">BRL</option>
                      <option data-icon="currency-flag currency-flag-cad me-1" data-subtext="Canadian dollar" value="">CAD</option>
                      <option data-icon="currency-flag currency-flag-chf me-1" data-subtext="Swiss franc" value="">CHF</option>
                      <option data-icon="currency-flag currency-flag-clp me-1" data-subtext="Chilean peso" value="">CLP</option>
                      <option data-icon="currency-flag currency-flag-cny me-1" data-subtext="Chinese yuan" value="">CNY</option>
                      <option data-icon="currency-flag currency-flag-czk me-1" data-subtext="Czech koruna" value="">CZK</option>
                      <option data-icon="currency-flag currency-flag-dkk me-1" data-subtext="Danish krone" value="">DKK</option>
                      <option data-icon="currency-flag currency-flag-egp me-1" data-subtext="Egyptian pound" value="">EGP</option>
                      <option data-icon="currency-flag currency-flag-eur me-1" data-subtext="Euro" value="">EUR</option>
                      <option data-icon="currency-flag currency-flag-gbp me-1" data-subtext="British pound" value="">GBP</option>
                      <option data-icon="currency-flag currency-flag-gel me-1" data-subtext="Georgian lari" value="">GEL</option>
                      <option data-icon="currency-flag currency-flag-ghs me-1" data-subtext="Ghanaian cedi" value="">GHS</option>
                      <option data-icon="currency-flag currency-flag-hkd me-1" data-subtext="Hong Kong dollar" value="">HKD</option>
                      <option data-icon="currency-flag currency-flag-hrk me-1" data-subtext="Croatian kuna" value="">HRK</option>
                      <option data-icon="currency-flag currency-flag-huf me-1" data-subtext="Hungarian forint" value="">HUF</option>
                      <option data-icon="currency-flag currency-flag-idr me-1" data-subtext="Indonesian rupiah" value="">IDR</option>
                      <option data-icon="currency-flag currency-flag-ils me-1" data-subtext="Israeli shekel" value="">ILS</option>
                      <option data-icon="currency-flag currency-flag-inr me-1" data-subtext="Indian rupee" value="">INR</option>
                      <option data-icon="currency-flag currency-flag-jpy me-1" data-subtext="Japanese yen" value="">JPY</option>
                      <option data-icon="currency-flag currency-flag-kes me-1" data-subtext="Kenyan shilling" value="">KES</option>
                      <option data-icon="currency-flag currency-flag-krw me-1" data-subtext="South Korean won" value="">KRW</option>
                      <option data-icon="currency-flag currency-flag-lkr me-1" data-subtext="Sri Lankan rupee" value="">LKR</option>
                      <option data-icon="currency-flag currency-flag-mad me-1" data-subtext="Moroccan dirham" value="">MAD</option>
                      <option data-icon="currency-flag currency-flag-mxn me-1" data-subtext="Mexican peso" value="">MXN</option>
                      <option data-icon="currency-flag currency-flag-myr me-1" data-subtext="Malaysian ringgit" value="">MYR</option>
                      <option data-icon="currency-flag currency-flag-ngn me-1" data-subtext="Nigerian naira" value="">NGN</option>
                      <option data-icon="currency-flag currency-flag-nok me-1" data-subtext="Norwegian krone" value="">NOK</option>
                      <option data-icon="currency-flag currency-flag-npr me-1" data-subtext="Nepalese rupee" value="">NPR</option>
                      <option data-icon="currency-flag currency-flag-nzd me-1" data-subtext="New Zealand dollar" value="">NZD</option>
                      <option data-icon="currency-flag currency-flag-pen me-1" data-subtext="Peruvian nuevo sol" value="">PEN</option>
                      <option data-icon="currency-flag currency-flag-php me-1" data-subtext="Philippine peso" value="">PHP</option>
                      <option data-icon="currency-flag currency-flag-pkr me-1" data-subtext="Pakistani rupee" value="">PKR</option>
                      <option data-icon="currency-flag currency-flag-pln me-1" data-subtext="Polish złoty" value="">PLN</option>
                      <option data-icon="currency-flag currency-flag-ron me-1" data-subtext="Romanian leu" value="">RON</option>
                      <option data-icon="currency-flag currency-flag-rub me-1" data-subtext="Russian rouble" value="">RUB</option>
                      <option data-icon="currency-flag currency-flag-sek me-1" data-subtext="Swedish krona" value="">SEK</option>
                      <option data-icon="currency-flag currency-flag-sgd me-1" data-subtext="Singapore dollar" value="">SGD</option>
                      <option data-icon="currency-flag currency-flag-thb me-1" data-subtext="Thai baht" value="">THB</option>
                      <option data-icon="currency-flag currency-flag-try me-1" data-subtext="Turkish lira" value="">TRY</option>
                      <option data-icon="currency-flag currency-flag-uah me-1" data-subtext="Ukrainian hryvnia" value="">UAH</option>
                      <option data-icon="currency-flag currency-flag-ugx me-1" data-subtext="Ugandan shilling" value="">UGX</option>
                      <option data-icon="currency-flag currency-flag-vnd me-1" data-subtext="Vietnamese dong" value="">VND</option>
                      <option data-icon="currency-flag currency-flag-zar me-1" data-subtext="South African rand" value="">ZAR</option>
                      </optgroup>
                    </select>
                    </span>
                </div>
              </div>
              <p class="text-muted text-center">The current exchange rate is <span class="fw-500">1 USD = 1.42030 AUD</span></p>
              <hr />
              <p>Total Fees<span class="float-end">7.21 USD</span></p>
              <hr />
              <p class="text-4 fw-500">Total To Pay<span class="float-end">1,000.00 USD</span></p>
              <div class="d-grid"><button class="btn btn-primary">Send Money</button></div>
            
          </form>
        </div>
      </div>
    </div>
  </div>
  <footer id="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg d-lg-flex align-items-center">
          <ul class="nav justify-content-center justify-content-lg-start text-3">
            <li class="nav-item"> <a class="nav-link active" href="#">About Us</a></li>
            <li class="nav-item"> <a class="nav-link" href="#">Support</a></li>
            <li class="nav-item"> <a class="nav-link" href="#">Help</a></li>
            <li class="nav-item"> <a class="nav-link" href="#">Careers</a></li>
            <li class="nav-item"> <a class="nav-link" href="#">Affiliate</a></li>
            <li class="nav-item"> <a class="nav-link" href="#">Fees</a></li>
          </ul>
        </div>
        <div class="col-lg d-lg-flex justify-content-lg-end mt-3 mt-lg-0">
          <ul class="social-icons justify-content-center">
            <li class="social-icons-facebook"><a data-bs-toggle="tooltip" href="http://www.facebook.com/" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
            <li class="social-icons-twitter"><a data-bs-toggle="tooltip" href="http://www.twitter.com/" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a></li>
            <li class="social-icons-google"><a data-bs-toggle="tooltip" href="http://www.google.com/" target="_blank" title="Google"><i class="fab fa-google"></i></a></li>
            <li class="social-icons-youtube"><a data-bs-toggle="tooltip" href="http://www.youtube.com/" target="_blank" title="Youtube"><i class="fab fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>
      <div class="footer-copyright pt-3 pt-lg-2 mt-2">
        <div class="row">
          <div class="col-lg">
            <p class="text-center text-lg-start mb-2 mb-lg-0">Copyright &copy; 2022 <a href="#">Payyed</a>. All Rights Reserved.</p>
          </div>
          <div class="col-lg d-lg-flex align-items-center justify-content-lg-end">
            <ul class="nav justify-content-center">
              <li class="nav-item"> <a class="nav-link active" href="#">Security</a></li>
              <li class="nav-item"> <a class="nav-link" href="#">Terms</a></li>
              <li class="nav-item"> <a class="nav-link" href="#">Privacy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>
<a id="back-to-top" data-bs-toggle="tooltip" title="Back to Top" href=""><i class="fa fa-chevron-up"></i></a> 


            </div>
            </div>
        )
    }
}

export default SendMoney