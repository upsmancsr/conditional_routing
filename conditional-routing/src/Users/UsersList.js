import React from 'react';
import UsersCard from './UsersCard';
import 'UsersList.css';

const listOfUsersPerRow = (users, row, itemsPerRow, match) => {
    users
        .slice((row - 1) * itemsPerRow, row * itemsPerRow)
        .map(user => {
            <UsersCard user={user} key={user.id} match={match} />
        });
}

