import React, { useState, useCallback } from 'react';
import { v4 as uuid } from 'uuid';
import { TextField, Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import './AddUserForm.scss';
import { User } from '../../global';

type Props = {
  onCancel: () => void
  onSubmit: (u: User) => void
}

const UserAddForm: React.FC<Props> = ({ onCancel, onSubmit }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUserName] = useState('');
  const [birthDate, setBirthDate] = useState('');


  const handleSubmit = useCallback(() => {
    const newUser = {
      id: uuid(),
      name,
      age,
      gender,
      email,
      phone,
      username,
      birthDate
    };

    onSubmit(newUser);
  }, [])

  return (
    <div className="container">
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h6"
        id="tableTitle"
        component="div"
        className='title'
      >
        Add New User
      </Typography>
      <TextField
        label="Name"
        value={name}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <TextField
        label="Gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        label="Birthday"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <div className="button_container">
        <div>
          <Button variant="contained" onClick={handleSubmit}>
            Add User
          </Button>
        </div>
        <div>
          <Button variant="contained" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserAddForm;