import { useState } from "react";
import { useParams } from "react-router-dom";

export function Universities() {
  const [universityList, setuniversityList] = useState([]);
  let params = useParams();
  return (
    <div>
      <h1>Universities {params.country}</h1>
    </div>
  );
}
