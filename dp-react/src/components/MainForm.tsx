import { useForm } from "react-hook-form";
import { FormData } from "../services/FormRequirements";
import { useState } from "react";
import { Margin, usePDF } from "react-to-pdf";
import PdfTemplate from "./PdfTemplate";
import { Button } from "./Button";


function MainForm() {
  const [limg, setLimg] = useState("");
  const [bimg, setBimg] = useState("");

  const [dataSet, setDataSet] = useState<FormData | null>(null);

  const { toPDF, targetRef } = usePDF({
    filename: "usepdf-example.pdf",
    page: { margin: Margin.MEDIUM },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>();

  const states = {
    AN: "Andaman and Nicobar Islands",
    AP: "Andhra Pradesh",
    AR: "Arunachal Pradesh",
    AS: "Assam",
    BR: "Bihar",
    CG: "Chandigarh",
    CH: "Chhattisgarh",
    DN: "Dadra and Nagar Haveli",
    DD: "Daman and Diu",
    DL: "Delhi",
    GA: "Goa",
    GJ: "Gujarat",
    HR: "Haryana",
    HP: "Himachal Pradesh",
    JK: "Jammu and Kashmir",
    JH: "Jharkhand",
    KA: "Karnataka",
    KL: "Kerala",
    LA: "Ladakh",
    LD: "Lakshadweep",
    MP: "Madhya Pradesh",
    MH: "Maharashtra",
    MN: "Manipur",
    ML: "Meghalaya",
    MZ: "Mizoram",
    NL: "Nagaland",
    OR: "Odisha",
    PY: "Puducherry",
    PB: "Punjab",
    RJ: "Rajasthan",
    SK: "Sikkim",
    TN: "Tamil Nadu",
    TS: "Telangana",
    TR: "Tripura",
    UP: "Uttar Pradesh",
    UK: "Uttarakhand",
    WB: "West Bengal",
  };


if (dataSet != null) return (
  <>
    <span>
      <div ref={targetRef} className="px-3 py-3 text-black bg-white">
        <PdfTemplate rawData={dataSet} />
        <div>
          <Button onClick={toPDF}>Download pdf</Button>
        </div>
      </div>
    </span>
  </>
);


  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          setDataSet(data);
          console.log(data);
        })}
      >
        <div className="px-5 mx-5 mb-5 mt-5">
          <label htmlFor="purposeOfLoan" className="form-label mx-2 my-1">
            <h5>Purpose of Loan</h5>
          </label>
          <select
            {...register("purposeOfLoan", { required: "this fieldrequired" })}
            className="form-select"
            aria-label="Default select example"
          >
            <option value="" selected>
              What is this loan for
            </option>
            <option value="business">Business</option>
            <option value="debts">Debts</option>
            <option value="education">Education</option>
            <option value="vehicle">Vehicle</option>
            <option value="realEstate">Real Estate</option>
          </select>
          {errors.purposeOfLoan?.type === "required" && (
            <h1>this field is required</h1>
          )}
        </div>

        <div className="px-5 mx-5 mb-5">
          <label htmlFor="location" className="form-label">
            <h5>Location</h5>
          </label>
          <select
            {...register("location", { required: "this fieldrequired" })}
            className="form-select"
            aria-label="Default select example"
            key="location"
          >
            <option value={""} selected>
              Select State
            </option>
            {Object.values(states).map((state) => (
              <option value="{state}">{state}</option>
            ))}
          </select>
        </div>
        <div className="px-5 mx-5 mb-5">
          <label htmlFor="lenderRelationShip" className="form-label">
            <h5>Relationship</h5>
          </label>
          <select
            {...register("lenderRelationShip", { required: "required field" })}
            className="form-select"
            aria-label="Default select example"
          >
            <option value="" selected>
              How do you know the borrower
            </option>
            <option value="friend">friend</option>
            <option value="family">family</option>
            <option value="trade">trade</option>
            <option value="others">others</option>
          </select>
        </div>
        <div className="px-5 mx-5 mb-5">
          <label htmlFor="yourName" className="form-label">
            <h5>Your Name</h5>
          </label>
          <input
            {...register("yourName", {
              required: "name is required",
              maxLength: {
                value: 30,
                message: "name should not be greater than 30 characters",
              },
            })}
            type="text"
            className="form-control"
          />
          {errors.yourName?.type === "maxLength" && (
            <p>{errors.yourName?.message}</p>
          )}
        </div>
        <div className="px-5 mx-5 mb-5">
          <label htmlFor="yourAddress" className="form-label">
            <h5>Your Address</h5>
          </label>
          <input
            {...register("yourAddress", {
              maxLength: {
                value: 100,
                message: "address should not exceed 100 characters",
              },
              minLength: {
                value: 3,
                message: "addres should not be less than 3 characters",
              },
            })}
            type="text"
            className="form-control"
          />
        </div>
        <div className="px-5 mx-5 mb-5">
          <label htmlFor="borrowerName" className="form-label">
            <h5>Borrower Name</h5>
          </label>
          <input
            {...register("borrowerName", {
              required: "name is required",
              maxLength: {
                value: 30,
                message: "name should not be greater than 30 characters",
              },
            })}
            type="text"
            className="form-control"
          />
          {errors.borrowerName?.type === "required" && (
            <p>{errors.borrowerName?.message}</p>
          )}
        </div>
        <div className="px-5 mx-5 mb-5">
          <label htmlFor="borrowerAddress" className="form-label">
            <h5>Borrower Address</h5>
          </label>
          <input
            {...register("borrowerAddress", {
              required: "name is required",
              maxLength: {
                value: 100,
                message: "address should not be greater than 30 characters",
              },
              minLength: {
                value: 3,
                message: "addres should not be less than 3 characters",
              },
            })}
            type="text"
            className="form-control"
          />
        </div>
        <div className="px-5 mx-5 mb-5">
          <label htmlFor="loanAmount" className="form-label">
            <h5>Loan Amount</h5>
          </label>
          <input
            {...register("loanAmount", {
              max: { value: 1000000, message: "maximum loan amount exceeded" },
              min: { value: 10000, message: "base amount is 10000" },
              required: "required field",
            })}
            type="number"
            className="form-control"
          />
        </div>
        <div className="px-5 mx-5 mb-5">
          <label htmlFor="interestRate" className="form-label">
            <h5>Rate of Interest</h5>
          </label>
          <input
            {...register("interestRate", { required: "required field" })}
            type="number"
            className="form-control"
          />
        </div>
        <div className="px-5 mx-5 mb-5">
          <label htmlFor="interestCompoundedTime" className="form-label">
            <h5>Compound Interest Interval</h5>
          </label>
          <select
            {...register("interestCompoundedTime", {
              required: "required field",
            })}
            className="form-select"
            aria-label="Default select example"
          >
            <option value={""} selected>
              How often is interest compounded
            </option>
            <option value="monthly">monthly</option>
            <option value="every6months">every 6 months</option>
            <option value="yearly">yearly</option>
          </select>
        </div>
        <div className="px-5 mx-5 mb-5">
          <label htmlFor="dateOfLending" className="form-label mx-3">
            <h5>Date of Lending :</h5>
          </label>
          <input
            {...register("dateOfLending")}
            type="date"
            className="form-label"
          />
        </div>
        <div className="px-5 mx-5 mb-5">
          <label htmlFor="repaymentMethod" className="form-label">
            <h5>Repayment Interval</h5>
          </label>
          <select
            {...register("repaymentMethod", { required: "required field" })}
            className="form-select"
            aria-label="Default select example"
          >
            <option value={""} selected>
              How frequently will the money be paid
            </option>
            <option value="singlePayment">Single Payment</option>
            <option value="regularPayments">Regular Payments</option>
            <option value="others">others</option>
          </select>
        </div>
        <div className="px-5 mx-5 mb-5">
          <label htmlFor="dateOfRepayment" className="form-label mx-3">
            <h5>Date of First Repayment :</h5>
          </label>
          <input
            {...register("dateOfRepayment")}
            type="date"
            className="form-label"
          />
        </div>
        <div className="px-5 mx-5 mb-5">
          <label htmlFor="earlyRepayment" className="form-label">
            <h5>Early Repayment</h5>
          </label>
          <select
            {...register("earlyRepayment", { required: "required field" })}
            className="form-select"
            aria-label="Default select example"
          >
            <option value={""} selected>
              Early payments accepted?
            </option>
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
        </div>
        <div className="px-5 mx-5 mb-5">
          <label htmlFor="additionalInformation" className="form-label">
            <h5> Additional Conditions</h5>
          </label>
          <input
            {...register("additionalInformation")}
            type="textarea"
            className="form-control"
          />
        </div>
        <div className="d-flex flex-row justify-content-around">
          <div className="px-5 mx-5 mb-5">
            <label className="form-label">
              <h5>Lender e-signature</h5>
            </label>
            <br />
            {limg && <img src={limg} width={150} height={90} />}
            <input
              className="form-control mt-2"
              {...register("lenderESign", {
                onChange: (e) =>
                  setLimg(URL.createObjectURL(e.target.files[0])),
              })}
              type="file"
              id="formFile1"
            />
          </div>
          <div className="px-5 mx-5 mb-5">
            <label className="form-label">
              <h5>Borrower e-signature</h5>
            </label><br />
            {bimg && <img src={bimg} width={150} height={90} />}
            <input
              {...register("borrowerESign", {
                onChange: (e) =>
                  setBimg(URL.createObjectURL(e.target.files[0])),
              })}
              className="form-control mt-2"
              type="file"
              id="formFile2"
            />
          </div>
        </div>
        <div className="px-5 mx-5 mb-5">
          <button disabled={!isValid} type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default MainForm;
