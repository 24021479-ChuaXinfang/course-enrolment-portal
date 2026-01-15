import { useLocation } from "react-router-dom";
export default function Confirmation() {
  const {state} = useLocation();

  return (
    <div className="container">
      <h1>Thank You for Your Interest.</h1>
      {state && (
        <>
        <p>Hey {state.name}! You're now registered for School of Infocomm (SOI) and indicated your interest in <strong>{state.course}</strong>.</p>
        <p>We'll sent more details to your email at <a>{state.email}</a>.</p>
        </>
      )}
    </div>
  );
}
