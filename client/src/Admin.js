import React, { useState } from 'react';
import axios from 'axios';


function Admin()
{

  const[samsung, setSamsung] = useState(
    {
      product_img:'', 
      product_name:'', 
      product_mrp:'', 
      product_price:'', 
      product_date:''
    } );
    

      const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('product_img', samsung.product_img);
        formData.append('product_name', samsung.product_name);
        formData.append('product_mrp', samsung.product_mrp);
        formData.append('product_price', samsung.product_price);
        formData.append('product_date', samsung.product_date);

        axios.post('/samsungatc', formData)
        .then(res =>{
          console.log(res);
        })
        .catch(err => {
          console.log(err)
        });
      }

      const handleChange =(e) => {
        setSamsung({...samsung, [e.target.name]:e.target.value});
      }

      const handlePhoto =(e) =>{
        setSamsung({...samsung, product_img:e.target.files[0]});
      }
    

    return(
        <>

        <center className='mt-4'>
          <h1>
            Admin Section (Samsung Product List)
          </h1>
        </center>

<form className="p-5 m-5" onSubmit={handleSubmit} encType='multipart/form-data'>
  
  <div className="mb-3">
    <label className="form-label">Product Image</label>
    <input type="file" className="form-control" name='product_img' accept='.png, .jpg, .jpeg' onChange={handlePhoto} />
  </div>

  <div className="mb-3">
    <label className="form-label">Product Name</label>
    <input type="text" className="form-control" name='product_name' onChange={handleChange} value={samsung.product_name} />
  </div>

  <div className="mb-3">
    <label className="form-label">M.R.P</label>
    <input type="text" className="form-control" name='product_mrp' onChange={handleChange} value={samsung.product_mrp} />
  </div>

  <div className="mb-3">
    <label className="form-label">Selling Price</label>
    <input type="text" className="form-control" name='product_price' onChange={handleChange} value={samsung.product_price} />
  </div>

  <div className="mb-3">
    <label className="form-label">Delivery Date</label>
    <input type="text" className="form-control" name='product_date' onChange={handleChange} value={samsung.product_date}/>
  </div>
 

  <button type="submit" className="btn btn-primary w-100">Add Data To Database</button>

</form>

        </>
    )
}

export default Admin;