import styled from 'styled-components';

const CheckboxInput = styled.input`
    width: 24px;
    height: 24px;
    appearance: none;
    background-color: transparent;
    border: 2px solid var(--color-grey-500);
    border-radius: 4px;
    position: relative;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease-in-out;

    &:checked {
        background-color: var(--color-brand-600);
        border-color: var(--color-brand-600);
    }

    &:checked::after {
        content: '✔';
        font-size: 1.4rem;
        font-weight: 900;
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export default CheckboxInput;
