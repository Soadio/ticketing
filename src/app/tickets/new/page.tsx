'use client';

import { useActionState } from "react";
import { createTicket } from "@/actions/tickets.actions";

const NewTicketPage = () => {
    const [state, formAction] = useActionState(createTicket, {
        success: false,
        message: '',
    });

    return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8 border border-gray-200">
            <h1 className="text-3xl font-bold mb-6 text-centre text-blue-600">
                Submit your Support Ticket
                </h1>
                {state.message && !state.success && (
                    <p className="text-red-500 text-center ">
                        {state.message}
                    </p>
            )}

            <form action={formAction} className="space-y-4 text-gray-700">
                <input
                    className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    type="text"
                    placeholder="Subject"
                    required
                />
                <textarea className="w-full p-3 border border-gray-200 rounded 
                focus:outline-none focus:ring-2 focus:ring-blue-400"
                    name="description"
                    placeholder="Description your issue"
                    rows={4}
                    
                />
                <select
                    className="w-full p-3 border border-gray-200  focus:outline-none focus:ring-2 focus:ring-blue-400"
                    text-gray-700
                    name="priority"
                    defaultValue='low'
                >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium priority</option>
                    <option value="high">High priority</option>
                </select>
                <button
                    className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition disable:opacity-50"
                    type="submit"
                >
                    Submit Ticket
                </button>
            
            </form>

        </div>

        </div>
    )
}
 
export default NewTicketPage
