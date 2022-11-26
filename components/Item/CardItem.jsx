import React from 'react';

const CardItem = ({ _nameProduct, _isAvailable, _productOwner, _Description, _pickupLocation, _pickupTime }) => {
  return (
    <>
      <div className="bg-white rounded-sm shadow-sm p-4 cursor-pointer sm:hover:shadow-lg h-60">
        <h4 className="text-xl font-bold">{_nameProduct}</h4>
      </div>
    </>
  );
};

export default CardItem;
