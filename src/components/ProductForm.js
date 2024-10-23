import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, editItem } from '../redux/ProductSlice';
import { useNavigate, useParams } from 'react-router-dom';
import './ProducFỏm.css';

const ProductForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

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
            <h2>Thêm Hàng Hóa</h2>
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
                    Thêm hàng hóa
                </button>
                <button type="button" className="cancel-btn" onClick={() => navigate('/')}>
                    Quay Lại
                </button>
            </form>
        </div>
    );
};

export default ProductForm;
