import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Textarea } from "./Textarea";

describe("Textarea Component Tests", () => {
  it("should render the textarea and its label", () => {
    const labelText = "Notlar";
    render(<Textarea label={labelText} placeholder="Açıklama giriniz" />);

    expect(screen.getByText(labelText)).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Açıklama giriniz")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Açıklama giriniz").tagName).toBe(
      "TEXTAREA"
    );
  });

  it("should call the onChange handler when text is typed", () => {
    const mockOnChange = vi.fn();
    const testValue = "Bu uzun bir metin.";

    render(<Textarea onChange={mockOnChange} placeholder="Yaz" />);

    const textareaElement = screen.getByPlaceholderText("Yaz");

    fireEvent.change(textareaElement, { target: { value: testValue } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: testValue }),
      })
    );
  });

  it("should display the error message when the error prop is set", () => {
    const errorMessage = "Lütfen bu alanı doldurun.";

    render(<Textarea error={errorMessage} />);

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it("should correctly set the rows property", () => {
    render(<Textarea rows={10} placeholder="Büyük Alan" />);

    const textareaElement = screen.getByPlaceholderText("Büyük Alan");

    expect(textareaElement).toHaveAttribute("rows", "10");
  });
});
