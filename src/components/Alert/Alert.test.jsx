import React from "react";
import { render, screen } from "@testing-library/react";
import { Alert } from "./Alert";
import styles from "./Alert.module.scss";

describe("Alert Component Tests", () => {
  const testMessage = "Bu bir test mesajıdır.";

  it("should render the alert with the children content and correct ARIA role", () => {
    render(<Alert>{testMessage}</Alert>);

    expect(screen.getByText(testMessage)).toBeInTheDocument();

    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it('should apply the default "info" class when no type prop is provided', () => {
    render(<Alert>{testMessage}</Alert>);

    const alertElement = screen.getByRole("alert");
    expect(alertElement).toHaveClass(styles.alert);
    expect(alertElement).toHaveClass(styles.info);
  });

  it('should apply the "success" class when type is set to "success"', () => {
    render(<Alert type="success">{testMessage}</Alert>);

    const alertElement = screen.getByRole("alert");
    expect(alertElement).toHaveClass(styles.success);
    expect(alertElement).not.toHaveClass(styles.info);
  });

  it('should apply the "error" class when type is set to "error"', () => {
    render(<Alert type="error">{testMessage}</Alert>);

    const alertElement = screen.getByRole("alert");
    expect(alertElement).toHaveClass(styles.error);
  });
});
