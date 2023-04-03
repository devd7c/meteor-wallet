import React from 'react';

// eslint-disable-next-line import/no-unresolved
import { Wallet } from './Wallet';
// eslint-disable-next-line import/no-unresolved
import { ContactForm } from './ContactForm';
// eslint-disable-next-line import/no-unresolved
import { ContactList } from './ContactList';
import { useNavigate } from 'react-router-dom';
import { useLoggedUser } from 'meteor/quave:logged-user-react';
// eslint-disable-next-line import/no-unresolved
import { Loading } from './components/Loading';
// eslint-disable-next-line import/no-unresolved
import { RoutePaths } from './RoutePaths';

export const Home = () => {
    const { loggedUser, isLoadingLoggedUser } = useLoggedUser();
    const navigate = useNavigate();
    if (isLoadingLoggedUser) {
      return <Loading />;
    }

    if (!loggedUser) {
      return (
        <div className="flex flex-col items-center p-12">
          <div>Welcome!</div>
          <div>
            Please{' '}
            <a
              className="cursor-pointer text-indigo-800"
              onClick={() => navigate(RoutePaths.ACCESS)}
            >
              sign-up
            </a>
            .
          </div>
        </div>
      );
    }
    return (
      <>
        <Wallet />
        <ContactForm />
        <ContactList />
      </>
    );
  };
