// Dependencies
import React from 'react'

// Store
import { IUserStore } from '../store/users/users.store'

/**
 * Context for Store app.
 */
const storeContext = React.createContext<IUserStore | null>(null);

export default storeContext;
