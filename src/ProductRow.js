import { Link, useMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PriceRow from './PriceRow';

function ProductRow({ id, title, category, price, currency, converter }) {
  return (
    <tr key={id}>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <PriceRow price={price} currency={currency} converter={converter} />
      </td>
      <td>
        <Link to={`details/${id}`}>Details</Link>
      </td>
    </tr>
  );
}

export default ProductRow;