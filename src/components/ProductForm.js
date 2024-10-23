import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, editItem } from '../redux/ProductSlice';
import { useNavigate, useParams } from 'react-router-dom';
import './ProducForm.css';

const ProductForm = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const products = useSelector((state) => state.items);
    const currentProduct = products.find((item) => item.id === id);

    const [name, setName] = useState(currentProduct ? currentProduct.name : '');
    const [price, setPrice] = useState(currentProduct ? currentProduct.price : '');

    useEffect(() => {
        if (currentProduct) {
            setName(currentProduct.name);
            setPrice(currentProduct.price);
        }
    }, [currentProduct]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = { id: id || new Date().toISOString(), name, price };
        if (id) {
            dispatch(editItem(newItem));
        } else {
            dispatch(addItem(newItem));
        }
        navigate('/');
    };

    return (
        <div className="form-container">
            <h2>{id ? 'Chỉnh sửa Hàng Hóa' : 'Thêm Hàng Hóa'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Tên hàng hóa"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Giá hàng hóa"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <button type="submit" className="submit-btn">
                    {id ? 'Lưu thay đổi' : 'Thêm hàng hóa'}
                </button>
                <button type="button" className="cancel-btn" onClick={() => navigate('/')}>
                    Quay Lại
                </button>
            </form>
        </div>
    );
};

export default ProductForm;
