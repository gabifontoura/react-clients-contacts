import styled, { css } from "styled-components";
import BaseText from "./BaseText";

interface iStyledTextProps{
    justifyContent?:string;
    textAlign?: string;
    fontWeight?: number;
    fontSize?:string;
    color?:string;
}

export const StyledText = styled(BaseText)<iStyledTextProps>`

  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ fontSize }) => {

    switch (fontSize) {
      case "one":
        return css`
          font-size: 1.3rem;
          color: var(--color-blue-300);
        `;
      case "two":
        return css`
          font-size: 1.2rem;
          text-overflow: ellipsis;
          color: var(--color-grey-100);
        `;
      case "three":
        return css`
            font-size: 1.2rem;
          text-overflow: ellipsis;
          color: var(--color-grey-400);
        `;
      case "four":
        return css`
          font-size: 4rem;
          text-overflow: ellipsis;
          color: var(--color-grey-200);

        `;

      case "bodyText":
        return css`
          font-size: 1.6rem;

        `;
      case "warnText":
        return css`
          font-size: 0.5rem;;
          color: var(--color-warn);

        `;
    }
  }};
`;