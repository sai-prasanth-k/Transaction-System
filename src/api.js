const API_URL = 'http://localhost:4000/api';

export const createTransaction = async (transaction) => {
    const response = await fetch(`${API_URL}/transactions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(transaction),
    });
    return response.json();
}

export const getTransaction = async(user_id) => {
    const response = await fetch(`${API_URL}/transactions?user_id=${user_id}`);
    return response.json();
}

export const updateTransaction = async (transaction_id, status) => {
    const response = await fetch(`${API_URL}/transactions/${transaction_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({status}),
    });
    return response.json();
};

export const getTransactionById = async (transaction_id) => {
    const response = await fetch(`${API_URL}/transactions/${transaction_id}`);
    response.json();
}

export const deleteTransaction = async (transaction_id) => {
    const response = await fetch(`${API_URL}/transactions/${transaction_id}`, {
        method: 'DELETE',
    });
    return response.send("Deleted Successfully")
};

export const deleteAllTransaction = async (transaction_id) => {
    const response = await fetch(`${API_URL}/transactions/`, {
        method: 'DELETE',
    });
    return response.send("Deleted Successfully")
}