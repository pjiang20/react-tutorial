import { signInWithGoogle, signOut } from '../utilities/firebase';

const SignInButton = () => (
    <button className="btn btn-success mb-1 p-2" onClick={signInWithGoogle}>Sign In</button>
);

const SignOutButton = () => (
    <button className="btn btn-danger mb-1 p-2" onClick={signOut}>Sign Out</button>
);

const AuthButton = ({user}) => {
    return user ? <SignOutButton /> : <SignInButton />;
};

// const activation = ({isActive}) => isActive ? 'active' : 'inactive';

export default AuthButton;
