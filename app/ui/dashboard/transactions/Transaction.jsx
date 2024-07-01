import React from "react";
import styles from "./transaction.module.css";
import Image from "next/image";
function Transaction() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transaction</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>
             <div className={styles.user}>
             <Image
                src="/noavatar.png"
                alt="user"
                width={40}
                height={40}
                className={styles.userImage}
              />
              John Doe
             </div>
            </td>
            <td>
              <span className={`${styles.pending} ${styles.status}`}>
                Pending
              </span>
            </td>
            <td> 14.05.2022</td>
            <td> $200</td>
          </tr>
          <tr>
            <td>
             <div className={styles.user}>
             <Image
                src="/noavatar.png"
                alt="user"
                width={40}
                height={40}
                className={styles.userImage}
              />
              John Doe
             </div>
            </td>
            <td>
              <span className={`${styles.cancelled} ${styles.status}`}>
                Cancelled
              </span>
            </td>
            <td> 14.05.2022</td>
            <td> $200</td>
          </tr>
          <tr>
          <td>
             <div className={styles.user}>
             <Image
                src="/astronaut.png"
                alt="user"
                width={40}
                height={40}
                className={styles.userImage}
              />
              John Doe
             </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>
                Done
              </span>
            </td>
            <td> 14.05.2022</td>
            <td> $200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Transaction;
