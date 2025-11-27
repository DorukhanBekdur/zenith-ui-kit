import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./Input";

describe("Input Component Tests", () => {
  it("should render the input and its label", () => {
    const labelText = "E-posta Adresi";
    render(<Input label={labelText} placeholder="ornek@mail.com" />);

    expect(screen.getByText(labelText)).toBeInTheDocument();

    expect(screen.getByPlaceholderText("ornek@mail.com")).toBeInTheDocument();
  });

  it("should call the onChange handler when text is typed", () => {
    const mockOnChange = vi.fn();
    const testValue = "yeni metin";

    render(<Input onChange={mockOnChange} placeholder="Test" />);

    const inputElement = screen.getByPlaceholderText("Test");

    fireEvent.change(inputElement, { target: { value: testValue } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it("should display the error message when the error prop is set", () => {
    const errorMessage = "Şifre alanı zorunludur.";

    render(<Input error={errorMessage} />);

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it("should correctly set the input type property to password", () => {
    render(<Input type="password" placeholder="Şifre" />);

    const inputElement = screen.getByPlaceholderText("Şifre");

    expect(inputElement).toHaveAttribute("type", "password");
  });
});
