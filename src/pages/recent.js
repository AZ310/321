import React, { useEffect, useState } from 'react';
import supabase from '../config/supabaseClient';

function TicketList() {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        async function fetchTicketData() {
            try {
                const { data, error } = await supabase
                    .from('ticket')
                    .select('id', 'flightId', 'sex', 'city', 'firstName', 'lastName', 'phone', 'class', 'wifi', 'departure', 'return');

                if (error) {
                    console.error('Error fetching ticket data:', error.message);
                } else {
                    setTickets(data || []);
                }
            } catch (error) {
                console.error('Error fetching ticket data:', error.message);
            }
        }

        fetchTicketData();
    }, []);

    const removeTicket = (id) => {
        setTickets(tickets.filter(ticket => ticket.id !== id));
    };

    return (
        <div id="tickets">
            {tickets.map(ticket => (
                <div key={ticket.id} className="border border-gray-400 mt-4 rounded-2xl flex bg-white">
                    <div className="pl-2 border border-gray-600 w-32 m-1 rounded-xl flex flex-col justify-around">
                        <div>ID: {ticket.id}</div>
                        <div>Flight ID: {ticket.flightId}</div>
                        <div>Sex: {ticket.sex}</div>
                    </div>
                    <div className="pl-2 border border-gray-600 w-52 m-1 rounded-xl flex flex-col justify-center items-center">
                        <div className="text-xl font-bold">{ticket.city}</div>
                    </div>
                    {/* Render other ticket details similarly */}
                    <button className="removeBtn" onClick={() => removeTicket(ticket.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default TicketList;
