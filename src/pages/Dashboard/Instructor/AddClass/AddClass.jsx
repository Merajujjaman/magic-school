import React, { useContext } from 'react';
import SectionTitle from '../../../../Routs/components/SectionTitle';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { useForm } from 'react-hook-form';

const image_key = import.meta.env.VITE_IMAGE_HOST_KEY;
const AddClass = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext)

    const image_host_url = `https://api.imgbb.com/1/upload?key=${image_key}`
    const handleAddClass = (data) => {
        const formData = new FormData()
        formData.append('image', data.classImage[0])
        fetch(image_host_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                const image_url = imageData.data.display_url;
                const {className, instructorName, instructorEmail, availableSeats, price} = data
                const addClass ={ className, classImage: image_url, instructorName, instructorEmail, availableSeats, price, status: 'painding'}
                console.log(image_url);
                console.log(addClass);
            })
            .catch(error => console.log(error))

    }

    return (
        <div className='w-full p-2'>
            <SectionTitle title={"Add a Class"}></SectionTitle>
            <form onSubmit={handleSubmit(handleAddClass)} className=' w-full md:w-3/4 mx-auto ' >

                <div className='md:flex justify-center items-center gap-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-primary">Class Name</span>
                        </label>
                        <input type="text" placeholder="class name" {...register("className")} required className="input input-bordered w-full" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-primary">Class Image</span>
                        </label>
                        <input type="file" {...register("classImage")} required className="file-input file-input-bordered w-full" />
                    </div>

                </div>

                <div className='md:flex justify-center items-center gap-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-primary">Instructor Name</span>
                        </label>
                        <input type="text" value={user?.displayName} readOnly {...register("instructorName")} className="input input-bordered w-full" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-primary">Instructor Email</span>
                        </label>
                        <input type="text" value={user?.email} readOnly {...register("instructorEmail")} className="file-input file-input-bordered w-full px-2" />
                    </div>

                </div>

                <div className='md:flex justify-center items-center gap-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-primary">Available seats</span>
                        </label>
                        <input type="number" {...register("availableSeats")} required className="input input-bordered w-full" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-primary">Price</span>
                        </label>
                        <input type="number" {...register("price")} required className="file-input file-input-bordered w-full" />
                    </div>

                </div>


                <input type="submit" className='btn btn-block bg-neutral text-white my-4' value="Add Class" />


            </form>
        </div>
    );
};

export default AddClass;