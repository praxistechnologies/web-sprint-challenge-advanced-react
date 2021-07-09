import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const firstNameInputEl = screen.getByTestId('firstName-input');
    expect(firstNameInputEl).toBeInTheDocument();
    expect(firstNameInputEl).toHaveAttribute('type', 'text');

    userEvent.type(firstNameInputEl, "Jack");
    expect(screen.getByTestId('firstName-input')).toHaveValue('Jack');
    expect(screen.queryByTestId('successMessage')).not.toBeInTheDocument();
});


test("pass valid lastname to test lastname input filed", () => {
    render(<CheckoutForm />)
    const inputEl = screen.getByTestId('lastName-input');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute('type', 'text');

    userEvent.type(inputEl, 'Son');
    expect(screen.getByTestId('lastName-input')).toHaveValue('Son');
    expect(screen.queryByTestId('successMessage')).not.toBeInTheDocument();
})

test("pass valid address to test address input field", () => {
    render(<CheckoutForm />)
    const addressInputEl = screen.getByTestId('address-input');
    expect(addressInputEl).toBeInTheDocument();
    expect(addressInputEl).toHaveAttribute('type', 'text');

    userEvent.type(addressInputEl, 'Los Angeles');
    expect(screen.getByTestId('address-input')).toHaveValue('Los Angeles');
    expect(screen.queryByTestId('successMessage')).not.toBeInTheDocument();
})

test("pass valid city to test city input field", () => {
    render(<CheckoutForm />)
    const cityInputEl = screen.getByTestId('city-input');
    expect(cityInputEl).toBeInTheDocument();
    expect(cityInputEl).toHaveAttribute('type', 'text');

    userEvent.type(cityInputEl, 'New York');
    expect(screen.getByTestId('city-input')).toHaveValue('New York');
    expect(screen.queryByTestId('successMessage')).not.toBeInTheDocument();
})


test("pass valid state to test state input field ", () => {
    render(<CheckoutForm />)
    const stateInputEL = screen.getByTestId('state-input');
    expect(stateInputEL).toBeInTheDocument();
    expect(stateInputEL).toHaveAttribute('type', 'text');

    userEvent.type(stateInputEL, 'California');
    expect(screen.getByTestId('state-input')).toHaveValue('California')
    expect(screen.queryByTestId('successMessage')).not.toBeInTheDocument();
})

test("pass valid zip to test zip input field", () => {
    render(<CheckoutForm />)
    const zipInputEl = screen.getByTestId('zip-input');
    expect(zipInputEl).toBeInTheDocument();
    expect(zipInputEl).toHaveAttribute('type', 'text');

    userEvent.type(zipInputEl, '98730');
    expect(screen.getByTestId('zip-input')).toHaveValue('98730');
    expect(screen.queryByTestId('successMessage')).not.toBeInTheDocument();
})


