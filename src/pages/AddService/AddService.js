import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { useHistory} from 'react-router';

const AddService = () => {
    const history = useHistory()

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://tour-dibo-production.up.railway.app/services', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
            if (result.insertedId) {
                swal('added succesfully')
                // swal("Congratulation!" ,"You have added the service", "success");
                reset();
                history.push('/home')
            }
        })
        
    };

    return (
        <div>
            <div className="container form text-center mx-auto my-4">
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex justify-content-center align-items center flex-column w-50 text-center mx-auto">
                    <input className="mb-2" placeholder="Enter Title of the Place" {...register("title", { required: true, maxLength: 20 })} />
                    <input className="mb-2" placeholder="Enter the Description" {...register("description", { required: true, maxLength: 400 })} />
                    <input className="mb-2" placeholder="Enter Course Image url" {...register("image", { required: true, maxLength: 100 })} />
                    <input className="mb-2" type="number" placeholder="Enter the Price" {...register("price", { required: true})} />
                    <input className="btn btn-warning text-white" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;