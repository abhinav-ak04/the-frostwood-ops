import { useState } from 'react';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import Input from '../../ui/Input';
import FormRowVertical from '../../ui/FormRowVertical';
import { useLogin } from './useLogin';
import SpinnerMini from '../../ui/SpinnerMini';
import FormRow from '../../ui/FormRow';
import CheckboxInput from '../../ui/CheckboxInput';
import FormCheckbox from '../../ui/FormCheckbox';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isGuest, setIsGuest] = useState(false);
    const [savedEmail, setSavedEmail] = useState('');
    const [savedPassword, setSavedPassword] = useState('');

    const { login, isLoading } = useLogin();

    function handleSubmit(e) {
        e.preventDefault();

        login(
            { email, password },
            {
                onSettled: () => {
                    setEmail('');
                    setPassword('');
                    setIsGuest(false);
                    setSavedEmail('');
                    setSavedPassword('');
                },
            }
        );
    }

    function guestLogin() {
        setIsGuest((prevIsGuest) => {
            const newIsGuest = !prevIsGuest;
            if (newIsGuest) {
                setSavedEmail(email);
                setSavedPassword(password);
                setEmail('frostwood@miytc.com');
                setPassword('password');
            } else {
                setEmail(savedEmail);
                setPassword(savedPassword);
            }
            return newIsGuest;
        });
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormRowVertical label="Email address">
                <Input
                    type="email"
                    id="email"
                    // This makes this form better for password managers
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                />
            </FormRowVertical>

            <FormRowVertical label="Password">
                <Input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                />
            </FormRowVertical>
            <FormRowVertical>
                <Button size="large" disabled={isLoading}>
                    {!isLoading ? 'Log in' : <SpinnerMini />}
                </Button>
            </FormRowVertical>
            <FormCheckbox label="Guest login">
                <CheckboxInput
                    type="checkbox"
                    id="guest"
                    name="guest"
                    checked={isGuest}
                    onChange={guestLogin}
                    disabled={isLoading}
                />
            </FormCheckbox>
        </Form>
    );
}

export default LoginForm;
