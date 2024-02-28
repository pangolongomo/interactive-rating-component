import styles from "./Rater.module.scss";
import iconStar from "../../assets/images/icon-star.svg";
import { useState } from "react";
import Choice from "../Choice/Choice";

import thanksImg from "../../assets/images/illustration-thank-you.svg";

function Rater() {
  const [choice, setChoice] = useState<null | number>(null);
  const [isSubmit, setIsSumit] = useState(false);

  const choiceList = [1, 2, 3, 4, 5];

  function handleSubmit() {
    if (choice) setIsSumit(true);
  }

  return (
    <div className={styles.rater}>
      {!isSubmit ? (
        <div className={styles.doing}>
          <div className={styles.star}>
            <img src={iconStar} alt="icon star" />
          </div>
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <ul>
            {choiceList.map((i) => (
              <Choice key={i} value={i} choice={choice} setChoice={setChoice} />
            ))}
          </ul>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div className={styles.done}>
          <img src={thanksImg} alt="thanks" />
          <h3>You selected {choice} out of 5</h3>
          <h1>Thank you!</h1>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      )}
    </div>
  );
}

export default Rater;
