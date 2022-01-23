import styled from "styled-components";

const font = {
    size: '20px',
}

const theme = {
    blue: {
        default: '#1565c0',
        hover: '#0d47a1'
    },
    green: {
        default: '#2e7d32',
        hover: '#1b5e20'
    }
}

export const Button = styled.button`
    background-color: ${props => theme[props.theme].default};
    color: white;
    padding: 5x 15px;
    border: 1px;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
    font: 400 11px system-ui;
    font-size: ${font.size};
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    &:hover {
        background-color: ${props => theme[props.theme].hover};
    }
    &:disabled {
        cursor: default;
        opacity: 0.7;
    }
`
export const Input = styled.input`
    display: block;
    margin: 20px 0px;
    outline: 0px;
    border: 1px solid ${props => theme[props.theme].default};
    font-size: ${font.size};
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: groove;
    display: block;
    margin:auto;
    text-align: center;
    &:selected {
        border: ${props => theme[props.theme].default};
    }
`

Button.defaultProps = {
    theme: 'blue'
}

Input.defaultProps = {
    theme: 'blue'
}