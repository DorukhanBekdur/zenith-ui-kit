import React from "react";
import { render, screen } from "@testing-library/react";
import { Icon, SettingsIcon } from "./Icon";

vi.mock("./Icon.module.scss", async (importOriginal) => {
  const { MOCKED_STYLES } = await import("./Icon.mocks");

  return {
    default: MOCKED_STYLES,
  };
});

const MOCKED_STYLES = {
  icon: "test-icon",
  sizeSm: "test-size-sm",
  sizeLg: "test-size-lg",
  colorPrimary: "test-color-primary",
  colorError: "test-color-error",
};

const TestContent = <span data-testid="icon-content">T</span>;

describe("Icon Component Tests", () => {
  it("should render the children content (SVG/span) inside the component", () => {
    render(<Icon>{TestContent}</Icon>);
    expect(screen.getByTestId("icon-content")).toBeInTheDocument();

    render(
      <Icon>
        <SettingsIcon data-testid="settings-svg" />
      </Icon>
    );
    expect(screen.getByTestId("settings-svg")).toBeInTheDocument();
  });

  it("should apply the default class and no size/color variant classes by default", () => {
    render(<Icon>{TestContent}</Icon>);
    const iconElement = screen.getByTestId("icon-content").parentElement;

    expect(iconElement).toHaveClass(MOCKED_STYLES.icon);
    expect(iconElement).not.toHaveClass(MOCKED_STYLES.sizeLg);
  });

  it('should apply the correct size class for "sm" and "lg"', () => {
    const { rerender } = render(<Icon size="sm">{TestContent}</Icon>);
    let iconElement = screen.getByTestId("icon-content").parentElement;

    expect(iconElement).toHaveClass(MOCKED_STYLES.sizeSm);

    rerender(<Icon size="lg">{TestContent}</Icon>);
    iconElement = screen.getByTestId("icon-content").parentElement;
    expect(iconElement).toHaveClass(MOCKED_STYLES.sizeLg);
  });

  it('should apply the correct color class for "primary" and "error"', () => {
    const { rerender } = render(<Icon color="primary">{TestContent}</Icon>);
    let iconElement = screen.getByTestId("icon-content").parentElement;

    expect(iconElement).toHaveClass(MOCKED_STYLES.colorPrimary);

    rerender(<Icon color="error">{TestContent}</Icon>);
    iconElement = screen.getByTestId("icon-content").parentElement;
    expect(iconElement).toHaveClass(MOCKED_STYLES.colorError);
  });
});
