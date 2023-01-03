import { useRouter } from 'next/router';
import { Heading, Button } from '@chakra-ui/react';
import { signIn, useSession, signOut } from 'next-auth/react';
const Home = () => {
  const { data: session } = useSession();
  console.log('session', session);

  const handleSignOut = () => {
    signOut({ redirect: false });
  };
  return (
    <div>
      {session ? (
        <>
          <Heading>Signedin as {session.user.email}</Heading>
          <Button onClick={handleSignOut}> Sign out</Button>
        </>
      ) : (
        <>
          <Heading>You are not signed in </Heading>
          <Button onClick={signIn}> Sign in </Button>
        </>
      )}
    </div>
  );
};

export default Home;
