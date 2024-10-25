import Link from "next/link";
import Country from "@/app/components/Country";

export default function CountryName ({params}:{params:{country_name:string}}) {

    const countries:{
       name:string,
       population:number,
        capital:string,
    }[] =[{
        name:"Pakistan",
        population:240000000,
        capital:"Islamabad",
    },
    {
        name:"India",
        population:1400000000,
        capital:"Dehli",
    },
    {
        name:"Korea",
        population:52000000,
        capital:"Seoul.",
    },
    {
        name:"Japan",
        population:12500000,
        capital:"Tokyo.",
    },


    ];

function findCountry(country_url:string):{name:string, population:number, capital:string} | undefined{ 
    return countries.find (country=>country.name.toLowerCase()== country_url.toLowerCase()); 
}
const result = findCountry(params.country_name);


     return(
        <div>
        <Country countryInfo = {result} url={""} />
        
    
        <div>

                <li className="cust_button">
                    <Link className="" href="/">
                        Back 
                        </Link>
                        </li>
                
            </div>
            </div>
            
    
    );
}