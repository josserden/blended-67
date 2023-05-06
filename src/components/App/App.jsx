import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { Contact } from 'components/Contact';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';
import { Layout } from 'components/Layout';
import { Modal } from 'components/Modal';
import { Paragraph } from 'components/Paragraph';
import { selectFilter } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchUsers } from 'redux/operations';

export const App = () => {
  const { contacts = [], isLoading, error } = useSelector(selectContacts);
  const dispatch = useDispatch();

  console.log(contacts);
  // const filter = useSelector(selectFilter);

  // const filteredContacts = contacts.filter(({ name }) =>
  //   name.toLowerCase().includes(filter.toLowerCase())
  // );

  // const hasContacts = filteredContacts.length > 0;
  // const isEmpty = filteredContacts.length === 0;

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Layout>
      <Stack spacing={20}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'end',
          }}
        >
          {/* <Modal /> */}
          {/* <Filter /> */}
        </Box>
        {/* <Contacts>
          {contacts.map((contact, index) => (
            <Contact key={contact.id} index={index + 1} {...contact} />
          ))}
        </Contacts>
        {isEmpty && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Paragraph>There are no contacts...</Paragraph>
          </Box>
        )} */}
      </Stack>
    </Layout>
  );
};
