import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog'
import { ListTable } from '../table/ListTable';
import { useFetch } from '../hooks/UseFetch';
import UserAddForm from '../adduser/AddUserForm';
import { addUser, addUsers } from '../../actions/actions';
import './Layout.scss';
import { User } from '../../global';

const url = 'https://dummyjson.com/users';
type Props = {
  gutters?: boolean
}

export const Layout: React.FC<Props> = ({ gutters = true }) => {
  const dispatch = useDispatch();
  const { isPending, data } = useFetch(url);
  const [openAddModal, setOpenAddModal] = useState(false);
  const users = useSelector((state: any) => state.data.users, shallowEqual);

  const openModal = useCallback(() => {
    setOpenAddModal(true);
  }, [])

  const closeModal = useCallback(() => {
    setOpenAddModal(false);
  }, [])

  const handleAddUser = useCallback((user: User) => {
    dispatch(addUser(user));
    closeModal();
  }, [])

  useEffect(() => {
    if (data?.length > 0) {
      dispatch(addUsers(data));
    }
  }, [data]);

  return (
    <Box
      paddingTop={gutters ? '6rem' : 0}
      paddingLeft={gutters ? '4rem' : '3rem'}
    >
      {users?.length > 0 &&
        <ListTable rows={[...users]} />
      }
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        onClick={openModal}
      >
        Add User
      </Button>
      <Dialog open={openAddModal} onClose={() => setOpenAddModal(false)}>
        <UserAddForm onCancel={closeModal} onSubmit={handleAddUser} />
      </Dialog>
      {!users?.length && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  )
}