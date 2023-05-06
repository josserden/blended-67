// import { Controller, useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';

// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import DialogActions from '@mui/material/DialogActions';
// import TextField from '@mui/material/TextField';
// import { addContact } from 'redux/contactsSlice';

// export const Form = ({ handleClose }) => {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();

//   const dispatch = useDispatch();

//   const handleFormSubmit = ({ name, number }) => {
//     const contact = {
//       id: uuidv4(),
//       name,
//       number,
//     };

//     dispatch(addContact(contact));

//     handleClose();
//     reset();
//   };

//   return (
//     <Box component="form" onSubmit={handleSubmit(handleFormSubmit)}>
//       <Controller
//         name="name"
//         control={control}
//         defaultValue=""
//         rules={{
//           required: 'Name is required',
//           minLength: {
//             value: 3,
//             message: 'Name should be at least 3 characters',
//           },
//         }}
//         render={({ field }) => (
//           <TextField
//             {...field}
//             label="User name"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             error={!!errors.name}
//             helperText={errors?.name?.message}
//           />
//         )}
//       />

//       <Controller
//         name="number"
//         control={control}
//         defaultValue=""
//         rules={{
//           required: 'Number is required',
//           pattern: {
//             // value: /^\+?3?8?(0\d{9})$/,
//             message: 'Invalid phone number',
//           },
//         }}
//         render={({ field }) => (
//           <TextField
//             {...field}
//             label="User number"
//             type="tel"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             error={!!errors.tel}
//             helperText={errors?.tel?.message}
//           />
//         )}
//       />

//       <DialogActions>
//         <Button onClick={handleClose}>Cancel</Button>
//         <Button type="submit" variant="contained">
//           Create
//         </Button>
//       </DialogActions>
//     </Box>
//   );
// };

// Form.propTypes = {
//   handleClose: PropTypes.func.isRequired,
// };
