import React, { useEffect, useState } from 'react';
import supabase from '../config/supabaseClient';

//component
import TicketCard from '../components/TicketCard';

function TicketList() {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        async function fetchTicketData() {
            try {
                const { data, error } = await supabase
                    .from('ticket')
                    .select('*');
                    console.log(data)

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
        supabase
    .from('ticket')
    .delete()
    .match({ id })
    .then(() => console.log(`Ticket with ID ${id} removed`))
    .catch(error => console.error('Error removing ticket:', error.message));
    };

    return (
        <div id="tickets">
            {/* Render each ticket using the TicketCard component */}
            {tickets.map(ticket => (
                <TicketCard key={ticket.id} ticket={ticket} removeTicket={removeTicket} />
            ))}
        </div>
    );
}

export default TicketList;
