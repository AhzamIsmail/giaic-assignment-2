interface CountryInfo{
    name:string;
    population:number;
    capital:string;
}

interface CountryDetailsProps {
    countryInfo?: CountryInfo;
    url:string;
}

//data -> country info prop
export default function CountryDetails(outcome:CountryDetailsProps) {
    return (
      <div>
        {outcome.countryInfo? (
            <div>
                <h1>Country Name:{outcome.countryInfo.name}</h1>
                <h1>Country Population:{outcome.countryInfo.population}</h1>
                <h1>Country Capital:{outcome.countryInfo.capital}</h1>
                </div>
        ): (
            <div>
                <h1>{outcome.url} Not Found</h1>
            </div>
        )}
      
      </div>
      
    );
  }
      