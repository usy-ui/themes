import React, { act } from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ToggleSection } from "../index";

describe("ToggleSection component", () => {
  describe("render", () => {
    it("should render component", () => {
      render(
        <ToggleSection title="Usy UI" testId="lorem">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry is standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book
        </ToggleSection>
      );

      expect(screen.getByTestId("lorem-header")).toBeDefined();
      expect(screen.getByTestId("lorem-header-title")).toBeInTheDocument();
      expect(screen.getByTestId("lorem-header-toggle")).toBeInTheDocument();
      expect(screen.getByTestId("lorem-content")).toBeInTheDocument();
    });
  });
  describe("action", () => {
    it("should trigger onClick prop when click on toggle icon", async () => {
      const mockOnToggle = jest.fn();
      render(
        <ToggleSection title="Usy UI" onToggle={mockOnToggle} testId="lorem">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry is standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book
        </ToggleSection>
      );

      await act(async () => {
        await userEvent.click(screen.getByTestId("lorem-header-toggle"));
        expect(mockOnToggle).toHaveBeenCalled();
      });
    });
  });
});
