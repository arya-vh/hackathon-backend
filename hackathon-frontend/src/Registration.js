// src/Registration.js
import React from 'react';
import './Registration.css';

const Registration = () => {
    return (
        <main className="registration">
            <h2>Registration</h2>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <button type="submit">Register</button>
            </form>
        </main>
    );
};

export default Registration;
