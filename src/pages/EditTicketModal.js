import React, { useState } from 'react';
import supabase from '../config/supabaseClient';

const EditTicketModal = ({ ticket, onSave, onClose }) => {
    const [formData, setFormData] = useState({ ...ticket });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Update ticket in the database
            const { error } = await supabase
                .from('ticket')
                .update(formData)
                .match({ id: ticket.id });

            if (error) {
                throw error;
            }

            // Close the modal
            onClose();
        } catch (error) {
            console.error('Error updating ticket:', error.message);
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Edit Ticket</h2>
                <form onSubmit={handleSubmit}>
                <input type="text" name="flightId" value={formData.flightId} onChange={handleChange} />
                <input type="text" name="sex" value={formData.sex} onChange={handleChange} />
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                <input type="text" name="firstName" value={formData.Fname} onChange={handleChange} />
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                <input type="text" name="class" value={formData.class} onChange={handleChange} />
                <input type="text" name="wifi" value={formData.wifi} onChange={handleChange} />
                <input type="text" name="departure" value={formData.departure} onChange={handleChange} />
                <input type="text" name="return" value={formData.return} onChange={handleChange} />
                <input type="text" name="city" value={formData.city} onChange={handleChange} />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Save</button>
                </form>
            </div>
        </div>
    );
};

export default EditTicketModal;
