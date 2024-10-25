// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Country List</h1>
      <h2>Click To View Country Information: </h2>
      <ul className ="d-flex"> </ul>


<li className ="cust_button"><Link href ="/country/pakistan" style={{margin:"20px",  padding:"5px"}}>Pakistan</Link></li> 
<li className ="cust_button"><Link href ="/country/india" style={{margin:"20px",  padding:"5px"}}>India</Link></li>
<li className ="cust_button"><Link href ="/country/korea" style={{margin:"20px",  padding:"5px"}}>Korea</Link> </li>
<li className ="cust_button"><Link href ="/country/japan" style={{margin:"20px", padding:"5px"}}>Japan</Link> </li>    
    
    
    
    </div>
    
  );
}
    