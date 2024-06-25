'use client'
import { useState } from 'react';

const AdminListingForm = () => {
    const [formData, setFormData] = useState({
        propertyId: '',
        title: '',
        description: '',
        price: '',
        location: '',
        houseNumber: '',
        blockNumber: '',
        images: [],
        propertyType: '',
        bedrooms: '',
        bathrooms: '',
        garage: '',
        areaSize: '',
        yearBuilt: '',
        featured: false,
        features: ['']
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === 'file') {
            setFormData({
                ...formData,
                images: [...formData.images, ...Array.from(files)]
            });
        } else {
            setFormData({
                ...formData,
                [name]: type === 'checkbox' ? checked : value
            });
        }
    };

    const handleFeatureChange = (index, value) => {
        const newFeatures = formData.features.slice();
        newFeatures[index] = value;
        setFormData({ ...formData, features: newFeatures });
    };

    const addFeature = () => {
        setFormData({ ...formData, features: [...formData.features, ''] });
    };

    const removeFeature = (index) => {
        const newFeatures = formData.features.slice();
        newFeatures.splice(index, 1);
        setFormData({ ...formData, features: newFeatures });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 mb-4 space-y-4 border bg-[#F8F8F8] rounded-lg">
            {/* Id and Title */}
            <div className=" flex items-center gap-2">
                <div className=''>
                    <label className="block text-sm font-medium text-gray-700">Property ID</label>
                    <input name="propertyId" value={formData.propertyId} onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div className="">
                    <label className="block text-sm font-medium text-gray-700">Block Name </label>
                    <input name="blockNumber" value={formData.blockNumber} onChange={handleChange} className="block w-full p-3 border border-gray-300 rounded-md" />
                </div>
                <div className="">
                    <label className="block text-sm font-medium text-gray-700">House No.</label>
                    <input name="houseNumber" value={formData.houseNumber} onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded-md" />
                </div>

            </div>

            {/* price and location */}
            <div className='flex items-center gap-2'>
                <div className="w-[30%]">
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <input type="number" name="price" value={formData.price} onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div className="w-[70%]">
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input name="location" value={formData.location} onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded-md" />
                </div>
            </div>
            {/* Title */}
            <div className='w-full'>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input name="title" value={formData.title} onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded-md" />
            </div>

            {/* Description */}
            <div className="">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded-md" />
            </div>

            {/* property Type and Area */}
            <div className='flex items-center gap-2'>
                <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700">Property Type</label>
                    <select name="propertyType" value={formData.propertyType} onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded-md">
                        <option value="">Select Property Type</option>
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                        <option value="farmhouse">Farm House</option>
                        <option value="commercial">commercial</option>
                    </select>
                </div>

                <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700">Area Size</label>
                    <select name="areaSize" value={formData.areaSize} onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded-md">
                        <option value="">Select Area Size</option>
                        <option value="marla5">5 Marla</option>
                        <option value="marla10">10 Marla</option>
                        <option value="marla15">15 Marla</option>
                        <option value="marla20">20 Marla</option>
                        <option value="marla25">25 Marla</option>
                        <option value="marla30">30 Marla</option>
                        <option value="marla35">35 Marla</option>
                        <option value="marla40">40 Marla</option>
                        <option value="marla45">45 Marla</option>
                        <option value="marla50">50 Marla</option>
                        <option value="marla55">55 Marla</option>
                        <option value="marla60">60 Marla</option>
                        <option value="marla65">65 Marla</option>
                        <option value="marla70">70 Marla</option>
                        <option value="marla75">75 Marla</option>
                        <option value="marla80">80 Marla</option>
                    </select>
                </div>
            </div>

            {/* BedRoom, BathRooms, garage */}
            <div className='flex items-center gap-2'>
                <div className="">
                    <label className="block text-sm font-medium text-gray-700">Bedrooms</label>
                    <input type="number" name="bedrooms" value={formData.bedrooms} onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div className="">
                    <label className="block text-sm font-medium text-gray-700">Bathrooms</label>
                    <input type="number" name="bathrooms" value={formData.bathrooms} onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div className="">
                    <label className="block text-sm font-medium text-gray-700">Garage</label>
                    <input type="number" name="garage" value={formData.garage} onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded-md" />
                </div>
            </div>

            {/* Upload Images */}
            <div className=" ">
                <label className="block text-sm font-medium text-gray-700">Images</label>
                <input type="file" name="images" multiple onChange={handleChange} className=" w-full px-2  border-gray-300 rounded-md" />
                {formData.images.length > 0 && (
                    <div className="mt-2 space-y-1 border px-6 py-2">
                        {formData.images.map((file, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <span>{file.name}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {/* year built and Featured */}
            <div className='flex items-center justify-between'>
                <div className="">
                    <label className="block text-sm font-medium text-gray-700">Year Built</label>
                    <input type="number" name="yearBuilt" value={formData.yearBuilt} onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div className="">
                    <label className="block text-sm font-medium text-gray-700">Featured Property</label>
                    <input type="checkbox" name="featured" checked={formData.featured} onChange={handleChange} className="h-5 w-5 text-indigo-600 border-gray-300 rounded" />
                </div>
            </div>

            {/* Additional Features */}
            <div className="">
                <label className="block text-sm font-medium text-gray-700">Features</label>
                <div className=''>
                    {formData.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-y-2 space-x-2 ">
                            <input value={feature} onChange={(e) => handleFeatureChange(index, e.target.value)} className="block w-full p-2 border border-gray-300 rounded-md" />
                            <button type="button" onClick={() => removeFeature(index)} className="text-red-500 hover:text-red-700">Remove</button>
                        </div>
                    ))}

                </div>
                <button type="button" onClick={addFeature} className=" p-2 bg-slate-700 text-white rounded-md">Add Feature</button>
            </div>

            <div>
                <button type="submit" className="mt-4 p-2 bg-green-500 text-white rounded-md w-full">Submit</button>
            </div>


        </form>
    );
};

export default AdminListingForm;
