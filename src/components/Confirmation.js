import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();
  return (
    <div className="container">
      <h1>Thank You!</h1>
      {state && (
        <>
        <p>Hi {state.name}, You've registered for {state.course}.</p>
        <p>We've sent a confirmation email to <strong>{state.email}</strong></p>
        </>
      )}
    </div>
  );
}
