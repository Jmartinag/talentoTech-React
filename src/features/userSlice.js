import {createSlice} from '@reduxjs/toolkit'

const users = [
    {
        "_id": "123456789",
        "id": 789789789,
        "name": "Luis",
        "lastname": "Diaz",
        "email": "luis@correo.com",
        "password": "111222333444555666777888999",
    }

]
export const userSlice = createSlice({
    name: 'users',
    initialState: users,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        }

    }
})

export const { addUser } = userSlice.actions
export default userSlice.reducer