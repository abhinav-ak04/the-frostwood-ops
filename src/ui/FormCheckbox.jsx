import styled from 'styled-components';

const StyledFormCheckbox = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding: 1.2rem 0;

    &:first-child {
        padding-top: 0;
    }

    &:last-child {
        padding-bottom: 0;
    }

    &:not(:last-child) {
        border-bottom: 1px solid var(--color-grey-100);
    }
`;

const Label = styled.label`
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    cursor: pointer;
    color: var(--color-grey-900);
`;

const Error = styled.span`
    font-size: 1.4rem;
    color: var(--color-red-700);
`;

function FormCheckbox({ label, error, children }) {
    return (
        <StyledFormCheckbox>
            {label && <Label htmlFor={children.props.id}>{label}</Label>}
            {children}
            {error && <Error>{error}</Error>}
        </StyledFormCheckbox>
    );
}

export default FormCheckbox;
