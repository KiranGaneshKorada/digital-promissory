import { FormData } from "../services/FormRequirements";

interface Props{
    rawData:FormData
}


function PdfTemplate({rawData}:Props) {
  return <><div> <h3>amount:</h3>
        <h3>Date:</h3>
        <h3>place:</h3>
        
        <div>
            <ul>
            <li> I ''borrower'' make commitment to pay ''lender'' . The sum of ''principle'' with interest accruing on the unpaid balance at rate of ''rate''% per month on ''date'' of every month until the total amount of debt is paid</li>
            <li>The co-signer agrees to be jointly and severally liable with the borrower for the borrowers obligations under this loan </li>
            <li>This note will be construed in accordance with and governed by the laws</li>
            <li>This note will ensure to the benefit of and be binding upon the respective heirs,successors and assign of the Borrower and the lender</li>
        </ul>

        </div>
        <section id="adr">
            <div>
                <h4>Lender's Address</h4>
                <p>teachers colony,</p>
                <p>thamaram</p>
                <p>Makvarpalem</p>
                <p>''lphone''</p><br/>
            </div>
            <div>
                <h4>Borrower's Address</h4>
                <p>teachers colony,</p>
                <p>thamaram</p>
                <p>Makvarpalem</p>
                <p>''bphone''</p><br/>
            </div>
            <div>
                <h4>witness's Address</h4>
                <p>teachers colony,</p>
                <p>thamaram</p>
                <p>Makvarpalem</p>
                <p>''wphone''</p><br/>
            </div>
        </section>
        <section id="adr">
        <div>
            <img src="stamp.jpg" alt="stamp" height="50" width="50"></img>
            <h5>Lender's Signature</h5>
            <p>''lsign''</p><br/>
            
        </div>
        <div>
            <img src="stamp.jpg" alt="stamp" height="50" width="50"></img>
            <h5>Borrower's Signature</h5>
            <p>''lsign''</p><br/>
            </div>
        <div><h5>witness's Signature</h5>
            <p>''lsign''</p><br/>
            </div>
        </section>
        </div></>;
}

export default PdfTemplate;
