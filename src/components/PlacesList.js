import { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// export class PlacesList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       countryList: [],
//       name: ''
//     };
//   }
//   componentDidMount() {
//     // https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=2e65e3ce46e140f0b21a48ad0b6c48b3
//     this.setState({
//       countryList: [
//         {
//           name: "India",
//         },
//         {
//           name: "United States",
//         },
//         {
//           name: "Canada",
//         },
//       ],
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>Countries</h1>
//         <ul>
//           {this.state.countryList.map((country, index) => {
//             return <li key={index}>{country.name}</li>;
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

export function PlacesList() {
  const [countryList, setCountryList] = useState([]);
  const [name, setName] = useState("");

  // componentDidMount
  useEffect(() => {
    setCountryList([
      {
        name: "India",
      },
      {
        name: "United States",
      },
      {
        name: "Canada",
      },
    ]);
  }, []);

  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {countryList.map((country, index) => {
          return (
            <li key={index}>
              <Link to={`/places/${country.name}`}>{country.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
