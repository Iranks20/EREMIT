import React, { Component } from "react";


class PaymentMethod extends Component {
    render() {
        return (
            <div>
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
        <li class="nav-item"> <a class="nav-link" href="/my-profile">Account</a></li>
        <li class="nav-item"> <a class="nav-link" href="/security">Security</a></li>
        <li class="nav-item"> <a class="nav-link active" href="/payment-methods">Payment Methods</a></li>
        <li class="nav-item"> <a class="nav-link" href="/notifications">Notifications</a></li>
      </ul>
    </div>
  </div>
  <div id="content" class="py-4">
    <div class="container">
      <div class="row"> 
        <aside class="col-lg-3"> 
          
          <div class="bg-white shadow-sm rounded text-center p-3 mb-4">
            <div class="profile-thumb mt-3 mb-4"> <img class="rounded-circle" src="assets/images/profile-thumb.jpg" alt="" />
              <div class="profile-thumb-edit bg-primary text-white" data-bs-toggle="tooltip" title="Change Profile Picture"> <i class="fas fa-camera position-absolute"></i>
                <input type="file" class="custom-file-input" id="customFile" />
              </div>
            </div>
            <p class="text-3 fw-500 mb-2">Hello, Smith Rhodes</p>
            <p class="mb-2"><a href="settings-profile.html" class="text-5 text-light" data-bs-toggle="tooltip" title="Edit Profile"><i class="fas fa-edit"></i></a></p>
          </div>
          <div class="bg-white shadow-sm rounded text-center p-3 mb-4">
            <div class="text-17 text-light my-3"><i class="fas fa-wallet"></i></div>
            <h3 class="text-9 fw-400">$2956.00</h3>
            <p class="mb-2 text-muted opacity-8">Available Balance</p>
            <hr class="mx-n3" />
            <div class="d-flex"><a href="withdraw-money.html" class="btn-link me-auto">Withdraw</a> <a href="deposit-money.html" class="btn-link ms-auto">Deposit</a></div>
          </div>
          <div class="bg-white shadow-sm rounded text-center p-3 mb-4">
            <div class="text-17 text-light my-3"><i class="fas fa-comments"></i></div>
            <h3 class="text-5 fw-400 my-4">Need Help?</h3>
            <p class="text-muted opacity-8 mb-4">Have questions or concerns regrading your account?<br />
              Our experts are here to help!.</p>
            <div class="d-grid"><a href="#" class="btn btn-primary">Chate with Us</a></div>
		  </div>
        </aside>
        <div class="col-lg-9"> 
          
          <div class="bg-white shadow-sm rounded p-4 mb-4">
            <h3 class="text-5 fw-400 mb-4">Credit or Debit Cards <span class="text-muted text-4">(for payments)</span></h3>
            <hr class="mb-4 mx-n4" />
            <div class="row g-3">
              <div class="col-12 col-md-6 col-lg-4">
                <div class="account-card account-card-primary text-white rounded p-3">
                  <p class="text-4">XXXX-XXXX-XXXX-4151</p>
                  <p class="d-flex align-items-center"> <span class="account-card-expire text-uppercase d-inline-block opacity-7 me-2">Valid<br />
                    thru<br />
                    </span> <span class="text-4 opacity-9">07/24</span> <span class="badge bg-warning text-dark text-0 fw-500 rounded-pill px-2 ms-auto">Primary</span> </p>
                  <p class="d-flex align-items-center m-0"> <span class="text-uppercase fw-500">Smith Rhodes</span> <img class="ms-auto" src="images/payment/visa.png" alt="visa" title="" /> </p>
                  <div class="account-card-overlay rounded"> <a href="#" data-bs-target="#edit-card-details" data-bs-toggle="modal" class="text-light btn-link mx-2"><span class="me-1"><i class="fas fa-edit"></i></span>Edit</a> <a href="#" class="text-light btn-link mx-2"><span class="me-1"><i class="fas fa-minus-circle"></i></span>Delete</a> </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div class="account-card text-white rounded p-3">
                  <p class="text-4">XXXX-XXXX-XXXX-6296</p>
                  <p class="d-flex align-items-center"> <span class="account-card-expire text-uppercase d-inline-block opacity-7 me-2">Valid<br />
                    thru<br />
                    </span> <span class="text-4 opacity-9">07/23</span> </p>
                  <p class="d-flex align-items-center m-0"> <span class="text-uppercase fw-500">Smith Rhodes</span> <img class="ms-auto" src="images/payment/mastercard.png" alt="mastercard" title="" /> </p>
                  <div class="account-card-overlay rounded"> <a href="#" data-bs-target="#edit-card-details" data-bs-toggle="modal" class="text-light btn-link mx-2"><span class="me-1"><i class="fas fa-edit"></i></span>Edit</a> <a href="#" class="text-light btn-link mx-2"><span class="me-1"><i class="fas fa-minus-circle"></i></span>Delete</a> </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4"> <a href="" data-bs-target="#add-new-card-details" data-bs-toggle="modal" class="account-card-new d-flex align-items-center rounded h-100 p-3 mb-4 mb-lg-0">
                <p class="w-100 text-center lh-base m-0"> <span class="text-3"><i class="fas fa-plus-circle"></i></span> <span class="d-block text-body text-3">Add New Card</span> </p>
                </a> </div>
            </div>
          </div>
          <div id="edit-card-details" class="modal fade" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title fw-400">Update Card</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-4">
                  <form id="updateCard" method="post">
                    <div class="mb-3">
                      <label for="edircardNumber" class="form-label">Card Number</label>
                      <div class="input-group">
                        <span class="input-group-text"><img class="ms-auto" src="images/payment/visa.png" alt="visa" title="" /></span>
                        <input type="text" class="form-control" data-bv-field="edircardNumber" id="edircardNumber" disabled="" value="XXXXXXXXXXXX4151" placeholder="Card Number" />
                      </div>
                    </div>
                    <div class="row g-3 mb-3">
                      <div class="col-lg-6">
                          <label for="editexpiryDate" class="form-label">Expiry Date</label>
                          <input id="editexpiryDate" type="text" class="form-control" data-bv-field="editexpiryDate" required="" value="07/24" placeholder="MM/YY" />
                      </div>
                      <div class="col-lg-6">
                          <label for="editcvvNumber" class="form-label">CVV <span class="text-info ms-1" data-bs-toggle="tooltip" title="For Visa/Mastercard, the three-digit CVV number is printed on the signature panel on the back of the card immediately after the card's account number. For American Express, the four-digit CVV number is printed on the front of the card above the card account number."><i class="fas fa-question-circle"></i></span></label>
                          <input id="editcvvNumber" type="password" class="form-control" data-bv-field="editcvvNumber" required="" value="321" placeholder="CVV (3 digits)" />
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="editcardHolderName" class="form-label">Card Holder Name</label>
                      <input type="text" class="form-control" data-bv-field="editcardHolderName" id="editcardHolderName" required="" value="Smith Rhodes" placeholder="Card Holder Name" />
                    </div>
                    <div class="d-grid mt-4"><button class="btn btn-primary" type="submit">Update Card</button></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div id="add-new-card-details" class="modal fade" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title fw-400">Add a Card</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-4">
                  <form id="addCard" method="post">
					<div class="btn-group d-flex mb-3" role="group">
                      <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked="" />
					  <label class="btn btn-outline-secondary btn-sm shadow-none w-100" for="option1">Debit</label>
					  
					  <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" />
                      <label class="btn btn-outline-secondary btn-sm shadow-none w-100" for="option2">Credit</label>
                    </div>
                    <div class="row g-3">
					<div class="col-12">
                      <label for="cardType" class="form-label">Card Type</label>
                      <select id="cardType" class="form-select" required="">
                        <option value="">Card Type</option>
                        <option>Visa</option>
                        <option>MasterCard</option>
                        <option>American Express</option>
                        <option>Discover</option>
                      </select>
                    </div>
                    <div class="col-12">
                      <label for="cardNumber" class="form-label">Card Number</label>
                      <input type="text" class="form-control" data-bv-field="cardnumber" id="cardNumber" required="" value="" placeholder="Card Number" />
                    </div>
                    <div class="col-lg-6">
                       <label for="expiryDate" class="form-label">Expiry Date</label>
                       <input id="expiryDate" type="text" class="form-control" data-bv-field="expiryDate" required="" value="" placeholder="MM/YY" />
                    </div>
                    <div class="col-lg-6">
                       <label for="cvvNumber" class="form-label">CVV <span class="text-info ms-1" data-bs-toggle="tooltip" title="For Visa/Mastercard, the three-digit CVV number is printed on the signature panel on the back of the card immediately after the card's account number. For American Express, the four-digit CVV number is printed on the front of the card above the card account number."><i class="fas fa-question-circle"></i></span></label>
                       <input id="cvvNumber" type="password" class="form-control" data-bv-field="cvvnumber" required="" value="" placeholder="CVV (3 digits)" />
                    </div>
                    <div class="col-12">
                      <label for="cardHolderName" class="form-label">Card Holder Name</label>
                      <input type="text" class="form-control" data-bv-field="cardholdername" id="cardHolderName" required="" value="" placeholder="Card Holder Name" />
                    </div>
                    <div class="col-12 d-grid mt-4">
					  <button class="btn btn-primary" type="submit">Add Card</button>
					</div>
					</div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white shadow-sm rounded p-4 mb-4">
            <h3 class="text-5 fw-400 mb-4">Bank Accounts <span class="text-muted text-4">(for withdrawal)</span></h3>
            <hr class="mb-4 mx-n4" />
            <div class="row g-3">
              <div class="col-12 col-md-6">
                <div class="account-card account-card-primary text-white rounded">
                  <div class="row g-0">
                    <div class="col-3 d-flex justify-content-center p-3">
                      <div class="my-auto text-center"> <span class="text-13"><i class="fas fa-university"></i></span>
                        <p class="badge bg-warning text-dark text-0 fw-500 rounded-pill px-2 mb-0">Primary</p>
                      </div>
                    </div>
                    <div class="col-9 border-start">
					<div class="py-4 my-2 ps-4">
                        <p class="text-4 fw-500 mb-1">HDFC Bank</p>
                        <p class="text-4 opacity-9 mb-1">XXXXXXXXXXXX-9025</p>
                        <p class="m-0">Approved <span class="text-3"><i class="fas fa-check-circle"></i></span></p>
                      </div>
                    </div>
                  </div>
                  <div class="account-card-overlay rounded"> <a href="#" data-bs-target="#bank-account-details" data-bs-toggle="modal" class="text-light btn-link mx-2"><span class="me-1"><i class="fas fa-share"></i></span>More Details</a> <a href="#" class="text-light btn-link mx-2"><span class="me-1"><i class="fas fa-minus-circle"></i></span>Delete</a> </div>
                </div>
              </div>
              <div class="col-12 col-md-6"> <a href="" data-bs-target="#add-new-bank-account" data-bs-toggle="modal" class="account-card-new d-flex align-items-center rounded h-100 p-3 mb-4 mb-lg-0">
                <p class="w-100 text-center lh-base m-0"> <span class="text-3"><i class="fas fa-plus-circle"></i></span> <span class="d-block text-body text-3">Add New Bank Account</span> </p>
                </a> </div>
            </div>
          </div>
          <div id="bank-account-details" class="modal fade" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered transaction-details" role="document">
              <div class="modal-content">
                <div class="modal-body">
                  <div class="row g-0">
                    <div class="col-sm-5 d-flex justify-content-center bg-primary rounded-start py-4">
                      <div class="my-auto text-center">
                        <div class="text-17 text-white mb-3"><i class="fas fa-university"></i></div>
                        <h3 class="text-6 text-white my-3">HDFC Bank</h3>
                        <div class="text-4 text-white my-4">XXX-9027 | US</div>
                        <p class="badge bg-light text-dark text-0 fw-500 rounded-pill px-2 mb-0">Primary</p>
                      </div>
                    </div>
                    <div class="col-sm-7">
                      <h5 class="text-5 fw-400 m-3">Bank Account Details
                        <button type="button" class="btn-close text-2 float-end" data-bs-dismiss="modal" aria-label="Close"></button>
                      </h5>
                      <hr />
                      <div class="px-3 mb-3">
                        <ul class="list-unstyled">
                          <li class="fw-500">Account Type:</li>
                          <li class="text-muted">Personal</li>
                        </ul>
                        <ul class="list-unstyled">
                          <li class="fw-500">Account Name:</li>
                          <li class="text-muted">Smith Rhodes</li>
                        </ul>
                        <ul class="list-unstyled">
                          <li class="fw-500">Account Number:</li>
                          <li class="text-muted">XXXXXXXXXXXX-9025</li>
                        </ul>
                        <ul class="list-unstyled">
                          <li class="fw-500">Bank Country:</li>
                          <li class="text-muted">India</li>
                        </ul>
                        <ul class="list-unstyled">
                          <li class="fw-500">Status:</li>
                          <li class="text-muted">Approved <span class="text-success text-3"><i class="fas fa-check-circle"></i></span></li>
                        </ul>
                        <div class="d-grid"><a href="#" class="btn btn-sm btn-outline-danger shadow-none"><span class="me-1"><i class="fas fa-minus-circle"></i></span>Delete Account</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="add-new-bank-account" class="modal fade" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title fw-400">Add bank account</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-4">
                  <form id="addbankaccount" method="post">
                    <div class="mb-3">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" id="personal" name="bankAccountType" checked="" required="" type="radio" />
                        <label class="form-check-label" for="personal">Personal</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" id="business" name="bankAccountType" required="" type="radio" />
                        <label class="form-check-label" for="business">Business</label>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="inputCountry" class="form-label">Bank Country</label>
                      <select class="form-select" id="inputCountry" disabled="" name="country_id">
                        <option value=""> --- Please Select --- </option>
                        <option value="244">Aaland Islands</option>
                        <option value="1">Afghanistan</option>
                        <option value="2">Albania</option>
                        <option value="3">Algeria</option>
                        <option value="4">American Samoa</option>
                        <option value="5">Andorra</option>
                        <option value="6">Angola</option>
                        <option value="7">Anguilla</option>
                        <option value="8">Antarctica</option>
                        <option value="9">Antigua and Barbuda</option>
                        <option value="10">Argentina</option>
                        <option value="11">Armenia</option>
                        <option value="12">Aruba</option>
                        <option value="252">Ascension Island (British)</option>
                        <option value="13">Australia</option>
                        <option value="14">Austria</option>
                        <option value="15">Azerbaijan</option>
                        <option value="16">Bahamas</option>
                        <option value="17">Bahrain</option>
                        <option value="18">Bangladesh</option>
                        <option value="19">Barbados</option>
                        <option value="20">Belarus</option>
                        <option value="21">Belgium</option>
                        <option value="22">Belize</option>
                        <option value="23">Benin</option>
                        <option value="24">Bermuda</option>
                        <option value="25">Bhutan</option>
                        <option value="26">Bolivia</option>
                        <option value="245">Bonaire, Sint Eustatius and Saba</option>
                        <option value="27">Bosnia and Herzegovina</option>
                        <option value="28">Botswana</option>
                        <option value="29">Bouvet Island</option>
                        <option value="30">Brazil</option>
                        <option value="31">British Indian Ocean Territory</option>
                        <option value="32">Brunei Darussalam</option>
                        <option value="33">Bulgaria</option>
                        <option value="34">Burkina Faso</option>
                        <option value="35">Burundi</option>
                        <option value="36">Cambodia</option>
                        <option value="37">Cameroon</option>
                        <option value="38">Canada</option>
                        <option value="251">Canary Islands</option>
                        <option value="39">Cape Verde</option>
                        <option value="40">Cayman Islands</option>
                        <option value="41">Central African Republic</option>
                        <option value="42">Chad</option>
                        <option value="43">Chile</option>
                        <option value="44">China</option>
                        <option value="45">Christmas Island</option>
                        <option value="46">Cocos (Keeling) Islands</option>
                        <option value="47">Colombia</option>
                        <option value="48">Comoros</option>
                        <option value="49">Congo</option>
                        <option value="50">Cook Islands</option>
                        <option value="51">Costa Rica</option>
                        <option value="52">Cote D'Ivoire</option>
                        <option value="53">Croatia</option>
                        <option value="54">Cuba</option>
                        <option value="246">Curacao</option>
                        <option value="55">Cyprus</option>
                        <option value="56">Czech Republic</option>
                        <option value="237">Democratic Republic of Congo</option>
                        <option value="57">Denmark</option>
                        <option value="58">Djibouti</option>
                        <option value="59">Dominica</option>
                        <option value="60">Dominican Republic</option>
                        <option value="61">East Timor</option>
                        <option value="62">Ecuador</option>
                        <option value="63">Egypt</option>
                        <option value="64">El Salvador</option>
                        <option value="65">Equatorial Guinea</option>
                        <option value="66">Eritrea</option>
                        <option value="67">Estonia</option>
                        <option value="68">Ethiopia</option>
                        <option value="69">Falkland Islands (Malvinas)</option>
                        <option value="70">Faroe Islands</option>
                        <option value="71">Fiji</option>
                        <option value="72">Finland</option>
                        <option value="74">France, Metropolitan</option>
                        <option value="75">French Guiana</option>
                        <option value="76">French Polynesia</option>
                        <option value="77">French Southern Territories</option>
                        <option value="126">FYROM</option>
                        <option value="78">Gabon</option>
                        <option value="79">Gambia</option>
                        <option value="80">Georgia</option>
                        <option value="81">Germany</option>
                        <option value="82">Ghana</option>
                        <option value="83">Gibraltar</option>
                        <option value="84">Greece</option>
                        <option value="85">Greenland</option>
                        <option value="86">Grenada</option>
                        <option value="87">Guadeloupe</option>
                        <option value="88">Guam</option>
                        <option value="89">Guatemala</option>
                        <option value="256">Guernsey</option>
                        <option value="90">Guinea</option>
                        <option value="91">Guinea-Bissau</option>
                        <option value="92">Guyana</option>
                        <option value="93">Haiti</option>
                        <option value="94">Heard and Mc Donald Islands</option>
                        <option value="95">Honduras</option>
                        <option value="96">Hong Kong</option>
                        <option value="97">Hungary</option>
                        <option value="98">Iceland</option>
                        <option selected="selected" value="99">India</option>
                        <option value="100">Indonesia</option>
                        <option value="101">Iran (Islamic Republic of)</option>
                        <option value="102">Iraq</option>
                        <option value="103">Ireland</option>
                        <option value="254">Isle of Man</option>
                        <option value="104">Israel</option>
                        <option value="105">Italy</option>
                        <option value="106">Jamaica</option>
                        <option value="107">Japan</option>
                        <option value="257">Jersey</option>
                        <option value="108">Jordan</option>
                        <option value="109">Kazakhstan</option>
                        <option value="110">Kenya</option>
                        <option value="111">Kiribati</option>
                        <option value="113">Korea, Republic of</option>
                        <option value="253">Kosovo, Republic of</option>
                        <option value="114">Kuwait</option>
                        <option value="115">Kyrgyzstan</option>
                        <option value="116">Lao People's Democratic Republic</option>
                        <option value="117">Latvia</option>
                        <option value="118">Lebanon</option>
                        <option value="119">Lesotho</option>
                        <option value="120">Liberia</option>
                        <option value="121">Libyan Arab Jamahiriya</option>
                        <option value="122">Liechtenstein</option>
                        <option value="123">Lithuania</option>
                        <option value="124">Luxembourg</option>
                        <option value="125">Macau</option>
                        <option value="127">Madagascar</option>
                        <option value="128">Malawi</option>
                        <option value="129">Malaysia</option>
                        <option value="130">Maldives</option>
                        <option value="131">Mali</option>
                        <option value="132">Malta</option>
                        <option value="133">Marshall Islands</option>
                        <option value="134">Martinique</option>
                        <option value="135">Mauritania</option>
                        <option value="136">Mauritius</option>
                        <option value="137">Mayotte</option>
                        <option value="138">Mexico</option>
                        <option value="139">Micronesia, Federated States of</option>
                        <option value="140">Moldova, Republic of</option>
                        <option value="141">Monaco</option>
                        <option value="142">Mongolia</option>
                        <option value="242">Montenegro</option>
                        <option value="143">Montserrat</option>
                        <option value="144">Morocco</option>
                        <option value="145">Mozambique</option>
                        <option value="146">Myanmar</option>
                        <option value="147">Namibia</option>
                        <option value="148">Nauru</option>
                        <option value="149">Nepal</option>
                        <option value="150">Netherlands</option>
                        <option value="151">Netherlands Antilles</option>
                        <option value="152">New Caledonia</option>
                        <option value="153">New Zealand</option>
                        <option value="154">Nicaragua</option>
                        <option value="155">Niger</option>
                        <option value="156">Nigeria</option>
                        <option value="157">Niue</option>
                        <option value="158">Norfolk Island</option>
                        <option value="112">North Korea</option>
                        <option value="159">Northern Mariana Islands</option>
                        <option value="160">Norway</option>
                        <option value="161">Oman</option>
                        <option value="162">Pakistan</option>
                        <option value="163">Palau</option>
                        <option value="247">Palestinian Territory, Occupied</option>
                        <option value="164">Panama</option>
                        <option value="165">Papua New Guinea</option>
                        <option value="166">Paraguay</option>
                        <option value="167">Peru</option>
                        <option value="168">Philippines</option>
                        <option value="169">Pitcairn</option>
                        <option value="170">Poland</option>
                        <option value="171">Portugal</option>
                        <option value="172">Puerto Rico</option>
                        <option value="173">Qatar</option>
                        <option value="174">Reunion</option>
                        <option value="175">Romania</option>
                        <option value="176">Russian Federation</option>
                        <option value="177">Rwanda</option>
                        <option value="178">Saint Kitts and Nevis</option>
                        <option value="179">Saint Lucia</option>
                        <option value="180">Saint Vincent and the Grenadines</option>
                        <option value="181">Samoa</option>
                        <option value="182">San Marino</option>
                        <option value="183">Sao Tome and Principe</option>
                        <option value="184">Saudi Arabia</option>
                        <option value="185">Senegal</option>
                        <option value="243">Serbia</option>
                        <option value="186">Seychelles</option>
                        <option value="187">Sierra Leone</option>
                        <option value="188">Singapore</option>
                        <option value="189">Slovak Republic</option>
                        <option value="190">Slovenia</option>
                        <option value="191">Solomon Islands</option>
                        <option value="192">Somalia</option>
                        <option value="193">South Africa</option>
                        <option value="194">South Georgia &amp; South Sandwich Islands</option>
                        <option value="248">South Sudan</option>
                        <option value="195">Spain</option>
                        <option value="196">Sri Lanka</option>
                        <option value="249">St. Barthelemy</option>
                        <option value="197">St. Helena</option>
                        <option value="250">St. Martin (French part)</option>
                        <option value="198">St. Pierre and Miquelon</option>
                        <option value="199">Sudan</option>
                        <option value="200">Suriname</option>
                        <option value="201">Svalbard and Jan Mayen Islands</option>
                        <option value="202">Swaziland</option>
                        <option value="203">Sweden</option>
                        <option value="204">Switzerland</option>
                        <option value="205">Syrian Arab Republic</option>
                        <option value="206">Taiwan</option>
                        <option value="207">Tajikistan</option>
                        <option value="208">Tanzania, United Republic of</option>
                        <option value="209">Thailand</option>
                        <option value="210">Togo</option>
                        <option value="211">Tokelau</option>
                        <option value="212">Tonga</option>
                        <option value="213">Trinidad and Tobago</option>
                        <option value="255">Tristan da Cunha</option>
                        <option value="214">Tunisia</option>
                        <option value="215">Turkey</option>
                        <option value="216">Turkmenistan</option>
                        <option value="217">Turks and Caicos Islands</option>
                        <option value="218">Tuvalu</option>
                        <option value="219">Uganda</option>
                        <option value="220">Ukraine</option>
                        <option value="221">United Arab Emirates</option>
                        <option value="222">United Kingdom</option>
                        <option value="223">United States</option>
                        <option value="224">United States Minor Outlying Islands</option>
                        <option value="225">Uruguay</option>
                        <option value="226">Uzbekistan</option>
                        <option value="227">Vanuatu</option>
                        <option value="228">Vatican City State (Holy See)</option>
                        <option value="229">Venezuela</option>
                        <option value="230">Viet Nam</option>
                        <option value="231">Virgin Islands (British)</option>
                        <option value="232">Virgin Islands (U.S.)</option>
                        <option value="233">Wallis and Futuna Islands</option>
                        <option value="234">Western Sahara</option>
                        <option value="235">Yemen</option>
                        <option value="238">Zambia</option>
                        <option value="239">Zimbabwe</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="bankName" class="form-label">Bank Name</label>
                      <select class="form-select" id="bankName" name="bankName">
                        <option value=""> Please Select </option>
                        <option value="1">Bank Name 1</option>
                        <option value="2">Bank Name 2</option>
                        <option value="3">Bank Name 3</option>
                        <option value="4">Bank Name 4</option>
                        <option value="5">Bank Name 5</option>
                        <option value="6">Bank Name 6</option>
                        <option value="7">Bank Name 7</option>
                        <option value="8">Bank Name 8</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="accountName" class="form-label">Account Name</label>
                      <input type="text" class="form-control" data-bv-field="accountName" id="accountName" required="" value="" placeholder="e.g. Smith Rhodes" />
                    </div>
                    <div class="mb-3">
                      <label for="accountNumber" class="form-label">Account Number</label>
                      <input type="text" class="form-control" data-bv-field="accountNumber" id="accountNumber" required="" value="" placeholder="e.g. 12346678900001" />
                    </div>
                    <div class="mb-3">
                      <label for="ifscCode" class="form-label">NEFT IFSC Code</label>
                      <input type="text" class="form-control" data-bv-field="ifscCode" id="ifscCode" required="" value="" placeholder="e.g. ABCDE12345" />
                    </div>
                    <div class="form-check mb-3">
                      <input class="form-check-input" id="remember-me" name="remember" type="checkbox" />
                      <label class="form-check-label" for="remember-me">I confirm the bank account details above</label>
                    </div>
                    <div class="d-grid"><button class="btn btn-primary" type="submit">Add Bank Account</button></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
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
</div>
        )
    }
}

export default PaymentMethod;