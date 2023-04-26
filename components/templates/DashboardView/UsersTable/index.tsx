/* eslint-disable react/no-unstable-nested-components */
import { FC, useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { User } from '../../../../store/types';
import Actions from './Actions';

interface UsersTableProps {
  users: User[];
}

const UsersTable: FC<UsersTableProps> = ({ users }) => {
  const [userData, setUserData] = useState<User[]>([]);
  const columns = [
    {
      name: 'Name',
      selector: (row: User) => row.name,
    },
    {
      name: 'Last name',
      selector: (row: User) => row.lastName,
    },
    {
      name: 'email',
      selector: (row: User) => row.email,
    },
    {
      name: 'Role',
      selector: (row: User) => row.role,
    },
    {
      name: 'Actions',
      cell: (row: User) => <Actions user={row} />,
    },
  ];

  useEffect(() => {
    if (!users) return;
    setUserData(users);
  }, [users]);

  return <DataTable columns={columns} data={userData} pagination />;
};

export default UsersTable;
