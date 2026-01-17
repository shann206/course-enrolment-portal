import { useParams } from "react-router-dom";
import { getModule } from "../data";

export default function Module() {

  const {diplomaId, moduleId} = useParams();
  const { name, desc, lecturer } = getModule({ diplomaId, moduleId });

  return (
    <>
      <h3>{name}</h3>
      <p>{desc}</p>

      <h4>{lecturer.name}</h4>
      <span>
        {lecturer.position}
      </span>
    </>
  );
}
