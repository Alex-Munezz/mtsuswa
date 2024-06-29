import NavBar from "./Navbar";

export default function booking() {
    return (
        <div>
        <NavBar />
<div className="form">
<h2 className="bookh2">Book Your Services Now!</h2>
<form action="https://formspree.io/f/mnnaqayz" method="POST">
  <input type="text" name="Name" placeholder="Your Two Names" required />
  <input type="email" name="Reply To" placeholder="Your Email" required />
  <input type="text" name="Service Name" placeholder="Services to book" required />
  <p>Check In Date:</p>
  <input type="date" name="Date" placeholder="Check In Date" required />
  <p>Check Out Date:</p>
  <input type="date" name="Date" placeholder="Check Out Date" required />
  <input type="number" name="Adults" placeholder="Adults" required />
  <input type="number" name="Children" placeholder="Children" required />
  <textarea name="message" placeholder="Additional info and questions" rows="6"></textarea>
  <button type="submit">Book
  </button>
</form>
</div>
</div>
    )
}