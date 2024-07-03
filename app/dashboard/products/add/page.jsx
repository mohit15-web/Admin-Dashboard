import React from 'react'
import styles from '@/app/ui/dashboard/products/addProduct/addProduct.module.css'
function AddProductPage() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="Title" name='title' required />
        <select name="cat" id="cat">
          <option value="general">Choose Category</option>
          <option value="Kitchen">Kitchen</option>
          <option value="phone"> Phone</option>
          <option value="laptop"> Laptop</option>
        </select>
        <input type="number" placeholder="Price" name='price'  />
        <input type="number" placeholder="Stock" name='stock'  />
        <input type="text" placeholder='color' name='color' />
        <input type="text" placeholder='size' name='size' />
        <textarea name="desc" id="desc" rows={16} placeholder='Description'></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddProductPage