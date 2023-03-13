import { useState } from "react";

function App() {
  const [name, setName] = useState("David");
  const [country, setCountry] = useState("1");
  const [isNewsletterChecked, setIsNewsletterChecked] = useState(true);
  const [contactTimePreference, setContactTimePreference] =
    useState("afternoon");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(name, country, isNewsletterChecked, contactTimePreference);
      }}
    >
      <div>
        <label htmlFor="name">Name</label>
        {/* Controlled Component */}
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <div>{name.length < 2 ? "Name must be at least 3 characters" : ""}</div>
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <select
          id="country"
          value={country}
          onChange={(event) => {
            console.log(event.target.value);
            setCountry(event.target.value);
          }}
        >
          <option>-- Select a country --</option>
          <option value="0">United States</option>
          <option value="1">Mexico</option>
          <option value="2">Canada</option>
        </select>
      </div>
      <div>
        <label htmlFor="newsletter">
          Check if you'd like to opt-in to our newsletter
        </label>
        <input
          type="checkbox"
          id="newsletter"
          checked={isNewsletterChecked}
          onChange={(event) => {
            setIsNewsletterChecked(event.target.checked);
          }}
        />
      </div>
      <div>
        <p>When is the best time to contact you?</p>
        <label htmlFor="morning">Morning</label>
        <input
          type="radio"
          id="morning"
          name="contact-preference"
          value="morning"
          checked={contactTimePreference === "morning"}
          onChange={(event) => {
            console.log(event.target.value);
            setContactTimePreference(event.target.value);
          }}
        />
        <label htmlFor="afternoon">Afternoon</label>
        <input
          type="radio"
          id="afternoon"
          name="contact-preference"
          value="afternoon"
          checked={contactTimePreference === "afternoon"}
          onChange={(event) => {
            console.log(event.target.value);
            setContactTimePreference(event.target.value);
          }}
        />
        <label htmlFor="evening">Evening</label>
        <input
          type="radio"
          id="evening"
          name="contact-preference"
          value="evening"
          checked={contactTimePreference === "evening"}
          onChange={(event) => {
            console.log(event.target.value);
            setContactTimePreference(event.target.value);
          }}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
