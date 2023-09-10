import { FormData } from "../services/FormRequirements";

interface Props {
  rawData: FormData;
}

function PdfTemplate({ rawData }: Props) {
    let date: Date = new Date();  
  return (
    <>
      <div>
        {" "}
        <h3>Amount:{rawData.loanAmount}</h3>
        <h3>Date:{date.toString()}</h3>
        <div>
          <ul>
            <li>
              {" "}
              I {rawData.borrowerName} make commitment to pay {rawData.yourName}{" "}
              . The sum of {rawData.loanAmount} with interest accruing on the
              unpaid balance at rate of {rawData.interestRate}% per month on
              {rawData.dateOfRepayment} of every month until the total amount of
              debt is paid
            </li>
            <li>
              The co-signer agrees to be jointly and severally liable with the
              borrower for the borrowers obligations under this loan{" "}
            </li>
            <li>
              This note will be construed in accordance with and governed by the
              laws
            </li>
            <li>
              This note will ensure to the benefit of and be binding upon the
              respective heirs,successors and assign of the Borrower and the
              lender
            </li>
          </ul>
        </div>
        <section id="adr">
          <div>
            <h4>{rawData.yourAddress}</h4>

            <p>''lphone''</p>
            <br />
          </div>
          <div>
            <h4>{rawData.borrowerAddress}</h4>
            <p>''bphone''</p>
            <br />
          </div>
          <div>
            <h4>witness's Address</h4>
            <p>teachers colony,</p>
            <p>thamaram</p>
            <p>Makvarpalem</p>
            <p>''wphone''</p>
            <br />
          </div>
        </section>
        <section id="adr">
          <div>
            <img
              src={rawData.borrowerName}
              alt="stamp"
              height="50"
              width="50"
            ></img>
            <h5>Lender's Signature</h5>
            <img
              src={rawData.lenderESign}
              height="50"
              width="50"
            ></img>
            <br />
          </div>
          <div>
            <img src="" alt="stamp" height="50" width="50"></img>
            <h5>Borrower's Signature</h5>
            <img
              src={rawData.borrowerESign}
              height="50"
              width="50"
            ></img>
            <br />
          </div>
          <div>
            <h5>witness's Signature</h5>
            <p>''lsign''</p>
            <br />
          </div>
        </section>
      </div>
    </>
  );
}

export default PdfTemplate;
