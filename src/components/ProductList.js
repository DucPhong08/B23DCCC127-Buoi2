import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../redux/ProductSlice';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPage = 6;

    const filteredItems = items.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handlePageChange = (direction) => {
        if (direction === 'next' && currentPage < totalPages) {
            paginate(currentPage + 1);
        } else if (direction === 'prev' && currentPage > 1) {
            paginate(currentPage - 1);
        }
    };

    return (
        <div className="container">
            <div className="sidebar">
                <h2>Hướng dẫn</h2>
                <button>Quản lý hàng hóa</button>
            </div>
            <div className="main-content">
                <h2>Danh Sách Hàng Hóa</h2>

                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Tìm kiếm hàng hóa..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <Link to="/add">
                    <button className="add-item-btn">Thêm Hàng Hóa</button>
                </Link>

                <ul className="item-list">
                    {currentItems.length > 0 ? (
                        currentItems.map((item) => (
                            <li key={item.id}>
                                {item.name} - {item.price} VND
                                <div>
                                    <button className="delete-btn" onClick={() => dispatch(deleteItem(item.id))}>
                                        Xóa
                                    </button>
                                    <Link to={`/edit/${item.id}`}>
                                        <button className="edit-btn">Chỉnh sửa</button>
                                    </Link>
                                </div>
                            </li>
                        ))
                    ) : (
                        <li>Không có hàng hóa nào phù hợp.</li>
                    )}
                </ul>

                <div className="pagination">
                    <button
                        onClick={() => handlePageChange('prev')}
                        disabled={currentPage === 1}
                        style={{ cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
                    >
                        Trang trước
                    </button>
                    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        Trang {currentPage} / {totalPages}
                    </span>
                    <button
                        onClick={() => handlePageChange('next')}
                        disabled={currentPage === totalPages}
                        style={{ cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
                    >
                        Trang sau
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
