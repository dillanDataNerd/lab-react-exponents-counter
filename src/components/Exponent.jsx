function Exponent({count, power}) {
    const countString= (count,power) =>{
        let countString=`${count}`
        for (let i=0;i<power;i++){
            countString = countString + ` * ${count}`
        }
        return countString
    }
  return (
  <div className="exponent-counter-container">
    <p className="exponent-label">{count}^{power}</p>
    <p className="exponent-result"> {countString(count,power)} = <span className="total">{count**power}</span></p>
  </div>
  )
}
export default Exponent


