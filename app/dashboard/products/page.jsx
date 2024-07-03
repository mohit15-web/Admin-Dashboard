import Link from "next/link";
import Image from "next/image";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/Search";
import Pagination from "@/app/ui/dashboard/pagination/Pagination";
const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a products..." />
        <Link href={"/dashboard/products/add"}>
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td> Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt="user"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Iphone
              </div>
            </td>
            <td>Desc</td>
            <td>$999</td>
            <td>13.01.2023</td>
            <td>72</td>
            <td>
              <div className={styles.buttons}>
                <Link href={"/"}>
                  <button className={`${styles.view} ${styles.button}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.delete} ${styles.button}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductsPage;
