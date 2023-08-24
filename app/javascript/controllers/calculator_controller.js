import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["deposit", "interest", "payments", "termyears", "result"]

  connect() {
    // console.log("Hello from calculator controller!")
  }

  calculate(event) {
    event.preventDefault()
    const deposit = this.depositTarget.value;
    const interestRate = this.interestTarget.value;
    const payments = this.paymentsTarget.value;
    const termYears = (this.termyearsTarget.value);
    const result = this.resultTarget;

    //checking for compulsory fields
    if (
      deposit === "" ||
      interestRate === "" ||
      termYears === ""
    ) {
      console.log("invalid");
      alert("Make sure you've entered all compulsory* details");
    } else {
      console.log("valid");
    }

  const termPayments = createtermPayments(payments, termYears)
    let final = compoundInterest(deposit, termPayments, interestRate, termYears, result);
    return (result.innerHTML = "Final Balance: $" +
      final + "<br>Total Interest Earned: $" + (final - deposit).toFixed(2));

    function compoundInterest(
      deposit,
      termPayments,
      interestRate,
      termYears,
    ) {
      console.log("simple compounding");
      //   A = P(1 + r / n) ^ nt;
      return (
        deposit * Math.pow((1 + (interestRate / 100) / termPayments), termPayments * termYears )
      ).toFixed(0);
    }

    function createtermPayments(payments, termYears) {
      let termPayments = "";
        switch(payments) {
          case "quarterly":
          termPayments = 4;
          break;
          case "annually":
          termPayments = termYears;
          break;
          case "maturity":
          termPayments = 1;
          break;
          default:
            termPayments = 12;
        }
        console.log(termPayments)
        return termPayments;
      }
}
}
