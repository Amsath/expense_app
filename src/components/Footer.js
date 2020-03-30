import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/index.css';

const Footer = (props) => (
    <footer className="footer">
        <div className="page-header__actions">
            <Link className="income_button button" to="/AddIncome">Add Income</Link>
            <Link className="spending_button button" to="/AddExpense">Add Expense</Link>
        </div>
    </footer>
);

export default connect()(Footer);
