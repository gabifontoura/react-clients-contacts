import styled, { css } from "styled-components";

interface iStyledButtonProps {
  buttonStyle: string;
  buttonSize: string;
  color?: string;
}

export const StyledButton = styled.button<iStyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: var(--radius-1);
  transition: 0.4s;
  color: ${({ color }) => (color ? color : "white")};

  &:hover {
    filter: brightness(1.2);
  }
  ${({ buttonSize }) => {

    switch (buttonSize) {
      case "default":
        return css`
          height: 3rem;
          padding: 0 1.25rem;
        `;
      case "medium":
        return css`
          height: 2.5rem;
          padding: 0 1.25rem;
        `;
      case "small":
        return css`
          height: 1.5rem;
          padding: 0 0.5rem;
        `;
    }
  }}
  ${({ buttonStyle }) => {

    switch (buttonStyle) {
      case "primary":
        return css`
          background-color:var(--color-blue-800);;
          
          &:hover {
            background-color:var(--color-blue-100);
            color: #000;
          }

          }
          &:disabled{
            background:var(--color-grey-300);
          
        }
        `;
      case "secondary":
        return css`
          background-color:var(--color-grey-100);
          border: 1px solid var(--color-blue-800) ;

          color:var(--color-blue-900);
          

          &:hover {
            background-color: var(--color-grey-300);
            color: #000;
            font-weight: 600;

          }

          &:disabled {
            background: var(--color-grey-600);
          
          ]

          }
        `;
    }
  }}
`;