import React, { useState } from 'react';
function Leave_comment() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>

                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder='Name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>

                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>

                <textarea
                    id="message"
                    name="message"
                    placeholder='Message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
            <button type="submit " className='btn btn-primary'>Submit</button>
        </form>
    );
}

export default Leave_comment;
