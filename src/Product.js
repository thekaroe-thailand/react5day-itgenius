import { useState, useEffect } from 'react';

export const Product = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Java', price: 100, status: 'active' },
        { id: 2, name: 'Python', price: 200, status: 'inactive' },
        { id: 3, name: 'C#', price: 300, status: 'active' },
        { id: 4, name: 'C++', price: 400, status: 'inactive' },
        { id: 5, name: 'PHP', price: 500, status: 'active' }
    ]);
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');
    const [priceFrom, setPriceFrom] = useState(0);
    const [priceTo, setPriceTo] = useState(0);

    return (
        <div>
            <h1>Product</h1>
            <select onChange={(e) => setFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
            </select>
            <input type="text" placeholder='search...' onChange={(e) => setSearch(e.target.value)} />
            <input type="number" placeholder='price from' onChange={(e) => setPriceFrom(e.target.value)} />
            <input type="number" placeholder='price to' onChange={(e) => setPriceTo(e.target.value)} />
            <table border="1" width="100%">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.length > 0 && products
                            .filter(product =>
                                (product.status === filter || filter === 'all')
                                &&
                                product.name.toLowerCase().includes(search.toLowerCase())
                                &&
                                (!priceFrom || product.price >= Number(priceFrom))
                                &&
                                (!priceTo || product.price <= Number(priceTo))
                            )
                            .map(product => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.status}</td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </div>
    )
}

