import React from "react";

function Receipt({ setCheckout, checkout, cart }) {
  const foodPrice = cart.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = foodPrice * 0.09;
  const tipPrice = foodPrice * 0.15;
  const totalPrice = foodPrice + taxPrice + tipPrice;

  return (
    <div className="modal">
      <div className="receipt">
        <div className="modal_content">
          <h3>Receipt Confirmation</h3>
          {cart.map((item) => (
            <div key={item.id} className="row">
              <div className="col-2">{item.name}</div>
              <div className="col-2"></div>
              <div className="col-2 text-right">
                {item.qty} x ${item.price.toFixed(2)}
              </div>
            </div>
          ))}
          <div className="row">
            <div className="col-2">Price of Food </div>
            <div className="col-1 text-right">${foodPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Tax Price</div>
            <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Tip</div>
            <div className="col-1 text-right">${tipPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">
              <strong>Total Price</strong>
            </div>
            <div className="col-1 text-right">
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
          </div>

          <span className="close" onClick={() => setCheckout(!checkout)}>
            &times;
          </span>
        </div>
      </div>
    </div>
  );
}

export default Receipt;

{/* <div id="invoice-POS">
    <div id="mid">
        <div class="info">
            <h2>Contact Info</h2>
            <p> 
                Address : street city, state 0000 
                Email   : JohnDoe@gmail.com
                Phone   : 555-555-5555
            </p>
        </div>
    </div>

    <div id="bot">
         <div id="table">
			<table>
            <tr class="tabletitle">
				<td class="item"><h2>Item</h2></td>
				<td class="Hours"><h2>Qty</h2></td>
				<td class="Rate"><h2>Sub Total</h2></td>
			</tr>

            <tr class="service">
				<td class="tableitem"><p class="itemtext">Communication</p></td>
				<td class="tableitem"><p class="itemtext">5</p></td>
				<td class="tableitem"><p class="itemtext">$375.00</p></td>
			</tr>

            <tr class="service">
			    <td class="tableitem"><p class="itemtext">Asset Gathering</p></td>
				<td class="tableitem"><p class="itemtext">3</p></td>
				<td class="tableitem"><p class="itemtext">$225.00</p></td>
		    </tr>

			<tr class="service">
				<td class="tableitem"><p class="itemtext">Design Development</p></td>
				<td class="tableitem"><p class="itemtext">5</p></td>
				<td class="tableitem"><p class="itemtext">$375.00</p></td>
			</tr>

			<tr class="service">
				<td class="tableitem"><p class="itemtext">Animation</p></td>
				<td class="tableitem"><p class="itemtext">20</p></td>
				<td class="tableitem"><p class="itemtext">$1500.00</p></td>
			</tr>

			<tr class="service">
				<td class="tableitem"><p class="itemtext">Animation Revisions</p></td>
				<td class="tableitem"><p class="itemtext">10</p></td>
				<td class="tableitem"><p class="itemtext">$750.00</p></td>
			</tr>


			<tr class="tabletitle">
				<td></td>
				<td class="Rate"><h2>tax</h2></td>
				<td class="payment"><h2>$419.25</h2></td>
			</tr>

			<tr class="tabletitle">
				<td></td>
				<td class="Rate"><h2>Total</h2></td>
				<td class="payment"><h2>$3,644.25</h2></td>
			</tr>
            </table>
		</div>

        <div id="legalcopy">
			<p class="legal"><strong>Thank you for your business!</strong>  Payment is expected within 31 days; please process this invoice within that time. There will be a 5% interest charge per month on late invoices. </p>
		</div>

	</div>
</div> */}




