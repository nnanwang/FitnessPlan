import React, { useState } from 'react';
import '../styles/FitnessPlan.css';
import axios from 'axios';

const FitnessPlan = () => {
    const [calorie, setCalorie] = useState('');
    const [fitnessPlan, setFitnessPlan] = useState('');
    const [loading, setLoading] = useState(false);

    const getFitnessPlan = async () => {
        setLoading(true);
        setFitnessPlan('');

        try {
            const response = await fetch('http://127.0.0.1:5000/get-fitness-plan', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ calorie }),
            });

            // Parse JSON from the response
            const data = await response.json();

            // Check if the response contains fitnessPlan
            if (data.success) {
                setFitnessPlan(data.fitnessPlan);
            } else {
                alert(data.message || 'Failed to get fitness suggestions.');
            }
        } catch (error) {
            console.error('Error:', error.message);
            alert('Failed to get fitness suggestions. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fitness-plan-container">
            <h1 className="title">Fitness Plan Recommendations</h1>
            <div className="input-section">
                <label className="calorie-label">Enter daily calorie intake:</label>
                <input
                    type="text"
                    value={calorie}
                    onChange={(e) => setCalorie(e.target.value)}
                    placeholder="Type calorie..."
                    className="calorie-input"
                    onKeyPress={(e) => e.key === 'Enter' && getFitnessPlan()}
                />
                <button
                    onClick={getFitnessPlan}
                    disabled={loading}
                    className="submit-button"
                >
                    {loading ? 'Loading...' : 'Get Fitness Plan'}
                </button>
            </div>
            {fitnessPlan && (
                <div className="fitness-plan-card">
                    <h2>Fitness Plan</h2>
                    <p>{fitnessPlan}</p>
                </div>
            )}
        </div>
    );
};

export default FitnessPlan;

