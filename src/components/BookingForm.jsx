import { useState } from "react";

function BookingForm(props) {
  const [formData, setFormData] = useState({
    date: "",
    times: "",
    noOfPersons: "",
    occasion: "",
  });

  const availableTimes = [12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 24];

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm();
  };

  console.log(formData);

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="date-book">Choose Date:</label>
              <input
                type="date"
                id="date-book"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label htmlFor="time-book">Choose Time:</label>
              <select
                name="time-book"
                id="time-book"
                value={formData.times}
                onChange={(e) =>
                  setFormData({ ...formData, times: e.target.value })
                }
              >
                <option value="">Select a Time</option>
                {availableTimes.map((times) => {
                  return <option key={times}>{`${times}:00`}</option>;
                })}
              </select>
            </div>

            <div>
              <label htmlFor="select-persons">No.of Persons:</label>
              <input
                type="number"
                min={1}
                max={10}
                placeholder="1"
                value={formData.noOfPersons}
                id="select-persons"
                onChange={(e) =>
                  setFormData({ ...formData, noOfPersons: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label htmlFor="select-occasion">Occasion:</label>
              <select
                name="Occasion"
                id="select-occasion"
                value={formData.occasion}
                onChange={(e) =>
                  setFormData({ ...formData, occasion: e.target.value })
                }
              >
                <option value="BirthDay">BirthDay</option>
                <option value="Anniversary">Anniversary</option>
                <option value="GetToGether">GetToGether</option>
              </select>
            </div>

            <div>
              <button type="submit" className="btnReceive">
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
}

export default BookingForm;
