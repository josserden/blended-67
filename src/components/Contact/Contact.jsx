// import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';

// import Button from '@mui/material/Button';
// import TableCell from '@mui/material/TableCell';
// import TableRow from '@mui/material/TableRow';
// import { removeContact } from 'redux/contactsSlice';

// export const Contact = ({ index, id, name, number }) => {
//   const dispatch = useDispatch();
//   const handleContactDelete = () => dispatch(removeContact(id));

//   return (
//     <TableRow
//       sx={{
//         '&:last-child td, &:last-child th': { border: 0 },
//       }}
//       id={id}
//     >
//       <TableCell align="left">{index}</TableCell>
//       <TableCell align="center">
//         <b>{name}</b>
//       </TableCell>
//       <TableCell align="right">{number}</TableCell>
//       <TableCell align="right">
//         <Button variant="outlined" onClick={handleContactDelete}>
//           Delete
//         </Button>
//       </TableCell>
//     </TableRow>
//   );
// };

// Contact.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// };
