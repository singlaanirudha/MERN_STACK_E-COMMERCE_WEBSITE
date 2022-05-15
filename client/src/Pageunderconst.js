import { useForm } from 'react-hook-form'

import './css/puc.css'
import './js_files/Puc_counter.js'

function Puc()
{

const {register, handleSubmit, reset, formState:{ errors } } = useForm();
const onSubmit= (data) => {
    console.log(data);
    reset();
};
console.log(errors)

    return(
        <>
        
            <div className="container-fluid puc_bg p-5">
	
                <div className="row p-5">
                    <div className="col-md-8 mx-auto inner_cont text-center py-4">
                        <h1> Page Under Construction <i className="fa-regular fa-sun"></i> </h1>
                        <h2>Coming Soon <i className="fa-regular fa-clock"></i></h2>

                        <div className="d-flex flex-wrap my-5">
                            <div className="timer_div mx-auto pt-2">
                                <p id="days"></p>
                                <h5>Days</h5>
                            </div>

                            <div className="timer_div mx-auto pt-2">
                                <p id="hr"></p>
                                <h5>Hours</h5>
                            </div>

                            <div className="timer_div mx-auto pt-2">
                                <p id="min"></p>
                                <h5>Minutes</h5>
                            </div>

                            <div className="timer_div mx-auto pt-2">
                                <p id="sec"></p>
                                <h5>Seconds</h5>
                            </div>
                        </div>

                        <div className="p-5"> 
                            <form onSubmit={ handleSubmit(onSubmit) }>
                                
                                <div class="mb-3">
                                        <label class="form-label h3">Name</label>
                                        <input type="text" class="form-control w-50 mx-auto" placeholder="Enter Name" name='name' {...register("name", { required: "Name is needed"})} style={{"borderRadius":50}} />
                                        {errors.name && (<small className='text-danger'> {errors.name.message} </small>)}
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label h3">E-Mail</label>
                                        <input type="email" class="form-control w-50 mx-auto" placeholder="Enter Email" name='email' {...register("email", { required: "Email is needed"})} style={{"borderRadius":50}} />
                                        {errors.email && (<small className='text-danger'> {errors.email.message} </small>)}
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>

                    </div>
                </div>


            </div>

        </>
    )
}

export default Puc;
